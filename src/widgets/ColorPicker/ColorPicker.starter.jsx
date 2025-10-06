import { useState } from 'react';

/**
 * Color Picker Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage state for user selections
 * - Handle multiple similar event handlers
 * - Use state to control visual appearance
 * - Work with template literals for dynamic values
 *
 * TODO: Complete the missing parts marked with comments
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

  // TODO: Initialize state for selected color
  // Hint: Start with the first color in the colors array (colors[0])
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Event handler for color selection
  const handleColorSelect = (color) => {
    // TODO: Update the selected color state with the clicked color
    setSelectedColor(color);
    console.log('Selected color:', color);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-gray-700">Selected Color</h3>
          
        
        <div className="text-2xl font-bold text-gray-500">
          Color Name:
        </div>
        {/* Display Selected Color */
          selectedColor.name
          }
        
        <div className="text-sm text-gray-500">#HEXCODE:</div>
        {/* TODO: Display the selected color name and value */
          selectedColor.value
        }
      </div>

      {/* Color Preview Box */

      }
      {/* TODO: Set backgroundColor style to selectedColor.value */}
      <div
        className="w-48 h-48 rounded-lg shadow-lg transition-all duration-300"
        style={{ backgroundColor: selectedColor.value }}
      />

      {/* Color Options */}
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color)}
            className={`w-16 h-16 rounded-lg ${color.bg} transition-transform hover:scale-110`}
            title={color.name}
          >
            {/* TODO: Add conditional styling - if this color is selected, add 'ring-4 ring-gray-800 scale-110' classes */}
          </button>
        ))}
      </div>

      {/* Color Name Display */}
      <div className="text-center">
        <p className="text-gray-600">Click a color to select it</p>
      </div>
    </div>
  );
}

export default ColorPicker;
