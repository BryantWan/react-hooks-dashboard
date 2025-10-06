# Color Cycler - Widget Specification

## User Story

As a user, I want to see colors automatically cycle through a palette, with controls to play/pause, adjust speed, and manually navigate.

## Acceptance Criteria

1. **Color Display**
   - Large square showing current color
   - Smooth color transitions
   - 7 colors in the cycle

2. **Auto-Play**
   - Play button starts auto-cycling
   - Cycles through colors automatically
   - Pause button stops cycling
   - Resumes from current position

3. **Manual Navigation**
   - Previous button goes to previous color
   - Next button goes to next color
   - Wraps around at ends

4. **Speed Control**
   - Slider to adjust cycle speed
   - Range: 200ms to 3000ms
   - Updates take effect immediately

5. **Direct Selection**
   - Color indicator dots below
   - Click any dot to jump to that color
   - Current color dot is highlighted

6. **Color Information**
   - Display color name
   - Display hex value
   - Updates with color changes

7. **Initial State**
   - Starts on first color
   - Auto-play is paused
   - Default speed: 1000ms

8. **Cleanup**
   - Interval cleared when paused
   - Interval cleared on unmount
