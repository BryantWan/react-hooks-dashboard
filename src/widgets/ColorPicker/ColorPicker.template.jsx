import { useState } from 'react';

/**
 * Color Picker Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage state for user selections
 * - Handle multiple similar event handlers
 * - Use state to control visual appearance
 * - Work with template literals for dynamic values
 *
 * Instructions:
 * 1. Create state to store the currently selected color
 * 2. Implement color selection handler
 * 3. Display the selected color name and value
 * 4. Show a preview box with the selected color
 * 5. Create clickable color buttons
 */
function ColorPicker() {
  // Available colors to choose from
  const colors = [
    { name: 'Red', value: '#EF4444', bg: 'bg-red-500' },
    { name: 'Blue', value: '#3B82F6', bg: 'bg-blue-500' },
    { name: 'Green', value: '#10B981', bg: 'bg-green-500' },
    { name: 'Purple', value: '#8B5CF6', bg: 'bg-purple-500' },
    { name: 'Yellow', value: '#F59E0B', bg: 'bg-yellow-500' },
  ];

  // TODO: Create state for selected color (initialize with first color)

  // TODO: Create function to handle color selection

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* TODO: Display selected color name and hex value */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-700">Selected Color</h3>
        {/* Show color name and value */}
      </div>

      {/* TODO: Create color preview box */}
      {/* Use inline styles to set background color */}
      <div className="w-48 h-48 rounded-lg shadow-lg">
      </div>

      {/* TODO: Create clickable color buttons */}
      {/* Map over colors array and create buttons */}
      <div className="flex gap-3">
        {/* Render color buttons here */}
      </div>

      {/* Instructions */}
      <div className="text-center">
        <p className="text-gray-600">Click a color to select it</p>
      </div>
    </div>
  );
}

export default ColorPicker;
