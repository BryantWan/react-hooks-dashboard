import { useState } from 'react';

/**
 * Toggle Switch Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Use useState for boolean state
 * - Toggle state between true/false
 * - Conditional rendering based on state
 * - Dynamic CSS classes
 *
 * Instructions:
 * 1. Create state to track whether the switch is ON or OFF
 * 2. Implement a function to toggle the state
 * 3. Apply conditional styling based on state
 * 4. Display the current status
 */
function ToggleSwitch() {
  // TODO: Create state variable for toggle status (boolean)

  // TODO: Create a function to toggle the state

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* TODO: Display current status (ON or OFF) */}
      <div className="text-3xl font-bold">
        Status: <span>
          {/* Show ON or OFF based on state */}
        </span>
      </div>

      {/* TODO: Create toggle switch button */}
      {/* Apply green background when ON, gray when OFF */}
      <button className="relative w-20 h-10 rounded-full">
        {/* TODO: Create the switch circle that moves left/right */}
        <div className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md">
        </div>
      </button>

      {/* TODO: Add visual feedback area */}
      {/* Change color/appearance based on toggle state */}
      <div className="w-32 h-32 rounded-lg">
        {/* Optional: Add icons or other visual elements */}
      </div>
    </div>
  );
}

export default ToggleSwitch;
