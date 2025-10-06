import { useState, useEffect } from 'react';

/**
 * Countdown Timer Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Use useEffect with setInterval
 * - Clean up intervals with return function
 * - Manage timer state
 * - Conditional interval running
 *
 * Instructions:
 * 1. Create state for seconds and isRunning
 * 2. Use useEffect to create interval when running
 * 3. Decrement seconds every second
 * 4. Stop when reaching 0
 * 5. Clean up interval in useEffect return
 * 6. Implement start, pause, reset functions
 * 7. Format time as MM:SS
 */
function CountdownTimer() {
  // TODO: Create state for seconds (default 60)

  // TODO: Create state for isRunning (default false)

  // TODO: Use useEffect to manage interval
  // Only run interval when isRunning is true
  // Decrement seconds every 1000ms
  // Stop when seconds reaches 0
  // Clean up interval on unmount or when dependencies change

  // TODO: Create start function (set isRunning to true)

  // TODO: Create pause function (set isRunning to false)

  // TODO: Create reset function (stop timer, reset to 60)

  // TODO: Create function to format seconds as MM:SS

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Countdown Timer</h3>

      {/* TODO: Display formatted time */}
      {/* Show different colors based on remaining time */}

      {/* TODO: Add Start/Pause button */}
      {/* Show Start when paused, Pause when running */}

      {/* TODO: Add Reset button */}

      {/* TODO: Add quick set buttons (30s, 1m, 2m, 5m) */}
    </div>
  );
}

export default CountdownTimer;
