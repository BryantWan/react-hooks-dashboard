# Countdown Timer Widget

## Description

A visual countdown timer with start, pause, reset, and preset time options. This widget introduces useEffect for managing intervals and demonstrates proper cleanup patterns.

## Learning Objectives

- Use useEffect to create side effects
- Set up intervals with setInterval
- Clean up intervals with clearInterval
- Return cleanup functions from useEffect
- Manage timer state (running/paused)
- Conditional useEffect execution
- Work with time and date formatting
- Prevent memory leaks from intervals

## Concepts Taught

### React Concepts
- useEffect hook basics
- Effect cleanup functions
- Dependency arrays
- Conditional effect execution
- State updates in intervals

### JavaScript Concepts
- setInterval and clearInterval
- Time calculations
- String padding (padStart)
- Math operations (floor, modulo)
- Closure in intervals

### Cleanup Patterns
- Returning cleanup function from useEffect
- Clearing intervals before component unmounts
- Preventing memory leaks
- Dependency management

### Timer Patterns
- Start/pause/resume functionality
- Auto-stop at completion
- Time presets
- Time formatting

## Acceptance Criteria

1. Countdown from set time
2. Start/Pause toggle button
3. Reset to default (60s)
4. Auto-stop at 0:00
5. Quick set buttons (30s, 1m, 2m, 5m)
6. MM:SS time format
7. Visual feedback (colors, progress)
8. Status indicators
9. Proper interval cleanup

## Difficulty Level

useEffect Basics

## Estimated Time

45-55 minutes
