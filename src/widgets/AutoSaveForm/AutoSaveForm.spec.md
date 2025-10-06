# Auto-Save Form - Widget Specification

## User Story

As a user, I want my form data to automatically save after I stop typing, without clicking a save button.

## Acceptance Criteria

1. Form auto-saves 1 second after user stops typing
2. Shows "Saving..." status while debouncing
3. Shows "Saved!" status after save completes
4. Data persists across page reloads
5. Debouncing prevents excessive saves
