import { useState } from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';
import Annual2024 from '../../assets/covers/Annual2024.png';
import Annual2023 from '../../assets/covers/Annual2023.png';
import Annual2022 from '../../assets/covers/Annual2022.png';
import AUDIT80_81 from '../../assets/covers/AUDIT80_81.png';
import AUDIT79_80 from '../../assets/covers/AUDIT79_80.png';
import AUDIT78_79 from '../../assets/covers/AUDIT78_79.png';
import AUDIT77_78 from '../../assets/covers/AUDIT77_78.png';
import AUDIT76_77 from '../../assets/covers/AUDIT76_77.png';
import AUDIT75_76 from '../../assets/covers/AUDIT75_76.png';
import AUDIT74_75 from '../../assets/covers/AUDIT74_75.png';
import AUDIT73_74 from '../../assets/covers/AUDIT73_74.png';
import Magazine1 from '../../assets/covers/Magazine1.png';
import Magazine2 from '../../assets/covers/Magazine2.png';
import Magazine3 from '../../assets/covers/Magazine3.png';
import Magazine4 from '../../assets/covers/Magazine4.png';
import Magazine5 from '../../assets/covers/Magazine5.png';
import Magazine6 from '../../assets/covers/Magazine6.png';
import Magazine7 from '../../assets/covers/Magazine7.png';
import Magazine8 from '../../assets/covers/Magazine8.png';
import Magazine9 from '../../assets/covers/Magazine9.png';
import Magazine10 from '../../assets/covers/Magazine10.png';
import Magazine11 from '../../assets/covers/Magazine11.png';

const magazineCovers: Record<number, string> = {
  1: Magazine1,
  2: Magazine2,
  3: Magazine3,
  4: Magazine4,
  5: Magazine5,
  6: Magazine6,
  7: Magazine7,
  8: Magazine8,
  9: Magazine9,
  10: Magazine10,
  11: Magazine11,
};
const auditCovers = {
  'AUDIT80_81': AUDIT80_81,
  'AUDIT79_80': AUDIT79_80,
  'AUDIT78_79': AUDIT78_79,
  'AUDIT77_78': AUDIT77_78,
  'AUDIT76_77': AUDIT76_77,
  'AUDIT75_76': AUDIT75_76,
  'AUDIT74_75': AUDIT74_75,
  'AUDIT73_74': AUDIT73_74,
};

const PublicationsPage = () => {
  const [activeSection, setActiveSection] = useState('buneka-katha');
  const [selectedPDF, setSelectedPDF] = useState<{ path: string; title: string } | null>(null);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  // Function to get title based on active section
  const getTitle = () => {
    switch (activeSection) {
      case 'buneka-katha':
        return 'Buneka Katha';
      case 'annual-report':
        return 'Annual Reports';
      case 'financial-report':
        return 'Financial Reports';
      default:
        return 'Buneka Katha';
    }
  };

  const openPDF = (path: string, title: string) => {
    setSelectedPDF({ path, title });
    setIsPDFOpen(true);
  };

  const closePDF = () => {
    setIsPDFOpen(false);
    setSelectedPDF(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-red mb-8">
            {getTitle()}
          </h1>

          {/* Sub-navigation */}
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveSection('buneka-katha')}
              className={`text-lg pb-2 transition-colors uppercase ${
                activeSection === 'buneka-katha'
                  ? 'text-primary-cyan border-b-2 border-primary-cyan font-bold'
                  : 'text-gray-600 hover:text-primary-cyan font-medium'
              }`}
            >
              Buneka Katha
            </button>
            <button
              onClick={() => setActiveSection('annual-report')}
              className={`text-lg pb-2 transition-colors uppercase ${
                activeSection === 'annual-report'
                  ? 'text-primary-cyan border-b-2 border-primary-cyan font-bold'
                  : 'text-gray-600 hover:text-primary-cyan font-medium'
              }`}
            >
              Annual Report
            </button>
            <button
              onClick={() => setActiveSection('financial-report')}
              className={`text-lg pb-2 transition-colors uppercase ${
                activeSection === 'financial-report'
                  ? 'text-primary-cyan border-b-2 border-primary-cyan font-bold'
                  : 'text-gray-600 hover:text-primary-cyan font-medium'
              }`}
            >
              Financial Report
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 -mt-24">
        {/* Buneka Katha Section */}
        {activeSection === 'buneka-katha' && (
          <div className="mb-24 animate-in fade-in duration-500">
            <p className="text-center text-lg mb-8 max-w-4xl mx-auto">
              Our magazine publications featuring stories, insights, and updates from our work in education and community development.
            </p>

            {/* Publications Display - 4 per row */}
            <div className="flex flex-wrap justify-center gap-8 py-4">
              {[
                { id: 11, cover: Magazine11, pdf: 'magazine-11.pdf' },
                { id: 10, cover: Magazine10, pdf: 'magazine-10.pdf' },
                { id: 9, cover: Magazine9, pdf: 'magazine-9.pdf' },
                { id: 8, cover: Magazine8, pdf: 'magazine-8.pdf' },
                { id: 7, cover: Magazine7, pdf: 'magazine-7.pdf' },
                { id: 6, cover: Magazine6, pdf: 'magazine-6.pdf' },
                { id: 5, cover: Magazine5, pdf: 'magazine-5.pdf' },
                { id: 4, cover: Magazine4, pdf: 'magazine-4.pdf' },
                { id: 3, cover: Magazine3, pdf: 'magazine-3.pdf' },
                { id: 2, cover: Magazine2, pdf: 'magazine-2.pdf' },
                { id: 1, cover: Magazine1, pdf: 'magazine-1.pdf' }
              ].map((magazine) => (
                <div key={magazine.id} className="flex flex-col items-center">
                  <button 
                    onClick={() => openPDF(`/pdfs/${magazine.pdf}`, `Buneka Katha Magazine ${magazine.id}`)}
                    className="transition-transform hover:scale-105"
                  >
                    <img
                      src={magazine.cover}
                      alt={`Buneka Katha Magazine ${magazine.id}`}
                      className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Annual Reports Section */}
        {activeSection === 'annual-report' && (
          <div className="mb-24 animate-in fade-in duration-500">
            <p className="text-center text-lg mb-8 max-w-4xl mx-auto">
              Every year, we highlight our work and achievements to share with our supporters – individuals, multinational corporations,
              international organizations, and local allies – who make our work possible.
            </p>

            {/* Annual Reports Display */}
            <div className="flex justify-center space-x-8 py-4">
              {/* 2024 Report */}
              <div className="flex flex-col items-center">
                <button 
                  onClick={() => openPDF('/pdfs/annualreport2024.pdf', 'Annual Report 2024')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={Annual2024}
                    alt="2024 Annual Report"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
                <p className="mt-4 font-semibold text-gray-800">2024</p>
              </div>

              {/* 2023 Report */}
              <div className="flex flex-col items-center">
                <button 
                  onClick={() => openPDF('/pdfs/annualreport2023.pdf', 'Annual Report 2023')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={Annual2023}
                    alt="2023 Annual Report"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
                <p className="mt-4 font-semibold text-gray-800">2023</p>
              </div>

              {/* 2022 Report */}
              <div className="flex flex-col items-center">
                <button 
                  onClick={() => openPDF('/pdfs/annualreport2022.pdf', 'Annual Report 2022')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={Annual2022}
                    alt="2022 Annual Report"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
                <p className="mt-4 font-semibold text-gray-800">2022</p>
              </div>
            </div>
          </div>
        )}

        {/* Financial Reports Section */}
        {activeSection === 'financial-report' && (
          <div className="mb-24 animate-in fade-in duration-500">
            <p className="text-center text-lg mb-8 max-w-4xl mx-auto">
              Our comprehensive financial statements and audit reports ensuring transparency and accountability in our operations.
            </p>

            {/* Financial Reports Display */}
            <div className="flex flex-wrap justify-center gap-8 py-4">
              {/* Audit Report 2080/81 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2080-81.pdf', 'Audit Report 2080/81')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT80_81}
                    alt="Audit Report 2080/81"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2079/80 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2079-80.pdf', 'Audit Report 2079/80')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT79_80}
                    alt="Audit Report 2079/80"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2078/79 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2078-79.pdf', 'Audit Report 2078/79')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT78_79}
                    alt="Audit Report 2078/79"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2077/78 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2077-78.pdf', 'Audit Report 2077/78')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT77_78}
                    alt="Audit Report 2077/78"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2076/77 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2076-77.pdf', 'Audit Report 2076/77')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT76_77}
                    alt="Audit Report 2076/77"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2075/76 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2075-76.pdf', 'Audit Report 2075/76')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT75_76}
                    alt="Audit Report 2075/76"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2074/75 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2074-75.pdf', 'Audit Report 2074/75')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT74_75}
                    alt="Audit Report 2074/75"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>

              {/* Audit Report 2073/74 */}
              <div className="flex flex-col items-center">
                <button
                  onClick={() => openPDF('/pdfs/audit-report-2073-74.pdf', 'Audit Report 2073/74')}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={AUDIT73_74}
                    alt="Audit Report 2073/74"
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* PDF Viewer Modal */}
      {selectedPDF && (
        <PDFViewer
          pdfPath={selectedPDF.path}
          title={selectedPDF.title}
          isOpen={isPDFOpen}
          onClose={closePDF}
        />
      )}
    </div>
  );
};

export default PublicationsPage;