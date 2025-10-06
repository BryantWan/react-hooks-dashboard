import { useState } from 'react';

/**
 * Tag Selector Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage array state with useState
 * - Add/remove items from arrays
 * - Work with checkboxes
 * - Filter and map arrays
 *
 * TODO: Complete the missing parts marked with comments
 */
function TagSelector() {
  const availableTags = [
    { id: 1, name: 'JavaScript', color: 'bg-yellow-500' },
    { id: 2, name: 'React', color: 'bg-blue-500' },
    { id: 3, name: 'CSS', color: 'bg-pink-500' },
    { id: 4, name: 'HTML', color: 'bg-orange-500' },
    { id: 5, name: 'Node.js', color: 'bg-green-500' },
    { id: 6, name: 'TypeScript', color: 'bg-blue-600' },
  ];

  // TODO: Initialize state for selected tag IDs (empty array of numbers)
  // Hint: Use useState with an empty array []


  // Handle tag selection/deselection
  const handleTagToggle = (tagId) => {
    // TODO: Toggle tag selection
    // If tag is already selected (use .includes()), remove it (use .filter())
    // Otherwise, add it to the array (use spread operator [...selectedTags, tagId])


  };

  // Clear all selections
  const handleClearAll = () => {
    // TODO: Reset selectedTags to an empty array

  };

  // Get selected tag objects
  // TODO: Filter availableTags to only include tags whose id is in selectedTags array
  const selectedTagObjects = [];

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Select Your Tags</h3>

      {/* Tag Selection Area */}
      <div className="w-full grid grid-cols-2 gap-4">
        {availableTags.map((tag) => {
          // TODO: Determine if this tag is selected by checking if tag.id is in selectedTags array
          const isSelected = false;

          return (
            <label
              key={tag.id}
              className={`flex items-center space-x-3 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                isSelected
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleTagToggle(tag.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${tag.color}`} />
                <span className="font-medium text-gray-700">{tag.name}</span>
              </div>
            </label>
          );
        })}
      </div>

      {/* Selected Tags Display */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-700">
            Selected Tags ({selectedTags.length})
          </h4>
          {selectedTags.length > 0 && (
            <button
              onClick={handleClearAll}
              className="text-sm text-red-600 hover:text-red-700 font-medium"
            >
              Clear All
            </button>
          )}
        </div>

        {selectedTags.length === 0 ? (
          <div className="p-8 text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
            No tags selected
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg min-h-[60px]">
            {selectedTagObjects.map((tag) => (
              <span
                key={tag.id}
                className={`inline-flex items-center px-3 py-1 rounded-full text-white ${tag.color}`}
              >
                {tag.name}
                <button
                  onClick={() => handleTagToggle(tag.id)}
                  className="ml-2 hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                >
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TagSelector;
