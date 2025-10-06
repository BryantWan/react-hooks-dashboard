# Character Counter - Widget Specification

## User Story

As a user, I want to type text into a textarea and see a real-time count of characters with visual feedback about character limits.

## Acceptance Criteria

1. **Text Input**
   - A textarea allows users to enter text
   - The textarea starts empty
   - User can type freely

2. **Character Counting**
   - Display current character count
   - Show maximum character limit (100 characters)
   - Display format: "X / 100"

3. **Remaining Characters**
   - Calculate and display characters remaining
   - Show message: "X characters remaining"

4. **Visual Feedback - Safe Zone**
   - When more than 20 characters remaining
   - Display count in green
   - Progress bar is green

5. **Visual Feedback - Warning Zone**
   - When 20 or fewer characters remaining
   - Display count in yellow/orange
   - Progress bar is yellow/orange
   - Emphasize remaining count

6. **Visual Feedback - Over Limit**
   - When character count exceeds 100
   - Display count in red
   - Progress bar is red and full
   - Show "X characters over limit!" message

7. **Progress Bar**
   - Visual bar showing progress toward limit
   - Updates in real-time as user types
   - Color changes based on proximity to limit

8. **Clear Functionality**
   - Clear button resets the textarea
   - Button is disabled when textarea is empty

9. **Real-Time Updates**
   - All displays update immediately as user types
   - Smooth transitions between states
