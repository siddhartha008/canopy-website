import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import nepalMap from '../../../assets/nepalmap.svg';
import { useSite } from '../../../cms/ContentContext';

// --- DATA ---
interface DistrictInfo {
  name: string;
  schools: number;
  students: number | string; // string for "20,000"
}

export default function WhereWeWork() {
  const page = useSite().impactPage;
  const districtIndexMap: Record<number, DistrictInfo> = {};
  page.districts.forEach((data) => {
    if (data.mapIndex != null) {
      districtIndexMap[data.mapIndex] = { name: data.name, schools: data.schools, students: data.students };
    }
  });
  const [hoveredDistrict, setHoveredDistrict] = useState<DistrictInfo | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleContainerMouseOver = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    // If the mouse is over the container/SVG but not a specific path (district), clear the tooltip
    // We check for 'path' tag. Note: SVG elements might report different casing, but usually 'path' in HTML DOM.
    if (target.tagName.toLowerCase() !== 'path') {
      setHoveredDistrict(null);
    }
  };

  const beforeInjection = (svg: SVGElement) => {
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', 'auto');

    // Select all paths
    const paths = svg.querySelectorAll('path');

    paths.forEach((path, index) => {
      // Skip the first path (background) and the last path (overlay/outline, index 75)
      if (index === 0 || index === 75) {
        path.style.fill = 'transparent';
        path.style.pointerEvents = 'none'; // Disable interaction
        return;
      }

      // Style base paths
      path.style.fill = '#f3f4f6'; // Gray-100
      path.style.stroke = '#9ca3af'; // Gray-400
      path.style.strokeWidth = '2px';
      path.style.transition = 'all 0.3s ease';
      path.style.cursor = 'default';

      const data = districtIndexMap[index];

      if (data) {
        path.style.fill = '#FFFBF2';
        path.setAttribute('data-district-name', data.name);
        path.style.cursor = 'pointer';

        // Add hover listeners ONLY for mapped districts
        path.addEventListener('mouseenter', () => {
          path.style.fill = '#F1AA19'; // Primary Orange
          path.style.stroke = '#c2410c'; // Darker Orange for stroke
          if (path.parentElement) {
            path.parentElement.appendChild(path);
          }
          setHoveredDistrict(data);
        });

        path.addEventListener('mouseleave', () => {
          path.style.fill = '#FFFBF2';
          path.style.stroke = '#9ca3af';
          setHoveredDistrict(null);
        });
      }
    });
  };

  return (
    // Hidden on mobile/tablet (lg is 1024px in standard Tailwind)
    <div className="hidden lg:block w-full py-0 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary-blue mb-4">
          {page.mapTitle}
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-2xl mx-auto">
          {page.mapIntro}
        </p>

        <div
          className="relative w-full aspect-[1.4/1] p-0 overflow-hidden"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseOver={handleContainerMouseOver}
          onMouseLeave={() => setHoveredDistrict(null)}
        >
          <ReactSVG
            src={nepalMap}
            beforeInjection={beforeInjection}
            className="w-full h-full"
          />

          {/* Tooltip */}
          {hoveredDistrict && (
            <div
              className="absolute z-50 bg-white p-4 rounded-lg shadow-xl border border-gray-100 pointer-events-none min-w-[200px] transform -translate-y-full -translate-x-1/2 mt-[-10px]"
              style={{
                left: tooltipPos.x,
                top: tooltipPos.y,
              }}
            >
              <h3 className="text-lg font-bold text-primary-blue mb-2 border-b pb-1">
                {hoveredDistrict.name}
              </h3>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Schools:</span>
                  <span className="font-bold text-primary-orange">{hoveredDistrict.schools}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Students:</span>
                  <span className="font-bold text-secondary-cyan">{hoveredDistrict.students}</span>
                </div>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  );
}
