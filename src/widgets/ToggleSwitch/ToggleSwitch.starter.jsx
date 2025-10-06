import { useState } from 'react';

/**
 * Toggle Switch Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Use useState for boolean state
 * - Toggle state between true/false
 * - Conditional rendering based on state
 * - Dynamic CSS classes
 *
 * TODO: Complete the missing parts marked with comments
 */
function ToggleSwitch() {
  // TODO: Initialize state for the toggle (true = ON, false = OFF)
  // Hint: Use useState to create a boolean state variable


  // Event handler to toggle the switch
  const handleToggle = () => {
    // TODO: Toggle the state between true and false
    // Hint: Use the setIsOn function with !isOn to flip the boolean value

  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Status Display */}
      <div className="text-3xl font-bold">
        {/* TODO: Display "Status: ON" in green when isOn is true, "Status: OFF" in gray when false */}
        Status: <span className="text-gray-400">
          OFF
        </span>
      </div>

      {/* Toggle Switch */}
      <button
        onClick={handleToggle}
        className="relative w-20 h-10 rounded-full transition-colors duration-300 bg-gray-300"
      >
        {/* TODO: Change background color to green-500 when ON, gray-300 when OFF */}
        {/* Switch Circle */}
        <div className="absolute top-1 left-1 w-8 h-8 bg-white rounded-full shadow-md transition-transform duration-300">
          {/* TODO: Add 'transform translate-x-10' class when ON to slide the circle */}
        </div>
      </button>

      {/* Additional Visual Feedback */}
      <div className="w-32 h-32 rounded-lg transition-all duration-300 bg-gray-100 border-4 border-gray-300">
        {/* TODO: Change styling based on isOn state */}
        <div className="flex items-center justify-center h-full">
          {/* TODO: Show checkmark icon when ON, X icon when OFF */}
          {false ? (
            <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default ToggleSwitch;
