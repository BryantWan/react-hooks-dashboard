import { useState } from 'react';

/**
 * Temperature Converter Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage multiple related state values
 * - Perform mathematical conversions
 * - Handle numeric input validation
 * - Synchronize related input fields
 *
 * TODO: Complete the missing parts marked with comments
 */
function TemperatureConverter() {
  // TODO: Initialize state for Celsius value (start with empty string)


  // TODO: Initialize state for Fahrenheit value (start with empty string)


  // Handle Celsius input change
  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    // TODO: Update celsius state with the value


    // TODO: Convert Celsius to Fahrenheit and update fahrenheit state
    // Formula: F = (C × 9/5) + 32
    // Hint: Use parseFloat(value) to convert string to number
    // Hint: Use toFixed(1) to round to 1 decimal place
    // If value is empty, set fahrenheit to empty string

  };

  // Handle Fahrenheit input change
  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    // TODO: Update fahrenheit state with the value


    // TODO: Convert Fahrenheit to Celsius and update celsius state
    // Formula: C = (F - 32) × 5/9
    // If value is empty, set celsius to empty string

  };

  // Clear both inputs
  const handleClear = () => {
    // TODO: Reset both celsius and fahrenheit to empty strings


  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Temperature Converter</h3>

      {/* Celsius Input */}
      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Celsius (°C)
        </label>
        {/* TODO: Connect value and onChange to celsius state */}
        <input
          type="number"
          value=""
          onChange={handleCelsiusChange}
          placeholder="Enter temperature in Celsius"
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Conversion Icon */}
      <div className="text-gray-400">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>

      {/* Fahrenheit Input */}
      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Fahrenheit (°F)
        </label>
        {/* TODO: Connect value and onChange to fahrenheit state */}
        <input
          type="number"
          value=""
          onChange={handleFahrenheitChange}
          placeholder="Enter temperature in Fahrenheit"
          className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>

      {/* Common Temperature References */}
      <div className="w-full p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-700 mb-2">Quick Reference:</h4>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div>Water Freezes: 0°C / 32°F</div>
          <div>Room Temp: 20°C / 68°F</div>
          <div>Body Temp: 37°C / 98.6°F</div>
          <div>Water Boils: 100°C / 212°F</div>
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={handleClear}
        className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
      >
        Clear
      </button>
    </div>
  );
}

export default TemperatureConverter;
