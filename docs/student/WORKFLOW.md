# Git Workflow Guide

This guide explains the complete Git workflow for working on the React Hooks Dashboard project. Follow these steps carefully to collaborate effectively with your classmates.

## Table of Contents

- [Overview](#overview)
- [Initial Setup](#initial-setup)
- [Complete Workflow](#complete-workflow)
- [Branch Naming Convention](#branch-naming-convention)
- [Making Changes](#making-changes)
- [Pulling Latest Changes](#pulling-latest-changes)
- [Handling Merge Conflicts](#handling-merge-conflicts)
- [Code Review Process](#code-review-process)
- [After PR is Approved](#after-pr-is-approved)
- [Common Git Commands Reference](#common-git-commands-reference)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

## Overview

Our Git workflow follows these key principles:

1. **Main branch is protected** - Cannot push directly to main
2. **Feature branches** - Each student works on their own branch
3. **Pull Requests (PRs)** - All code goes through review
4. **One widget per student** - Each person works on their assigned widget
5. **Keep branches updated** - Regularly pull changes from main

### Workflow Visualization

```
main branch (protected)
    |
    |-- Your branch: john-doe-simplecounter
    |       |
    |       |-- Make changes
    |       |-- Commit changes
    |       |-- Push to GitHub
    |       |-- Create Pull Request
    |       |-- Code Review
    |       |-- Merge to main (after approval)
    |
    |-- Updated main branch
```

## Initial Setup

### 1. Clone the Repository (First Time Only)

```bash
# Navigate to where you want the project
cd ~/Documents/Projects

# Clone the repository
git clone <repository-url>

# Navigate into the project
cd react-hooks-dashboard
```

### 2. Verify Repository Setup

```bash
# Check you're on the main branch
git branch

# Should show:
# * main

# Check remote is configured
git remote -v

# Should show:
# origin  <repository-url> (fetch)
# origin  <repository-url> (push)
```

### 3. Install Dependencies

```bash
npm install
```

## Complete Workflow

Follow these steps every time you work on your widget:

### Step 1: Start from Main Branch

Always start from the main branch to get the latest code:

```bash
# Make sure you're on main
git checkout main

# Pull latest changes
git pull origin main
```

**Why?** This ensures you have all the latest updates from your classmates.

### Step 2: Create Your Feature Branch

Create a new branch following our naming convention:

```bash
# Create and switch to your branch
git checkout -b firstname-lastname-widgetname

# Example:
git checkout -b john-doe-simplecounter
```

**Branch naming rules:**
- All lowercase
- Use hyphens (not underscores or spaces)
- Format: `firstname-lastname-widgetname`
- Examples:
  - `sarah-smith-toggleswitch`
  - `mike-johnson-todolist`
  - `anna-garcia-weatherwidget`

### Step 3: Verify Your Branch

```bash
# Check current branch
git branch

# Should show:
# main
# * firstname-lastname-widgetname  (asterisk shows current branch)
```

### Step 4: Make Your Changes

Now you can work on your widget:

1. Navigate to your widget folder:
   ```bash
   cd src/widgets/YourWidget
   ```

2. Read the README:
   ```bash
   cat README.md
   ```

3. Choose your implementation file:
   - **Beginner**: `WidgetName.starter.jsx`
   - **Intermediate**: `WidgetName.template.jsx`
   - **Advanced**: Build from `WidgetName.spec.md`

4. Edit the file in your code editor

5. Enable your widget in `src/widgetConfig.js`

6. Test in browser:
   ```bash
   npm run dev
   ```

### Step 5: Check Your Changes

See what files you've modified:

```bash
# View status
git status

# Should show files in red (not staged)
# Example:
# modified:   src/widgets/SimpleCounter/SimpleCounter.starter.jsx
# modified:   src/widgetConfig.js
```

View specific changes:

```bash
# See what changed in a file
git diff src/widgets/SimpleCounter/SimpleCounter.starter.jsx

# See all changes
git diff
```

### Step 6: Stage Your Changes

Add files to the staging area:

```bash
# Stage specific files
git add src/widgets/SimpleCounter/SimpleCounter.starter.jsx
git add src/widgetConfig.js

# Or stage all changed files
git add .
```

Verify what's staged:

```bash
git status

# Files should now be green (staged)
# Changes to be committed:
#   modified:   src/widgets/SimpleCounter/SimpleCounter.starter.jsx
#   modified:   src/widgetConfig.js
```

### Step 7: Commit Your Changes

Create a commit with a descriptive message:

```bash
git commit -m "feat: implement SimpleCounter widget"
```

**Commit message format:**
- Start with a type: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`
- Use present tense: "add" not "added"
- Be descriptive but concise
- Examples:
  ```bash
  git commit -m "feat: implement ToggleSwitch with state management"
  git commit -m "fix: resolve counter reset issue in SimpleCounter"
  git commit -m "docs: add usage instructions to TodoList README"
  git commit -m "test: add tests for ColorPicker component"
  ```

### Step 8: Push to GitHub

Send your branch to GitHub:

```bash
# First time pushing this branch
git push -u origin firstname-lastname-widgetname

# Subsequent pushes (after first time)
git push
```

**Expected output:**
```
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 8 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 523 bytes | 523.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:username/react-hooks-dashboard.git
 * [new branch]      john-doe-simplecounter -> john-doe-simplecounter
Branch 'john-doe-simplecounter' set up to track remote branch 'john-doe-simplecounter' from 'origin'.
```

### Step 9: Create Pull Request

1. **Go to GitHub repository in your browser**

2. **You'll see a yellow banner:**
   ```
   john-doe-simplecounter had recent pushes less than a minute ago
   [Compare & pull request]
   ```
   Click "Compare & pull request"

3. **Fill out the PR template:**

   **Title:**
   ```
   feat: Implement SimpleCounter Widget
   ```

   **Description:**
   ```markdown
   ## Summary
   Implemented the SimpleCounter widget with full functionality.

   ## Changes Made
   - Added useState for count state management
   - Implemented increment, decrement, and reset functions
   - Added styled buttons with Tailwind CSS
   - Enabled widget in widgetConfig.js

   ## Testing
   - [x] Widget displays correctly on dashboard
   - [x] Increment button increases count
   - [x] Decrement button decreases count
   - [x] Reset button returns count to 0
   - [x] No console errors
   - [x] Responsive design works

   ## Screenshots
   (Attach screenshot if helpful)

   ## Questions/Notes
   (Any questions or notes for reviewer)
   ```

4. **Select reviewers:**
   - Add your instructor as a reviewer
   - Optionally add classmates

5. **Add labels:**
   - Widget difficulty: `beginner`, `intermediate`, or `advanced`
   - Hook type: `useState`, `useEffect`, or both

6. **Click "Create pull request"**

### Step 10: Wait for Review

Your instructor will review your code and either:
- **Approve** - Ready to merge
- **Request changes** - Need to fix something

## Branch Naming Convention

### Format

```
firstname-lastname-widgetname
```

### Rules

1. **Use your actual first and last name**
   - Not nicknames or usernames
   - Helps identify who owns the branch

2. **Widget name should match the folder name**
   - Use exact casing from `src/widgets/`
   - Makes it easy to find related code

3. **All lowercase**
   - Avoid capitalization issues across operating systems

4. **Use hyphens, not underscores or spaces**
   - `john-doe-todolist` ✅
   - `john_doe_todolist` ❌
   - `john doe todolist` ❌

### Examples

| Student Name | Widget | Branch Name |
|--------------|--------|-------------|
| Sarah Smith | ToggleSwitch | `sarah-smith-toggleswitch` |
| Mike Johnson | TodoList | `mike-johnson-todolist` |
| Anna Garcia | WeatherWidget | `anna-garcia-weatherwidget` |
| Chen Li | ColorPicker | `chen-li-colorpicker` |
| Alex O'Brien | FormValidator | `alex-obrien-formvalidator` |

### What If I Made a Mistake?

If you created a branch with the wrong name:

```bash
# Rename your current branch
git branch -m old-branch-name new-correct-name

# Delete the old branch on GitHub
git push origin --delete old-branch-name

# Push the renamed branch
git push -u origin new-correct-name
```

## Making Changes

### During Initial Development

```bash
# Make changes to your files
# Save in your editor

# Check what changed
git status
git diff

# Stage and commit
git add .
git commit -m "feat: add increment functionality"

# Push
git push
```

### After Receiving Feedback

If reviewer requests changes:

```bash
# Make the requested changes
# Save files

# Stage and commit
git add .
git commit -m "fix: address PR feedback - improve error handling"

# Push (updates the same PR automatically)
git push
```

**Important:** Pushing to your branch automatically updates the open PR!

### Making Multiple Commits

It's OK to make multiple commits:

```bash
git commit -m "feat: add basic counter structure"
# ... more work ...
git commit -m "feat: add increment/decrement buttons"
# ... more work ...
git commit -m "style: improve button styling"
# ... more work ...
git commit -m "test: verify counter functionality"

git push  # Pushes all commits
```

## Pulling Latest Changes

### Why Pull from Main?

Your classmates are merging their widgets. You need their changes to:
- Avoid conflicts
- See their widgets on the dashboard
- Ensure your widget works with the latest code

### When to Pull

Pull from main:
- Before starting work each day
- Before creating a PR
- When told "main branch has been updated"
- If you see merge conflicts

### How to Pull

#### Option 1: Update Main and Rebase (Recommended)

```bash
# Save your work first
git add .
git commit -m "wip: save current progress"

# Switch to main
git checkout main

# Pull latest changes
git pull origin main

# Switch back to your branch
git checkout your-branch-name

# Rebase onto updated main
git rebase main
```

**What is rebase?**
- Replays your commits on top of the latest main
- Creates a clean, linear history
- Avoids merge commits

#### Option 2: Merge Main into Your Branch

```bash
# On your branch
git checkout your-branch-name

# Fetch latest from GitHub
git fetch origin

# Merge main into your branch
git merge origin/main
```

#### Option 3: Pull and Merge (Simple)

```bash
# On your branch
git pull origin main
```

This fetches and merges in one command.

### After Pulling

```bash
# Test your widget still works
npm run dev

# Check for any issues
npm run lint
npm test
```

## Handling Merge Conflicts

### What is a Merge Conflict?

A conflict occurs when:
- You changed a file
- Someone else changed the same file
- Git can't automatically merge the changes

### Example Conflict

You'll see something like:

```bash
$ git pull origin main
Auto-merging src/widgetConfig.js
CONFLICT (content): Merge conflict in src/widgetConfig.js
Automatic merge failed; fix conflicts and then commit the result.
```

### How to Resolve Conflicts

#### Step 1: Identify Conflicted Files

```bash
git status

# Shows:
# Unmerged paths:
#   both modified:   src/widgetConfig.js
```

#### Step 2: Open the Conflicted File

The file will have conflict markers:

```javascript
// src/widgetConfig.js

export const widgets = [
  {
    id: 'simple-counter',
    name: 'Simple Counter',
    enabled: true
  },
<<<<<<< HEAD
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    enabled: true,
    author: 'Your Name'
  }
=======
  {
    id: 'color-picker',
    name: 'Color Picker',
    enabled: true,
    author: 'Other Student'
  }
>>>>>>> main
];
```

**Markers explained:**
- `<<<<<<< HEAD` - Your changes start here
- `=======` - Separator between your changes and theirs
- `>>>>>>> main` - Their changes end here

#### Step 3: Resolve the Conflict

Edit the file to keep both changes:

```javascript
// src/widgetConfig.js

export const widgets = [
  {
    id: 'simple-counter',
    name: 'Simple Counter',
    enabled: true
  },
  {
    id: 'toggle-switch',
    name: 'Toggle Switch',
    enabled: true,
    author: 'Your Name'
  },
  {
    id: 'color-picker',
    name: 'Color Picker',
    enabled: true,
    author: 'Other Student'
  }
];
```

**Remove the conflict markers** (`<<<<<<<`, `=======`, `>>>>>>>`).

#### Step 4: Mark as Resolved

```bash
# Stage the resolved file
git add src/widgetConfig.js

# Check status
git status

# Should show:
# All conflicts fixed but you are still merging.
```

#### Step 5: Complete the Merge

```bash
# Commit the merge
git commit -m "merge: resolve conflict with main branch"

# Push
git push
```

### Tips for Avoiding Conflicts

1. **Pull frequently** - Get latest changes often
2. **Communicate** - Tell classmates if editing shared files
3. **Small commits** - Easier to resolve conflicts
4. **Work on your widget only** - Don't edit other widgets
5. **Use widgetConfig carefully** - Most common conflict point

### Getting Help with Conflicts

If stuck:

```bash
# Abort the merge and start over
git merge --abort

# Or abort a rebase
git rebase --abort
```

Then ask for help from your instructor!

## Code Review Process

### What Happens During Review

Your instructor will:

1. **Check functionality**
   - Does the widget work as expected?
   - Are all requirements met?

2. **Review code quality**
   - Is code clean and readable?
   - Are React hooks used correctly?
   - Are there any bugs or issues?

3. **Check best practices**
   - Proper state management
   - Component structure
   - Code comments

4. **Test edge cases**
   - Error handling
   - Boundary conditions

### Possible Outcomes

#### 1. Approved

```
✅ Approved - Ready to merge!
```

Your PR can be merged to main. See [After PR is Approved](#after-pr-is-approved).

#### 2. Changes Requested

```
🔄 Changes requested
```

Reviewer leaves comments on specific lines or files.

**What to do:**
1. Read all feedback carefully
2. Make requested changes
3. Commit and push:
   ```bash
   git add .
   git commit -m "fix: address review feedback"
   git push
   ```
4. Reply to comments (optional)
5. Re-request review

#### 3. Comment (No Action Required)

```
💬 Commented
```

Reviewer left suggestions but no changes required.

### Responding to Feedback

**Good response:**
```markdown
Thanks for the feedback! I've made the following changes:
- Fixed the state update issue in handleIncrement
- Added error handling for invalid inputs
- Improved button accessibility with aria-labels

Ready for another review!
```

**Pushing Changes Updates PR:**

Remember: Every push to your branch automatically updates the PR!

```bash
# No need to create a new PR
git push  # This updates the existing PR
```

## After PR is Approved

### Step 1: Merge Your PR

Two options:

#### Option A: Instructor Merges (Common)

Your instructor will merge your PR. You'll receive a notification.

#### Option B: You Merge (If Allowed)

1. Go to your PR on GitHub
2. Click "Merge pull request"
3. Confirm merge
4. Click "Delete branch" (clean up)

### Step 2: Update Your Local Repository

```bash
# Switch to main branch
git checkout main

# Pull the merged changes
git pull origin main

# Your widget is now in main!
```

### Step 3: Delete Your Feature Branch

Local cleanup:

```bash
# Delete local branch (you're on main now)
git branch -d firstname-lastname-widgetname

# If it says branch not fully merged
git branch -D firstname-lastname-widgetname  # Force delete
```

Remote cleanup (if not already deleted):

```bash
# Delete remote branch
git push origin --delete firstname-lastname-widgetname
```

### Step 4: Verify Everything

```bash
# Check branches
git branch

# Should only show:
# * main

# Start dev server
npm run dev

# Check dashboard - your widget should be there!
```

### Step 5: Celebrate!

Your widget is now part of the project! Good job! 🎉

### Working on Another Widget

If you're assigned another widget:

```bash
# Make sure you're on main
git checkout main

# Pull latest
git pull origin main

# Create new branch for new widget
git checkout -b firstname-lastname-newwidget

# Start the process again!
```

## Common Git Commands Reference

### Checking Status

```bash
# See what's changed
git status

# See specific changes
git diff

# See commit history
git log

# See commit history (one line per commit)
git log --oneline

# See branches
git branch

# See remotes
git remote -v
```

### Working with Branches

```bash
# Create new branch
git checkout -b branch-name

# Switch to existing branch
git checkout branch-name

# Create branch without switching
git branch branch-name

# Delete local branch
git branch -d branch-name

# Delete remote branch
git push origin --delete branch-name

# Rename current branch
git branch -m new-name
```

### Staging and Committing

```bash
# Stage specific file
git add filename.js

# Stage all changes
git add .

# Stage all JS files
git add "*.js"

# Unstage file
git restore --staged filename.js

# Discard changes in file
git restore filename.js

# Commit staged changes
git commit -m "commit message"

# Amend last commit (change message or add files)
git commit --amend
```

### Pushing and Pulling

```bash
# Push to remote (first time)
git push -u origin branch-name

# Push (subsequent times)
git push

# Pull from main
git pull origin main

# Fetch without merging
git fetch origin

# Pull and rebase
git pull --rebase origin main
```

### Undoing Things

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Discard all local changes
git reset --hard origin/branch-name

# Revert a commit (creates new commit)
git revert commit-hash
```

### Getting Help

```bash
# Help for any command
git help
git help commit
git help push
```

## Best Practices

### Do's

✅ **Pull before you start work**
```bash
git checkout main
git pull origin main
git checkout -b my-branch
```

✅ **Commit often with meaningful messages**
```bash
git commit -m "feat: add increment button"
git commit -m "style: improve button colors"
git commit -m "fix: prevent negative counts"
```

✅ **Test before committing**
```bash
npm run dev  # Visual test
npm test     # Run tests
npm run lint # Check code style
git add .
git commit -m "feat: complete SimpleCounter"
```

✅ **Keep commits focused**
- One feature/fix per commit
- Makes it easier to review
- Easier to revert if needed

✅ **Write clear commit messages**
- Present tense: "add" not "added"
- Descriptive: what and why
- Reference issues: "fix: resolve #123"

✅ **Communicate with team**
- Tell classmates if editing shared files
- Ask for help when stuck
- Review others' code

### Don'ts

❌ **Don't commit directly to main**
```bash
# Always work on a branch!
git checkout -b my-branch
```

❌ **Don't commit sensitive data**
- API keys
- Passwords
- Personal information
- Use `.env` files (already in `.gitignore`)

❌ **Don't commit generated files**
- `node_modules/` (already in `.gitignore`)
- Build files
- Log files

❌ **Don't use unclear commit messages**
```bash
# Bad
git commit -m "stuff"
git commit -m "fix"
git commit -m "asdf"

# Good
git commit -m "feat: implement counter increment"
git commit -m "fix: resolve state update issue"
```

❌ **Don't force push to shared branches**
```bash
# Never do this on main or someone else's branch
git push --force  # Dangerous!
```

❌ **Don't panic if something goes wrong**
- Git has safeguards
- Most things are recoverable
- Ask for help!

## Troubleshooting

### "I'm on the wrong branch!"

```bash
# Save your changes
git add .
git commit -m "wip: save work"

# Switch to correct branch
git checkout correct-branch-name

# Bring your changes over
git cherry-pick commit-hash
```

Or:

```bash
# Don't commit, just stash
git stash

# Switch branches
git checkout correct-branch-name

# Apply changes
git stash pop
```

### "I committed to main by mistake!"

```bash
# Create a branch from current state
git branch my-branch-name

# Reset main to match remote
git reset --hard origin/main

# Switch to your branch
git checkout my-branch-name

# Your changes are now on correct branch!
```

### "I need to undo my last commit"

```bash
# Keep the changes, undo commit
git reset --soft HEAD~1

# Discard changes and commit
git reset --hard HEAD~1
```

### "My branch is behind main"

```bash
# Update your branch
git checkout main
git pull origin main
git checkout your-branch
git merge main
```

### "I have uncommitted changes but need to switch branches"

```bash
# Option 1: Commit them
git add .
git commit -m "wip: save current work"
git checkout other-branch

# Option 2: Stash them
git stash
git checkout other-branch
# Later: git stash pop
```

### "Push rejected - remote contains work"

```bash
# Someone pushed to your branch
# Pull first, then push
git pull origin your-branch
git push
```

### "I can't switch branches - uncommitted changes"

Either commit or stash:

```bash
# Commit
git add .
git commit -m "wip"

# Or stash
git stash
```

### "Git says 'fatal: not a git repository'"

```bash
# You're not in the project folder
cd path/to/react-hooks-dashboard

# Or initialize git (if needed)
git init
```

### "Everything is broken, start over?"

```bash
# Discard ALL local changes
git reset --hard origin/main

# Or delete and re-clone
cd ..
rm -rf react-hooks-dashboard
git clone <repository-url>
cd react-hooks-dashboard
npm install
```

## Quick Reference Cheat Sheet

```bash
# Daily workflow
git checkout main           # Switch to main
git pull origin main        # Get latest changes
git checkout -b my-branch   # Create feature branch
# ... make changes ...
git add .                   # Stage changes
git commit -m "message"     # Commit
git push -u origin my-branch # Push (first time)
# ... create PR on GitHub ...

# After PR approved
git checkout main           # Back to main
git pull origin main        # Get merged changes
git branch -d my-branch     # Delete local branch

# Staying updated
git fetch origin            # Check for updates
git pull origin main        # Get updates

# Fixing mistakes
git status                  # See what's happening
git log --oneline           # See recent commits
git reset --soft HEAD~1     # Undo last commit (keep changes)
git stash                   # Save changes temporarily
git stash pop               # Restore stashed changes
```

## Getting Help

### Resources

- **Git Documentation**: [git-scm.com/doc](https://git-scm.com/doc)
- **GitHub Guides**: [guides.github.com](https://guides.github.com)
- **Git Cheat Sheet**: [education.github.com/git-cheat-sheet-education.pdf](https://education.github.com/git-cheat-sheet-education.pdf)

### When Stuck

1. **Read the error message carefully** - Git is usually helpful
2. **Search the error** - Someone has likely had the same issue
3. **Ask classmates** - They might know the answer
4. **Ask instructor** - We're here to help!

### Creating a Help Issue

If you need help, create an issue with:

```markdown
**What I was trying to do:**
I was trying to push my branch to GitHub

**What command I ran:**
git push origin john-doe-simplecounter

**Error message:**
error: failed to push some refs to 'github.com:user/repo.git'

**What I've tried:**
- Pulled from main
- Checked branch name

**Git status output:**
On branch john-doe-simplecounter
Your branch is up to date with 'origin/john-doe-simplecounter'.
```

---

**You've got this!** Git can seem complex at first, but with practice it becomes second nature. Don't be afraid to ask questions!
