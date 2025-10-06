# Todo List Widget

## Description

A fully functional todo list application that allows users to add, complete, and delete tasks. This widget demonstrates complex state management with arrays of objects and multiple state operations.

## Learning Objectives

- Manage arrays of objects with useState
- Add items to arrays immutably
- Remove items from arrays using filter
- Update items in arrays using map
- Generate unique IDs for list items
- Handle form submissions in React
- Prevent default form behavior
- Calculate derived statistics from state
- Implement CRUD operations (Create, Read, Update, Delete)

## Concepts Taught

### React Concepts
- Complex state management (arrays of objects)
- Form handling and submission
- Controlled inputs
- List rendering with keys
- Multiple event handlers
- Conditional rendering for empty states

### JavaScript Concepts
- Array methods: `map()`, `filter()`, `find()`
- Spread operator for immutability
- Object destructuring
- Unique ID generation with Date.now()
- Ternary operators for conditional values

### State Management Patterns
- Adding to arrays: `[...array, newItem]`
- Removing from arrays: `array.filter(item => item.id !== id)`
- Updating in arrays: `array.map(item => item.id === id ? {...item, prop: newValue} : item)`

### UI/UX Concepts
- Todo list patterns
- Checkbox interactions
- Empty states
- Statistics dashboards
- Visual completion states

## Acceptance Criteria

1. Add new todos via input and button
2. Display all todos in a list
3. Check/uncheck todos to mark completion
4. Delete todos with delete button
5. Show statistics (total, completed, active)
6. Empty state when no todos exist
7. Visual distinction for completed todos
8. Cannot add empty todos

## Difficulty Level

Intermediate - useState with Complex Data

## Estimated Time

40-50 minutes
