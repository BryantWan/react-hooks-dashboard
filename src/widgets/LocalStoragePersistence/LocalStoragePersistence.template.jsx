import { useState, useEffect } from 'react';

/**
 * Local Storage Persistence Widget - TEMPLATE VERSION
 *
 * Instructions:
 * 1. Initialize state with values from localStorage
 * 2. Use useEffect to save state changes to localStorage
 * 3. Implement clear functionality
 * 4. Handle JSON parse/stringify for complex data
 */
function LocalStoragePersistence() {
  // TODO: Initialize states with localStorage values
  // Use lazy initialization: useState(() => { return localStorage... })

  // TODO: Use useEffect to save notes to localStorage when it changes

  // TODO: Use useEffect to save favoriteColor to localStorage

  // TODO: Use useEffect to increment and save visit count (empty deps)

  // TODO: Create clear function to remove all from localStorage

  return (
    <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">LocalStorage Persistence</h3>

      {/* TODO: Add visit count display */}
      {/* TODO: Add notes textarea */}
      {/* TODO: Add favorite color selector */}
      {/* TODO: Add clear all button */}
    </div>
  );
}

export default LocalStoragePersistence;
