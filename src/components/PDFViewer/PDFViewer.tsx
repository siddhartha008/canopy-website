import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, FileText, ExternalLink, Eye } from 'lucide-react';
import './PDFViewer.css';

interface PDFViewerProps {
  pdfPath: string;
  title?: string;
  onClose?: () => void;
  isOpen: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath, title, onClose, isOpen }) => {
  const [pdfExists, setPdfExists] = useState(true);

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openInNewTab = () => {
    window.open(pdfPath, '_blank');
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose?.();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  React.useEffect(() => {
    if (isOpen) {
      setPdfExists(true);
      
      // Check if PDF exists and open in new tab
      fetch(pdfPath, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            setPdfExists(false);
          } else {
            // Automatically open PDF in new tab and close modal
            setTimeout(() => {
              openInNewTab();
              onClose?.();
            }, 100);
          }
        })
        .catch(() => {
          setPdfExists(false);
        });
    }
  }, [isOpen, pdfPath, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-lg shadow-2xl max-w-md w-full flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-primary-blue" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{title || 'PDF Document'}</h2>
                <p className="text-sm text-gray-600">
                  {!pdfExists ? 'PDF Not Available' : 'Opening in new tab...'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              title="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {!pdfExists ? (
              <div className="text-center">
                <div className="mb-6">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    PDF Not Available
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The PDF file "{title}" is not currently available. Please check back later or contact us for more information.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <div className="text-center">
                <div className="mb-6">
                  <FileText className="w-16 h-16 text-primary-blue mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Opening PDF...
                  </h3>
                  <p className="text-gray-600 mb-6">
                    The PDF "{title}" is being opened in a new browser tab.
                  </p>
                </div>
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      openInNewTab();
                      onClose?.();
                    }}
                    className="w-full px-6 py-3 bg-primary-blue text-white rounded-lg hover:bg-primary-green transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="w-5 h-5" />
                    <span>Open Again</span>
                  </button>
                  <button
                    onClick={downloadPDF}
                    className="w-full px-6 py-3 bg-primary-green text-white rounded-lg hover:bg-secondary-green transition-colors flex items-center justify-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Close Dialog
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PDFViewer; 