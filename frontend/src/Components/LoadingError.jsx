import React from 'react';

export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-400"></div>
    </div>
  );
};



export const ErrorComponent = ({errorMessage}) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-8 grid justify-center">
              <div className="flex items-center justify-center mb-4">
                <svg
                  className="w-16 h-16 text-red-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Oops! Something went wrong.</h2>
              <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5 
              text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:ring-blue-800">Default</button>
            </div>
          </div>
        </div>
      );
}
