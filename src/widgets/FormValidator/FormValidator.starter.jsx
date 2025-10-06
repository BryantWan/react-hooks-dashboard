import { useState } from 'react';

/**
 * Form Validator Widget - STARTER VERSION
 *
 * Learning Objectives:
 * - Manage multiple form fields with state
 * - Implement validation logic
 * - Display validation errors
 * - Handle form submission
 * - Use regex for email validation
 *
 * TODO: Complete the missing parts marked with comments
 */
function FormValidator() {
  // TODO: Initialize state for form data (object with username, email, password, confirmPassword)
  // Hint: All fields should start as empty strings


  // TODO: Initialize state for errors (empty object)


  // TODO: Initialize state for submission status (boolean, starts as false)


  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // TODO: Update formData by spreading existing formData and updating the field with [name]: value
    // Hint: setFormData({ ...formData, [name]: value })


    // TODO: Clear error for this field when user starts typing
    // Check if errors[name] exists, then update errors object to remove it

  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // TODO: Validate username
    // - Check if empty (use !formData.username.trim())
    // - Check if less than 3 characters
    // - Add appropriate error message to newErrors.username


    // TODO: Validate email
    // - Check if empty
    // - Check if matches email regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // - Add appropriate error message to newErrors.email


    // TODO: Validate password
    // - Check if empty
    // - Check if less than 6 characters
    // - Add appropriate error message to newErrors.password


    // TODO: Validate confirmPassword
    // - Check if empty
    // - Check if it matches formData.password
    // - Add appropriate error message to newErrors.confirmPassword


    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Call validateForm() and store result in newErrors variable


    // TODO: Check if newErrors is empty (Object.keys(newErrors).length === 0)
    // If valid:
    //   - Set isSubmitted to true
    //   - Clear errors
    //   - Log formData to console
    // If invalid:
    //   - Set errors to newErrors
    //   - Set isSubmitted to false

  };

  // Reset form
  const handleReset = () => {
    // TODO: Reset formData to initial values (all empty strings)
    // TODO: Clear errors (empty object)
    // TODO: Reset isSubmitted to false

  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Sign Up Form</h3>

      {isSubmitted && (
        <div className="w-full mb-4 p-4 bg-green-50 border-2 border-green-500 rounded-lg">
          <p className="text-green-700 font-semibold">Form submitted successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        {/* Username Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
              errors.username
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Enter username"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">{errors.username}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
              errors.email
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
              errors.password
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Enter password"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none ${
              errors.confirmPassword
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-300 focus:border-blue-500'
            }`}
            placeholder="Confirm password"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormValidator;
