# Temperature Converter - Widget Specification

## User Story

As a user, I want to convert temperatures between Celsius and Fahrenheit by entering a value in either field and seeing the converted value automatically.

## Acceptance Criteria

1. **Input Fields**
   - Two input fields: one for Celsius, one for Fahrenheit
   - Both fields accept numeric input
   - Fields start empty

2. **Celsius to Fahrenheit Conversion**
   - When user enters a value in Celsius field
   - Fahrenheit field automatically updates with converted value
   - Uses formula: F = (C × 9/5) + 32
   - Result rounded to 1 decimal place

3. **Fahrenheit to Celsius Conversion**
   - When user enters a value in Fahrenheit field
   - Celsius field automatically updates with converted value
   - Uses formula: C = (F - 32) × 5/9
   - Result rounded to 1 decimal place

4. **Bidirectional Updates**
   - User can edit either field
   - The other field updates automatically
   - Conversions happen in real-time

5. **Empty Input Handling**
   - When a field is cleared, the other field also clears
   - No errors or NaN values shown

6. **Quick Reference**
   - Display common temperature reference points:
     - Water freezes: 0°C / 32°F
     - Room temperature: 20°C / 68°F
     - Body temperature: 37°C / 98.6°F
     - Water boils: 100°C / 212°F

7. **Clear Functionality**
   - Clear button resets both fields
   - Returns to initial empty state

8. **User Experience**
   - Clear labels for each field
   - Visual indicator of conversion direction
   - Professional, easy-to-use interface
