import { useState, useEffect } from 'react';

/**
 * Color Cycler Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Use useEffect to cycle through values
 * - Manage auto-play state
 * - Update state based on previous state
 */
function ColorCycler() {
  const colors = [
    { name: 'Red', value: '#EF4444' },
    { name: 'Orange', value: '#F97316' },
    { name: 'Yellow', value: '#EAB308' },
    { name: 'Green', value: '#22C55E' },
    { name: 'Blue', value: '#3B82F6' },
    { name: 'Purple', value: '#A855F7' },
    { name: 'Pink', value: '#EC4899' },
  ];

  // TODO: Initialize state for currentIndex (starts at 0)


  // TODO: Initialize state for isPlaying (starts false)


  // TODO: Initialize state for speed in milliseconds (starts at 1000)


  // TODO: Set up useEffect to cycle colors when playing
  useEffect(() => {
    // TODO: If not playing, return early (exit the effect)


    // TODO: Create setInterval to increment currentIndex
    // Hint: Use (prevIndex + 1) % colors.length to wrap around


    // TODO: Return cleanup function to clear interval
    return () => {

    };
  }, []); // TODO: Add dependencies: isPlaying, speed, colors.length

  // TODO: Get current color from colors array using currentIndex
  const currentColor = colors[0];

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Color Cycler</h3>

      {/* Color Display */}
      <div
        className="w-64 h-64 rounded-lg shadow-lg transition-colors duration-500"
        style={{ backgroundColor: currentColor.value }}
      />

      {/* Color Info */}
      <div className="text-center">
        <div className="text-3xl font-bold" style={{ color: currentColor.value }}>
          {currentColor.name}
        </div>
        <div className="text-gray-600">{currentColor.value}</div>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + colors.length) % colors.length)}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Previous
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`px-6 py-2 ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white rounded-lg`}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % colors.length)}
          className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          Next →
        </button>
      </div>

      {/* Speed Control */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Speed: {speed}ms
        </label>
        <input
          type="range"
          min="200"
          max="3000"
          step="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Fast (200ms)</span>
          <span>Slow (3000ms)</span>
        </div>
      </div>

      {/* Color Indicators */}
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => setCurrentIndex(index)}
            className={`w-8 h-8 rounded-full border-2 ${
              index === currentIndex ? 'border-gray-800 scale-125' : 'border-gray-300'
            } transition-transform`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorCycler;
