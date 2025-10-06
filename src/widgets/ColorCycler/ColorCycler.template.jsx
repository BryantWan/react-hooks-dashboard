import { useState, useEffect } from 'react';

/**
 * Color Cycler Widget - TEMPLATE VERSION
 *
 * Instructions:
 * 1. Create state for current color index
 * 2. Create state for play/pause
 * 3. Create state for cycle speed
 * 4. Use useEffect to auto-cycle when playing
 * 5. Implement manual navigation (previous/next)
 * 6. Allow clicking color dots to jump to color
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

  // TODO: Create states for currentIndex, isPlaying, speed

  // TODO: Use useEffect to cycle colors when playing

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Color Cycler</h3>

      {/* TODO: Display current color as large square */}

      {/* TODO: Display color name and hex value */}

      {/* TODO: Add Previous, Play/Pause, Next buttons */}

      {/* TODO: Add speed slider */}

      {/* TODO: Add color indicator dots */}
    </div>
  );
}

export default ColorCycler;
