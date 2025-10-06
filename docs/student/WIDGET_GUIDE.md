# React Hooks Widget Guide

A comprehensive guide to understanding and using React hooks in the React Hooks Dashboard project. This guide covers `useState`, `useEffect`, common patterns, best practices, and how to integrate your widget into the dashboard.

## Table of Contents

- [Introduction to React Hooks](#introduction-to-react-hooks)
- [useState Deep Dive](#usestate-deep-dive)
- [useEffect Deep Dive](#useeffect-deep-dive)
- [Common Patterns](#common-patterns)
- [Common Mistakes](#common-mistakes)
- [Best Practices](#best-practices)
- [Integrating Your Widget](#integrating-your-widget)
- [Testing Your Widget](#testing-your-widget)
- [Code Examples](#code-examples)

## Introduction to React Hooks

### What are Hooks?

Hooks are special functions that let you "hook into" React features. They allow you to use state and other React features in functional components without writing a class.

### The Two Main Hooks

1. **useState** - Lets you add state to your component
2. **useEffect** - Lets you perform side effects in your component

### Rules of Hooks

**You MUST follow these rules:**

1. ✅ **Only call hooks at the top level**
   ```javascript
   // ✅ Good
   function MyComponent() {
     const [count, setCount] = useState(0);
     const [name, setName] = useState('');
     // ...
   }

   // ❌ Bad - inside condition
   function MyComponent() {
     if (someCondition) {
       const [count, setCount] = useState(0); // ❌ Don't do this!
     }
   }
   ```

2. ✅ **Only call hooks in React functions**
   ```javascript
   // ✅ Good - in component
   function MyComponent() {
     const [count, setCount] = useState(0);
   }

   // ✅ Good - in custom hook
   function useCounter() {
     const [count, setCount] = useState(0);
     return count;
   }

   // ❌ Bad - in regular function
   function myRegularFunction() {
     const [count, setCount] = useState(0); // ❌ Don't do this!
   }
   ```

3. ✅ **Hooks run in the same order every render**
   - React relies on hook call order
   - Don't put hooks in loops, conditions, or nested functions

## useState Deep Dive

### What is useState?

`useState` is a hook that adds state to functional components. State is data that can change over time and triggers re-renders when updated.

### Basic Syntax

```javascript
const [stateVariable, setStateFunction] = useState(initialValue);
```

**Parts explained:**
- `stateVariable` - Current value of the state
- `setStateFunction` - Function to update the state
- `initialValue` - Starting value

### Simple Example

```javascript
import { useState } from 'react';

function Counter() {
  // Declare state variable
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### Initial State

#### Primitive Values

```javascript
// Number
const [age, setAge] = useState(25);

// String
const [name, setName] = useState('John');

// Boolean
const [isActive, setIsActive] = useState(false);

// Null
const [data, setData] = useState(null);
```

#### Complex Values

```javascript
// Array
const [items, setItems] = useState([]);
const [todos, setTodos] = useState(['Learn React', 'Build project']);

// Object
const [user, setUser] = useState({
  name: 'John',
  age: 25,
  email: 'john@example.com'
});

// Multiple states
const [formData, setFormData] = useState({
  username: '',
  password: '',
  email: ''
});
```

#### Lazy Initial State

For expensive computations, use a function:

```javascript
// ❌ Runs on every render
const [data, setData] = useState(expensiveComputation());

// ✅ Runs only once on mount
const [data, setData] = useState(() => expensiveComputation());

// Example
const [items, setItems] = useState(() => {
  const saved = localStorage.getItem('items');
  return saved ? JSON.parse(saved) : [];
});
```

### Updating State

#### Simple Updates

```javascript
const [count, setCount] = useState(0);

// Direct update
setCount(5);  // count becomes 5

// Based on current value
setCount(count + 1);  // count becomes 1
```

#### Functional Updates

When new state depends on previous state, use a function:

```javascript
const [count, setCount] = useState(0);

// ❌ Can be unreliable
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);  // Both use same count value!
  // Result: count + 1 (not count + 2)
};

// ✅ Reliable - uses most recent state
const handleClick = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  // Result: count + 2 ✅
};
```

**When to use functional updates:**
- Inside event handlers
- In callbacks
- When state depends on previous state
- When using multiple state updates

#### Updating Objects

Objects must be replaced, not mutated:

```javascript
const [user, setUser] = useState({
  name: 'John',
  age: 25,
  email: 'john@example.com'
});

// ❌ Wrong - mutates object
const updateAge = () => {
  user.age = 26;  // Don't do this!
  setUser(user);  // Won't trigger re-render
};

// ✅ Correct - create new object
const updateAge = () => {
  setUser({
    ...user,  // Spread existing properties
    age: 26   // Override age
  });
};

// ✅ Update multiple properties
const updateUser = () => {
  setUser({
    ...user,
    age: 26,
    email: 'newemail@example.com'
  });
};

// ✅ Functional update
const updateAge = () => {
  setUser(prevUser => ({
    ...prevUser,
    age: prevUser.age + 1
  }));
};
```

#### Updating Arrays

Arrays must be replaced, not mutated:

```javascript
const [items, setItems] = useState(['apple', 'banana']);

// ❌ Wrong - mutates array
const addItem = () => {
  items.push('orange');  // Don't do this!
  setItems(items);
};

// ✅ Correct - create new array

// Add item
const addItem = (item) => {
  setItems([...items, item]);
  // or
  setItems(prevItems => [...prevItems, item]);
};

// Remove item by index
const removeItem = (index) => {
  setItems(items.filter((_, i) => i !== index));
};

// Remove item by value
const removeItem = (item) => {
  setItems(items.filter(i => i !== item));
};

// Update item
const updateItem = (index, newValue) => {
  setItems(items.map((item, i) =>
    i === index ? newValue : item
  ));
};

// Insert at beginning
const addToStart = (item) => {
  setItems([item, ...items]);
};

// Sort array
const sortItems = () => {
  setItems([...items].sort());
};

// Clear array
const clearItems = () => {
  setItems([]);
};
```

### Multiple State Variables

You can use useState multiple times:

```javascript
function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [errors, setErrors] = useState({});

  // Each state is independent
}
```

**When to split state:**
- Values change independently
- Different types of data
- Easier to manage

**When to group state:**
- Values always change together
- Related form fields
- Complex nested data

### useState Patterns

#### Toggle Pattern

```javascript
// Boolean toggle
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
// or
const toggle = () => setIsOpen(prev => !prev);
```

#### Input Handling

```javascript
// Single input
const [value, setValue] = useState('');

const handleChange = (e) => {
  setValue(e.target.value);
};

<input value={value} onChange={handleChange} />
```

#### Form Handling

```javascript
// Multiple inputs
const [formData, setFormData] = useState({
  username: '',
  email: '',
  password: ''
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

<input
  name="username"
  value={formData.username}
  onChange={handleChange}
/>
<input
  name="email"
  value={formData.email}
  onChange={handleChange}
/>
```

#### Counter Pattern

```javascript
const [count, setCount] = useState(0);

const increment = () => setCount(prev => prev + 1);
const decrement = () => setCount(prev => prev - 1);
const reset = () => setCount(0);
const incrementBy = (amount) => setCount(prev => prev + amount);
```

#### List Management

```javascript
const [todos, setTodos] = useState([]);

// Add
const addTodo = (text) => {
  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };
  setTodos([...todos, newTodo]);
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

// Update
const updateTodo = (id, newText) => {
  setTodos(todos.map(todo =>
    todo.id === id
      ? { ...todo, text: newText }
      : todo
  ));
};
```

## useEffect Deep Dive

### What is useEffect?

`useEffect` lets you perform side effects in functional components. Side effects are operations that affect things outside the component.

**Common side effects:**
- Fetching data from an API
- Updating the document title
- Setting up timers or intervals
- Subscribing to external events
- Reading/writing to localStorage
- Manually changing the DOM

### Basic Syntax

```javascript
useEffect(() => {
  // Side effect code here

  return () => {
    // Cleanup code here (optional)
  };
}, [dependencies]);
```

**Parts explained:**
- First argument: Function containing side effect
- Return value: Optional cleanup function
- Second argument: Dependency array

### When Does useEffect Run?

The dependency array controls when the effect runs:

```javascript
// 1. No dependency array - Runs after EVERY render
useEffect(() => {
  console.log('Runs after every render');
});

// 2. Empty dependency array - Runs ONCE after mount
useEffect(() => {
  console.log('Runs once on mount');
}, []);

// 3. With dependencies - Runs when dependencies change
useEffect(() => {
  console.log('Runs when count changes');
}, [count]);

// 4. Multiple dependencies
useEffect(() => {
  console.log('Runs when count OR name changes');
}, [count, name]);
```

### Simple Examples

#### Update Document Title

```javascript
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);  // Run when count changes

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

#### Fetch Data on Mount

```javascript
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, []);  // Empty array = run once on mount

  if (loading) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

### Cleanup Functions

Some effects need cleanup to prevent memory leaks:

#### Timer Cleanup

```javascript
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Set up interval
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup function
    return () => {
      clearInterval(interval);  // Clear interval on unmount
    };
  }, []);  // Empty array = run once

  return <div>{time.toLocaleTimeString()}</div>;
}
```

**When cleanup runs:**
- Before the effect runs again (if dependencies changed)
- When component unmounts

#### Event Listener Cleanup

```javascript
function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Set up event listener
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  // Run once on mount

  return <div>Width: {width}px</div>;
}
```

#### Subscription Cleanup

```javascript
function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Subscribe
    const subscription = chatAPI.subscribe(
      roomId,
      message => setMessages(prev => [...prev, message])
    );

    // Cleanup
    return () => {
      subscription.unsubscribe();
    };
  }, [roomId]);  // Re-subscribe when roomId changes

  return <MessageList messages={messages} />;
}
```

### Dependency Array Explained

#### Why Dependencies Matter

```javascript
// ❌ Missing dependency - stale closure
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);  // Always uses count from first render!
    }, 1000);

    return () => clearInterval(interval);
  }, []);  // Missing count in dependencies

  // count will only increment to 1, then stop!
}

// ✅ Correct - use functional update
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);  // Uses latest count
    }, 1000);

    return () => clearInterval(interval);
  }, []);  // No dependencies needed

  // count increments correctly!
}
```

#### What to Include in Dependencies

Include ALL values from component scope that are used in effect:

```javascript
function Example({ userId }) {
  const [user, setUser] = useState(null);
  const apiKey = 'abc123';

  useEffect(() => {
    fetchUser(userId, apiKey).then(setUser);
  }, [userId, apiKey]);  // Include both userId and apiKey
}
```

**Don't need to include:**
- setState functions (they're stable)
- Refs (they're stable)
- Constants defined outside component

```javascript
const API_KEY = 'abc123';  // Outside component

function Example({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId, API_KEY).then(setUser);
  }, [userId]);  // Don't need setUser or API_KEY
}
```

### useEffect Patterns

#### Pattern 1: Run Once on Mount

```javascript
useEffect(() => {
  // Initialize
  console.log('Component mounted');

  return () => {
    // Cleanup on unmount
    console.log('Component unmounted');
  };
}, []);  // Empty array
```

**Use cases:**
- Fetch initial data
- Set up subscriptions
- Initialize third-party libraries

#### Pattern 2: Run on Every Render

```javascript
useEffect(() => {
  // Runs after every render
  console.log('Component rendered');
});  // No dependency array
```

**Use cases:**
- Logging/debugging
- Rare - usually want dependencies

#### Pattern 3: Run When Value Changes

```javascript
useEffect(() => {
  // Runs when count changes
  console.log('Count changed to:', count);
}, [count]);
```

**Use cases:**
- Sync with external systems
- Update based on prop/state changes

#### Pattern 4: Fetch Data

```javascript
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setLoading(true);

    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (!cancelled) {
          setUser(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;  // Prevent updates if unmounted
    };
  }, [userId]);  // Refetch when userId changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user.name}</div>;
}
```

#### Pattern 5: Debounced Effect

```javascript
function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Wait 500ms after user stops typing
    const timer = setTimeout(() => {
      if (query) {
        fetch(`/api/search?q=${query}`)
          .then(res => res.json())
          .then(setResults);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);  // Run when query changes

  return (
    <div>
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ResultsList results={results} />
    </div>
  );
}
```

#### Pattern 6: Interval/Timer

```javascript
function Countdown({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return <div>Time left: {timeLeft}s</div>;
}
```

#### Pattern 7: LocalStorage Sync

```javascript
function Form() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : { name: '', email: '' };
  });

  // Save to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <form>
      <input
        value={formData.name}
        onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })}
      />
    </form>
  );
}
```

## Common Patterns

### Loading States

```javascript
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;
  return <div>Data: {JSON.stringify(data)}</div>;
}
```

### Form Handling

```javascript
function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit form
    console.log('Submitting:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <span>{errors.username}</span>}

      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button type="submit">Login</button>
    </form>
  );
}
```

### Modal/Toggle

```javascript
function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <button onClick={() => setIsOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
```

### Tabs

```javascript
function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Content 3' }
  ];

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

      <div className="tab-content">
        {activeContent}
      </div>
    </div>
  );
}
```

## Common Mistakes

### Mistake 1: Mutating State Directly

```javascript
// ❌ Wrong
const [items, setItems] = useState([1, 2, 3]);
items.push(4);  // Mutates array!
setItems(items);  // Won't trigger re-render

// ✅ Correct
setItems([...items, 4]);
```

### Mistake 2: Not Using Functional Updates

```javascript
// ❌ Can cause issues
const handleClick = () => {
  setCount(count + 1);
  setCount(count + 1);  // Both use same count
};

// ✅ Correct
const handleClick = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1);
};
```

### Mistake 3: Missing Dependencies

```javascript
// ❌ Missing count in dependencies
useEffect(() => {
  console.log(count);
}, []);  // Will always log initial count

// ✅ Include all dependencies
useEffect(() => {
  console.log(count);
}, [count]);
```

### Mistake 4: Infinite Loop

```javascript
// ❌ Infinite loop
useEffect(() => {
  setCount(count + 1);  // Triggers re-render
});  // No dependency array = runs on every render

// ✅ Correct - with dependencies
useEffect(() => {
  if (someCondition) {
    setCount(count + 1);
  }
}, [someCondition]);  // Only when condition changes
```

### Mistake 5: Not Cleaning Up

```javascript
// ❌ Memory leak
useEffect(() => {
  const interval = setInterval(() => {
    console.log('tick');
  }, 1000);
  // No cleanup!
}, []);

// ✅ Correct
useEffect(() => {
  const interval = setInterval(() => {
    console.log('tick');
  }, 1000);

  return () => clearInterval(interval);
}, []);
```

### Mistake 6: Using Async Function Directly

```javascript
// ❌ Wrong - useEffect can't be async
useEffect(async () => {
  const data = await fetchData();
  setData(data);
}, []);

// ✅ Correct - async function inside
useEffect(() => {
  const loadData = async () => {
    const data = await fetchData();
    setData(data);
  };

  loadData();
}, []);
```

### Mistake 7: Reading State in Event Handler

```javascript
// ❌ Stale closure
useEffect(() => {
  const handleClick = () => {
    console.log(count);  // Always logs initial count
  };

  button.addEventListener('click', handleClick);

  return () => {
    button.removeEventListener('click', handleClick);
  };
}, []);  // Missing count dependency

// ✅ Correct - include dependency
useEffect(() => {
  const handleClick = () => {
    console.log(count);
  };

  button.addEventListener('click', handleClick);

  return () => {
    button.removeEventListener('click', handleClick);
  };
}, [count]);  // Re-attach listener when count changes
```

## Best Practices

### State Management

1. **Keep state minimal**
   ```javascript
   // ❌ Redundant state
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [fullName, setFullName] = useState('');

   // ✅ Derive from existing state
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const fullName = `${firstName} ${lastName}`;
   ```

2. **Group related state**
   ```javascript
   // ❌ Too many separate states
   const [street, setStreet] = useState('');
   const [city, setCity] = useState('');
   const [zip, setZip] = useState('');

   // ✅ Group related data
   const [address, setAddress] = useState({
     street: '',
     city: '',
     zip: ''
   });
   ```

3. **Use meaningful names**
   ```javascript
   // ❌ Unclear
   const [x, setX] = useState(0);
   const [f, setF] = useState(false);

   // ✅ Clear and descriptive
   const [count, setCount] = useState(0);
   const [isFormValid, setIsFormValid] = useState(false);
   ```

### Effect Management

1. **One effect, one purpose**
   ```javascript
   // ❌ Doing too much
   useEffect(() => {
     fetchData();
     updateTitle();
     startTimer();
   }, []);

   // ✅ Separate effects
   useEffect(() => {
     fetchData();
   }, []);

   useEffect(() => {
     document.title = `Count: ${count}`;
   }, [count]);

   useEffect(() => {
     const timer = setInterval(() => {...}, 1000);
     return () => clearInterval(timer);
   }, []);
   ```

2. **Always cleanup**
   ```javascript
   // ✅ Cleanup subscriptions
   useEffect(() => {
     const subscription = subscribe();
     return () => subscription.unsubscribe();
   }, []);

   // ✅ Cleanup timers
   useEffect(() => {
     const timer = setTimeout(() => {...}, 1000);
     return () => clearTimeout(timer);
   }, []);

   // ✅ Cleanup listeners
   useEffect(() => {
     window.addEventListener('resize', handleResize);
     return () => window.removeEventListener('resize', handleResize);
   }, []);
   ```

3. **Handle race conditions**
   ```javascript
   useEffect(() => {
     let cancelled = false;

     fetchData().then(data => {
       if (!cancelled) {
         setData(data);
       }
     });

     return () => {
       cancelled = true;
     };
   }, []);
   ```

### Performance

1. **Use functional updates**
   ```javascript
   // Prevents unnecessary dependencies
   setCount(prev => prev + 1);
   ```

2. **Memoize expensive calculations** (if needed)
   ```javascript
   import { useMemo } from 'react';

   const expensiveValue = useMemo(() => {
     return computeExpensiveValue(data);
   }, [data]);
   ```

3. **Optimize re-renders** (if needed)
   ```javascript
   import { memo } from 'react';

   const MemoizedComponent = memo(function MyComponent(props) {
     return <div>{props.value}</div>;
   });
   ```

### Code Organization

1. **Hooks at the top**
   ```javascript
   function MyComponent() {
     // All hooks first
     const [count, setCount] = useState(0);
     const [name, setName] = useState('');

     useEffect(() => {...}, []);
     useEffect(() => {...}, [count]);

     // Then helper functions
     const handleClick = () => {...};
     const handleChange = () => {...};

     // Then render
     return <div>...</div>;
   }
   ```

2. **Extract complex logic**
   ```javascript
   // Custom hook
   function useWindowSize() {
     const [size, setSize] = useState({
       width: window.innerWidth,
       height: window.innerHeight
     });

     useEffect(() => {
       const handleResize = () => {
         setSize({
           width: window.innerWidth,
           height: window.innerHeight
         });
       };

       window.addEventListener('resize', handleResize);
       return () => window.removeEventListener('resize', handleResize);
     }, []);

     return size;
   }

   // Use in component
   function MyComponent() {
     const { width, height } = useWindowSize();
     return <div>Width: {width}, Height: {height}</div>;
   }
   ```

## Integrating Your Widget

### Step-by-Step Integration Guide

Follow these steps to add your completed widget to the dashboard:

#### Step 1: Locate Your Widget File

Your widget is in:
```
src/widgets/YourWidget/YourWidget.starter.jsx
```

Make sure your component:
- Is exported as default
- Works when tested locally
- Has no console errors

#### Step 2: Open widgetConfig.js

Open the file:
```
src/widgetConfig.js
```

#### Step 3: Find Your Widget Entry

Look for your widget in the configuration:

```javascript
{
  id: 'simple-counter',
  name: 'Simple Counter',
  component: () => import('./widgets/SimpleCounter/SimpleCounter.starter.jsx'),
  category: 'useState-basics',
  difficulty: 'beginner',
  description: 'A basic counter widget',
  enabled: false,  // ← Change this!
  author: '',      // ← Add your name!
  gridSize: { w: 2, h: 2, minW: 2, minH: 2 }
}
```

#### Step 4: Enable Your Widget

Change `enabled` to `true` and add your name:

```javascript
{
  id: 'simple-counter',
  name: 'Simple Counter',
  component: () => import('./widgets/SimpleCounter/SimpleCounter.starter.jsx'),
  category: 'useState-basics',
  difficulty: 'beginner',
  description: 'A basic counter widget',
  enabled: true,   // ← Changed!
  author: 'John Doe',  // ← Added!
  gridSize: { w: 2, h: 2, minW: 2, minH: 2 }
}
```

#### Step 5: Save and Test

```bash
# If dev server is running, it should auto-reload
# If not, start it:
npm run dev
```

Open browser to `http://localhost:5173`

Your widget should now appear on the dashboard!

#### Step 6: Verify Everything Works

Check:
- [ ] Widget appears on dashboard
- [ ] All functionality works
- [ ] No console errors (F12 → Console)
- [ ] Styling looks good
- [ ] Responsive (try resizing window)

#### Step 7: Commit Your Changes

```bash
# Check what changed
git status

# Should show:
# modified:   src/widgets/YourWidget/YourWidget.starter.jsx
# modified:   src/widgetConfig.js

# Stage and commit
git add src/widgets/YourWidget/YourWidget.starter.jsx
git add src/widgetConfig.js

git commit -m "feat: implement YourWidget"

# Push
git push
```

### Widget Configuration Options

Understand the widget config:

```javascript
{
  // Unique identifier (lowercase-with-dashes)
  id: 'simple-counter',

  // Display name
  name: 'Simple Counter',

  // Lazy-loaded component
  component: () => import('./widgets/SimpleCounter/SimpleCounter.starter.jsx'),

  // Category for organization
  category: 'useState-basics',  // or 'useState-intermediate', etc.

  // Difficulty level
  difficulty: 'beginner',  // or 'intermediate', 'advanced'

  // Short description
  description: 'A basic counter widget',

  // Whether to show on dashboard
  enabled: true,

  // Your name
  author: 'John Doe',

  // Grid layout settings
  gridSize: {
    w: 2,      // Width (grid columns)
    h: 2,      // Height (grid rows)
    minW: 2,   // Minimum width
    minH: 2    // Minimum height
  }
}
```

### Styling Your Widget

Widgets use Tailwind CSS. Common patterns:

```javascript
function MyWidget() {
  return (
    // Container - full height, centered content
    <div className="flex flex-col items-center justify-center h-full space-y-4">

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-800">
        Widget Title
      </h3>

      {/* Content area */}
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow">
        Content here
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Click Me
        </button>
      </div>
    </div>
  );
}
```

### Common Tailwind Classes

```
Spacing:
- p-4, px-4, py-2     (padding)
- m-4, mx-4, my-2     (margin)
- space-x-4, space-y-4  (gap between children)
- gap-2, gap-4        (flex/grid gap)

Layout:
- flex, flex-col      (flexbox)
- items-center        (align items)
- justify-center      (justify content)
- grid, grid-cols-2   (grid)

Sizing:
- w-full, w-1/2       (width)
- h-full, h-screen    (height)
- max-w-md            (max width)

Colors:
- bg-blue-500         (background)
- text-white          (text color)
- border-gray-300     (border)

Text:
- text-xl, text-2xl   (size)
- font-bold           (weight)
- text-center         (alignment)

Border/Radius:
- rounded, rounded-lg (border radius)
- border, border-2    (border width)

Effects:
- shadow, shadow-lg   (box shadow)
- hover:bg-blue-600   (hover state)
```

## Testing Your Widget

### Manual Testing Checklist

Before creating a PR, verify:

- [ ] **Widget loads** - Appears on dashboard without errors
- [ ] **All features work** - Every button, input, etc.
- [ ] **State persists correctly** - Values update as expected
- [ ] **No console errors** - Check browser console (F12)
- [ ] **Styling looks good** - Matches design expectations
- [ ] **Responsive** - Works on different screen sizes
- [ ] **Edge cases** - Try extreme values, empty inputs, etc.
- [ ] **Cleanup** - No memory leaks (check when toggling widget)

### Writing Tests (Optional)

Example test:

```javascript
// src/widgets/SimpleCounter/__tests__/SimpleCounter.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SimpleCounter from '../SimpleCounter.starter';

describe('SimpleCounter', () => {
  it('renders initial count', () => {
    render(<SimpleCounter />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments count', async () => {
    render(<SimpleCounter />);
    const user = userEvent.setup();

    const incrementButton = screen.getByText('+');
    await user.click(incrementButton);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('decrements count', async () => {
    render(<SimpleCounter />);
    const user = userEvent.setup();

    const decrementButton = screen.getByText('-');
    await user.click(decrementButton);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('resets count', async () => {
    render(<SimpleCounter />);
    const user = userEvent.setup();

    // Increment first
    await user.click(screen.getByText('+'));
    expect(screen.getByText('1')).toBeInTheDocument();

    // Then reset
    await user.click(screen.getByText('Reset'));
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
```

Run tests:
```bash
npm test
```

## Code Examples

### Complete Widget Example 1: Color Picker

```javascript
import { useState } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('#3b82f6');

  const colors = [
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Red', hex: '#ef4444' },
    { name: 'Green', hex: '#10b981' },
    { name: 'Yellow', hex: '#f59e0b' },
    { name: 'Purple', hex: '#8b5cf6' }
  ];

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      {/* Color display */}
      <div
        className="w-32 h-32 rounded-lg shadow-lg"
        style={{ backgroundColor: selectedColor }}
      />

      {/* Selected color info */}
      <div className="text-center">
        <p className="text-lg font-semibold">
          {colors.find(c => c.hex === selectedColor)?.name}
        </p>
        <p className="text-gray-600">{selectedColor}</p>
      </div>

      {/* Color buttons */}
      <div className="flex gap-2">
        {colors.map(color => (
          <button
            key={color.hex}
            onClick={() => setSelectedColor(color.hex)}
            className="w-12 h-12 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform"
            style={{ backgroundColor: color.hex }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
```

### Complete Widget Example 2: Live Clock

```javascript
import { useState, useEffect } from 'react';

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <h3 className="text-xl font-bold text-gray-700">
        {getGreeting()}
      </h3>

      <div className="text-5xl font-bold text-blue-600">
        {formatTime(time)}
      </div>

      <div className="text-lg text-gray-600">
        {formatDate(time)}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {time.getHours()}
          </div>
          <div className="text-sm text-gray-500">Hours</div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {time.getMinutes()}
          </div>
          <div className="text-sm text-gray-500">Minutes</div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-bold text-gray-800">
            {time.getSeconds()}
          </div>
          <div className="text-sm text-gray-500">Seconds</div>
        </div>
      </div>
    </div>
  );
}

export default LiveClock;
```

### Complete Widget Example 3: Todo List

```javascript
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

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

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const completedCount = todos.filter(t => t.completed).length;
  const totalCount = todos.length;

  return (
    <div className="flex flex-col h-full p-4 space-y-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-800">Todo List</h3>
        <p className="text-sm text-gray-600">
          {completedCount} of {totalCount} completed
        </p>
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new todo..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {todos.length === 0 ? (
          <p className="text-center text-gray-400 mt-8">
            No todos yet. Add one above!
          </p>
        ) : (
          todos.map(todo => (
            <div
              key={todo.id}
              className="flex items-center gap-2 p-3 bg-white rounded-lg shadow"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5"
              />
              <span
                className={`flex-1 ${
                  todo.completed
                    ? 'text-gray-400 line-through'
                    : 'text-gray-800'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TodoList;
```

## Summary

You now have a comprehensive understanding of:

- ✅ useState for managing state
- ✅ useEffect for handling side effects
- ✅ Common patterns and best practices
- ✅ How to avoid common mistakes
- ✅ How to integrate your widget

**Next steps:**
1. Choose a widget from [ISSUES.md](./ISSUES.md)
2. Follow the [WORKFLOW.md](./WORKFLOW.md) Git process
3. Implement your widget using these patterns
4. Test thoroughly
5. Create a pull request
6. Get feedback and iterate

**Remember:**
- Start simple, then add complexity
- Test frequently
- Ask questions when stuck
- Review examples for reference

Happy coding! You're ready to build amazing widgets!
