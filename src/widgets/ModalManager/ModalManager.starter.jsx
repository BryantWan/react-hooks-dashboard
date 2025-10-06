import { useState } from 'react';

/**
 * Modal Manager Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage modal open/close state
 * - Handle overlay clicks
 * - Conditional rendering of modal
 * - Event propagation (stopPropagation)
 */
function ModalManager() {
  // TODO: Initialize state for isOpen (boolean, starts false)


  // TODO: Initialize state for modalType (string, starts with 'info')


  const openModal = (type) => {
    // TODO: Set modalType to the type parameter
    // TODO: Set isOpen to true

  };

  const closeModal = () => {
    // TODO: Set isOpen to false

  };

  const handleOverlayClick = () => {
    // TODO: Call closeModal when overlay is clicked

  };

  const handleModalClick = (e) => {
    // TODO: Prevent click from bubbling to overlay
    // Hint: Use e.stopPropagation()

  };

  const getModalContent = () => {
    switch (modalType) {
      case 'info':
        return {
          title: 'Information',
          message: 'This is an informational modal. It provides helpful information to the user.',
          icon: 'ℹ️',
          color: 'blue',
        };
      case 'success':
        return {
          title: 'Success',
          message: 'Operation completed successfully! Your changes have been saved.',
          icon: '✅',
          color: 'green',
        };
      case 'warning':
        return {
          title: 'Warning',
          message: 'Please review this warning before proceeding with your action.',
          icon: '⚠️',
          color: 'yellow',
        };
      case 'error':
        return {
          title: 'Error',
          message: 'An error occurred. Please try again or contact support.',
          icon: '❌',
          color: 'red',
        };
      default:
        return {
          title: 'Modal',
          message: 'This is a modal dialog.',
          icon: '📋',
          color: 'gray',
        };
    }
  };

  const content = getModalContent();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Modal Manager</h3>

      <p className="text-gray-600 text-center">
        Click any button below to open a modal
      </p>

      {/* Modal Trigger Buttons */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <button
          onClick={() => openModal('info')}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
        >
          ℹ️ Info Modal
        </button>
        <button
          onClick={() => openModal('success')}
          className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors"
        >
          ✅ Success Modal
        </button>
        <button
          onClick={() => openModal('warning')}
          className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
        >
          ⚠️ Warning Modal
        </button>
        <button
          onClick={() => openModal('error')}
          className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg transition-colors"
        >
          ❌ Error Modal
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden"
            onClick={handleModalClick}
          >
            {/* Modal Header */}
            <div className={`p-6 bg-${content.color}-100 border-b-4 border-${content.color}-500`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">{content.icon}</span>
                  <h4 className="text-xl font-bold text-gray-800">{content.title}</h4>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-700">{content.message}</p>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-gray-50 flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={closeModal}
                className={`px-4 py-2 bg-${content.color}-500 hover:bg-${content.color}-600 text-white rounded-lg transition-colors`}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalManager;
