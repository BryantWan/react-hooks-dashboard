import { useState } from 'react';

/**
 * Temperature Converter Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage multiple related state values
 * - Perform mathematical conversions
 * - Handle numeric input validation
 * - Synchronize related input fields
 *
 * Instructions:
 * 1. Create state for both Celsius and Fahrenheit values
 * 2. Implement Celsius to Fahrenheit conversion
 * 3. Implement Fahrenheit to Celsius conversion
 * 4. Handle empty input cases
 * 5. Format converted values to 1 decimal place
 */
function TemperatureConverter() {
  // TODO: Create state for Celsius value

  // TODO: Create state for Fahrenheit value

  // TODO: Create handler for Celsius input changes
  // When Celsius changes, calculate and update Fahrenheit
  // Formula: F = (C × 9/5) + 32

  // TODO: Create handler for Fahrenheit input changes
  // When Fahrenheit changes, calculate and update Celsius
  // Formula: C = (F - 32) × 5/9

  // TODO: Create clear function to reset both inputs

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Temperature Converter</h3>

      {/* TODO: Celsius Input */}
      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Celsius (°C)
        </label>
        {/* Add input field */}
      </div>

      {/* Conversion Icon */}
      <div className="text-gray-400">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>

      {/* TODO: Fahrenheit Input */}
      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Fahrenheit (°F)
        </label>
        {/* Add input field */}
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

      {/* TODO: Add Clear Button */}
    </div>
  );
}

export default TemperatureConverter;
