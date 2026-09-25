import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PDFViewer from '../PDFViewer/PDFViewer';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const PublicationsPage = () => {
  const sections = useSite().publications.sections.filter((section) => section.visible);
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');
  const [selectedPDF, setSelectedPDF] = useState<{ path: string; title: string } | null>(null);
  const [isPDFOpen, setIsPDFOpen] = useState(false);
  const current = sections.find((section) => section.id === activeSection) || sections[0];

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) setActiveSection(section);
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-red mb-8">{current?.label}</h1>
          <div className="flex justify-center space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`text-lg pb-2 transition-colors uppercase ${activeSection === section.id ? 'text-primary-cyan border-b-2 border-primary-cyan font-bold' : 'text-gray-600 hover:text-primary-cyan font-medium'}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 -mt-24">
        {current && (
          <div className="mb-24">
            <p className="text-center text-lg mb-8 max-w-4xl mx-auto">{current.intro}</p>
            <div className="flex flex-wrap justify-center gap-8 py-4">
              {current.items.map((item) => (
                <div key={item.id} className="flex flex-col items-center">
                  <button onClick={() => { setSelectedPDF({ path: item.file, title: item.title }); setIsPDFOpen(true); }} className="transition-transform hover:scale-105">
                    <img src={mediaUrl(item.cover)} alt={item.title} className="w-80 h-[28rem] object-cover object-center shadow-md rounded-lg bg-white" />
                  </button>
                  {item.label ? <p className="mt-4 font-semibold text-gray-800">{item.label}</p> : null}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedPDF && (
        <PDFViewer pdfPath={selectedPDF.path} title={selectedPDF.title} isOpen={isPDFOpen} onClose={() => { setIsPDFOpen(false); setSelectedPDF(null); }} />
      )}
    </div>
  );
};

export default PublicationsPage;
