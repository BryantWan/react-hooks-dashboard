import { useState, useEffect } from 'react';

/**
 * Notification Center Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage notifications array state
 * - Auto-remove notifications after timeout
 * - Work with setTimeout for timed actions
 * - Add/remove items from arrays dynamically
 *
 * TODO: Complete the missing parts marked with comments
 */
function NotificationCenter() {
  // TODO: Initialize state for notifications (starts empty array)


  const addNotification = (message, type = 'info') => {
    // TODO: Create unique id using Date.now()


    // TODO: Add new notification to array
    // Include: id, message, type


    // TODO: Set timeout to remove this notification after 5000ms
    // Filter out notification with matching id

  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Notification Center</h3>

      <div className="flex gap-2">
        <button
          onClick={() => addNotification('Info notification', 'info')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Info
        </button>
        <button
          onClick={() => addNotification('Success notification', 'success')}
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Success
        </button>
        <button
          onClick={() => addNotification('Warning notification', 'warning')}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
        >
          Warning
        </button>
        <button
          onClick={() => addNotification('Error notification', 'error')}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Error
        </button>
      </div>

      <div className="fixed top-4 right-4 space-y-2 z-50">
        {/* TODO: Map through notifications array */}
        {[].map(notif => (
          <div
            key={notif.id}
            className={`p-4 rounded-lg shadow-lg text-white ${
              notif.type === 'success' ? 'bg-green-500' :
              notif.type === 'warning' ? 'bg-yellow-500' :
              notif.type === 'error' ? 'bg-red-500' :
              'bg-blue-500'
            }`}
          >
            {notif.message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NotificationCenter;
