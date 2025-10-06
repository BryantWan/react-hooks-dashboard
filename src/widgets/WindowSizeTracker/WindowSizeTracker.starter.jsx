import { useState, useEffect } from 'react';

/**
 * Window Size Tracker Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Track window resize events with useEffect
 * - Add and remove event listeners
 * - Update state based on window dimensions
 * - Clean up event listeners properly
 *
 * TODO: Complete the missing parts marked with comments
 */
function WindowSizeTracker() {
  // TODO: Initialize windowSize state with current window dimensions
  // Hint: { width: window.innerWidth, height: window.innerHeight }


  // TODO: Set up useEffect to listen for window resize events
  useEffect(() => {
    // TODO: Create handleResize function that updates windowSize state
    const handleResize = () => {
      // Update windowSize with current window.innerWidth and window.innerHeight

    };

    // TODO: Add event listener for 'resize' event


    // TODO: Return cleanup function to remove event listener
    return () => {

    };
  }, []); // Empty array - set up once on mount

  const getDeviceType = () => {
    // TODO: Determine device type based on windowSize.width
    // < 640: Mobile, < 1024: Tablet, >= 1024: Desktop
    return 'Unknown';
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Window Size Tracker</h3>

      <div className="w-full grid grid-cols-2 gap-4">
        <div className="p-6 bg-blue-50 rounded-lg text-center">
          {/* TODO: Display windowSize.width */}
          <div className="text-4xl font-bold text-blue-600">0px</div>
          <div className="text-sm text-gray-600">Width</div>
        </div>
        <div className="p-6 bg-green-50 rounded-lg text-center">
          {/* TODO: Display windowSize.height */}
          <div className="text-4xl font-bold text-green-600">0px</div>
          <div className="text-sm text-gray-600">Height</div>
        </div>
      </div>

      <div className="w-full p-4 bg-purple-50 rounded-lg text-center">
        <div className="text-2xl font-bold text-purple-600">{getDeviceType()}</div>
        <div className="text-sm text-gray-600">Device Type</div>
      </div>
    </div>
  );
}

export default WindowSizeTracker;
