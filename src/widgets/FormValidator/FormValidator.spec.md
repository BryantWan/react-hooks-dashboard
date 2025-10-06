# Form Validator - Widget Specification

## User Story

As a user, I want to fill out a registration form with validation that provides immediate feedback on any errors before I can successfully submit.

## Acceptance Criteria

1. **Form Fields**
   - Username input field
   - Email input field
   - Password input field (masked)
   - Confirm Password input field (masked)
   - All fields start empty

2. **Username Validation**
   - Required field
   - Must be at least 3 characters long
   - Show error message if validation fails
   - Error: "Username is required" or "Username must be at least 3 characters"

3. **Email Validation**
   - Required field
   - Must be valid email format (contains @ and domain)
   - Use regex validation
   - Error: "Email is required" or "Email is invalid"

4. **Password Validation**
   - Required field
   - Must be at least 6 characters long
   - Error: "Password is required" or "Password must be at least 6 characters"

5. **Confirm Password Validation**
   - Required field
   - Must match the password field exactly
   - Error: "Please confirm your password" or "Passwords do not match"

6. **Error Display**
   - Errors appear below the relevant field
   - Errors are red text
   - Input border turns red when there's an error
   - Errors clear when user starts typing in that field

7. **Form Submission**
   - Submit button triggers validation
   - If any validation fails, show all errors
   - If all validation passes, show success message
   - Console log the form data on successful submission

8. **Success State**
   - Green success message appears at top of form
   - Message: "Form submitted successfully!"
   - Form data is preserved after submission

9. **Reset Functionality**
   - Reset button clears all fields
   - Clears all errors
   - Clears success message
   - Returns form to initial state

10. **User Experience**
    - Clear labels for all fields
    - Helpful placeholder text
    - Visual feedback for errors
    - Immediate error clearing on edit
