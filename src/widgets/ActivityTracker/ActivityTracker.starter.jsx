import { useState, useEffect } from 'react';

/**
 * Activity Tracker Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Track user activity with multiple event listeners
 * - Implement idle detection with intervals
 * - Clean up multiple event listeners
 * - Calculate time differences
 *
 * TODO: Complete the missing parts marked with comments
 */
function ActivityTracker() {
  // TODO: Initialize state for lastActivity (starts with Date.now())


  // TODO: Initialize state for isIdle (starts false)


  const IDLE_TIMEOUT = 5000; // 5 seconds

  // TODO: Set up useEffect to track activity and check for idle state
  useEffect(() => {
    // TODO: Create handleActivity function that:
    //   - Updates lastActivity to Date.now()
    //   - Sets isIdle to false
    const handleActivity = () => {


    };

    // TODO: Add event listeners for 'mousemove', 'keypress', and 'click'




    // TODO: Create interval that checks every 1000ms if user is idle
    // If (Date.now() - lastActivity) > IDLE_TIMEOUT, set isIdle to true


    // TODO: Return cleanup function that:
    //   - Removes all event listeners
    //   - Clears the interval
    return () => {




    };
  }, []); // TODO: Add lastActivity as dependency

  // TODO: Calculate time since last activity in seconds
  const timeSinceActivity = 0;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Activity Tracker</h3>

      <div className={`w-full p-8 rounded-lg ${isIdle ? 'bg-red-100' : 'bg-green-100'}`}>
        <div className="text-center">
          <div className="text-6xl mb-4">{isIdle ? '😴' : '👁️'}</div>
          <div className="text-2xl font-bold">
            {isIdle ? 'Idle' : 'Active'}
          </div>
          <div className="text-gray-600 mt-2">
            Last activity: {timeSinceActivity}s ago
          </div>
        </div>
      </div>

      <div className="w-full p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-blue-800">
          Move your mouse, click, or press a key to reset the idle timer.
          You'll be marked as idle after 5 seconds of inactivity.
        </p>
      </div>
    </div>
  );
}

export default ActivityTracker;
