# Temperature Converter Widget

## Description

A bidirectional temperature converter that allows users to convert between Celsius and Fahrenheit. Enter a value in either field and see the converted value automatically appear in the other field.

## Learning Objectives

- Manage multiple synchronized state values
- Perform mathematical conversions
- Handle numeric input and validation
- Work with formulas in JavaScript
- Create bidirectional data flow
- Format numbers for display

## Concepts Taught

### React Concepts
- Multiple useState hooks in one component
- Synchronized state updates
- Controlled numeric inputs
- Bidirectional data binding

### JavaScript Concepts
- Mathematical operations
- parseFloat for string-to-number conversion
- toFixed for number formatting
- Handling empty strings and NaN
- Conversion formulas

### Practical Applications
- Unit conversion
- Real-world mathematical applications
- Input synchronization patterns

## Acceptance Criteria

1. Two input fields (Celsius and Fahrenheit)
2. Entering value in Celsius converts to Fahrenheit
3. Entering value in Fahrenheit converts to Celsius
4. Conversions use correct formulas:
   - F = (C × 9/5) + 32
   - C = (F - 32) × 5/9
5. Results rounded to 1 decimal place
6. Clearing one field clears the other
7. Quick reference guide for common temperatures
8. Clear button functionality

## Difficulty Level

Beginner - useState Basics

## Estimated Time

25-30 minutes
