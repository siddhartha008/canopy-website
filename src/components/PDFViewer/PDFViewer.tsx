import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, RotateCw, X, FileText } from 'lucide-react';
import './PDFViewer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfPath: string;
  title?: string;
  onClose?: () => void;
  isOpen: boolean;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfPath, title, onClose, isOpen }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [rotation, setRotation] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      console.log('Opening PDF:', pdfPath);
      setPageNumber(1);
      setScale(1.0);
      setRotation(0);
      setLoading(true);
      setError(null);
      
      // Test if PDF is accessible
      fetch(pdfPath, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            throw new Error(`PDF not accessible: ${response.status} ${response.statusText}`);
          }
          console.log('PDF is accessible');
        })
        .catch(error => {
          console.error('PDF accessibility test failed:', error);
          setError(`PDF not accessible: ${error.message}`);
          setLoading(false);
        });
      
      // Add timeout to prevent infinite loading
      const timeout = setTimeout(() => {
        if (loading) {
          console.error('PDF loading timeout');
          setError('PDF took too long to load. Please try again.');
          setLoading(false);
        }
      }, 15000); // 15 second timeout
      
      return () => clearTimeout(timeout);
    }
  }, [isOpen, pdfPath, loading]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log('PDF loaded successfully:', numPages, 'pages');
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    console.error('PDF path was:', pdfPath);
    setError(`Failed to load PDF: ${error.message}. Please try again or download the file.`);
    setLoading(false);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  };

  const changeScale = (newScale: number) => {
    setScale(Math.min(Math.max(0.5, newScale), 2.0));
  };

  const rotate = () => {
    setRotation(prev => (prev + 90) % 360);
  };

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = title || 'document.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        changePage(-1);
        break;
      case 'ArrowRight':
        e.preventDefault();
        changePage(1);
        break;
      case 'Escape':
        e.preventDefault();
        onClose?.();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, pageNumber, numPages]);

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
          className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{title || 'PDF Document'}</h2>
                <p className="text-sm text-gray-600">
                  Page {pageNumber} of {numPages} • {Math.round(scale * 100)}%
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

          {/* Controls */}
          <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changePage(-1)}
                disabled={pageNumber <= 1}
                className="p-2 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                title="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium px-3">
                {pageNumber} / {numPages}
              </span>
              <button
                onClick={() => changePage(1)}
                disabled={pageNumber >= numPages}
                className="p-2 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                title="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeScale(scale - 0.1)}
                disabled={scale <= 0.5}
                className="p-2 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                title="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <button
                onClick={() => changeScale(scale + 0.1)}
                disabled={scale >= 2.0}
                className="p-2 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                title="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={rotate}
                className="p-2 rounded-md bg-white hover:bg-gray-100 transition-colors border border-gray-200"
                title="Rotate"
              >
                <RotateCw className="w-5 h-5" />
              </button>
              <button
                onClick={downloadPDF}
                className="p-2 rounded-md bg-blue-100 hover:bg-blue-200 text-blue-700 transition-colors border border-blue-200"
                title="Download PDF"
              >
                <Download className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 overflow-auto p-6">
            {error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={() => window.open(pdfPath, '_blank')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Open in New Tab
                  </button>
                </div>
              </div>
            )}
            
            {loading && !error && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading PDF...</p>
                </div>
              </div>
            )}
            
            {!loading && !error && (
              <div className="flex justify-center">
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                        <p className="text-gray-600">Rendering PDF...</p>
                      </div>
                    </div>
                  }
                  error={
                    <div className="flex items-center justify-center py-12">
                      <div className="text-center">
                        <p className="text-red-600 mb-4">Failed to render PDF</p>
                        <button
                          onClick={() => window.open(pdfPath, '_blank')}
                          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          Open in New Tab
                        </button>
                      </div>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    rotate={rotation}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    className="shadow-lg"
                    loading={
                      <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center py-12">
                        <div className="text-center">
                          <p className="text-red-600 mb-4">Failed to render page</p>
                          <button
                            onClick={() => window.open(pdfPath, '_blank')}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                          >
                            Open in New Tab
                          </button>
                        </div>
                      </div>
                    }
                  />
                </Document>
              </div>
            )}
          </div>

          {/* Page Navigation */}
          {numPages > 1 && !error && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-center">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setPageNumber(1)}
                    disabled={pageNumber <= 1}
                    className="px-3 py-1 text-sm rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                  >
                    First
                  </button>
                  <button
                    onClick={() => changePage(-1)}
                    disabled={pageNumber <= 1}
                    className="px-3 py-1 text-sm rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                  >
                    Previous
                  </button>
                  <span className="px-3 py-1 text-sm font-medium">
                    Page {pageNumber} of {numPages}
                  </span>
                  <button
                    onClick={() => changePage(1)}
                    disabled={pageNumber >= numPages}
                    className="px-3 py-1 text-sm rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                  >
                    Next
                  </button>
                  <button
                    onClick={() => setPageNumber(numPages)}
                    disabled={pageNumber >= numPages}
                    className="px-3 py-1 text-sm rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border border-gray-200"
                  >
                    Last
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PDFViewer; 