import { useState } from 'react';
import PDFViewer from '../PDFViewer/PDFViewer';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const PolicyGuidelinesPage = () => {
  const page = useSite().policies;
  const [selectedPDF, setSelectedPDF] = useState<{ path: string; title: string } | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-red mb-8">{page.title}</h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 -mt-40">
        <div className="mb-24">
          <p className="text-center text-lg mb-8 max-w-4xl mx-auto">{page.intro}</p>
          <div className="flex flex-wrap justify-center gap-8 py-4">
            {page.items.map((policy) => (
              <div key={policy.id} className="flex flex-col items-center">
                <button onClick={() => setSelectedPDF({ path: policy.file, title: policy.title })} className="transition-transform hover:scale-105">
                  <img src={mediaUrl(policy.cover)} alt={policy.title} className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedPDF && (
        <PDFViewer pdfPath={selectedPDF.path} title={selectedPDF.title} isOpen={Boolean(selectedPDF)} onClose={() => setSelectedPDF(null)} />
      )}
    </div>
  );
};

export default PolicyGuidelinesPage;
