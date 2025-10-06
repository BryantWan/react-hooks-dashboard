import { useState } from 'react';

/**
 * Character Counter Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Handle text input with useState
 * - Use controlled components
 * - Calculate derived values from state
 * - Display real-time feedback
 *
 * TODO: Complete the missing parts marked with comments
 */
function CharacterCounter() {
  const MAX_CHARS = 100;

  // TODO: Initialize state for the text input
  // Hint: Start with an empty string


  // Event handler for text input changes
  const handleTextChange = (event) => {
    // TODO: Update the text state with the input value from event.target.value

  };

  // TODO: Calculate character count from text.length
  const charCount = 0;

  // TODO: Calculate remaining characters (MAX_CHARS - charCount)
  const remaining = MAX_CHARS;

  // TODO: Determine if near limit (remaining <= 20)
  const isNearLimit = false;

  // TODO: Determine if over limit (remaining < 0)
  const isOverLimit = false;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">Character Counter</h3>

      {/* Text Input */}
      {/* TODO: Set value to text state and onChange to handleTextChange */}
      <textarea
        value=""
        onChange={handleTextChange}
        placeholder="Start typing..."
        className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none"
      />

      {/* Character Count Display */}
      <div className="w-full space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Characters:</span>
          <span className={`text-xl font-bold ${
            isOverLimit ? 'text-red-600' : isNearLimit ? 'text-yellow-600' : 'text-green-600'
          }`}>
            {charCount} / {MAX_CHARS}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              isOverLimit ? 'bg-red-500' : isNearLimit ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${Math.min((charCount / MAX_CHARS) * 100, 100)}%` }}
          />
        </div>

        {/* Remaining Characters */}
        <div className="text-center">
          {remaining >= 0 ? (
            <p className={`text-sm ${isNearLimit ? 'text-yellow-600 font-semibold' : 'text-gray-500'}`}>
              {remaining} characters remaining
            </p>
          ) : (
            <p className="text-sm text-red-600 font-semibold">
              {Math.abs(remaining)} characters over limit!
            </p>
          )}
        </div>
      </div>

      {/* Clear Button */}
      {/* TODO: Add onClick handler to clear the text (set to empty string) */}
      <button
        onClick={() => {}}
        className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
      >
        Clear
      </button>
    </div>
  );
}

export default CharacterCounter;
