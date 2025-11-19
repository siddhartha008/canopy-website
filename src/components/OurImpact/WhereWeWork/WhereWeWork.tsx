import React, { useState, useRef } from 'react';
import { ReactSVG } from 'react-svg';
import nepalMap from '../../../assets/nepalmap.svg';

// --- DATA ---
interface DistrictInfo {
  name: string;
  schools: number;
  students: number | string; // string for "20,000"
}

// Data extracted from user request
const districtData: DistrictInfo[] = [
  { name: 'Bhaktapur', schools: 2, students: 60 },
  { name: 'Dhading', schools: 4, students: 171 },
  { name: 'Dhanusa', schools: 1, students: 50 },
  { name: 'Gulmi', schools: 3, students: 150 },
  { name: 'Jhapa', schools: 1, students: 20 },
  { name: 'Kanchanpur', schools: 2, students: 2 },
  { name: 'Kaski', schools: 4, students: 27 },
  { name: 'Kathmandu', schools: 45, students: '20,000' },
  { name: 'Khotang', schools: 3, students: 15 },
  { name: 'Lalitpur', schools: 5, students: 200 },
  { name: 'Makwanpur', schools: 3, students: 101 },
  { name: 'Nawalpur', schools: 5, students: 25 },
  { name: 'Nuwakot', schools: 1, students: 56 },
  { name: 'Parbat', schools: 4, students: 27 },
  { name: 'Sankhuwasabha', schools: 3, students: 150 },
  // { name: 'Sindhupalchowk', schools: 5, students: 20 }, // Removed - shares SVG path with Dolakha
  { name: 'Solukhumbu', schools: 8, students: 22 },
  { name: 'Sunsari', schools: 1, students: 140 },
];

// Map district names to SVG path indices (Placeholder mapping)
// Since the SVG paths don't have IDs, we map them by index (0-75).
// The user will likely need to adjust these indices to match the visual map.
// For now, we'll just map the first N paths to our data for demonstration.

// District mapping (Sindhupalchowk removed due to SVG limitation - it shares path with Dolakha)
const districtIndices: Record<string, number> = {
  'Kathmandu': 48,
  'Bhaktapur': 52,
  'Lalitpur': 54,
  'Dhading': 35,
  'Dhanusa': 68,
  'Gulmi': 1,
  'Jhapa': 72,
  'Kanchanpur': 17,
  // 'Kaski': 28,
  'Khotang': 58,
  'Makwanpur': 53,
  'Nawalpur': 46,
  'Nuwakot': 41,
  'Parbat': 31,
  'Sankhuwasabha': 43,
  // 'Sindhupalchowk': 38, // Removed - shares path with Dolakha in SVG
  'Solukhumbu': 39,
  'Sunsari': 71
};

const districtIndexMap: Record<number, DistrictInfo> = {};

districtData.forEach((data) => {
  const index = districtIndices[data.name];
  if (index !== undefined) {
    districtIndexMap[index] = data;
  }
});


export default function WhereWeWork() {
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
          Where We Work
        </h2>
        <p className="text-center text-gray-600 mb-2 max-w-2xl mx-auto">
          Explore our impact across Nepal. Hover over the districts to see the number of schools and students we support.
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
