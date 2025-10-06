import { useState, useEffect } from 'react';
import { mockSearchApi } from '../../utils/mockApi';

/**
 * Live Search Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Implement debounced search with useEffect
 * - Handle async search operations
 * - Manage search query and results state
 * - Clean up timeouts properly
 *
 * TODO: Complete the missing parts marked with comments
 */
function LiveSearch() {
  // TODO: Initialize state for query (starts empty string)


  // TODO: Initialize state for results (starts empty array)


  // TODO: Initialize state for loading (starts false)


  // TODO: Set up useEffect to search when query changes (with debouncing)
  useEffect(() => {
    // TODO: If query is empty, clear results and return


    // TODO: Set loading to true


    // TODO: Create timeout to search after 300ms delay
    const timeout = setTimeout(async () => {
      // Call mockSearchApi.search(query)
      // Set results with fetched data
      // Set loading to false

    }, 300);

    // TODO: Return cleanup function to clear timeout
    return () => {

    };
  }, []); // TODO: Add query as dependency

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Live Search</h3>

      {/* TODO: Connect input to query state */}
      <input
        type="text"
        value=""
        onChange={(e) => {}}
        placeholder="Search fruits..."
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg"
      />

      {/* TODO: Show loading indicator when loading is true */}
      {false && <div className="text-gray-500">Searching...</div>}

      <div className="w-full space-y-2">
        {/* TODO: Map through results array */}
        {[].map(item => (
          <div key={item.id} className="p-3 bg-gray-50 rounded-lg">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveSearch;
