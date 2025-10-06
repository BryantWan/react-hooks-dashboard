import { useState } from 'react';

/**
 * Form Validator Widget - TEMPLATE VERSION
 *
 * Learning Objectives:
 * - Manage multiple form fields with state
 * - Implement validation logic
 * - Display validation errors
 * - Handle form submission
 * - Use regex for email validation
 *
 * Instructions:
 * 1. Create state for form data (object with username, email, password, confirmPassword)
 * 2. Create state for errors (object)
 * 3. Create state for submission status
 * 4. Implement handleChange to update form data
 * 5. Implement validation function
 * 6. Handle form submission with validation
 * 7. Display errors under each field
 */
function FormValidator() {
  // TODO: Create state for form data (object with 4 fields)

  // TODO: Create state for errors (object)

  // TODO: Create state for submission status (boolean)

  // TODO: Create handleChange function
  // Update form data and clear errors for the field being edited

  // TODO: Create validateForm function
  // Validate username (required, min 3 chars)
  // Validate email (required, valid format)
  // Validate password (required, min 6 chars)
  // Validate confirmPassword (matches password)
  // Return errors object

  // TODO: Create handleSubmit function
  // Prevent default
  // Run validation
  // If valid, set submitted to true
  // If invalid, set errors

  // TODO: Create handleReset function
  // Clear all form data, errors, and submission status

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Sign Up Form</h3>

      {/* TODO: Show success message if submitted */}

      <form className="w-full space-y-4">
        {/* TODO: Create input fields for:
            - Username
            - Email
            - Password
            - Confirm Password

            Each field should:
            - Have a label
            - Be a controlled input
            - Show error message if error exists
            - Have red border if error exists
        */}

        {/* TODO: Add Submit and Reset buttons */}
      </form>
    </div>
  );
}

export default FormValidator;
