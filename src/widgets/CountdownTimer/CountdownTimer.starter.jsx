import { useState, useEffect } from 'react';

/**
 * Countdown Timer Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Use useEffect with setInterval
 * - Clean up intervals with return function
 * - Manage timer state
 * - Conditional interval running
 *
 * TODO: Complete the missing parts marked with comments
 */
function CountdownTimer() {
  // TODO: Initialize state for seconds (start with 60)


  // TODO: Initialize state for isRunning (start with false)


  // TODO: Use useEffect to create interval when timer is running
  useEffect(() => {
    // TODO: Create a variable for the interval
    let interval = null;

    // TODO: If isRunning is true AND seconds > 0:
    //   - Create setInterval that decrements seconds by 1 every 1000ms
    //   - Hint: Use setSeconds with prevSeconds => prevSeconds - 1


    // TODO: If seconds === 0, stop the timer (setIsRunning(false))


    // TODO: Clean up interval when component unmounts or dependencies change
    // Hint: Return a cleanup function that calls clearInterval(interval)
    return () => {

    };
  }, []); // TODO: Add dependencies: isRunning, seconds

  const handleStart = () => {
    // TODO: Set isRunning to true (only if seconds > 0)

  };

  const handlePause = () => {
    // TODO: Set isRunning to false

  };

  const handleReset = () => {
    // TODO: Stop timer and reset seconds to 60


  };

  const handleSetTime = (newSeconds) => {
    // TODO: Stop timer and set seconds to newSeconds


  };

  // Format seconds as MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // TODO: Calculate progress percentage (seconds / 60 * 100)
  const progress = 100;

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Countdown Timer</h3>

      {/* Timer Display */}
      <div className="relative w-64 h-64">
        {/* Progress Circle */}
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke={seconds === 0 ? '#ef4444' : seconds <= 10 ? '#f59e0b' : '#3b82f6'}
            strokeWidth="8"
            fill="none"
            strokeDasharray={`${2 * Math.PI * 120}`}
            strokeDashoffset={`${2 * Math.PI * 120 * (1 - progress / 100)}`}
            className="transition-all duration-1000"
          />
        </svg>

        {/* Time Display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-6xl font-bold ${
              seconds === 0 ? 'text-red-600' : seconds <= 10 ? 'text-yellow-600' : 'text-blue-600'
            }`}>
              {formatTime(seconds)}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {seconds === 0 ? 'Time\'s up!' : isRunning ? 'Running...' : 'Paused'}
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        {!isRunning ? (
          <button
            onClick={handleStart}
            disabled={seconds === 0}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Quick Set Buttons */}
      <div className="w-full">
        <p className="text-sm text-gray-600 mb-2">Quick set:</p>
        <div className="flex gap-2">
          <button
            onClick={() => handleSetTime(30)}
            className="flex-1 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            30s
          </button>
          <button
            onClick={() => handleSetTime(60)}
            className="flex-1 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            1m
          </button>
          <button
            onClick={() => handleSetTime(120)}
            className="flex-1 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            2m
          </button>
          <button
            onClick={() => handleSetTime(300)}
            className="flex-1 px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg transition-colors"
          >
            5m
          </button>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
