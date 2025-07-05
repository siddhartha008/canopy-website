import React, { useState, useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import type { SVGProps } from 'react';

// --- DATA & ASSETS ---
import mapSvg from '../../../assets/map.svg';

// ===================================================================================
// STEP 1: CREATE THE CENTRAL DATA STRUCTURE
// ===================================================================================
// TypeScript interface for district data
interface DistrictData {
  id: string;
  name: string;
  points: string;
  impact: {
    province: string;
    schools: number;
    students: number;
    description: string;
  };
}

const districtData: DistrictData[] = [
  {
    id: 'bhaktapur',
    name: 'Bhaktapur',
    points: '740.78,361.08 741.22,361.37 741.3,361.62 741.18,362.02 741.06,362.45 741.1,362.77 741.14,363.32     741.14,363.67 741.02,364.43 740.89,364.9 740.81,365.26 740.57,365.66 740.2,365.8 739.64,365.83 739.23,365.91 738.87,366.16     738.54,366.74 738.3,367.17 737.97,367.85 737.69,368.43 737.49,368.86 737.32,369.29 737.04,370.19 736.8,370.7 736.59,371.09     736.19,371.34 735.82,371.42 735.46,371.52 735.01,371.78 734.57,372.14 734.33,372.46 734.12,372.75 733.84,372.89     733.35,372.89 732.91,372.82 732.3,372.82 731.98,372.97 731.61,373.22 730.92,373.51 730.28,373.69 729.63,373.83 729.06,374.08     728.7,374.23 728.29,374.34 727.85,374.48 727.61,374.6 727.48,374.3 727.32,374.12 727.2,373.91 726.96,373.69 726.79,373.55     726.67,373.4 726.51,373.22 726.26,373.01 726.06,372.9 725.77,372.76 725.65,372.62 725.53,372.51 725.45,372.4 725.21,372.22     725.05,371.97 724.68,371.61 724.52,371.43 724.32,371.29 724.2,371.11 724.03,370.97 723.91,370.86 723.75,370.75 723.47,370.61     723.35,370.54 723.1,370.39 722.94,370.32 722.58,370.18 722.33,370.07 721.65,369.85 721.48,369.71 721.32,369.6 721.16,369.53     721,369.5 720.68,369.39 720.59,369.25 720.51,369.07 720.47,368.81 720.39,368.63 720.23,368.45 719.91,368.51 720.08,368.15     720.12,368.01 720.16,367.76 720.24,367.5 720.24,367.36 720.44,366.96 720.56,366.78 720.84,366.46 721.05,366.21 721.25,366.06     721.45,365.95 721.78,365.81 722.1,365.74 722.3,365.7 722.55,365.59 723.03,365.27 723.15,365.2 723.68,364.87 724.05,364.66     724.29,364.55 724.85,364.33 725.02,364.22 725.38,363.97 725.71,363.72 725.83,363.61 726.03,363.5 726.52,363.14 726.88,362.74     726.96,362.46 727.08,362.13 727.33,361.99 727.49,361.99 727.89,361.92 728.3,361.77 728.5,361.74 729.07,361.45 729.51,361.27     729.84,361.23 730.2,361.23 730.57,361.3 730.93,361.34 731.26,361.45 731.58,361.55 732.07,361.88 732.31,361.99 732.47,362.02     732.71,362.13 732.92,362.13 733.32,362.06 733.77,361.91 733.89,362.02 734.74,362.16 734.9,362.13 735.27,362.09 735.71,362.02     736.04,361.98 736.28,361.91 736.52,361.88 736.81,361.8 737.13,361.73 737.37,361.69 737.66,361.62 737.98,361.59 738.26,361.59     738.55,361.59 738.75,361.55 739.2,361.44 739.36,361.41 739.72,361.33 739.93,361.26',
    impact: {
      province: 'Bagmati',
      schools: 2,
      students: 60,
      description: 'Supporting quality education in the ancient city.'
    }
  },
  {
    id: 'dhading',
    name: 'Dhading',
    points: '1',
    impact: {
      province: 'Bagmati',
      schools: 4,
      students: 171,
      description: 'Expanding educational opportunities in rural areas.'
    }
  },
  {
    id: 'dhanusa',
    name: 'Dhanusa',
    points: '1', // Dummy points
    impact: {
      province: 'Madhesh',
      schools: 1,
      students: 50,
      description: 'Building educational foundations in the Terai region.'
    }
  },
  {
    id: 'gulmi',
    name: 'Gulmi',
    points: '1', // Dummy points
    impact: {
      province: 'Lumbini',
      schools: 3,
      students: 150,
      description: 'Empowering students in the western hills.'
    }
  },
  {
    id: 'jhapa',
    name: 'Jhapa',
    points: '1', // Dummy points
    impact: {
      province: 'Koshi',
      schools: 1,
      students: 20,
      description: 'Nurturing young minds in the eastern plains.'
    }
  },
  {
    id: 'kanchanpur',
    name: 'Kanchanpur',
    points: '1', // Dummy points
    impact: {
      province: 'Sudurpaschim',
      schools: 2,
      students: 2,
      description: 'Supporting education in the far-western region.'
    }
  },
  {
    id: 'kaski',
    name: 'Kaski',
    points: '1', // Dummy points
    impact: {
      province: 'Gandaki',
      schools: 4,
      students: 27,
      description: 'Educational excellence in the heart of the Himalayas.'
    }
  },
  {
    id: 'kathmandu',
    name: 'Kathmandu',
    points: '1', // Dummy points
    impact: {
      province: 'Bagmati',
      schools: 45,
      students: 20000,
      description: 'Our largest program area, serving thousands of students in the capital.'
    }
  },
  {
    id: 'khotang',
    name: 'Khotang',
    points: '1', // Dummy points
    impact: {
      province: 'Koshi',
      schools: 3,
      students: 15,
      description: 'Bringing education to remote eastern districts.'
    }
  },
  {
    id: 'lalitpur',
    name: 'Lalitpur',
    points: '727.61,374.6 727.24,374.84 726.92,375.13 726.67,375.49 726.47,375.85 726.23,376.43 726.11,376.9     726.07,377.22 725.98,377.94 725.98,378.3 725.94,378.62 725.86,379.09 725.74,379.42 725.5,379.81 725.3,380.14 724.89,380.5     724.53,380.82 724.2,381.18 724.12,381.47 724.24,381.83 724.49,382.12 724.57,382.33 724.69,382.58 724.77,382.8 724.93,383.02     725.21,383.27 725.5,383.45 725.78,383.56 726.02,383.7 726.59,383.81 727.07,383.88 727.56,383.95 728.04,384.13 728.57,384.31     728.97,384.42 729.58,384.49 729.95,384.63 730.27,384.96 730.47,385.93 730.67,387.98 730.51,388.41 730.43,388.81     730.43,389.17 730.47,389.49 730.59,389.85 730.75,390.32 730.63,390.46 730.51,390.72 730.47,391.22 730.55,391.62 730.63,391.8     730.63,392.16 730.59,392.48 730.46,392.84 730.3,393.06 730.1,393.27 729.78,393.56 729.41,393.89 729.09,394.14 728.69,394.43     728.28,394.68 728,394.86 727.59,395.11 727.39,395.26 727.03,395.51 726.83,395.76 726.66,396.01 726.58,396.23 726.5,396.44     727.15,396.62 727.43,396.59 727.59,396.59 727.84,396.73 727.84,396.91 727.67,397.13 727.47,397.31 727.31,397.52     727.19,397.81 727.07,398.17 726.99,398.42 726.95,398.75 727.03,399.11 727.07,399.61 727.11,400.04 727.19,400.37     727.39,400.69 727.51,400.84 727.63,401.12 727.79,401.38 727.35,401.48 727.15,401.52 726.78,401.67 726.62,401.66 726.3,401.81     725.97,401.85 725.65,401.77 725.41,401.63 725.09,401.38 724.72,401.24 724.24,401.2 723.87,401.16 723.47,401.02 723.27,400.77     723.03,400.59 722.38,400.16 722.1,400.01 721.77,399.73 721.37,399.44 721.01,399.26 720.64,399.01 720.24,398.9 719.88,398.83     719.47,398.83 719.19,398.76 718.87,398.72 718.66,398.65 718.22,398.43 717.98,398.33 717.41,398.22 717.01,398.07     716.64,397.93 716.24,397.86 715.87,397.82 715.55,397.79 715.23,397.79 715.01,397.68 715.01,397.61 714.79,397.35 714.3,396.85     712.88,396.18 712.92,396.18 711.98,395.91 710.8,395.84 710.77,395.84 709.17,395.77 709.08,395.72 708.44,395.58 708.4,395.58     708.01,394.99 707.78,394.62 707.55,393.94 707.25,393.32 706.66,392.56 706.43,392.25 706.3,392.14 706.14,391.94 706.1,391.06     705.89,390.44 705.54,390.13 705.28,390.02 705.09,389.76 704.92,389.28 704.91,389.06 704.91,388.91 705.06,388.12 705.3,387.37     705.55,387 706.35,386.65 706.41,386.48 706.4,386.11 706.37,385.91 705.88,385.49 705.11,385.07 704.84,384.71 704.78,384.39     705.03,384.08 705.4,383.67 705.88,383.24 706.35,382.87 706.69,382.46 707,381.66 707.16,381.43 707.38,381.15 707.95,380.88     708.4,380.6 708.55,380.55 708.83,380.27 708.95,380.19 709.07,380.09 709.19,380.01 709.4,379.87 709.52,379.72 709.72,379.58     709.92,379.36 710,379.22 710.08,378.97 710.16,378.82 710.2,378.57 710.29,378.32 710.33,378.07 710.45,377.74 710.77,377.63     711.09,377.53 711.25,377.35 711.42,377.09 711.54,376.84 711.66,376.63 711.86,376.48 711.86,376.37 711.82,376.23     711.74,376.09 711.62,375.83 711.7,375.54 711.78,375.11 711.86,374.72 711.9,374.39 711.98,374 711.94,373.85 711.82,373.49     711.7,373.28 711.17,372.88 711.01,372.77 710.85,372.67 710.69,372.49 710.56,372.23 710.56,372.13 710.64,371.59 710.85,371.33     710.93,371.19 711.05,370.97 711.17,370.79 711.25,370.65 711.41,370.43 711.7,370.18 711.98,369.89 712.14,369.64 712.18,369.28     712.14,369.14 712.06,368.96 711.94,368.74 711.9,368.45 711.94,368.16 712.14,367.88 712.26,367.55 712.34,367.12 712.38,366.98     712.5,366.58 712.54,366.44 712.62,366.33 713.11,365.89 713.31,365.82 713.47,365.79 713.76,365.78 714.32,365.78 714.61,365.86     715.05,366 715.46,366.18 715.74,366.32 716.23,366.72 716.31,366.79 716.51,366.9 716.71,367.08 716.88,367.22 717.16,367.47     717.28,367.58 717.52,367.8 718.01,368.12 718.17,368.26 718.33,368.44 718.58,368.66 718.82,368.73 719.1,368.73 719.43,368.69     719.91,368.51 720.23,368.45 720.39,368.63 720.47,368.81 720.51,369.07 720.59,369.25 720.68,369.39 721,369.5 721.16,369.53     721.32,369.6 721.48,369.71 721.65,369.85 722.33,370.07 722.58,370.18 722.94,370.32 723.1,370.39 723.35,370.54 723.47,370.61     723.75,370.75 723.91,370.86 724.03,370.97 724.2,371.11 724.32,371.29 724.52,371.43 724.68,371.61 725.05,371.97 725.21,372.22     725.45,372.4 725.53,372.51 725.65,372.62 725.77,372.76 726.06,372.9 726.26,373.01 726.51,373.22 726.67,373.4 726.79,373.55     726.96,373.69 727.2,373.91 727.32,374.12 727.48,374.3',
    impact: {
      province: 'Bagmati',
      schools: 5,
      students: 200,
      description: 'Supporting students in the historic city of Patan.'
    }
  },
  {
    id: 'makwanpur',
    name: 'Makwanpur',
    points: '1', // Dummy points
    impact: {
      province: 'Bagmati',
      schools: 3,
      students: 101,
      description: 'Educational development in the Chitwan Valley region.'
    }
  },
  {
    id: 'nawalpur',
    name: 'Nawalpur',
    points: '1', // Dummy points
    impact: {
      province: 'Gandaki',
      schools: 5,
      students: 25,
      description: 'Supporting education in the newly established district.'
    }
  },
  {
    id: 'nuwakot',
    name: 'Nuwakot',
    points: '1', // Dummy points
    impact: {
      province: 'Bagmati',
      schools: 1,
      students: 56,
      description: 'Educational outreach in the historic district.'
    }
  },
  {
    id: 'parbat',
    name: 'Parbat',
    points: '1', // Dummy points
    impact: {
      province: 'Gandaki',
      schools: 4,
      students: 27,
      description: 'Supporting students in the mountainous region.'
    }
  },
  {
    id: 'sankhuwasabha',
    name: 'Sankhuwasabha',
    points: '1', // Dummy points
    impact: {
      province: 'Koshi',
      schools: 3,
      students: 150,
      description: 'Educational development in the eastern mountains.'
    }
  },
  {
    id: 'sindhupalchowk',
    name: 'Sindhupalchowk',
    points: '1', // Dummy points
    impact: {
      province: 'Bagmati',
      schools: 5,
      students: 20,
      description: 'Rebuilding education after the 2015 earthquake.'
    }
  },
  {
    id: 'solukhumbu',
    name: 'Solukhumbu',
    points: '1', // Dummy points
    impact: {
      province: 'Koshi',
      schools: 8,
      students: 22,
      description: 'Supporting education in the Everest region.'
    }
  },
  {
    id: 'sunsari',
    name: 'Sunsari',
    points: '1', // Dummy points
    impact: {
      province: 'Koshi',
      schools: 1,
      students: 140,
      description: 'Educational opportunities in the eastern Terai.'
    }
  }
];

// A helper to easily find district data by ID
const districtMap = new Map(districtData.map(d => [d.id, d]));

// --- COMPONENT ---
export default function WhereWeWork() {
  const [popupData, setPopupData] = useState<{
    name: string;
    province: string;
    schools: number;
    students: number;
    description: string;
  } | null>(null);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [selectedDistrictId, setSelectedDistrictId] = useState<string>('kathmandu');
  const mapContainerRef = useRef<HTMLDivElement>(null);
  
  // Keep track of the currently hovered polygon's ID
  const hoveredDistrictId = useRef<string | null>(null);

  // Function to calculate the center point of a polygon
  const calculatePolygonCenter = (points: string) => {
    if (points === '1') {
      // For dummy points, return a default center position
      return { x: 400, y: 300 };
    }
    
    const coords = points.split(' ').map(p => {
      const [x, y] = p.split(',').map(Number);
      return { x, y };
    });
    
    const centerX = coords.reduce((sum, p) => sum + p.x, 0) / coords.length;
    const centerY = coords.reduce((sum, p) => sum + p.y, 0) / coords.length;
    
    return { x: centerX, y: centerY };
  };

  // Function to highlight a district on the map with proper popup positioning
  const highlightDistrict = (districtId: string) => {
    if (mapContainerRef.current) {
      // Reset all districts first
      const allInteractivePolys = mapContainerRef.current.querySelectorAll<SVGPolygonElement>('[id^="interactive-district-"]');
      allInteractivePolys.forEach(poly => {
        poly.style.fill = 'transparent';
        poly.style.stroke = 'none';
      });

      // Highlight the selected district in green with green stroke
      const selectedPoly = mapContainerRef.current.querySelector(`#interactive-district-${districtId}`) as SVGPolygonElement | null;
      if (selectedPoly) {
        selectedPoly.style.fill = '#00CED1';
        selectedPoly.style.stroke = '#00B6B8';
        selectedPoly.style.strokeWidth = '2px';
      }

      // Update popup data and position it as if hovered
      const districtInfo = districtMap.get(districtId);
      if (districtInfo) {
        setPopupData({ name: districtInfo.name, ...districtInfo.impact });
        
        // Calculate the center of the polygon for popup positioning
        const center = calculatePolygonCenter(districtInfo.points);
        const mapRect = mapContainerRef.current.getBoundingClientRect();
        
        // Scale the coordinates to match the actual map size
        // Using more accurate scaling based on the actual SVG dimensions
        const scaleX = mapRect.width / 800; // Assuming original SVG width is 800
        const scaleY = mapRect.height / 600; // Assuming original SVG height is 600
        
        setPopupPosition({ 
          x: center.x * scaleX, 
          y: center.y * scaleY 
        });
      }
    }
  };

  // Function to navigate to next district
  const navigateToNextDistrict = () => {
    const currentIndex = districtData.findIndex(d => d.id === selectedDistrictId);
    const newIndex = (currentIndex + 1) % districtData.length;
    const newDistrictId = districtData[newIndex].id;
    setSelectedDistrictId(newDistrictId);
    highlightDistrict(newDistrictId);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigateToNextDistrict();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDistrictId]);

  // Highlight the selected district when it changes
  useEffect(() => {
    highlightDistrict(selectedDistrictId);
  }, [selectedDistrictId]);

  const beforeInjection = (svg: SVGElement) => {
    // 1. Style the base map shapes
    svg.querySelectorAll('polygon, path').forEach(shape => {
      const element = shape as HTMLElement;
      element.style.fill = '#f8dfad';
      element.style.stroke = '#000000';
      element.style.strokeWidth = '0.5px';
    });
    svg.querySelectorAll('text').forEach(text => text.remove());

    // ===================================================================================
    // STEP 2: DYNAMICALLY CREATE ALL INTERACTIVE POLYGONS
    // ===================================================================================
    districtData.forEach(district => {
      const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
      poly.setAttribute("points", district.points);
      
      // Use a consistent prefix for IDs to make them easy to query
      poly.id = `interactive-district-${district.id}`;
      
      // Set initial styles
      poly.style.fill = 'transparent';
      poly.style.stroke = 'none';
      poly.style.strokeWidth = '2px';
      poly.style.cursor = 'pointer';
      poly.style.transition = 'fill 0.2s ease, stroke 0.2s ease';

      svg.appendChild(poly);
    });

    // ===================================================================================
    // STEP 3: USE A SINGLE, EFFICIENT EVENT LISTENER
    // ===================================================================================
    svg.addEventListener('pointerover', (e: PointerEvent) => {
      const target = e.target as SVGElement;
      const targetId = target.id.replace('interactive-district-', '');

      // Check if the hovered element is one of our interactive districts
      if (districtMap.has(targetId)) {
        // Update the selected district when hovering
        setSelectedDistrictId(targetId);
        
        // If we hovered over a new district, reset the old one first
        if (hoveredDistrictId.current && hoveredDistrictId.current !== targetId) {
          const oldPoly = svg.querySelector(`#interactive-district-${hoveredDistrictId.current}`) as SVGPolygonElement | null;
          if (oldPoly) {
            oldPoly.style.fill = 'transparent';
            oldPoly.style.stroke = 'none';
          }
        }
        
        // Apply hover styles to the current polygon
        target.style.fill = '#00CED1';
        target.style.stroke = '#00B6B8';
        target.style.strokeWidth = '2px';

        // Update popup data and position
        const districtInfo = districtMap.get(targetId);
        const mapRect = mapContainerRef.current?.getBoundingClientRect();
        if (districtInfo && mapRect) {
          setPopupData({ name: districtInfo.name, ...districtInfo.impact });
          setPopupPosition({ x: e.clientX - mapRect.left, y: e.clientY - mapRect.top });
        }
        
        // Store the current district ID
        hoveredDistrictId.current = targetId;

      } else {
        // If hovering over any non-interactive part of the map, reset the last hovered district
        if (hoveredDistrictId.current) {
           const oldPoly = svg.querySelector(`#interactive-district-${hoveredDistrictId.current}`) as SVGPolygonElement | null;
           if (oldPoly) {
              oldPoly.style.fill = 'transparent';
              oldPoly.style.stroke = 'none';
           }
           hoveredDistrictId.current = null;
           setPopupData(null);
        }
      }
    });
  };

  const resetAllHovers = () => {
      if (mapContainerRef.current) {
          // Find all interactive polygons and reset their styles
          const allInteractivePolys = mapContainerRef.current.querySelectorAll<SVGPolygonElement>('[id^="interactive-district-"]');
          allInteractivePolys.forEach(poly => {
              poly.style.fill = 'transparent';
              poly.style.stroke = 'none';
          });
      }
      setPopupData(null);
      hoveredDistrictId.current = null;
  };

  // Get current district data
  const currentDistrict = districtMap.get(selectedDistrictId);

  return (
    <div className="w-full bg-gray-50 py-12 md:py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-2">
        Where We Work
      </h2>
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12">
        Hover over districts to see our impact or use the arrow key to navigate.
      </p>
      
      {/* District Information Section - Now Above Map */}
      {currentDistrict && (
        <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-md p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-800 mb-2">{currentDistrict.name}</h3>
            <p className="text-gray-600 mb-4">{currentDistrict.impact.province}</p>
            <div className="grid grid-cols-2 gap-4 mb-4 max-w-md mx-auto">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Schools</p>
                <p className="text-2xl font-bold text-blue-800">{currentDistrict.impact.schools}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Students</p>
                <p className="text-2xl font-bold text-green-800">{currentDistrict.impact.students.toLocaleString()}</p>
              </div>
            </div>
            <p className="text-gray-700">{currentDistrict.impact.description}</p>
          </div>
          
          {/* Navigation Instructions */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Use the arrow key or click the navigation button to explore different districts
            </p>
          </div>
        </div>
      )}
      
      {/* Navigation Arrow Above Map */}
      <div className="flex justify-center mb-4">
        <button
          onClick={navigateToNextDistrict}
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
          aria-label="Next district"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div 
        className="relative max-w-5xl mx-auto" 
        ref={mapContainerRef}
        onMouseLeave={resetAllHovers} // Failsafe to hide everything when leaving the map
      >
        <ReactSVG
          src={mapSvg}
          beforeInjection={beforeInjection}
          className="w-full h-auto"
          wrapper="div"
        />
        
        {popupData && (
          <div 
            className="absolute z-50 p-4 bg-white rounded-lg shadow-xl border border-gray-200 max-w-xs pointer-events-none"
            style={{ 
              left: popupPosition.x, 
              top: popupPosition.y,
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
