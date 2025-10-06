# Live Clock Widget

## Description

A real-time clock display that updates every second, showing the current time, date, and a contextual greeting. This widget demonstrates useEffect with continuous updates.

## Learning Objectives

- Use useEffect with empty dependency array
- Create intervals that run for component lifetime
- Work with JavaScript Date objects
- Format dates and times
- Clean up long-running intervals
- Update state continuously

## Concepts Taught

### React Concepts
- useEffect with [] dependency array
- Continuous state updates
- Component lifecycle patterns
- Cleanup on unmount

### JavaScript Concepts
- Date object creation and methods
- toLocaleTimeString and toLocaleDateString
- getHours, getMinutes, getSeconds methods
- Date formatting options
- Intl API for timezone

### Date/Time Concepts
- 12-hour vs 24-hour format
- Date formatting
- Timezone handling
- Time-based conditionals

### Interval Patterns
- Long-running intervals
- Regular state updates
- Cleanup best practices

## Acceptance Criteria

1. Display current time (HH:MM:SS AM/PM)
2. Display current date (full format)
3. Update every second
4. Show time-based greeting
5. Display hours, minutes, seconds separately
6. Show current timezone
7. Clean formatting with leading zeros
8. Proper interval cleanup

## Difficulty Level

useEffect Basics

## Estimated Time

30-40 minutes
