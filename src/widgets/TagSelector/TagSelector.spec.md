# Tag Selector - Widget Specification

## User Story

As a user, I want to select multiple tags from a list using checkboxes and see my selected tags displayed as colored badges.

## Acceptance Criteria

1. **Available Tags**
   - Display 6 technology tags: JavaScript, React, CSS, HTML, Node.js, TypeScript
   - Each tag has a checkbox
   - Each tag has a unique color indicator

2. **Tag Selection**
   - Clicking a checkbox selects the tag
   - Clicking again deselects the tag
   - Multiple tags can be selected simultaneously
   - No limit on number of selections

3. **Visual Feedback - Checkbox Area**
   - Checked boxes are visually distinct
   - Selected tags have highlighted background/border
   - Hover effects on tag options
   - Color indicator dot for each tag

4. **Selected Tags Display**
   - Show count of selected tags
   - Selected tags appear as colored badges
   - Each badge uses the tag's associated color
   - Badges display tag name

5. **Empty State**
   - When no tags selected, show "No tags selected" message
   - Empty state has dashed border placeholder

6. **Remove Tags**
   - Each badge has an X button to remove it
   - Clicking X removes tag from selection
   - Unchecks the corresponding checkbox

7. **Clear All Functionality**
   - "Clear All" button appears when tags are selected
   - Clicking clears all selections
   - All checkboxes become unchecked
   - Returns to empty state

8. **Badge Interaction**
   - Badges are visually distinct with tag colors
   - Remove button visible on each badge
   - Smooth transitions when adding/removing tags
