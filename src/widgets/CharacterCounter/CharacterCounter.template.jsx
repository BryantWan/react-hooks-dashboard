import { useState } from 'react';

/**
 * Character Counter Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Handle text input with useState
 * - Use controlled components
 * - Calculate derived values from state
 * - Display real-time feedback
 *
 * Instructions:
 * 1. Create state to store the user's text input
 * 2. Implement onChange handler for the textarea
 * 3. Calculate character count and remaining characters
 * 4. Display visual feedback based on character count
 * 5. Implement clear functionality
 */
function CharacterCounter() {
  const MAX_CHARS = 100;

  // TODO: Create state for text input

  // TODO: Create function to handle text changes

  // TODO: Calculate character count and remaining characters

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Character Counter</h3>

      {/* TODO: Create textarea input */}
      {/* Make it a controlled component using value and onChange */}
      <textarea
        placeholder="Start typing..."
        className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
      />

      {/* TODO: Display character count */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Characters:</span>
          {/* Show current count / max */}
        </div>

        {/* TODO: Add progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          {/* Progress bar fill based on character count */}
        </div>

        {/* TODO: Show remaining characters or over-limit message */}
        <div className="text-center">
          {/* Display appropriate message */}
        </div>
      </div>

      {/* TODO: Add clear button */}
      <button className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors">
        Clear
      </button>
    </div>
  );
}

export default CharacterCounter;
