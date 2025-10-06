import { useState, useEffect } from 'react';

/**
 * Local Storage Persistence Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Use useEffect to sync state with localStorage
 * - Load initial state from localStorage
 * - Save state changes to localStorage
 * - Handle JSON parsing/stringifying
 */
function LocalStoragePersistence() {
  // TODO: Initialize notes state with lazy initialization
  // Load from localStorage.getItem('notes'), parse JSON, or default to ''
  const [notes, setNotes] = useState(() => {


  });

  // TODO: Initialize favoriteColor state with lazy initialization
  // Load from localStorage.getItem('favoriteColor') or default to 'blue'
  const [favoriteColor, setFavoriteColor] = useState(() => {


  });

  // TODO: Initialize visitCount state with lazy initialization
  // Load from localStorage.getItem('visitCount'), parse as int, or default to 0
  const [visitCount, setVisitCount] = useState(() => {


  });

  // TODO: Create useEffect to save notes to localStorage whenever it changes
  useEffect(() => {
    // Save notes as JSON string to localStorage

  }, []); // TODO: Add notes as dependency

  // TODO: Create useEffect to save favoriteColor to localStorage whenever it changes
  useEffect(() => {


  }, []); // TODO: Add favoriteColor as dependency

  // TODO: Create useEffect to increment visitCount on mount only
  useEffect(() => {
    // Increment visitCount and save to localStorage
    // Hint: Use setVisitCount with prev => prev + 1


  }, []); // Empty array - runs once on mount

  const handleClearAll = () => {
    if (window.confirm('Clear all saved data?')) {
      // TODO: Remove all items from localStorage
      // TODO: Reset all state values to defaults



    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">LocalStorage Persistence</h3>

      <div className="w-full p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          Your data is automatically saved and persists across page reloads!
        </p>
      </div>

      <div className="w-full p-4 bg-green-50 rounded-lg">
        <p className="text-lg font-semibold text-green-800">
          Visit Count: {visitCount}
        </p>
        <p className="text-sm text-green-600">Incremented on each component mount</p>
      </div>

      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Your Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Write your notes here..."
          className="w-full h-32 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <p className="text-xs text-gray-500">Auto-saved to localStorage</p>
      </div>

      <div className="w-full space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Favorite Color
        </label>
        <select
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        >
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="orange">Orange</option>
        </select>
        <div
          className="w-full h-12 rounded-lg"
          style={{ backgroundColor: favoriteColor }}
        />
      </div>

      <button
        onClick={handleClearAll}
        className="w-full px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg"
      >
        Clear All Saved Data
      </button>
    </div>
  );
}

export default LocalStoragePersistence;
