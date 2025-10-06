import { useState, useEffect } from 'react';

/**
 * Live Clock Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Use useEffect with empty dependency array
 * - Update state at regular intervals
 * - Work with Date objects
 * - Clean up intervals properly
 */
function LiveClock() {
  // TODO: Initialize state with current time using new Date()


  // TODO: Set up useEffect to update time every second
  useEffect(() => {
    // TODO: Create setInterval that updates time to new Date() every 1000ms


    // TODO: Return cleanup function that clears the interval
    return () => {

    };
  }, []); // Empty dependency array - runs once on mount

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getGreeting = () => {
    const hour = time.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Live Clock</h3>

      {/* Greeting */}
      <div className="text-xl text-gray-600">
        {getGreeting()}
      </div>

      {/* Time Display */}
      <div className="text-7xl font-bold text-blue-600 font-mono">
        {formatTime(time)}
      </div>

      {/* Date Display */}
      <div className="text-xl text-gray-700">
        {formatDate(time)}
      </div>

      {/* Additional Time Info */}
      <div className="w-full grid grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl font-bold text-blue-600">
            {time.getHours().toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">Hours</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">
            {time.getMinutes().toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">Minutes</div>
        </div>
        <div className="p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">
            {time.getSeconds().toString().padStart(2, '0')}
          </div>
          <div className="text-sm text-gray-600">Seconds</div>
        </div>
      </div>

      {/* Timezone */}
      <div className="text-sm text-gray-500">
        Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
      </div>
    </div>
  );
}

export default LiveClock;
