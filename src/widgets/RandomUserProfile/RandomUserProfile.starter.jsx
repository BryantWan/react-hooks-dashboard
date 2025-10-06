import { useState, useEffect } from 'react';
import { mockUserApi } from '../../utils/mockApi';

/**
 * Random User Profile Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Fetch data from API on mount and on button click
 * - Handle async operations with loading states
 * - Display fetched data conditionally
 *
 * TODO: Complete the missing parts marked with comments
 */
function RandomUserProfile() {
  // TODO: Initialize state for user (starts null)


  // TODO: Initialize state for loading (starts false)


  const fetchUser = async () => {
    // TODO: Set loading to true


    try {
      // TODO: Fetch user from mockUserApi.getRandomUser()


      // TODO: Set user state with fetched data

    } catch (error) {
      console.error('Error:', error);
    } finally {
      // TODO: Set loading to false

    }
  };

  // TODO: Use useEffect to fetch user on mount
  useEffect(() => {


  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Random User Profile</h3>

      {/* TODO: Only show user card if user data exists */}
      {false && (
        <div className="w-full p-6 bg-white border-2 border-gray-300 rounded-lg">
          <img src={user.avatar} alt={user.firstName} className="w-24 h-24 rounded-full mx-auto mb-4" />
          <h4 className="text-2xl font-bold text-center">{user.firstName} {user.lastName}</h4>
          <p className="text-gray-600 text-center">{user.email}</p>
          <div className="mt-4 space-y-2">
            <div><strong>Age:</strong> {user.age}</div>
            <div><strong>City:</strong> {user.city}</div>
          </div>
        </div>
      )}

      <button
        onClick={fetchUser}
        disabled={loading}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg"
      >
        {loading ? 'Loading...' : 'Get New User'}
      </button>
    </div>
  );
}

export default RandomUserProfile;
