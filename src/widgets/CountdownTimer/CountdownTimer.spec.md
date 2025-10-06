# Countdown Timer - Widget Specification

## User Story

As a user, I want a countdown timer that counts down from a set time and alerts me when time is up.

## Acceptance Criteria

1. **Initial State**
   - Timer starts at 60 seconds (1:00)
   - Timer is paused (not running)
   - Display shows MM:SS format

2. **Start Functionality**
   - Clicking "Start" begins countdown
   - Seconds decrement by 1 every second
   - Button changes to "Pause" when running

3. **Pause Functionality**
   - Clicking "Pause" stops the countdown
   - Time remains at current value
   - Button changes back to "Start"

4. **Resume Functionality**
   - Clicking "Start" after pause resumes from paused time
   - Countdown continues normally

5. **Reset Functionality**
   - "Reset" button stops timer
   - Resets time to 60 seconds
   - Timer returns to paused state

6. **Countdown Completion**
   - Timer automatically stops at 0:00
   - Display shows "Time's up!" message
   - Visual indicator changes (red color)
   - Start button is disabled at 0:00

7. **Quick Set Buttons**
   - Four preset time buttons:
     - 30s (30 seconds)
     - 1m (60 seconds)
     - 2m (120 seconds)
     - 5m (300 seconds)
   - Clicking preset stops timer and sets new time
   - Timer returns to paused state

8. **Visual Feedback**
   - Color coding:
     - Blue: Normal (>10 seconds)
     - Yellow/Orange: Warning (≤10 seconds)
     - Red: Time's up (0 seconds)
   - Progress circle showing remaining time
   - Status text (Running/Paused/Time's up)

9. **Time Display**
   - Format: MM:SS
   - Leading zeros (e.g., 01:05, not 1:5)
   - Large, clear font

10. **Cleanup**
    - Interval properly cleared when component unmounts
    - No memory leaks from running intervals
