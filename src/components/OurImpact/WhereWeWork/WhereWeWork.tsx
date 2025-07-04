import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import type { SVGProps } from 'react';

// You might need to install this type if you haven't: npm install @types/react
// This helps TypeScript understand the props for the component.

// --- DATA & ASSETS ---
import mapSvg from '../../../assets/map.svg';

const bhaktapurPolygonPoints = "740.78,361.08 741.22,361.37 741.3,361.62 741.18,362.02 741.06,362.45 741.1,362.77 741.14,363.32 741.14,363.67 741.02,364.43 740.89,364.9 740.81,365.26 740.57,365.66 740.2,365.8 739.64,365.83 739.23,365.91 738.87,366.16 738.54,366.74 738.3,367.17 737.97,367.85 737.69,368.43 737.49,368.86 737.32,369.29 737.04,370.19 736.8,370.7 736.59,371.09 736.19,371.34 735.82,371.42 735.46,371.52 735.01,371.78 734.57,372.14 734.33,372.46 734.12,372.75 733.84,372.89 733.35,372.89 732.91,372.82 732.3,372.82 731.98,372.97 731.61,373.22 730.92,373.51 730.28,373.69 729.63,373.83 729.06,374.08 728.7,374.23 728.29,374.34 727.85,374.48 727.61,374.6 727.48,374.3 727.32,374.12 727.2,373.91 726.96,373.69 726.79,373.55 726.67,373.4 726.51,373.22 726.26,373.01 726.06,372.9 725.77,372.76 725.65,372.62 725.53,372.51 725.45,372.4 725.21,372.22 725.05,371.97 724.68,371.61 724.52,371.43 724.32,371.29 724.2,371.11 724.03,370.97 723.91,370.86 723.75,370.75 723.47,370.61 723.35,370.54 723.1,370.39 722.94,370.32 722.58,370.18 722.33,370.07 721.65,369.85 721.48,369.71 721.32,369.6 721.16,369.53 721,369.5 720.68,369.39 720.59,369.25 720.51,369.07 720.47,368.81 720.39,368.63 720.23,368.45 719.91,368.51 720.08,368.15 720.12,368.01 720.16,367.76 720.24,367.5 720.24,367.36 720.44,366.96 720.56,366.78 720.84,366.46 721.05,366.21 721.25,366.06 721.45,365.95 721.78,365.81 722.1,365.74 722.3,365.7 722.55,365.59 723.03,365.27 723.15,365.2 723.68,364.87 724.05,364.66 724.29,364.55 724.85,364.33 725.02,364.22 725.38,363.97 725.71,363.72 725.83,363.61 726.03,363.5 726.52,363.14 726.88,362.74 726.96,362.46 727.08,362.13 727.33,361.99 727.49,361.99 727.89,361.92 728.3,361.77 728.5,361.74 729.07,361.45 729.51,361.27 729.84,361.23 730.2,361.23 730.57,361.3 730.93,361.34 731.26,361.45 731.58,361.55 732.07,361.88 732.31,361.99 732.47,362.02 732.71,362.13 732.92,362.13 733.32,362.06 733.77,361.91 733.89,362.02 734.74,362.16 734.9,362.13 735.27,362.09 735.71,362.02 736.04,361.98 736.28,361.91 736.52,361.88 736.81,361.8 737.13,361.73 737.37,361.69 737.66,361.62 737.98,361.59 738.26,361.59 738.55,361.59 738.75,361.55 739.2,361.44 739.36,361.41 739.72,361.33 739.93,361.26";

const impactData = {
  "Bhaktapur": {
    name: "Bhaktapur",
    province: "Bagmati Province",
    schools: 2,
    students: 60,
    description: "Supporting education in the ancient city"
  }
};

// --- COMPONENT ---
export default function WhereWeWork() {
  const [popupData, setPopupData] = useState<any>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const beforeInjection = (svg: SVGElement) => {
    // 1. Style the base map shapes (paths and polygons)
    const allShapes = svg.querySelectorAll('polygon, path');
    allShapes.forEach(shape => {
      const element = shape as HTMLElement;
      element.style.fill = '#f8dfad'; // Primary orange
      element.style.stroke = '#000000'; // Darker orange for borders
      element.style.strokeWidth = '0.5px';
    });

    // 2. Remove province text elements if they exist
    const textElements = svg.querySelectorAll('text');
    textElements.forEach(text => {
      // You can add more province names to this list if needed
      const provinces = ['Sudurpashchim', 'Karnali', 'Gandaki', 'Bagmati', 'Province No. 1', 'Province No. 2', 'Province No. 5'];
      if (provinces.some(p => text.textContent?.includes(p))) {
        text.remove();
      }
    });

    // 3. Create the hoverable polygon for Bhaktapur
    const bhaktapurPoly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    bhaktapurPoly.setAttribute("points", bhaktapurPolygonPoints);

    // --- CRITICAL FIX 1 ---
    // Use '.style' for all styling to ensure it overrides any other CSS.
    // Set the initial state to be invisible.
    bhaktapurPoly.style.fill = 'transparent';
    bhaktapurPoly.style.stroke = 'none';
    bhaktapurPoly.style.strokeWidth = "2px";
    bhaktapurPoly.style.cursor = 'pointer';
    bhaktapurPoly.style.transition = 'fill 0.2s ease, stroke 0.2s ease';
    bhaktapurPoly.style.pointerEvents = 'auto';

    // 4. Add event listeners to control the hover effect
    bhaktapurPoly.addEventListener('mouseenter', (e) => {
      // --- CRITICAL FIX 2 ---
      // Use '.style' to apply the hover effect.
      bhaktapurPoly.style.fill = '#00CED1'; // Cyan hover fill
      bhaktapurPoly.style.stroke = '#00B6B8'; // Darker cyan hover stroke

      // Show and position the popup
      const mapRect = mapContainerRef.current?.getBoundingClientRect();
      if (mapRect) {
        setPopupPosition({ x: e.clientX - mapRect.left, y: e.clientY - mapRect.top });
        setPopupData(impactData.Bhaktapur);
      }
    });

    bhaktapurPoly.addEventListener('mouseleave', () => {
      // --- CRITICAL FIX 3 ---
      // Use '.style' to reset the polygon to its invisible state.
      bhaktapurPoly.style.fill = 'transparent';
      bhaktapurPoly.style.stroke = 'none';

      // Hide the popup
      setPopupData(null);
    });

    // 5. Add the new polygon to the SVG
    svg.appendChild(bhaktapurPoly);
  };

  return (
    <div className="w-full bg-gray-50 py-12 md:py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-2">
        Where We Work
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
        Hover over districts to see our impact.
      </p>
      <div className="relative max-w-5xl mx-auto" ref={mapContainerRef}>
        <ReactSVG
          src={mapSvg}
          beforeInjection={beforeInjection}
          className="w-full h-auto"
          wrapper="div"
        />
        
        {/* Popup for impact data */}
        {popupData && (
          <div 
            className="absolute z-50 p-4 bg-white rounded-lg shadow-xl border border-gray-200 max-w-xs pointer-events-none"
            style={{ 
              left: popupPosition.x, 
              top: popupPosition.y,
              // This transform trick centers the popup on the cursor and lifts it up
              transform: 'translate(-50%, -110%)',
            }}
          >
            <h3 className="font-bold text-lg text-blue-800 mb-1">{popupData.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{popupData.province}</p>
            <div className="space-y-1 text-sm">
              <p><span className="font-semibold">Schools:</span> {popupData.schools}</p>
              <p><span className="font-semibold">Students:</span> {popupData.students.toLocaleString()}</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">{popupData.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}