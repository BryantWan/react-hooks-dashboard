# Modal Manager - Widget Specification

## User Story

As a user, I want to open different types of modal dialogs and close them by clicking outside, clicking the close button, or clicking action buttons.

## Acceptance Criteria

1. **Modal Triggers**
   - Four buttons to open modals:
     - Info Modal (blue)
     - Success Modal (green)
     - Warning Modal (yellow)
     - Error Modal (red)
   - Each button opens corresponding modal type

2. **Modal Types**
   - **Info Modal**: Blue theme, information icon, informational message
   - **Success Modal**: Green theme, checkmark icon, success message
   - **Warning Modal**: Yellow theme, warning icon, warning message
   - **Error Modal**: Red theme, error icon, error message

3. **Modal Structure**
   - Semi-transparent dark overlay covering entire screen
   - White modal box centered on screen
   - Header section with colored background
   - Icon and title in header
   - Close (X) button in header
   - Body with message text
   - Footer with Cancel and Confirm buttons

4. **Opening Modal**
   - Clicking any button opens the modal
   - Correct modal type is displayed
   - Overlay appears behind modal
   - Modal appears centered on screen

5. **Closing Modal**
   - Three ways to close:
     1. Click overlay (outside modal)
     2. Click X button in header
     3. Click Cancel or Confirm button in footer
   - Clicking inside modal content does NOT close it

6. **Event Handling**
   - Overlay click closes modal
   - Modal content click is prevented from bubbling to overlay
   - Use stopPropagation to prevent unwanted closing

7. **Visual Design**
   - Each modal type has unique color scheme
   - Smooth appearance (no animation required, but should be clean)
   - Modal is on top of all content (z-index)
   - Overlay blocks interaction with background content

8. **Initial State**
   - Modal is closed initially
   - Only trigger buttons are visible

9. **Modal Content**
   - Each type has appropriate:
     - Icon (emoji or symbol)
     - Title
     - Message text
     - Color theme

10. **Accessibility**
    - Modal renders in fixed position
    - Clear visual hierarchy
    - Obvious close mechanisms
