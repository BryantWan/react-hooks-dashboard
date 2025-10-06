import { useState } from 'react';

/**
 * Simple Counter Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Understand useState hook basics
 * - Learn state initialization
 * - Handle state updates with setter functions
 *
 * TODO: Complete the missing parts marked with comments
 */
function SimpleCounter() {
  // TODO: Initialize state with useState
  // Create a state variable called 'count' with initial value of 0
  // Hint: const [count, setCount] = useState(0);

  const [count, setCount] = useState(0);
  // Event handler for increment
  const handleIncrement = () => {
    // TODO: Increment the count by 1
    // Hint: Use setCount to update the count
    setCount(count + 1);
    console.log(count + 1);
  };

  // Event handler for decrement
  const handleDecrement = () => {
    // TODO: Decrement the count by 1
    setCount(count - 1);
    console.log(count - 1);
  };

  // Event handler for reset
  const handleReset = () => {
    // TODO: Reset count to 0
    setCount(0);
    console.log(0);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="text-6xl font-bold text-primary-600">
        {count}
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleDecrement}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>

        <button
          onClick={handleIncrement}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SimpleCounter;
