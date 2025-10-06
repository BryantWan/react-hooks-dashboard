import { useState } from 'react';

/**
 * Todo List Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage complex array state (arrays of objects)
 * - Add, remove, and update items in arrays
 * - Generate unique IDs
 * - Handle form submissions
 * - Toggle boolean properties in array items
 *
 * TODO: Complete the missing parts marked with comments
 */
function TodoList() {
  // TODO: Initialize state for todos (array of objects)
  // Each todo should have: { id, text, completed }
  // Hint: Start with an empty array


  // TODO: Initialize state for input value
  // Hint: Start with an empty string


  // Handle adding a new todo
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    // TODO: Create a new todo object with:
    // - id: Use Date.now() for a unique ID
    // - text: The inputValue
    // - completed: false


    // TODO: Add the new todo to the todos array
    // Hint: Use spread operator [...todos, newTodo]
    // TODO: Clear the input by setting inputValue to empty string

  };

  // Handle toggling todo completion
  const handleToggleTodo = (id) => {
    // TODO: Map through todos array
    // For the todo matching the id, toggle its completed status
    // Hint: Use map and check if todo.id === id, then spread todo and flip completed
    // Return todos unchanged for non-matching items

  };

  // Handle deleting a todo
  const handleDeleteTodo = (id) => {
    // TODO: Filter out the todo with the given id
    // Hint: Use filter to keep only todos where todo.id !== id

  };

  // TODO: Calculate statistics
  const totalTodos = 0; // Should be todos.length
  const completedTodos = 0; // Should be todos filtered by completed === true
  const activeTodos = 0; // Should be totalTodos - completedTodos

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      {/* Header */}
      <h3 className="text-2xl font-bold text-gray-800">My Todo List</h3>

      {/* Statistics */}
      <div className="w-full grid grid-cols-3 gap-2 text-center">
        <div className="p-2 bg-blue-50 rounded">
          <div className="text-2xl font-bold text-blue-600">{totalTodos}</div>
          <div className="text-xs text-gray-600">Total</div>
        </div>
        <div className="p-2 bg-green-50 rounded">
          <div className="text-2xl font-bold text-green-600">{completedTodos}</div>
          <div className="text-xs text-gray-600">Completed</div>
        </div>
        <div className="p-2 bg-yellow-50 rounded">
          <div className="text-2xl font-bold text-yellow-600">{activeTodos}</div>
          <div className="text-xs text-gray-600">Active</div>
        </div>
      </div>

      {/* Add Todo Form */}
      <form onSubmit={handleAddTodo} className="w-full flex gap-2">
        {/* TODO: Connect input to inputValue state and onChange handler */}
        <input
          type="text"
          value=""
          onChange={(e) => {}}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          Add
        </button>
      </form>

      {/* Todo List */}
      <div className="w-full space-y-2">
        {/* TODO: Check if todos array is empty (length === 0) */}
        {false ? (
          <div className="p-8 text-center text-gray-400 border-2 border-dashed border-gray-300 rounded-lg">
            No todos yet. Add one above!
          </div>
        ) : (
          /* TODO: Map through todos array to render each todo */
          [].map((todo) => (
            <div
              key={todo.id}
              className={`flex items-center gap-3 p-3 border-2 rounded-lg transition-all ${
                todo.completed
                  ? 'bg-gray-50 border-gray-200'
                  : 'bg-white border-gray-300'
              }`}
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />

              {/* Todo Text */}
              <span
                className={`flex-1 ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-700'
                }`}
              >
                {todo.text}
              </span>

              {/* Delete Button */}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
