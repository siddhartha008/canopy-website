import { useState } from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';

// Import policy guideline document covers (A4 format)
import Policy1 from '../../assets/covers/Annual2024.png';
import Policy2 from '../../assets/covers/Annual2023.png';
import Policy3 from '../../assets/covers/Annual2022.png';
import Policy4 from '../../assets/covers/AUDIT80_81.png';
import Policy5 from '../../assets/covers/AUDIT79_80.png';
import Policy6 from '../../assets/covers/AUDIT78_79.png';

const PolicyGuidelinesPage = () => {
  const [selectedPDF, setSelectedPDF] = useState<{ path: string; title: string } | null>(null);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

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
            Policy Guidelines
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-screen-xl mx-auto px-6 -mt-40">
        <div className="mb-24 animate-in fade-in duration-500">
          <p className="text-center text-lg mb-8 max-w-4xl mx-auto">
            Our comprehensive policy guidelines and frameworks that guide our work in education and community development.
          </p>

          {/* Policy Guidelines Display - 4 per row */}
          <div className="flex flex-wrap justify-center gap-8 py-4">
            {[
              { id: 1, cover: Policy1, pdf: 'policy-guideline-1.pdf', title: 'Policy Guideline 1' },
              { id: 2, cover: Policy2, pdf: 'policy-guideline-2.pdf', title: 'Policy Guideline 2' },
              { id: 3, cover: Policy3, pdf: 'policy-guideline-3.pdf', title: 'Policy Guideline 3' },
              { id: 4, cover: Policy4, pdf: 'policy-guideline-4.pdf', title: 'Policy Guideline 4' },
              { id: 5, cover: Policy5, pdf: 'policy-guideline-5.pdf', title: 'Policy Guideline 5' },
              { id: 6, cover: Policy6, pdf: 'policy-guideline-6.pdf', title: 'Policy Guideline 6' }
            ].map((policy) => (
              <div key={policy.id} className="flex flex-col items-center">
                <button 
                  onClick={() => openPDF(`/pdfs/${policy.pdf}`, policy.title)}
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src={policy.cover}
                    alt={policy.title}
                    className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
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

export default PolicyGuidelinesPage;
