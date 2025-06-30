'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void; 
}) {
  useEffect(() => {
    console.error('❌ Page error:', error);
  }, [error]);

  return (
    <div
      role="alert"
      aria-live="assertive"
      className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center bg-red-50 text-gray-800"
    >
      <h2 className="text-2xl font-bold text-red-700 mb-2" tabIndex={-1}>
        Something went wrong
      </h2>

      <p className="text-base mb-4 max-w-md">
        {error?.message || 'An unexpected error occurred while loading the page.'}
      </p>

      <button
        onClick={reset}
        className="px-5 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition"
        aria-label="Retry loading the page"
      >
        Try Again
      </button>

      <p className="text-base text-gray-600 mt-6 max-w-md">
        If the problem persists, please{' '}
        <a
          href="mailto:support@example.com"
          className="text-cyan-600 underline hover:text-cyan-700"
          aria-label="Contact support by email"
        >
          contact support
        </a>
        .
      </p>
    </div>
  );
}
