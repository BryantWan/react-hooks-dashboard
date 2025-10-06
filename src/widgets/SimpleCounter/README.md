# Simple Counter Widget

## Description
A basic counter widget that demonstrates the fundamentals of React's `useState` hook. This widget allows users to increment, decrement, and reset a numerical counter.

## Learning Objectives
- Understand how to initialize state with `useState`
- Learn how to update state using setter functions
- Practice creating event handlers that modify state
- Understand how React re-renders components when state changes

## Concepts Taught
- `useState` hook basics
- State initialization
- State updates
- Event handling
- Component re-rendering

## Difficulty Level
**Beginner** (15-30 minutes)

## Acceptance Criteria
- [ ] Counter displays current count value
- [ ] Counter starts at 0
- [ ] Increment button increases count by 1
- [ ] Decrement button decreases count by 1
- [ ] Reset button sets count back to 0
- [ ] Visual feedback for button interactions

## Implementation Versions

### Starter Version (`SimpleCounter.starter.jsx`)
- Nearly complete implementation
- Students fill in useState initialization and setter calls
- All JSX and structure provided
- Ideal for absolute beginners

### Template Version (`SimpleCounter.template.jsx`)
- Component shell with TODO sections
- Students implement state logic and event handlers
- JSX structure provided
- Good for students with basic React knowledge

### Spec Version (`SimpleCounter.spec.md`)
- User story only
- No code provided
- Students build from scratch
- Best for students comfortable with React basics

## Testing
Run tests with:
```bash
npm test SimpleCounter
```

## Integration
To enable this widget in the dashboard:
1. Complete your implementation
2. Update `src/widgetConfig.js`:
   ```javascript
   SimpleCounter: {
     // ...
     author: 'Your Name',
     enabled: true,
   }
   ```

## Resources
- [React useState Hook Documentation](https://react.dev/reference/react/useState)
- [Handling Events in React](https://react.dev/learn/responding-to-events)
