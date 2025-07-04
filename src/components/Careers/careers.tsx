import React from 'react';

// --- Helper Component for the Loading Spinner ---
// This component displays a simple loading animation while the iframe is loading.
const LoadingSpinner = () => (
  <div className="flex items-center justify-center space-x-2 py-8">
    <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500"></div>
    <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500 [animation-delay:0.2s]"></div>
    <div className="h-4 w-4 animate-pulse rounded-full bg-blue-500 [animation-delay:0.4s]"></div>
    <p className="ml-4 text-gray-500">Loading job listings...</p>
  </div>
);

// --- Main Careers Page Component ---
// This component embeds your Giig public job board into your React application.
const CareersPage = () => {
  // **IMPORTANT**: Replace this URL with the public URL for your Giig job board.
  // You can find this link in your Giig dashboard.
  const giigJobBoardUrl = 'https://YOUR_GIIG_JOB_BOARD_URL_HERE';

  // State to manage the loading status of the iframe
  const [isLoading, setIsLoading] = React.useState(true);

  // A simple check to see if the user has replaced the placeholder URL.
  // We render an instruction message if the default URL is still present.
  if (giigJobBoardUrl === 'https://YOUR_GIIG_JOB_BOARD_URL_HERE') {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center bg-gray-50 p-4">
        <div className="max-w-2xl rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-50 p-8 text-center">
          <h2 className="text-xl font-bold text-yellow-800">Configuration Needed</h2>
          <p className="mt-2 text-yellow-700">
            Please open the `CareersPage.tsx` file and replace the placeholder in the `giigJobBoardUrl` variable with the actual URL of your Giig public job board.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-100 font-sans">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        {/* --- Page Header --- */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl">
            Join Our Team
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            We're looking for passionate individuals to help us make a difference. Explore our open positions below.
          </p>
        </div>

        {/* --- Iframe Container --- */}
        <div className="overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10">
          {/* Show a loading spinner while the iframe content is loading */}
          {isLoading && <LoadingSpinner />}

          {/* The iframe element that will display your Giig job board.
            - The `src` attribute points to your public Giig URL.
            - The `onLoad` event sets isLoading to false once the content is ready.
            - Tailwind classes make it responsive and fill its container.
            - `title` is important for accessibility.
          */}
          <iframe
            src={giigJobBoardUrl}
            title="Careers Job Board"
            className={`w-full transition-opacity duration-500 ${isLoading ? 'h-0 opacity-0' : 'h-screen opacity-100'}`}
            onLoad={() => setIsLoading(false)}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* --- Footer Note --- */}
        <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
                Can't see the listings? <a href={giigJobBoardUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-600 hover:underline">Open careers page in a new tab</a>.
            </p>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
