"use client";

import React, { useEffect, useState } from "react";

const LoadingScreen = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        }
        clearInterval(interval);
        return 100;
      });
    }, 10); // Adjust the speed of the counter (10ms for 0% to 100% in ~1 second)

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {progress < 100 ? (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
          {/* Percentage Number */}
          <span className="text-5xl font-bold text-rose-600 mb-4">
            {progress}%
          </span>
          {/* Circular Progress */}
          <div className="relative size-40">
            <svg
              className="size-full -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-gray-200"
                strokeWidth="2"
              ></circle>
              {/* Progress Circle */}
              <circle
                cx="18"
                cy="18"
                r="16"
                fill="none"
                className="stroke-current text-rose-600"
                strokeWidth="2"
                strokeDasharray="100"
                strokeDashoffset={100 - progress}
                strokeLinecap="round"
              ></circle>
            </svg>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingScreen;
