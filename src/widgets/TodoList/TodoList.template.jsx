import { useState } from 'react';

/**
 * Todo List Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage complex array state (arrays of objects)
 * - Add, remove, and update items in arrays
 * - Generate unique IDs
 * - Handle form submissions
 * - Toggle boolean properties in array items
 *
 * Instructions:
 * 1. Create state for todos array and input value
 * 2. Implement add todo functionality (prevent empty todos)
 * 3. Implement toggle completion functionality
 * 4. Implement delete todo functionality
 * 5. Calculate and display statistics
 * 6. Handle form submission properly
 */
function TodoList() {
  // TODO: Create state for todos array (array of objects)
  // Each todo should have: { id, text, completed }

  // TODO: Create state for input value

  // TODO: Create function to handle adding a new todo
  // Prevent adding empty todos
  // Generate unique ID (use Date.now())
  // Clear input after adding

  // TODO: Create function to toggle todo completion
  // Use map to update the specific todo

  // TODO: Create function to delete a todo
  // Use filter to remove the todo

  // TODO: Calculate statistics (total, completed, active)

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">My Todo List</h3>

      {/* TODO: Display statistics */}
      <div className="w-full grid grid-cols-3 gap-2 text-center">
        {/* Show total, completed, and active counts */}
      </div>

      {/* TODO: Create add todo form */}
      {/* Handle form submission, prevent default */}
      <form className="w-full flex gap-2">
        {/* Input field */}
        {/* Add button */}
      </form>

      {/* TODO: Display todo list */}
      {/* Show empty state if no todos */}
      {/* Otherwise, map over todos and display each */}
      <div className="w-full space-y-2">
        {/* Todo items here */}
      </div>
    </div>
  );
}

export default TodoList;
