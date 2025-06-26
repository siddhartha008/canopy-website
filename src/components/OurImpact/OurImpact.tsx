import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const NepalImpactMap = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);
  
  // Impact data for all districts
  const districtData = {
    // Far Western Districts
    'Darchula': { schools: 6, students: 450 },
    'Baitadi': { schools: 8, students: 600 },
    'Dadeldhura': { schools: 10, students: 750 },
    'Kanchanpur': { schools: 18, students: 1350 },
    'Kailali': { schools: 22, students: 1650 },
    'Doti': { schools: 12, students: 900 },
    'Achham': { schools: 11, students: 825 },
    'Bajhang': { schools: 9, students: 675 },
    'Bajura': { schools: 7, students: 525 },
    
    // Karnali Province
    'Humla': { schools: 4, students: 300 },
    'Mugu': { schools: 5, students: 375 },
    'Jumla': { schools: 6, students: 450 },
    'Kalikot': { schools: 8, students: 600 },
    'Dolpa': { schools: 3, students: 225 },
    'Dailekh': { schools: 12, students: 900 },
    'Jajarkot': { schools: 9, students: 675 },
    'Surkhet': { schools: 16, students: 1200 },
    'Salyan': { schools: 10, students: 750 },
    'Rukum West': { schools: 7, students: 525 },
    
    // Lumbini Province
    'Bardiya': { schools: 17, students: 1275 },
    'Banke': { schools: 19, students: 1425 },
    'Dang': { schools: 20, students: 1500 },
    'Rukum East': { schools: 8, students: 600 },
    'Rolpa': { schools: 11, students: 825 },
    'Pyuthan': { schools: 12, students: 900 },
    'Arghakhanchi': { schools: 10, students: 750 },
    'Kapilvastu': { schools: 18, students: 1350 },
    'Rupandehi': { schools: 28, students: 2100 },
    'Palpa': { schools: 14, students: 1050 },
    'Gulmi': { schools: 15, students: 1125 },
    'Nawalpur': { schools: 16, students: 1200 },
    
    // Gandaki Province
    'Baglung': { schools: 17, students: 1275 },
    'Parbat': { schools: 14, students: 1050 },
    'Myagdi': { schools: 10, students: 750 },
    'Mustang': { schools: 4, students: 300 },
    'Syangja': { schools: 24, students: 1800 },
    'Kaski': { schools: 30, students: 2250 },
    'Tanahun': { schools: 20, students: 1500 },
    'Gorkha': { schools: 18, students: 1350 },
    'Lamjung': { schools: 15, students: 1125 },
    'Manang': { schools: 3, students: 225 },
    
    // Bagmati Province
    'Chitwan': { schools: 27, students: 2025 },
    'Makwanpur': { schools: 19, students: 1425 },
    'Dhading': { schools: 22, students: 1650 },
    'Nuwakot': { schools: 26, students: 1950 },
    'Kathmandu': { schools: 58, students: 4350 },
    'Bhaktapur': { schools: 20, students: 1500 },
    'Lalitpur': { schools: 32, students: 2400 },
    'Kavrepalanchok': { schools: 24, students: 1800 },
    'Sindhupalchok': { schools: 28, students: 2100 },
    'Rasuwa': { schools: 6, students: 450 },
    'Dolakha': { schools: 13, students: 975 },
    'Ramechhap': { schools: 11, students: 825 },
    'Sindhuli': { schools: 14, students: 1050 },
    
    // Province 1
    'Solukhumbu': { schools: 7, students: 525 },
    'Okhaldhunga': { schools: 10, students: 750 },
    'Khotang': { schools: 13, students: 975 },
    'Udayapur': { schools: 16, students: 1200 },
    'Sankhuwasabha': { schools: 9, students: 675 },
    'Bhojpur': { schools: 11, students: 825 },
    'Terhathum': { schools: 8, students: 600 },
    'Dhankuta': { schools: 10, students: 750 },
    'Taplejung': { schools: 12, students: 890 },
    'Panchthar': { schools: 14, students: 1050 },
    'Ilam': { schools: 18, students: 1350 },
    
    // Province 2
    'Saptari': { schools: 19, students: 1425 },
    'Siraha': { schools: 20, students: 1500 },
    'Dhanusa': { schools: 18, students: 1350 },
    'Mahottari': { schools: 17, students: 1275 },
    'Sarlahi': { schools: 16, students: 1200 },
    'Rautahat': { schools: 15, students: 1125 },
    'Bara': { schools: 18, students: 1350 },
    'Parsa': { schools: 19, students: 1425 },
    'Sunsari': { schools: 21, students: 1575 },
    'Morang': { schools: 25, students: 1875 },
    'Jhapa': { schools: 22, students: 1650 }
  };

  // Calculate totals
  const totalSchools = Object.values(districtData).reduce((sum, d) => sum + d.schools, 0);
  const totalStudents = Object.values(districtData).reduce((sum, d) => sum + d.students, 0);
  const activeDistricts = Object.keys(districtData).length;

  // High impact districts
  const highImpactDistricts = ['Kathmandu', 'Lalitpur', 'Kaski', 'Rupandehi', 'Sindhupalchok', 'Nuwakot', 'Syangja'];

  useEffect(() => {
    // Load and process the SVG
    if (svgRef.current) {
      // Use a local copy of the SVG instead of fetching from Wikipedia
      fetch('/src/assets/Map_of_Nepal_with_Districts.svg')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to load SVG');
          }
          return response.text();
        })
        .then(svgContent => {
          // Insert the SVG content
          svgRef.current.innerHTML = svgContent;
          
          // Get the SVG element
          const svg = svgRef.current.querySelector('svg');
          if (svg) {
            // Set proper viewBox and dimensions
            svg.setAttribute('width', '100%');
            svg.setAttribute('height', '100%');
            svg.style.display = 'block';
            
            // Process each district path
            const paths = svg.querySelectorAll('path');
            paths.forEach(path => {
              // Get district name from various possible attributes
              let districtName = path.getAttribute('title') || 
                               path.getAttribute('id') || 
                               path.getAttribute('name') || '';
              
              // Clean up district name
              districtName = districtName.replace(/NP-|District|_/g, '').trim();
              
              // Check if we have data for this district
              if (districtData[districtName]) {
                // Set initial styles
                path.style.fill = highImpactDistricts.includes(districtName) ? '#DC2626' : '#E5E7EB';
                path.style.stroke = '#FFFFFF';
                path.style.strokeWidth = '2';  // Increased stroke width
                path.style.transition = 'all 0.3s ease';
                path.style.cursor = 'pointer';
                
                // Add hover event listeners
                path.addEventListener('mouseenter', (e) => {
                  setHoveredDistrict(districtName);
                  path.style.fill = '#DC2626';
                  path.style.opacity = '0.8';
                  path.style.strokeWidth = '3';  // Thicker stroke on hover
                });
                
                path.addEventListener('mouseleave', () => {
                  setHoveredDistrict(null);
                  path.style.fill = highImpactDistricts.includes(districtName) ? '#DC2626' : '#E5E7EB';
                  path.style.opacity = '1';
                  path.style.strokeWidth = '2';  // Reset stroke width
                });
                
                path.addEventListener('mousemove', (e) => {
                  const rect = svgRef.current.getBoundingClientRect();
                  setTooltipPosition({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                  });
                });
              } else {
                // Style districts without data
                path.style.fill = '#F3F4F6';
                path.style.stroke = '#FFFFFF';
                path.style.strokeWidth = '1';
              }
            });
          }
        })
        .catch(err => {
          console.error('Error loading SVG:', err);
          // Fallback to display a message if SVG fails to load
          if (svgRef.current) {
            svgRef.current.innerHTML = `
              <div class="flex items-center justify-center h-full min-h-[600px] bg-gray-100 rounded-xl">
                <div class="text-center p-8">
                  <p class="text-xl text-gray-600 mb-4">Map visualization is currently unavailable</p>
                  <p class="text-gray-500">Please check our statistics below for impact information</p>
                </div>
              </div>
            `;
          }
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">
            OUR IMPACT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hover over any district to see how Canopy Nepal is transforming education across the country
          </p>
        </div>
        
        {/* Map Container */}
        <div className="relative mb-16">
          <div className="mx-auto max-w-6xl bg-gray-50 rounded-2xl shadow-lg overflow-hidden p-4 md:p-8">
            {/* SVG Container */}
            <div 
              ref={svgRef}
              className="relative w-full"
              style={{ minHeight: '600px' }}  // Increased height
            >
              {/* Loading indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
              </div>
            </div>
            
            {/* Tooltip */}
            {hoveredDistrict && districtData[hoveredDistrict] && (
              <div
                className="absolute z-50 pointer-events-none"
                style={{
                  left: `${tooltipPosition.x}px`,
                  top: `${tooltipPosition.y - 80}px`
                }}
              >
                <div className="bg-gray-900 text-white px-4 py-3 rounded-lg shadow-xl">
                  <div className="font-bold text-lg mb-1">{hoveredDistrict}</div>
                  <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Schools:</span>
                      <span className="font-semibold">{districtData[hoveredDistrict].schools}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">Students:</span>
                      <span className="font-semibold">{districtData[hoveredDistrict].students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                    <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-gray-900"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {/* Legend */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-red-600 rounded"></div>
              <span className="text-gray-700">High Impact Districts</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <span className="text-gray-700">Active Districts</span>
            </div>
          </div>
        </div>
        
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8 text-center transform hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-5xl font-bold text-red-600 mb-2">{activeDistricts}</h3>
            <p className="text-gray-700 font-medium">Districts Reached</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center transform hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-5xl font-bold text-blue-600 mb-2">{totalSchools}</h3>
            <p className="text-gray-700 font-medium">Schools Impacted</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center transform hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-5xl font-bold text-green-600 mb-2">{totalStudents.toLocaleString()}</h3>
            <p className="text-gray-700 font-medium">Students Reached</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center transform hover:scale-105 transition-transform shadow-lg">
            <h3 className="text-5xl font-bold text-purple-600 mb-2">17</h3>
            <p className="text-gray-700 font-medium">Local Governments</p>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 text-lg">
            Together, we're building a Nepal where every child has access to quality education
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-700 transform hover:scale-105 transition-all shadow-lg">
            Support Our Mission
          </button>
        </div>
      </div>
    </div>
  );
};

export default NepalImpactMap;
