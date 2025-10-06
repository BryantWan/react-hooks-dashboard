# Live Clock - Widget Specification

## User Story

As a user, I want to see a live clock that displays the current time and updates every second.

## Acceptance Criteria

1. **Time Display**
   - Shows current time in HH:MM:SS format
   - Uses 12-hour format with AM/PM
   - Updates every second
   - Large, clear display

2. **Date Display**
   - Shows full date (Day, Month DD, YYYY)
   - Example: "Monday, January 1, 2024"
   - Updates at midnight

3. **Time Greeting**
   - Shows greeting based on time of day:
     - "Good Morning" (before 12 PM)
     - "Good Afternoon" (12 PM - 6 PM)
     - "Good Evening" (after 6 PM)

4. **Component Breakdown**
   - Three separate boxes showing:
     - Hours (in separate box)
     - Minutes (in separate box)
     - Seconds (in separate box)
   - Each with color-coded background

5. **Timezone Display**
   - Shows current timezone
   - Example: "America/New_York"

6. **Live Updates**
   - Time updates every second without manual refresh
   - Smooth, continuous updates
   - No flickering or jumping

7. **Initial Display**
   - Shows correct time immediately on mount
   - No delay before first display

8. **Cleanup**
   - Interval cleared when component unmounts
   - No memory leaks

9. **Formatting**
   - Time: HH:MM:SS AM/PM
   - Date: Weekday, Month Day, Year
   - Leading zeros for single digits

10. **Visual Design**
    - Large time display (easy to read)
    - Clean, organized layout
    - Color-coded sections
    - Professional appearance
