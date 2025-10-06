# Form Validator Widget

## Description

A multi-field registration form with comprehensive validation. This widget demonstrates form handling, validation logic, error management, and user feedback patterns in React.

## Learning Objectives

- Manage complex form state with objects
- Implement field-level validation
- Display validation errors
- Handle form submission
- Use regular expressions for validation
- Clear errors dynamically
- Provide user feedback for success/error states
- Work with controlled form inputs

## Concepts Taught

### React Concepts
- Object state management
- Multiple controlled inputs
- Dynamic computed property names `[name]: value`
- Form submission handling
- Conditional rendering for errors
- Conditional CSS classes

### JavaScript Concepts
- Regular expressions for email validation
- Object.keys() for checking object properties
- Spread operator for updating objects
- Template literals
- String methods (trim, length)

### Validation Patterns
- Required field validation
- Length validation
- Format validation (regex)
- Matching field validation
- Field-specific error messages

### UI/UX Concepts
- Inline validation
- Error messaging
- Success feedback
- Visual error indicators
- Form reset functionality

## Acceptance Criteria

1. Four input fields (username, email, password, confirm password)
2. Validation rules:
   - Username: required, min 3 characters
   - Email: required, valid email format
   - Password: required, min 6 characters
   - Confirm Password: required, must match password
3. Display errors below fields
4. Red border on fields with errors
5. Errors clear when user edits field
6. Submit button validates all fields
7. Success message on valid submission
8. Reset button clears everything

## Difficulty Level

Intermediate - useState with Complex Forms

## Estimated Time

45-55 minutes
