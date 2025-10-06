import { useState, useEffect } from 'react';

/**
 * Auto-Save Form Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Implement debouncing with useEffect
 * - Auto-save form data after user stops typing
 * - Display save status feedback
 */
function AutoSaveForm() {
  // TODO: Initialize formData state (object with title and content, both empty strings)


  // TODO: Initialize saveStatus state (empty string)


  // TODO: Set up useEffect to auto-save formData after 1 second of no changes (debouncing)
  useEffect(() => {
    // TODO: Return early if both title and content are empty


    // TODO: Set saveStatus to 'Saving...'


    // TODO: Create timeout that:
    //   - Saves formData to localStorage as JSON after 1000ms
    //   - Sets saveStatus to 'Saved!'
    //   - Clears saveStatus after 2000ms


    // TODO: Return cleanup function to clear the timeout
    return () => {

    };
  }, []); // TODO: Add formData as dependency

  // TODO: Set up useEffect to load saved data on mount (runs once)
  useEffect(() => {
    // Load from localStorage and parse JSON
    // Set formData if data exists


  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-2xl font-bold text-gray-800">Auto-Save Form</h3>
        {saveStatus && (
          <span className="text-sm text-green-600 font-medium">{saveStatus}</span>
        )}
      </div>

      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Title"
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
      />

      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Content"
        className="w-full h-48 p-4 border-2 border-gray-300 rounded-lg"
      />
    </div>
  );
}

export default AutoSaveForm;
