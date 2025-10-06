import { useState } from 'react';

/**
 * Modal Manager Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage modal open/close state
 * - Handle overlay clicks
 * - Conditional rendering of modal
 * - Event propagation (stopPropagation)
 *
 * Instructions:
 * 1. Create state for modal open/close
 * 2. Create state for modal type
 * 3. Implement open and close functions
 * 4. Render modal conditionally
 * 5. Handle overlay click to close
 * 6. Prevent modal content click from closing
 * 7. Display different content based on modal type
 */
function ModalManager() {
  // TODO: Create state for modal open/close (boolean)

  // TODO: Create state for modal type (string)

  // TODO: Create function to open modal with specific type

  // TODO: Create function to close modal

  // TODO: Create function to get modal content based on type

  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800">Modal Manager</h3>

      <p className="text-gray-600 text-center">
        Click any button below to open a modal
      </p>

      {/* TODO: Create buttons to open different modal types */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {/* Info, Success, Warning, Error buttons */}
      </div>

      {/* TODO: Conditionally render modal */}
      {/* Modal should have:
          - Semi-transparent overlay (closes on click)
          - Modal container (doesn't close on click)
          - Header with icon and title
          - Body with message
          - Footer with Cancel and Confirm buttons
          - Close button (X)
      */}
    </div>
  );
}

export default ModalManager;
