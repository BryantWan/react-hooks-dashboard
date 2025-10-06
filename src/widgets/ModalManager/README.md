# Modal Manager Widget

## Description

A modal dialog manager that demonstrates opening and closing modals with different types and handling click events properly. This widget teaches overlay patterns and event propagation.

## Learning Objectives

- Manage boolean state for open/close
- Conditional rendering of overlays
- Handle click events on overlays
- Prevent event propagation with stopPropagation
- Create different modal variants
- Use fixed positioning for overlays
- Implement multiple close mechanisms

## Concepts Taught

### React Concepts
- Boolean state for visibility
- Conditional rendering with &&
- Event handlers
- Event propagation control
- Multiple ways to trigger state changes

### JavaScript Concepts
- stopPropagation() method
- Event bubbling
- Switch statements for variants
- Object destructuring

### UI/UX Patterns
- Modal dialogs
- Overlay backgrounds
- Multiple close methods
- Modal variants (info, success, warning, error)
- Centered fixed positioning

### CSS Concepts
- Fixed positioning
- Z-index layering
- Semi-transparent backgrounds
- Flexbox centering

## Acceptance Criteria

1. Four trigger buttons (info, success, warning, error)
2. Each button opens corresponding modal type
3. Modal appears centered on screen
4. Semi-transparent overlay behind modal
5. Close mechanisms:
   - Click overlay
   - Click X button
   - Click Cancel/Confirm buttons
6. Clicking modal content doesn't close it
7. Different colors/icons for each type
8. Clean, professional appearance

## Difficulty Level

Intermediate - useState with Event Handling

## Estimated Time

35-40 minutes
