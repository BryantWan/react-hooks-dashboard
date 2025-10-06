import { useState } from 'react';

/**
 * Tab Navigation Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage active tab state
 * - Conditional content rendering
 * - Dynamic tab styling
 * - Create navigation patterns
 *
 * Instructions:
 * 1. Create state for active tab
 * 2. Render tab buttons with click handlers
 * 3. Apply active styling to selected tab
 * 4. Render different content based on active tab
 * 5. Use switch statement or object lookup for content
 */
function TabNavigation() {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
  ];

  // TODO: Create state for active tab (default: 'profile')

  // TODO: Create function to render content based on active tab
  // Use switch statement or object with content for each tab

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Tab Navigation</h3>

      {/* TODO: Create tab buttons */}
      {/* Map over tabs array */}
      {/* Apply active styling to selected tab */}
      <div className="w-full flex border-b-2 border-gray-200">
        {/* Tab buttons here */}
      </div>

      {/* TODO: Render content for active tab */}
      <div className="w-full p-6 bg-white rounded-b-lg">
        {/* Tab content here */}
      </div>
    </div>
  );
}

export default TabNavigation;
