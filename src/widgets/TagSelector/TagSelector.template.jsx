import { useState } from 'react';

/**
 * Tag Selector Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage array state with useState
 * - Add/remove items from arrays
 * - Work with checkboxes
 * - Filter and map arrays
 *
 * Instructions:
 * 1. Create state to store selected tag IDs (array)
 * 2. Implement toggle function to add/remove tags
 * 3. Display checkboxes for all available tags
 * 4. Show selected tags as colored badges
 * 5. Implement clear all functionality
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

  // TODO: Create state for selected tag IDs (array of numbers)

  // TODO: Create function to toggle tag selection
  // If tag is selected, remove it from array
  // If tag is not selected, add it to array

  // TODO: Create function to clear all selections

  // TODO: Filter availableTags to get only selected tags

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Select Your Tags</h3>

      {/* TODO: Create tag selection checkboxes */}
      {/* Map over availableTags and create checkbox for each */}
      <div className="w-full grid grid-cols-2 gap-4">
        {/* Render checkboxes here */}
      </div>

      {/* TODO: Display selected tags */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-700">
            Selected Tags ({/* Show count */})
          </h4>
          {/* Add Clear All button */}
        </div>

        {/* TODO: Show selected tags as colored badges */}
        {/* If no tags selected, show empty state */}
        {/* If tags selected, show them as removable badges */}
      </div>
    </div>
  );
}

export default TagSelector;
