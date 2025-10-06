import { useState, useEffect } from 'react';

/**
 * Live Clock Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Use useEffect with empty dependency array
 * - Update state at regular intervals
 * - Work with Date objects
 * - Clean up intervals properly
 *
 * Instructions:
 * 1. Create state for current time (Date object)
 * 2. Use useEffect to update time every second
 * 3. Use empty dependency array (run once on mount)
 * 4. Clean up interval on unmount
 * 5. Format time for display
 * 6. Format date for display
 */
function LiveClock() {
  // TODO: Create state for current time (initialize with new Date())

  // TODO: Use useEffect to create interval
  // Update time every 1000ms
  // Use empty dependency array []
  // Clean up interval on unmount

  // TODO: Create function to format time (use toLocaleTimeString)

  // TODO: Create function to format date (use toLocaleDateString)

  // TODO: Create function to get greeting based on hour

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Live Clock</h3>

      {/* TODO: Display greeting */}

      {/* TODO: Display formatted time */}

      {/* TODO: Display formatted date */}

      {/* TODO: Display hours, minutes, seconds separately */}

      {/* TODO: Display timezone */}
    </div>
  );
}

export default LiveClock;
