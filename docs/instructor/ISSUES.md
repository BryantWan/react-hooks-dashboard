# Widget Assignments

This document contains pre-populated widget assignments for all 25 widgets in the React Hooks Dashboard project. Each widget includes complete specifications that can be used to create GitHub issues.

## Table of Contents

- [How to Use This Document](#how-to-use-this-document)
- [Beginner useState Widgets (6)](#beginner-usestate-widgets)
- [Intermediate useState Widgets (6)](#intermediate-usestate-widgets)
- [useEffect Basics Widgets (6)](#useeffect-basics-widgets)
- [Advanced useEffect Widgets (7)](#advanced-useeffect-widgets)

## How to Use This Document

### For Instructors

Create GitHub issues from these templates:

1. Go to your repository on GitHub
2. Click "Issues" → "New Issue"
3. Copy the content from each widget section below
4. Paste into the issue
5. Add appropriate labels
6. Assign to student (or leave unassigned for students to claim)

### For Students

1. Browse available widgets below
2. Choose based on your skill level:
   - 🟢 **Beginner** - New to React hooks (15-30 min)
   - 🟡 **Intermediate** - Comfortable with basics (35-50 min)
   - 🔴 **Advanced** - Ready for challenges (45-70 min)
3. Check if the widget is already assigned
4. Claim the widget by commenting on the issue
5. Follow the implementation instructions

---

## Beginner useState Widgets

### 1. SimpleCounter - Basic Counter Widget

**Title:** `[SimpleCounter] - Build Basic Counter Widget`

**Description:**

Build a simple counter widget that demonstrates fundamental useState concepts. This is the perfect starting point for learning React hooks.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 15-20 minutes

**Concepts Taught:**
- Basic useState hook usage
- State initialization
- State updates with setter functions
- Event handlers
- Button click handling

**Acceptance Criteria:**

- [ ] Display current count value (starts at 0)
- [ ] Implement increment button (+1)
- [ ] Implement decrement button (-1)
- [ ] Implement reset button (back to 0)
- [ ] All buttons work correctly
- [ ] Count displays in large, readable font
- [ ] Widget is styled with Tailwind CSS
- [ ] No console errors

**Implementation Levels:**

Choose one approach:
1. **Starter** - Use `SimpleCounter.starter.jsx` (90% complete, fill in TODOs)
2. **Template** - Use `SimpleCounter.template.jsx` (component shell provided)
3. **From Spec** - Build from scratch using this specification

**Files to Work On:**
```
src/widgets/SimpleCounter/SimpleCounter.starter.jsx
src/widgetConfig.js (enable widget)
```

**Resources:**
- [useState documentation](https://react.dev/reference/react/useState)
- See WIDGET_GUIDE.md - useState section
- Example: Look at other counter examples online

**Labels:** `beginner`, `useState`, `good-first-issue`

---

### 2. ToggleSwitch - ON/OFF Toggle Widget

**Title:** `[ToggleSwitch] - Build Toggle Switch Widget`

**Description:**

Create a toggle switch widget that switches between ON and OFF states. Learn about boolean state management and conditional rendering.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 20-25 minutes

**Concepts Taught:**
- Boolean state management
- Toggling state (true/false)
- Conditional rendering
- Dynamic CSS classes
- Visual state feedback

**Acceptance Criteria:**

- [ ] Display current status (ON or OFF)
- [ ] Implement toggle button/switch
- [ ] Switch changes state on click
- [ ] Visual feedback shows current state (color changes)
- [ ] Switch animates smoothly
- [ ] ON state shows green, OFF state shows gray
- [ ] Status text displays prominently
- [ ] Widget is responsive and centered

**Implementation Details:**

State management:
```javascript
const [isOn, setIsOn] = useState(false);
```

Toggle function:
```javascript
const handleToggle = () => setIsOn(!isOn);
// or
const handleToggle = () => setIsOn(prev => !prev);
```

Visual indicators:
- Background color changes based on state
- Switch circle moves left/right
- Text displays "ON" or "OFF"

**Files to Work On:**
```
src/widgets/ToggleSwitch/ToggleSwitch.starter.jsx
src/widgets/ToggleSwitch/ToggleSwitch.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- Tailwind CSS conditional classes

**Labels:** `beginner`, `useState`, `ui`

---

### 3. ColorPicker - Color Selection Widget

**Title:** `[ColorPicker] - Build Color Picker Widget`

**Description:**

Build a color picker that allows users to select from predefined colors. Learn about state management with primitive values and mapping over arrays.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 20-30 minutes

**Concepts Taught:**
- Managing string state
- Mapping over arrays
- Event handling with parameters
- Dynamic inline styles
- Displaying selected values

**Acceptance Criteria:**

- [ ] Display 5-6 color options as buttons
- [ ] Show currently selected color in large preview box
- [ ] Display color name and hex code
- [ ] Clicking color button updates selection
- [ ] Preview box background changes to selected color
- [ ] Default color selected on load
- [ ] Color buttons are visually distinct
- [ ] Hover effects on color buttons

**Implementation Details:**

Color data structure:
```javascript
const colors = [
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Red', hex: '#ef4444' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Yellow', hex: '#f59e0b' },
  { name: 'Purple', hex: '#8b5cf6' },
  { name: 'Pink', hex: '#ec4899' }
];
```

State:
```javascript
const [selectedColor, setSelectedColor] = useState('#3b82f6');
```

**Files to Work On:**
```
src/widgets/ColorPicker/ColorPicker.starter.jsx
src/widgets/ColorPicker/ColorPicker.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Inline styles in React](https://react.dev/reference/react-dom/components/common#applying-css-styles)
- CSS colors and hex codes

**Labels:** `beginner`, `useState`, `styling`

---

### 4. CharacterCounter - Text Input with Counter

**Title:** `[CharacterCounter] - Build Character Counter Widget`

**Description:**

Create a text input that displays the character count in real-time. Learn about controlled inputs and deriving values from state.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 20-25 minutes

**Concepts Taught:**
- Controlled input components
- String state management
- Handling input changes
- Deriving values from state (computed values)
- Real-time updates

**Acceptance Criteria:**

- [ ] Text input field
- [ ] Display character count (updates as user types)
- [ ] Display word count
- [ ] Show remaining characters (max: 200)
- [ ] Warn when approaching limit (yellow at 180, red at 195)
- [ ] Clear button to reset input
- [ ] Character count updates in real-time
- [ ] Input is styled and user-friendly

**Implementation Details:**

State:
```javascript
const [text, setText] = useState('');
```

Derived values:
```javascript
const charCount = text.length;
const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
const remaining = 200 - charCount;
```

Input handling:
```javascript
const handleChange = (e) => {
  if (e.target.value.length <= 200) {
    setText(e.target.value);
  }
};
```

**Files to Work On:**
```
src/widgets/CharacterCounter/CharacterCounter.starter.jsx
src/widgets/CharacterCounter/CharacterCounter.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Controlled components](https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Input validation patterns

**Labels:** `beginner`, `useState`, `forms`

---

### 5. TemperatureConverter - Celsius/Fahrenheit Converter

**Title:** `[TemperatureConverter] - Build Temperature Converter Widget`

**Description:**

Build a temperature converter that converts between Celsius and Fahrenheit. Learn about state synchronization and mathematical operations.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 25-30 minutes

**Concepts Taught:**
- Managing multiple related inputs
- State synchronization
- Mathematical calculations
- Number input handling
- Input validation

**Acceptance Criteria:**

- [ ] Two input fields: Celsius and Fahrenheit
- [ ] Changing Celsius updates Fahrenheit automatically
- [ ] Changing Fahrenheit updates Celsius automatically
- [ ] Conversions are accurate
- [ ] Handle decimal values
- [ ] Display conversion formula
- [ ] Show both values clearly
- [ ] Handle edge cases (empty input, invalid numbers)

**Implementation Details:**

State:
```javascript
const [celsius, setCelsius] = useState('');
const [fahrenheit, setFahrenheit] = useState('');
```

Conversion formulas:
```javascript
// Celsius to Fahrenheit: (C × 9/5) + 32
const celsiusToFahrenheit = (c) => (c * 9/5) + 32;

// Fahrenheit to Celsius: (F - 32) × 5/9
const fahrenheitToCelsius = (f) => (f - 32) * 5/9;
```

Handlers:
```javascript
const handleCelsiusChange = (e) => {
  const value = e.target.value;
  setCelsius(value);

  if (value === '') {
    setFahrenheit('');
  } else {
    const f = celsiusToFahrenheit(parseFloat(value));
    setFahrenheit(f.toFixed(2));
  }
};
```

**Files to Work On:**
```
src/widgets/TemperatureConverter/TemperatureConverter.starter.jsx
src/widgets/TemperatureConverter/TemperatureConverter.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Number input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number)
- [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- Temperature conversion formulas

**Labels:** `beginner`, `useState`, `calculations`

---

### 6. TagSelector - Multi-Select Checkboxes

**Title:** `[TagSelector] - Build Tag Selector Widget`

**Description:**

Create a tag selector with multiple checkboxes. Learn about array state management and toggling items in arrays.

**Difficulty:** 🟢 Beginner

**Time Estimate:** 25-30 minutes

**Concepts Taught:**
- Array state management
- Adding/removing items from arrays
- Checkbox handling
- Rendering lists
- Array methods (includes, filter)

**Acceptance Criteria:**

- [ ] Display 6-8 tag options as checkboxes
- [ ] Users can select/deselect multiple tags
- [ ] Show count of selected tags
- [ ] Display selected tags prominently
- [ ] "Select All" button
- [ ] "Clear All" button
- [ ] Checkboxes update correctly
- [ ] Visual distinction for selected tags

**Implementation Details:**

Available tags:
```javascript
const availableTags = [
  'JavaScript',
  'React',
  'TypeScript',
  'CSS',
  'HTML',
  'Node.js',
  'Git',
  'Tailwind'
];
```

State:
```javascript
const [selectedTags, setSelectedTags] = useState([]);
```

Toggle function:
```javascript
const toggleTag = (tag) => {
  setSelectedTags(prev => {
    if (prev.includes(tag)) {
      return prev.filter(t => t !== tag);
    } else {
      return [...prev, tag];
    }
  });
};
```

**Files to Work On:**
```
src/widgets/TagSelector/TagSelector.starter.jsx
src/widgets/TagSelector/TagSelector.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
- [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Checkbox inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)

**Labels:** `beginner`, `useState`, `arrays`

---

## Intermediate useState Widgets

### 7. TodoList - Task Management Widget

**Title:** `[TodoList] - Build Todo List Widget`

**Description:**

Build a full-featured todo list with add, remove, and complete functionality. Learn about managing arrays of objects and CRUD operations.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 35-45 minutes

**Concepts Taught:**
- Managing complex array state
- CRUD operations (Create, Read, Update, Delete)
- Working with objects in arrays
- Unique ID generation
- Filtering and mapping arrays

**Acceptance Criteria:**

- [ ] Input field to add new todos
- [ ] Add button (or Enter key) creates todo
- [ ] Display list of todos
- [ ] Each todo has text and completed status
- [ ] Checkbox to toggle completed status
- [ ] Delete button for each todo
- [ ] Show count of completed vs total
- [ ] Empty state message when no todos
- [ ] Clear input after adding
- [ ] Prevent adding empty todos

**Implementation Details:**

State:
```javascript
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');
```

Todo structure:
```javascript
{
  id: Date.now(),  // or crypto.randomUUID()
  text: 'Learn React',
  completed: false
}
```

Operations:
```javascript
// Add
const addTodo = () => {
  if (inputValue.trim() === '') return;
  const newTodo = {
    id: Date.now(),
    text: inputValue,
    completed: false
  };
  setTodos([...todos, newTodo]);
  setInputValue('');
};

// Remove
const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
};

// Toggle
const toggleTodo = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id
      ? { ...todo, completed: !todo.completed }
      : todo
  ));
};
```

**Files to Work On:**
```
src/widgets/TodoList/TodoList.starter.jsx
src/widgets/TodoList/TodoList.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**Labels:** `intermediate`, `useState`, `crud`

---

### 8. FormValidator - Multi-Field Form with Validation

**Title:** `[FormValidator] - Build Form Validation Widget`

**Description:**

Create a registration form with real-time validation. Learn about form state management, validation logic, and error handling.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 40-50 minutes

**Concepts Taught:**
- Complex form state management
- Validation logic
- Error state management
- Conditional error messages
- Form submission handling

**Acceptance Criteria:**

- [ ] Username field (required, min 3 chars)
- [ ] Email field (required, valid email format)
- [ ] Password field (required, min 6 chars)
- [ ] Confirm password field (must match password)
- [ ] Real-time validation on blur
- [ ] Display specific error messages per field
- [ ] Submit button disabled when form invalid
- [ ] Success message on valid submission
- [ ] Clear form after successful submission

**Implementation Details:**

State:
```javascript
const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
});

const [errors, setErrors] = useState({});
const [touched, setTouched] = useState({});
```

Validation:
```javascript
const validate = (name, value) => {
  switch (name) {
    case 'username':
      if (!value) return 'Username is required';
      if (value.length < 3) return 'Username must be at least 3 characters';
      return '';

    case 'email':
      if (!value) return 'Email is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
      return '';

    case 'password':
      if (!value) return 'Password is required';
      if (value.length < 6) return 'Password must be at least 6 characters';
      return '';

    case 'confirmPassword':
      if (value !== formData.password) return 'Passwords do not match';
      return '';

    default:
      return '';
  }
};
```

**Files to Work On:**
```
src/widgets/FormValidator/FormValidator.starter.jsx
src/widgets/FormValidator/FormValidator.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- Email regex patterns

**Labels:** `intermediate`, `useState`, `forms`, `validation`

---

### 9. ShoppingCart - Cart with Quantities and Total

**Title:** `[ShoppingCart] - Build Shopping Cart Widget`

**Description:**

Build a shopping cart that manages products, quantities, and calculates totals. Learn about complex state updates and derived values.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 40-50 minutes

**Concepts Taught:**
- Managing cart state
- Quantity updates
- Calculating totals
- Array operations on complex objects
- Derived state (computed values)

**Acceptance Criteria:**

- [ ] Display list of available products
- [ ] Add to cart button for each product
- [ ] Cart shows added items with quantities
- [ ] Increase/decrease quantity buttons
- [ ] Remove from cart button
- [ ] Display item subtotals
- [ ] Display cart total
- [ ] Empty cart state
- [ ] Product count badge
- [ ] Cannot decrease quantity below 1

**Implementation Details:**

Products:
```javascript
const products = [
  { id: 1, name: 'Widget A', price: 29.99 },
  { id: 2, name: 'Widget B', price: 49.99 },
  { id: 3, name: 'Widget C', price: 19.99 },
  { id: 4, name: 'Widget D', price: 39.99 }
];
```

State:
```javascript
const [cart, setCart] = useState([]);
// Cart item: { id, name, price, quantity }
```

Operations:
```javascript
const addToCart = (product) => {
  const existingItem = cart.find(item => item.id === product.id);

  if (existingItem) {
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const updateQuantity = (id, delta) => {
  setCart(cart.map(item =>
    item.id === id
      ? { ...item, quantity: Math.max(1, item.quantity + delta) }
      : item
  ));
};

const removeFromCart = (id) => {
  setCart(cart.filter(item => item.id !== id));
};

const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
```

**Files to Work On:**
```
src/widgets/ShoppingCart/ShoppingCart.starter.jsx
src/widgets/ShoppingCart/ShoppingCart.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- Number formatting (toFixed)

**Labels:** `intermediate`, `useState`, `e-commerce`

---

### 10. FilterPanel - Multi-Filter Controls

**Title:** `[FilterPanel] - Build Filter Panel Widget`

**Description:**

Create a filter panel with multiple filter types (checkboxes, range, search). Learn about managing complex filter state and applying filters.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 45-50 minutes

**Concepts Taught:**
- Complex filter state
- Multiple filter types
- Combining filter logic
- Search functionality
- Range inputs

**Acceptance Criteria:**

- [ ] Search input (filters by name)
- [ ] Category checkboxes (multiple selection)
- [ ] Price range slider
- [ ] Display filtered item count
- [ ] Reset filters button
- [ ] Filters work together (AND logic)
- [ ] Live filtering (updates as user changes filters)
- [ ] Show active filter count

**Implementation Details:**

Sample data:
```javascript
const items = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Desk Chair', category: 'Furniture', price: 299 },
  // ... more items
];
```

State:
```javascript
const [filters, setFilters] = useState({
  search: '',
  categories: [],
  priceRange: [0, 1000]
});
```

Filtering logic:
```javascript
const filteredItems = items.filter(item => {
  // Search filter
  if (filters.search && !item.name.toLowerCase().includes(filters.search.toLowerCase())) {
    return false;
  }

  // Category filter
  if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
    return false;
  }

  // Price filter
  if (item.price < filters.priceRange[0] || item.price > filters.priceRange[1]) {
    return false;
  }

  return true;
});
```

**Files to Work On:**
```
src/widgets/FilterPanel/FilterPanel.starter.jsx
src/widgets/FilterPanel/FilterPanel.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [String methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Range input element

**Labels:** `intermediate`, `useState`, `filtering`

---

### 11. TabNavigation - Tab Switching Interface

**Title:** `[TabNavigation] - Build Tab Navigation Widget`

**Description:**

Build a tabbed interface with multiple content panels. Learn about managing active state and conditional content rendering.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 30-40 minutes

**Concepts Taught:**
- Active state management
- Conditional content rendering
- Dynamic styling
- Tab navigation patterns
- Component structure

**Acceptance Criteria:**

- [ ] 3-4 tabs with labels
- [ ] Click tab to switch active tab
- [ ] Display content for active tab only
- [ ] Active tab has visual indicator
- [ ] Smooth transitions between tabs
- [ ] Keyboard navigation (arrow keys, optional)
- [ ] Default tab selected on load
- [ ] Content changes based on active tab

**Implementation Details:**

Tabs data:
```javascript
const tabs = [
  { id: 'profile', label: 'Profile', content: 'Profile content...' },
  { id: 'settings', label: 'Settings', content: 'Settings content...' },
  { id: 'notifications', label: 'Notifications', content: 'Notifications content...' }
];
```

State:
```javascript
const [activeTab, setActiveTab] = useState('profile');
```

Rendering:
```javascript
const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

return (
  <div>
    <div className="tabs">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={activeTab === tab.id ? 'active' : ''}
        >
          {tab.label}
        </button>
      ))}
    </div>
    <div className="content">
      {activeContent}
    </div>
  </div>
);
```

**Files to Work On:**
```
src/widgets/TabNavigation/TabNavigation.starter.jsx
src/widgets/TabNavigation/TabNavigation.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Conditional rendering](https://react.dev/learn/conditional-rendering)
- [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- Tab UI patterns

**Labels:** `intermediate`, `useState`, `ui`

---

### 12. ModalManager - Modal Open/Close Management

**Title:** `[ModalManager] - Build Modal Manager Widget`

**Description:**

Create a modal manager that handles opening, closing, and displaying modals. Learn about modal patterns and managing visibility state.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 35-45 minutes

**Concepts Taught:**
- Modal state management
- Overlay/backdrop handling
- Close on escape key
- Close on outside click
- Preventing body scroll

**Acceptance Criteria:**

- [ ] Button to open modal
- [ ] Modal displays centered on screen
- [ ] Modal has backdrop/overlay
- [ ] Close button in modal
- [ ] Close on backdrop click
- [ ] Close on Escape key press
- [ ] Prevent body scroll when modal open
- [ ] Smooth open/close transitions
- [ ] Multiple modal support (optional)

**Implementation Details:**

State:
```javascript
const [isOpen, setIsOpen] = useState(false);
```

Close on escape:
```javascript
useEffect(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
  }

  return () => {
    document.removeEventListener('keydown', handleEscape);
    document.body.style.overflow = 'unset';
  };
}, [isOpen]);
```

Backdrop click:
```javascript
const handleBackdropClick = (e) => {
  if (e.target === e.currentTarget) {
    setIsOpen(false);
  }
};
```

**Files to Work On:**
```
src/widgets/ModalManager/ModalManager.starter.jsx
src/widgets/ModalManager/ModalManager.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Modal patterns](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [Event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- Accessibility best practices for modals

**Labels:** `intermediate`, `useState`, `useEffect`, `ui`, `accessibility`

---

## useEffect Basics Widgets

### 13. CountdownTimer - Timer with Cleanup

**Title:** `[CountdownTimer] - Build Countdown Timer Widget`

**Description:**

Build a countdown timer that counts down from a specified time. Learn about intervals, cleanup, and time-based updates.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 35-45 minutes

**Concepts Taught:**
- useEffect with intervals
- Cleanup functions
- Time calculations
- Conditional logic in effects
- Start/stop/reset functionality

**Acceptance Criteria:**

- [ ] Set initial time (e.g., 60 seconds)
- [ ] Start button begins countdown
- [ ] Pause button pauses countdown
- [ ] Reset button returns to initial time
- [ ] Display time in MM:SS format
- [ ] Visual indicator when time is running
- [ ] Alert/notification when time reaches 0
- [ ] Automatically stop at 0
- [ ] Clean up interval on unmount

**Implementation Details:**

State:
```javascript
const [timeLeft, setTimeLeft] = useState(60);
const [isRunning, setIsRunning] = useState(false);
```

Effect:
```javascript
useEffect(() => {
  if (!isRunning || timeLeft === 0) return;

  const interval = setInterval(() => {
    setTimeLeft(prev => {
      if (prev <= 1) {
        setIsRunning(false);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(interval);
}, [isRunning, timeLeft]);
```

Format time:
```javascript
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};
```

**Files to Work On:**
```
src/widgets/CountdownTimer/CountdownTimer.starter.jsx
src/widgets/CountdownTimer/CountdownTimer.template.jsx
src/widgetConfig.js
```

**Resources:**
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval)
- Time formatting techniques

**Labels:** `intermediate`, `useEffect`, `timers`

---

### 14. LiveClock - Real-Time Clock

**Title:** `[LiveClock] - Build Live Clock Widget`

**Description:**

Create a live clock that updates every second. Learn about continuous updates with useEffect and working with Date objects.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 30-40 minutes

**Concepts Taught:**
- useEffect with intervals
- Working with Date objects
- Continuous state updates
- Time formatting
- Cleanup patterns

**Acceptance Criteria:**

- [ ] Display current time (HH:MM:SS)
- [ ] Update every second
- [ ] Display current date
- [ ] Show day of week
- [ ] Display greeting based on time (Good Morning/Afternoon/Evening)
- [ ] Format time in 12-hour or 24-hour format
- [ ] Show hours, minutes, seconds separately
- [ ] Clean up interval on unmount

**Implementation Details:**

State:
```javascript
const [time, setTime] = useState(new Date());
```

Effect:
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

Formatting:
```javascript
const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const getGreeting = () => {
  const hour = time.getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
};
```

**Files to Work On:**
```
src/widgets/LiveClock/LiveClock.starter.jsx
src/widgets/LiveClock/LiveClock.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString)
- [toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)

**Labels:** `intermediate`, `useEffect`, `timers`, `date-time`

---

### 15. ColorCycler - Auto-Cycling Colors

**Title:** `[ColorCycler] - Build Color Cycler Widget`

**Description:**

Build a widget that automatically cycles through colors at regular intervals. Learn about automatic state updates and visual effects.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 30-35 minutes

**Concepts Taught:**
- Automatic state updates
- Array cycling
- useEffect with dependencies
- Visual transitions
- Play/pause controls

**Acceptance Criteria:**

- [ ] Display a colored box
- [ ] Auto-cycle through 5-6 colors
- [ ] Change color every 2 seconds
- [ ] Play/pause button
- [ ] Speed control (optional)
- [ ] Display current color name and hex
- [ ] Smooth color transitions
- [ ] Clean up interval on unmount

**Implementation Details:**

Colors:
```javascript
const colors = [
  { name: 'Red', hex: '#ef4444' },
  { name: 'Blue', hex: '#3b82f6' },
  { name: 'Green', hex: '#10b981' },
  { name: 'Yellow', hex: '#f59e0b' },
  { name: 'Purple', hex: '#8b5cf6' },
  { name: 'Pink', hex: '#ec4899' }
];
```

State:
```javascript
const [currentIndex, setCurrentIndex] = useState(0);
const [isPlaying, setIsPlaying] = useState(true);
```

Effect:
```javascript
useEffect(() => {
  if (!isPlaying) return;

  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % colors.length);
  }, 2000);

  return () => clearInterval(interval);
}, [isPlaying]);
```

**Files to Work On:**
```
src/widgets/ColorCycler/ColorCycler.starter.jsx
src/widgets/ColorCycler/ColorCycler.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Modulo operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)
- CSS transitions
- Interval patterns

**Labels:** `intermediate`, `useEffect`, `animations`

---

### 16. LocalStoragePersistence - Data Persistence

**Title:** `[LocalStoragePersistence] - Build LocalStorage Widget`

**Description:**

Create a note-taking widget that persists data to localStorage. Learn about data persistence, loading initial state, and syncing with storage.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 35-40 minutes

**Concepts Taught:**
- localStorage API
- Loading initial state
- Syncing state with localStorage
- useEffect for side effects
- Data serialization (JSON)

**Acceptance Criteria:**

- [ ] Text area for notes
- [ ] Auto-save notes to localStorage
- [ ] Load saved notes on mount
- [ ] Clear notes button
- [ ] Character count
- [ ] Last saved timestamp
- [ ] Notes persist across page refreshes
- [ ] Handle empty/null localStorage

**Implementation Details:**

State initialization:
```javascript
const [notes, setNotes] = useState(() => {
  const saved = localStorage.getItem('notes');
  return saved || '';
});
```

Save effect:
```javascript
useEffect(() => {
  localStorage.setItem('notes', notes);
  setLastSaved(new Date());
}, [notes]);
```

Clear function:
```javascript
const clearNotes = () => {
  setNotes('');
  localStorage.removeItem('notes');
};
```

**Files to Work On:**
```
src/widgets/LocalStoragePersistence/LocalStoragePersistence.starter.jsx
src/widgets/LocalStoragePersistence/LocalStoragePersistence.template.jsx
src/widgetConfig.js
```

**Resources:**
- [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

**Labels:** `intermediate`, `useEffect`, `localStorage`, `persistence`

---

### 17. AutoSaveForm - Auto-Save with Debounce

**Title:** `[AutoSaveForm] - Build Auto-Save Form Widget`

**Description:**

Build a form that auto-saves after user stops typing. Learn about debouncing, delays, and smart state updates.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 40-50 minutes

**Concepts Taught:**
- Debouncing with useEffect
- setTimeout and cleanup
- Auto-save patterns
- Save status indicators
- Optimistic updates

**Acceptance Criteria:**

- [ ] Multiple form fields (title, content)
- [ ] Auto-save 2 seconds after user stops typing
- [ ] Show save status (Saving.../Saved/Unsaved changes)
- [ ] Save to localStorage
- [ ] Load saved data on mount
- [ ] Manual save button
- [ ] Clear form button
- [ ] Last saved timestamp

**Implementation Details:**

State:
```javascript
const [formData, setFormData] = useState({
  title: '',
  content: ''
});
const [saveStatus, setSaveStatus] = useState('saved');
const [lastSaved, setLastSaved] = useState(null);
```

Debounced auto-save:
```javascript
useEffect(() => {
  if (saveStatus === 'saved') return;

  setSaveStatus('pending');

  const timer = setTimeout(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
    setSaveStatus('saved');
    setLastSaved(new Date());
  }, 2000);

  return () => clearTimeout(timer);
}, [formData]);
```

Handle change:
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
  setSaveStatus('unsaved');
};
```

**Files to Work On:**
```
src/widgets/AutoSaveForm/AutoSaveForm.starter.jsx
src/widgets/AutoSaveForm/AutoSaveForm.template.jsx
src/widgetConfig.js
```

**Resources:**
- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout)
- Debouncing techniques

**Labels:** `intermediate`, `useEffect`, `forms`, `debouncing`

---

### 18. WindowSizeTracker - Window Resize Tracking

**Title:** `[WindowSizeTracker] - Build Window Size Tracker Widget`

**Description:**

Create a widget that tracks and displays window dimensions. Learn about window event listeners and cleanup.

**Difficulty:** 🟡 Intermediate

**Time Estimate:** 30-35 minutes

**Concepts Taught:**
- Window event listeners
- Event handler cleanup
- Resize events
- Window API
- Responsive design data

**Acceptance Criteria:**

- [ ] Display current window width
- [ ] Display current window height
- [ ] Update on window resize
- [ ] Show breakpoint (mobile/tablet/desktop)
- [ ] Display orientation (portrait/landscape)
- [ ] Visual size indicator
- [ ] Clean up listener on unmount
- [ ] Smooth updates (no lag)

**Implementation Details:**

State:
```javascript
const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight
});
```

Effect:
```javascript
useEffect(() => {
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

Breakpoint detection:
```javascript
const getBreakpoint = () => {
  if (windowSize.width < 640) return 'Mobile';
  if (windowSize.width < 1024) return 'Tablet';
  return 'Desktop';
};

const getOrientation = () => {
  return windowSize.width > windowSize.height ? 'Landscape' : 'Portrait';
};
```

**Files to Work On:**
```
src/widgets/WindowSizeTracker/WindowSizeTracker.starter.jsx
src/widgets/WindowSizeTracker/WindowSizeTracker.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Window.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [resize event](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event)
- [window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)

**Labels:** `intermediate`, `useEffect`, `events`, `responsive`

---

## Advanced useEffect Widgets

### 19. WeatherWidget - API Data Fetching

**Title:** `[WeatherWidget] - Build Weather Widget with API`

**Description:**

Build a weather widget that fetches data from a mock API. Learn about data fetching, loading states, and error handling.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 50-60 minutes

**Concepts Taught:**
- Fetching data with useEffect
- Loading states
- Error handling
- Async operations
- Race condition prevention

**Acceptance Criteria:**

- [ ] Fetch weather data on mount
- [ ] Display loading spinner/message
- [ ] Display weather data (temp, condition, location)
- [ ] Handle errors gracefully
- [ ] Refresh button to refetch
- [ ] Display weather icon based on condition
- [ ] Show last updated time
- [ ] Prevent race conditions
- [ ] Cancel fetch on unmount

**Implementation Details:**

State:
```javascript
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Fetch effect:
```javascript
useEffect(() => {
  let cancelled = false;

  setLoading(true);
  setError(null);

  fetch('/api/weather')  // or use mock API
    .then(res => res.json())
    .then(data => {
      if (!cancelled) {
        setWeather(data);
        setLoading(false);
      }
    })
    .catch(err => {
      if (!cancelled) {
        setError(err.message);
        setLoading(false);
      }
    });

  return () => {
    cancelled = true;
  };
}, []);
```

Render logic:
```javascript
if (loading) return <div>Loading weather...</div>;
if (error) return <div>Error: {error}</div>;
if (!weather) return <div>No data</div>;

return <div>Weather data...</div>;
```

**Files to Work On:**
```
src/widgets/WeatherWidget/WeatherWidget.starter.jsx
src/widgets/WeatherWidget/WeatherWidget.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- Error handling patterns

**Labels:** `advanced`, `useEffect`, `api`, `async`

---

### 20. RandomUserProfile - User Data with Loading

**Title:** `[RandomUserProfile] - Build Random User Profile Widget`

**Description:**

Create a widget that fetches and displays random user profiles. Learn about repeated fetching and managing complex data.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 45-55 minutes

**Concepts Taught:**
- Repeated API calls
- Complex data handling
- Loading states
- Refetching patterns
- Data transformation

**Acceptance Criteria:**

- [ ] Fetch random user on mount
- [ ] Display user info (name, email, photo, location)
- [ ] "Get New User" button to fetch another
- [ ] Loading state during fetch
- [ ] Error handling
- [ ] Smooth transitions between users
- [ ] Avatar/photo display
- [ ] Formatted data display

**Implementation Details:**

State:
```javascript
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

Fetch function:
```javascript
const fetchUser = async () => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    setUser(data.results[0]);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};
```

Effect:
```javascript
useEffect(() => {
  fetchUser();
}, []);
```

**Files to Work On:**
```
src/widgets/RandomUserProfile/RandomUserProfile.starter.jsx
src/widgets/RandomUserProfile/RandomUserProfile.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Random User API](https://randomuser.me/)
- [async/await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- Image handling in React

**Labels:** `advanced`, `useEffect`, `api`, `async`

---

### 21. LiveSearch - Debounced Search

**Title:** `[LiveSearch] - Build Live Search Widget`

**Description:**

Build a search widget with debounced API calls. Learn about optimizing API requests and search UX patterns.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 50-60 minutes

**Concepts Taught:**
- Search debouncing
- Optimizing API calls
- Search UX patterns
- Request cancellation
- Result highlighting

**Acceptance Criteria:**

- [ ] Search input field
- [ ] Debounce search (500ms after typing stops)
- [ ] Fetch results from API
- [ ] Display results list
- [ ] Loading indicator during search
- [ ] Handle no results
- [ ] Handle errors
- [ ] Cancel previous requests
- [ ] Clear results button

**Implementation Details:**

State:
```javascript
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);
const [loading, setLoading] = useState(false);
```

Debounced search:
```javascript
useEffect(() => {
  if (!query) {
    setResults([]);
    return;
  }

  setLoading(true);

  const timer = setTimeout(() => {
    fetch(`/api/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        setResults(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, 500);

  return () => clearTimeout(timer);
}, [query]);
```

**Files to Work On:**
```
src/widgets/LiveSearch/LiveSearch.starter.jsx
src/widgets/LiveSearch/LiveSearch.template.jsx
src/widgetConfig.js
```

**Resources:**
- Debouncing techniques
- Search UX patterns
- Request cancellation (AbortController)

**Labels:** `advanced`, `useEffect`, `api`, `debouncing`, `search`

---

### 22. ChartWidget - Data Visualization

**Title:** `[ChartWidget] - Build Chart Widget`

**Description:**

Create a simple data visualization widget. Learn about rendering data visually and managing chart state.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 55-70 minutes

**Concepts Taught:**
- Data visualization
- SVG/Canvas rendering
- Dynamic data updates
- Chart calculations
- Visual scaling

**Acceptance Criteria:**

- [ ] Display bar chart or line chart
- [ ] Render based on data array
- [ ] Responsive chart sizing
- [ ] Labels for axes
- [ ] Tooltips on hover (optional)
- [ ] Color-coded bars/lines
- [ ] Update chart when data changes
- [ ] Handle empty data

**Implementation Details:**

Data:
```javascript
const [data, setData] = useState([
  { label: 'Jan', value: 30 },
  { label: 'Feb', value: 45 },
  { label: 'Mar', value: 60 },
  { label: 'Apr', value: 40 },
  { label: 'May', value: 70 }
]);
```

Simple bar chart:
```javascript
const maxValue = Math.max(...data.map(d => d.value));

return (
  <div className="chart">
    {data.map((item, index) => (
      <div key={index} className="bar-container">
        <div
          className="bar"
          style={{
            height: `${(item.value / maxValue) * 100}%`,
            backgroundColor: `hsl(${index * 60}, 70%, 50%)`
          }}
        />
        <div className="label">{item.label}</div>
      </div>
    ))}
  </div>
);
```

**Files to Work On:**
```
src/widgets/ChartWidget/ChartWidget.starter.jsx
src/widgets/ChartWidget/ChartWidget.template.jsx
src/widgetConfig.js
```

**Resources:**
- CSS bar charts
- SVG basics
- Data scaling techniques
- Chart.js (optional library)

**Labels:** `advanced`, `useState`, `visualization`

---

### 23. DataTable - Paginated Table

**Title:** `[DataTable] - Build Paginated Data Table Widget`

**Description:**

Build a data table with pagination, sorting, and filtering. Learn about managing table state and data operations.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 60-70 minutes

**Concepts Taught:**
- Pagination logic
- Sorting algorithms
- Filter implementation
- Table state management
- Complex data operations

**Acceptance Criteria:**

- [ ] Display data in table format
- [ ] Pagination (10 items per page)
- [ ] Next/previous buttons
- [ ] Page number display
- [ ] Sort by column (click header)
- [ ] Search/filter functionality
- [ ] Show total items and current page
- [ ] Handle empty state

**Implementation Details:**

State:
```javascript
const [data, setData] = useState([/* ... */]);
const [currentPage, setCurrentPage] = useState(1);
const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
const [filterText, setFilterText] = useState('');
```

Pagination:
```javascript
const itemsPerPage = 10;
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;

const filteredData = data.filter(item =>
  item.name.toLowerCase().includes(filterText.toLowerCase())
);

const sortedData = [...filteredData].sort((a, b) => {
  if (!sortConfig.key) return 0;

  const aValue = a[sortConfig.key];
  const bValue = b[sortConfig.key];

  if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
  if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
  return 0;
});

const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
const totalPages = Math.ceil(sortedData.length / itemsPerPage);
```

**Files to Work On:**
```
src/widgets/DataTable/DataTable.starter.jsx
src/widgets/DataTable/DataTable.template.jsx
src/widgetConfig.js
```

**Resources:**
- Array sorting
- Pagination patterns
- Table accessibility

**Labels:** `advanced`, `useState`, `tables`, `pagination`

---

### 24. NotificationCenter - Timed Notifications

**Title:** `[NotificationCenter] - Build Notification Center Widget`

**Description:**

Create a notification system with auto-dismissing toasts. Learn about managing notification lifecycle and timers.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 50-60 minutes

**Concepts Taught:**
- Managing notification queue
- Auto-dismiss timers
- Multiple simultaneous effects
- Notification patterns
- Animation coordination

**Acceptance Criteria:**

- [ ] Add notification button
- [ ] Display notifications stack
- [ ] Auto-dismiss after 5 seconds
- [ ] Manual dismiss button
- [ ] Different notification types (success, error, info, warning)
- [ ] Smooth enter/exit animations
- [ ] Max 5 notifications visible
- [ ] Position notifications (top-right corner)

**Implementation Details:**

State:
```javascript
const [notifications, setNotifications] = useState([]);
```

Notification structure:
```javascript
{
  id: Date.now(),
  type: 'success', // or 'error', 'info', 'warning'
  message: 'Operation successful!',
  timestamp: new Date()
}
```

Add notification:
```javascript
const addNotification = (type, message) => {
  const notification = {
    id: Date.now(),
    type,
    message,
    timestamp: new Date()
  };

  setNotifications(prev => [...prev, notification].slice(-5)); // Max 5
};
```

Auto-dismiss:
```javascript
useEffect(() => {
  if (notifications.length === 0) return;

  const timers = notifications.map(notification => {
    return setTimeout(() => {
      removeNotification(notification.id);
    }, 5000);
  });

  return () => {
    timers.forEach(timer => clearTimeout(timer));
  };
}, [notifications]);
```

**Files to Work On:**
```
src/widgets/NotificationCenter/NotificationCenter.starter.jsx
src/widgets/NotificationCenter/NotificationCenter.template.jsx
src/widgetConfig.js
```

**Resources:**
- Toast notification patterns
- CSS animations
- Multiple timers management

**Labels:** `advanced`, `useEffect`, `timers`, `ui`

---

### 25. ActivityTracker - Inactivity Detection

**Title:** `[ActivityTracker] - Build Activity Tracker Widget`

**Description:**

Build a widget that tracks user activity and detects inactivity. Learn about multiple event listeners and complex timing logic.

**Difficulty:** 🔴 Advanced

**Time Estimate:** 50-60 minutes

**Concepts Taught:**
- Multiple event listeners
- Inactivity detection
- Reset timers on activity
- User behavior tracking
- Complex cleanup patterns

**Acceptance Criteria:**

- [ ] Track mouse movements
- [ ] Track keyboard events
- [ ] Track clicks
- [ ] Detect inactivity after 30 seconds
- [ ] Display time since last activity
- [ ] Show "Active" or "Inactive" status
- [ ] Visual indicator for activity
- [ ] Reset on any user activity
- [ ] Clean up all listeners on unmount

**Implementation Details:**

State:
```javascript
const [lastActivity, setLastActivity] = useState(new Date());
const [isActive, setIsActive] = useState(true);
```

Activity tracking:
```javascript
useEffect(() => {
  const handleActivity = () => {
    setLastActivity(new Date());
    setIsActive(true);
  };

  const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

  events.forEach(event => {
    document.addEventListener(event, handleActivity);
  });

  return () => {
    events.forEach(event => {
      document.removeEventListener(event, handleActivity);
    });
  };
}, []);
```

Inactivity check:
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    const now = new Date();
    const timeSinceActivity = (now - lastActivity) / 1000; // seconds

    if (timeSinceActivity > 30) {
      setIsActive(false);
    }
  }, 1000);

  return () => clearInterval(interval);
}, [lastActivity]);
```

**Files to Work On:**
```
src/widgets/ActivityTracker/ActivityTracker.starter.jsx
src/widgets/ActivityTracker/ActivityTracker.template.jsx
src/widgetConfig.js
```

**Resources:**
- [Document events](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)
- Event listener best practices
- Throttling/debouncing for performance

**Labels:** `advanced`, `useEffect`, `events`, `tracking`

---

## Summary

### Widget Distribution

- **Beginner (6 widgets):** SimpleCounter, ToggleSwitch, ColorPicker, CharacterCounter, TemperatureConverter, TagSelector
- **Intermediate (6 widgets):** TodoList, FormValidator, ShoppingCart, FilterPanel, TabNavigation, ModalManager
- **useEffect Basics (6 widgets):** CountdownTimer, LiveClock, ColorCycler, LocalStoragePersistence, AutoSaveForm, WindowSizeTracker
- **Advanced (7 widgets):** WeatherWidget, RandomUserProfile, LiveSearch, ChartWidget, DataTable, NotificationCenter, ActivityTracker

### Skill Progression

1. **Start with Beginner useState** - Learn state basics
2. **Move to Intermediate useState** - Complex state and CRUD
3. **Learn useEffect Basics** - Side effects and cleanup
4. **Tackle Advanced useEffect** - APIs and complex patterns

### Labels Reference

**Difficulty:**
- `beginner` - 15-30 minutes, basic concepts
- `intermediate` - 35-50 minutes, more complex
- `advanced` - 45-70 minutes, challenging

**Concepts:**
- `useState` - State management
- `useEffect` - Side effects
- `forms` - Form handling
- `api` - API integration
- `timers` - Intervals/timeouts
- `events` - Event listeners
- `ui` - UI components
- `crud` - Create/Read/Update/Delete

---

**Ready to start?** Choose a widget, create a branch, and start building! Refer to [WORKFLOW.md](./WORKFLOW.md) for the Git process and [WIDGET_GUIDE.md](./WIDGET_GUIDE.md) for React hooks patterns.
