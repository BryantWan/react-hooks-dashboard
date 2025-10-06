# React Hooks Dashboard - Student Guide

**Welcome to the React Hooks Workshop!** 🎉

This guide will walk you through everything you need to complete your widget and succeed in this project.

---

## 📋 Table of Contents

1. [What You'll Learn](#what-youll-learn)
2. [Example Widgets](#example-widgets)
3. [Getting Started](#getting-started)
4. [Choosing Your Widget](#choosing-your-widget)
5. [Understanding Difficulty Levels](#understanding-difficulty-levels)
6. [Step-by-Step Workflow](#step-by-step-workflow)
7. [How to Implement Your Widget](#how-to-implement-your-widget)
8. [Testing Your Widget](#testing-your-widget)
9. [Enabling Your Widget](#enabling-your-widget)
10. [Creating a Pull Request](#creating-a-pull-request)
11. [Getting Help](#getting-help)
12. [Common Mistakes](#common-mistakes)
13. [Tips for Success](#tips-for-success)

---

## 🎯 What You'll Learn

By completing this workshop, you will master:

- ✅ **useState Hook** - Managing component state
- ✅ **useEffect Hook** - Handling side effects
- ✅ **Event Handling** - Responding to user interactions
- ✅ **Array Methods** - map(), filter(), reduce()
- ✅ **Async/Await** - Working with APIs
- ✅ **Git Workflow** - Professional collaboration
- ✅ **React Best Practices** - Clean, maintainable code

---

## ✨ Example Widgets

**Before you start building**, check out the example widgets available for reference!

Three fully-functional example widgets are included in the project. They are **disabled by default** but you can enable them to see working examples:

### 🎮 Pokemon Battle
- **What it does**: Battle random Pokemon using the PokeAPI
- **Concepts shown**: useState, useEffect, fetch API, game logic, async/await
- **Learn from it**: See how to fetch data from external APIs and manage complex game state
- **To enable**: In `src/widgetConfig.js`, change `PokemonBattle` → `enabled: true`

### 💭 Quote Generator
- **What it does**: Displays random inspirational quotes with auto-refresh
- **Concepts shown**: useState, useEffect, API calls, auto-refresh with intervals, error handling
- **Learn from it**: See how to implement auto-refresh and share functionality
- **To enable**: In `src/widgetConfig.js`, change `QuoteGenerator` → `enabled: true`

### 🌌 NASA Picture of the Day
- **What it does**: Shows NASA's daily astronomy picture with date selection
- **Concepts shown**: useState, useEffect, NASA API, date inputs, media handling
- **Learn from it**: See how to handle different media types (images and videos)
- **To enable**: In `src/widgetConfig.js`, change `NasaPicture` → `enabled: true`

**💡 How to use these examples:**
1. Enable one or more example widgets in `widgetConfig.js`
2. Run the app (`npm run dev`) and interact with the widgets
3. Look at their source code in `src/widgets/examples/`
4. Use them as reference when building your own widget
5. Notice the patterns: state management, event handlers, useEffect hooks, error handling

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- ✅ Node.js 18+ ([Download](https://nodejs.org))
- ✅ Git ([Download](https://git-scm.com))
- ✅ VS Code (recommended) ([Download](https://code.visualstudio.com))

### Initial Setup

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone <repository-url>
   cd react-hooks-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Go to: `http://localhost:5173`
   - You should see the dashboard (may be empty initially)

### Enable DevTools to See All Widgets

Click the **🛠️ DevTools** button in the bottom-right corner, then check **"Show All Widgets"** to see what's available.

---

## 🎯 Choosing Your Widget

### Check Your Assignment

Your instructor will assign you a specific widget. Check your GitHub issue to find:
- **Widget Name** - What you're building
- **Difficulty Level** - Beginner, Intermediate, or Advanced
- **Time Estimate** - How long it should take
- **Concepts Taught** - What you'll learn

### Widget Categories

**Beginner useState (1-6)** - 15-30 minutes
- SimpleCounter, ToggleSwitch, ColorPicker, CharacterCounter, TemperatureConverter, TagSelector

**Intermediate useState (7-12)** - 35-50 minutes
- TodoList, FormValidator, ShoppingCart, FilterPanel, TabNavigation, ModalManager

**useEffect Basics (13-18)** - 30-50 minutes
- CountdownTimer, LiveClock, ColorCycler, LocalStoragePersistence, AutoSaveForm, WindowSizeTracker

**Advanced useEffect (19-25)** - 45-70 minutes
- WeatherWidget, RandomUserProfile, LiveSearch, ChartWidget, DataTable, NotificationCenter, ActivityTracker

---

## 📊 Understanding Difficulty Levels

Each widget comes in **3 versions**. Choose based on your comfort level:

### Level 1: Starter (Easiest) ⭐
**File:** `WidgetName.starter.jsx`

**Best for:** React beginners or if you're new to hooks

**What you get:**
- 60-70% complete code
- Clear TODO comments
- Helpful hints
- Just fill in the blanks

**Example:**
```jsx
// TODO: Initialize state with useState
// Hint: const [count, setCount] = useState(0);

```

### Level 2: Template (Medium) ⭐⭐
**File:** `WidgetName.template.jsx`

**Best for:** Some React experience

**What you get:**
- 40-50% complete code
- Function signatures
- Structure and TODOs
- Implement the logic

**Example:**
```jsx
const handleClick = () => {
  // TODO: Implement click handler
  // Update the state here
};
```

### Level 3: Spec (Hardest) ⭐⭐⭐
**File:** `WidgetName.spec.md`

**Best for:** Confident with React

**What you get:**
- Requirements only
- No code provided
- Build from scratch
- Acceptance criteria

---

## 🛠️ Step-by-Step Workflow

### Step 1: Create Your Branch

```bash
# Branch naming: firstname-lastname-widgetname
git checkout -b john-doe-simplecounter
```

**Example branch names:**
- `sarah-smith-todolist`
- `alex-johnson-weatherwidget`
- `emma-brown-colorpicker`

### Step 2: Navigate to Your Widget

```bash
cd src/widgets/YourWidget
```

**Example:**
```bash
cd src/widgets/SimpleCounter
```

### Step 3: Read the README

```bash
# Read the widget documentation
cat README.md
```

This tells you:
- What the widget does
- What concepts you'll learn
- Acceptance criteria
- Implementation tips

### Step 4: Choose Your Difficulty Level

Pick the file that matches your skill:
- **Starter:** `WidgetName.starter.jsx`
- **Template:** `WidgetName.template.jsx`
- **Spec:** `WidgetName.spec.md`

### Step 5: Implement Your Widget

Open your chosen file in VS Code and complete the TODOs!

---

## 💻 How to Implement Your Widget

### Understanding the File Structure

Every widget file looks like this:

```jsx
import { useState } from 'react'; // 1. Imports

/**
 * Widget Name - STARTER VERSION
 * Learning Objectives:
 * - What you'll learn
 */
function WidgetName() { // 2. Component definition

  // 3. State declarations (YOU IMPLEMENT)
  // TODO: Your state here

  // 4. Event handlers (YOU IMPLEMENT)
  const handleSomething = () => {
    // TODO: Your logic here
  };

  // 5. JSX Return (PROVIDED)
  return (
    <div className="...">
      {/* UI is already built for you */}
    </div>
  );
}

export default WidgetName; // 6. Export
```

### Following the TODOs

Each TODO has 3 parts:

1. **Instruction** - What to do
2. **Hint** - How to do it
3. **Space** - Where to write code

**Example:**
```jsx
// TODO: Initialize state with useState
// Create a state variable called 'count' with initial value of 0
// Hint: const [count, setCount] = useState(0);

⬅️ Write your code here!
```

### Testing as You Go

**Important:** Test frequently!

1. Save your file (`Cmd/Ctrl + S`)
2. Check the browser (should auto-reload)
3. Click buttons, type in inputs
4. Check the browser console for errors

**Keyboard Shortcuts:**
- Save: `Cmd/Ctrl + S`
- Browser DevTools: `F12` or `Cmd/Opt + I`

---

## 🧪 Testing Your Widget

### Visual Testing

1. **Start the dev server** (if not running)
   ```bash
   npm run dev
   ```

2. **Open DevTools panel** (bottom-right button)

3. **Check "Show All Widgets"** to see yours

4. **Interact with your widget**
   - Click all buttons
   - Type in all inputs
   - Test edge cases (empty inputs, large numbers, etc.)

### Check for Errors

Open the browser console (`F12`) and look for:
- ❌ Red error messages
- ⚠️ Yellow warnings
- ✅ No errors = good!

### Common Issues to Test

**For All Widgets:**
- Does it display correctly?
- Do buttons work when clicked?
- Does state update visibly?

**For Input Widgets:**
- Can you type?
- Does clearing the input work?
- What about very long text?

**For Counter/Number Widgets:**
- Can you go negative?
- What happens at zero?
- Do large numbers work?

**For List Widgets:**
- Can you add items?
- Can you remove items?
- What if the list is empty?

---

## ✅ Enabling Your Widget

Once your widget works, enable it in the dashboard:

### Edit widgetConfig.js

1. **Open the file**
   ```bash
   # From project root
   open src/widgetConfig.js
   ```

2. **Find your widget** in the registry

3. **Update two fields:**
   ```javascript
   SimpleCounter: {
     // ... other config ...
     author: 'Your Name',      // ← Add your name
     enabled: true,            // ← Change from false to true
   },
   ```

4. **Save and check** - Your widget should now appear on the dashboard!

---

## 📤 Creating a Pull Request

When your widget is complete and working:

### 1. Commit Your Changes

```bash
# Add all changed files
git add .

# Create a commit with a good message
git commit -m "feat: implement SimpleCounter widget"
```

**Good commit messages:**
- `feat: implement TodoList with add/remove functionality`
- `feat: add WeatherWidget with API integration`
- `feat: create ColorPicker with 5 color options`

### 2. Push to GitHub

```bash
# Push your branch
git push origin firstname-lastname-widgetname
```

Example:
```bash
git push origin john-doe-simplecounter
```

### 3. Create the Pull Request

1. Go to the repository on GitHub
2. Click **"Compare & pull request"** (yellow banner)
3. Fill out the PR template:
   - Your name
   - Widget name
   - What you built
   - Check all boxes in the checklist
4. Click **"Create pull request"**

### 4. Add Screenshots (Optional but Nice!)

Take a screenshot of your working widget and add it to the PR description.

---

## 🆘 Getting Help

### When You're Stuck

**Try these in order:**

1. **Read the TODO comments carefully** - The answer might be in the hint!

2. **Check the widget README** - It has examples and explanations

3. **Look at docs/WIDGET_GUIDE.md** - Has React patterns and examples

4. **Search for errors** - Copy error messages into Google

5. **Ask a neighbor** - Collaboration is encouraged!

6. **Check existing widgets** - Look at how others solved similar problems

7. **Create a "help-needed" issue** - Use the GitHub template

8. **Ask the instructor** - We're here to help!

### Common Error Messages

**"Cannot read property 'map' of undefined"**
- Your array state isn't initialized
- Fix: `const [items, setItems] = useState([])`

**"Too many re-renders"**
- You're calling a setter function directly in render
- Fix: Wrap in an arrow function: `onClick={() => setCount(0)}`

**"count is not defined"**
- You forgot to declare your state
- Fix: Add `const [count, setCount] = useState(0);`

---

## ⚠️ Common Mistakes

### Mistake 1: Calling Functions Instead of Passing Them

**Wrong:**
```jsx
<button onClick={handleClick()}>  ❌
```

**Right:**
```jsx
<button onClick={handleClick}>  ✅
// OR
<button onClick={() => handleClick()}>  ✅
```

### Mistake 2: Modifying State Directly

**Wrong:**
```jsx
count = count + 1;  ❌
items.push(newItem);  ❌
```

**Right:**
```jsx
setCount(count + 1);  ✅
setItems([...items, newItem]);  ✅
```

### Mistake 3: Forgetting Dependencies in useEffect

**Wrong:**
```jsx
useEffect(() => {
  fetchData(userId);
}, []);  ❌ Missing userId dependency
```

**Right:**
```jsx
useEffect(() => {
  fetchData(userId);
}, [userId]);  ✅
```

### Mistake 4: Not Cleaning Up useEffect

**Wrong:**
```jsx
useEffect(() => {
  const timer = setInterval(...);
  // ❌ No cleanup!
}, []);
```

**Right:**
```jsx
useEffect(() => {
  const timer = setInterval(...);
  return () => clearInterval(timer);  ✅
}, []);
```

---

## 💡 Tips for Success

### Time Management

1. **Don't rush** - Quality over speed
2. **Take breaks** - Step away if stuck
3. **Plan first** - Think before coding
4. **Test early** - Don't wait until the end

### Code Quality

1. **Use clear variable names**
   - ❌ `const x = ...`
   - ✅ `const todoText = ...`

2. **Keep functions small**
   - Each function should do ONE thing

3. **Add comments for complex logic**
   ```jsx
   // Calculate total using reduce to sum all item prices
   const total = items.reduce((sum, item) => sum + item.price, 0);
   ```

4. **Format your code**
   - Use consistent indentation
   - Add spaces around operators

### Collaboration

1. **Help your classmates** - Teaching helps you learn
2. **Ask questions** - No question is too basic
3. **Share solutions** - After completing, help others
4. **Review PRs** - Learn from others' code

### Learning Goals

Remember, the goal is to **learn**, not just to finish:
- ✅ Understand WHY code works
- ✅ Experiment with different approaches
- ✅ Make mistakes and learn from them
- ✅ Ask "what if?" questions

---

## 📚 Additional Resources

### React Documentation
- [React Hooks Overview](https://react.dev/reference/react)
- [useState Hook](https://react.dev/reference/react/useState)
- [useEffect Hook](https://react.dev/reference/react/useEffect)

### In This Project
- **Widget Guide:** `docs/WIDGET_GUIDE.md` - React patterns explained
- **Setup Guide:** `docs/SETUP.md` - Installation help
- **Workflow Guide:** `docs/WORKFLOW.md` - Git commands
- **Issues:** `docs/ISSUES.md` - All widget assignments

### Need More Practice?
- [React Tutorial](https://react.dev/learn)
- [JavaScript.info](https://javascript.info) - JS refresher
- [MDN Web Docs](https://developer.mozilla.org) - Web reference

---

## ✅ Checklist Before Submitting

Before creating your pull request, verify:

**Code:**
- [ ] All TODO comments are completed
- [ ] Widget displays correctly in browser
- [ ] All buttons/inputs work as expected
- [ ] No console errors (check F12)
- [ ] Code follows the provided structure

**Configuration:**
- [ ] `widgetConfig.js` updated with your name
- [ ] `enabled: true` set in widgetConfig.js
- [ ] Widget appears on dashboard when DevTools "Show All" is checked

**Git:**
- [ ] Committed with clear message
- [ ] Pushed to your branch
- [ ] Pull request created
- [ ] PR template filled out completely

**Testing:**
- [ ] Tested in browser manually
- [ ] Tested edge cases (empty inputs, etc.)
- [ ] Checked responsive design (resize window)
- [ ] Verified no errors in console

---

## 🎉 After You Finish

Once your PR is merged:

1. **Celebrate!** 🎊 You built a working React component!
2. **Help others** - Share what you learned
3. **Explore more** - Try a harder widget
4. **Review code** - Look at other students' widgets
5. **Take the quiz** (if instructor provides one)

---

## 🏆 Success Stories

> "I didn't know React before this workshop. After building the TodoList widget, I finally understand hooks!" - Previous Student

> "Starting with the SimpleCounter starter file gave me confidence. Then I did the ShoppingCart template version and learned so much!" - Previous Student

> "The TODO comments with hints were perfect - not too easy, not too hard." - Previous Student

---

## 📞 Quick Reference

**Start development:**
```bash
npm run dev
```

**Create branch:**
```bash
git checkout -b firstname-lastname-widgetname
```

**Commit and push:**
```bash
git add .
git commit -m "feat: implement WidgetName"
git push origin branch-name
```

**Enable widget:**
Edit `src/widgetConfig.js`:
- Add your name
- Set `enabled: true`

---

**Good luck! You've got this!** 🚀

Remember: **Learning is the goal, not perfection.** Everyone struggles at first. That's how we learn!

---

*Last Updated: October 6, 2025*
*Questions? Check docs/ or create a help-needed issue on GitHub.*
