import { useState } from 'react';

/**
 * Tab Navigation Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage active tab state
 * - Conditional content rendering
 * - Dynamic tab styling
 * - Create navigation patterns
 */
function TabNavigation() {
  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'messages', label: 'Messages', icon: '💬' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
  ];

  // TODO: Initialize state for activeTab (start with 'profile')


  const renderTabContent = () => {
    // TODO: Use activeTab to determine which content to show
    switch ('profile') {
      case 'profile':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Profile Information</h3>
            <div className="space-y-2">
              <div className="flex">
                <span className="font-semibold w-32">Name:</span>
                <span>John Doe</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Email:</span>
                <span>john.doe@example.com</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Role:</span>
                <span>Developer</span>
              </div>
              <div className="flex">
                <span className="font-semibold w-32">Location:</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        );

      case 'settings':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Settings</h3>
            <div className="space-y-3">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span>Email notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" />
                <span>SMS notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span>Push notifications</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" defaultChecked />
                <span>Two-factor authentication</span>
              </label>
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Recent Messages</h3>
            <div className="space-y-3">
              {[
                { from: 'Alice', message: 'Hey! How are you?', time: '2 min ago' },
                { from: 'Bob', message: 'Meeting at 3 PM today', time: '1 hour ago' },
                { from: 'Charlie', message: 'Check out this new feature!', time: '3 hours ago' },
              ].map((msg, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-semibold">{msg.from}</span>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-gray-700">{msg.message}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Notifications</h3>
            <div className="space-y-3">
              {[
                { type: 'success', text: 'Profile updated successfully', time: '5 min ago' },
                { type: 'info', text: 'New comment on your post', time: '20 min ago' },
                { type: 'warning', text: 'Password expires in 7 days', time: '1 day ago' },
              ].map((notif, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${
                  notif.type === 'success' ? 'bg-green-50 border-green-500' :
                  notif.type === 'info' ? 'bg-blue-50 border-blue-500' :
                  'bg-yellow-50 border-yellow-500'
                }`}>
                  <p className="text-gray-700">{notif.text}</p>
                  <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Tab Navigation</h3>

      {/* Tab Headers */}
      <div className="w-full flex border-b-2 border-gray-200">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => {/* TODO: Update activeTab to tab.id */}}
            className="flex-1 px-4 py-3 font-medium transition-colors text-gray-600 hover:text-gray-800"
          >
            {/* TODO: Add conditional styling - if tab is active, add blue color and bottom border */}
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-full p-6 bg-white rounded-b-lg">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default TabNavigation;
