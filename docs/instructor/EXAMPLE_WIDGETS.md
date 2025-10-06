# Example Widgets - Instructor Reference

## Overview

Three fully-implemented example widgets are included in the project to help students understand React hooks patterns before building their own widgets. These widgets are **disabled by default** to keep the initial dashboard clean, but can be easily enabled in `src/widgetConfig.js` by changing `enabled: false` to `enabled: true`.

---

## 🎮 Pokemon Battle Widget

**File**: `src/widgets/examples/PokemonBattle.jsx`

### What It Demonstrates
- Fetching data from external APIs (PokeAPI)
- Managing complex game state with multiple useState hooks
- Using useEffect for initial data loading
- Async/await patterns
- Interactive game logic
- Error handling with try/catch

### Key Concepts
```javascript
// Multiple state variables
const [playerPokemon, setPlayerPokemon] = useState(null);
const [opponentPokemon, setOpponentPokemon] = useState(null);
const [playerHP, setPlayerHP] = useState(100);
const [opponentHP, setOpponentHP] = useState(100);

// useEffect for initial fetch
useEffect(() => {
  startBattle();
}, []);

// Async data fetching
const fetchRandomPokemon = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  const data = await response.json();
  return { name: data.name, sprite: data.sprites.front_default };
};
```

### Teaching Points
1. **Complex State Management** - Show how multiple related state variables work together
2. **API Integration** - Real-world example of fetching from external APIs
3. **Game Logic** - How to implement turn-based interactions
4. **Loading States** - Proper UX with loading indicators
5. **Error Handling** - Try/catch and error state management

### Grid Size
- Width: 3 columns
- Height: 4 rows
- Total: 3x4 grid

---

## 💭 Quote Generator Widget

**File**: `src/widgets/examples/QuoteGenerator.jsx`

### What It Demonstrates
- Fetching data from REST APIs
- Auto-refresh with setInterval in useEffect
- Cleanup functions in useEffect
- Loading and error states
- Copy to clipboard functionality
- Social sharing (Twitter integration)

### Key Concepts
```javascript
// Auto-refresh with interval
useEffect(() => {
  if (!autoRefresh) return;

  const interval = setInterval(() => {
    fetchQuote();
  }, 10000);

  // Cleanup function
  return () => clearInterval(interval);
}, [autoRefresh]);

// Error handling
try {
  const response = await fetch('https://api.quotable.io/random');
  if (!response.ok) throw new Error('Failed to fetch quote');
  const data = await response.json();
  setQuote(data);
} catch (err) {
  setError('Failed to load quote. Please try again.');
}
```

### Teaching Points
1. **useEffect Cleanup** - Demonstrate proper cleanup of intervals
2. **Dependency Arrays** - Show how useEffect dependencies work
3. **Auto-refresh Patterns** - Common pattern for periodic updates
4. **Error States** - Handling and displaying errors gracefully
5. **Browser APIs** - navigator.clipboard for copy functionality

### Grid Size
- Width: 3 columns
- Height: 3 rows
- Total: 3x3 grid

---

## 🌌 NASA Picture of the Day Widget

**File**: `src/widgets/examples/NasaPicture.jsx`

### What It Demonstrates
- Date-based API queries
- Handling different media types (images vs videos)
- useEffect with dependencies
- Form inputs controlling API calls
- NASA API integration
- Conditional rendering based on media type

### Key Concepts
```javascript
// State with date selection
const [selectedDate, setSelectedDate] = useState(() => {
  return new Date().toISOString().split('T')[0];
});

// useEffect triggered by date changes
useEffect(() => {
  fetchAPOD(selectedDate);
}, [selectedDate]);

// Conditional rendering for media types
{apod.media_type === 'image' ? (
  <img src={apod.url} alt={apod.title} />
) : apod.media_type === 'video' ? (
  <iframe src={apod.url} title={apod.title} />
) : null}
```

### Teaching Points
1. **useEffect Dependencies** - How changes in dependencies trigger effects
2. **Controlled Inputs** - Date input controlling state
3. **Conditional Rendering** - Different UI for different data types
4. **API Query Parameters** - Passing parameters to APIs
5. **Media Handling** - Working with images and embedded videos

### Grid Size
- Width: 4 columns
- Height: 4 rows
- Total: 4x4 grid

---

## Pedagogical Strategy

### Why These Examples?

1. **Progressive Complexity**
   - Quote Generator: Simple fetch + auto-refresh
   - NASA Picture: Form inputs + useEffect dependencies
   - Pokemon Battle: Complex state + game logic

2. **Real-world APIs**
   - Students see actual API integration
   - Learn to read API documentation
   - Understand rate limits and error handling

3. **Different Patterns**
   - Each widget demonstrates unique patterns
   - Students can pick and choose patterns for their own widgets
   - Covers most common use cases they'll encounter

### How to Use in Class

#### At Workshop Start (5 minutes)
1. Show the dashboard with example widgets
2. Interact with each widget briefly
3. Point out key features students will learn

#### During Development (Throughout)
- Encourage students to reference example code
- Point to specific patterns when students ask questions
- Use as debugging reference ("Compare your code to the example")

#### Code Review (15 minutes suggested)
Pick one example (e.g., Pokemon Battle) and walk through:
1. **State structure** - Why multiple useState vs object?
2. **useEffect usage** - When does it run? What about cleanup?
3. **Async patterns** - How to handle loading/error states
4. **Event handlers** - How to update state in response to clicks

### Common Student Questions

**Q: "Why doesn't Pokemon Battle use one big state object?"**
A: Multiple useState hooks are often clearer for independent values. Show how playerHP and opponentHP are updated separately in battle.

**Q: "When should I use useEffect?"**
A: Point to examples:
- Initial data fetch (Pokemon Battle)
- Response to state changes (NASA Picture date)
- Setting up intervals (Quote Generator auto-refresh)
- Cleanup (Quote Generator interval cleanup)

**Q: "How do I handle errors from APIs?"**
A: All three examples show try/catch patterns and error state management.

---

## Technical Details

### APIs Used

1. **PokeAPI** - https://pokeapi.co
   - No API key required
   - Rate limit: Reasonable for classroom use
   - Endpoint: `/api/v2/pokemon/{id}`

2. **ZenQuotes API** - https://zenquotes.io
   - No API key required
   - Free tier sufficient
   - Rate limit: Reasonable for classroom use
   - Endpoint: `/api/random`
   - Returns: `[{ q: "quote text", a: "author", h: "html" }]`

3. **NASA APOD API** - https://api.nasa.gov
   - Using DEMO_KEY (rate limited)
   - 30 requests per hour per IP
   - For production: Get free API key at https://api.nasa.gov
   - Endpoint: `/planetary/apod?api_key=DEMO_KEY&date={date}`

### Potential Issues

1. **Rate Limits**
   - NASA API with DEMO_KEY: 30 req/hour
   - If hit: Students will see error messages
   - Solution: Get instructor API key from NASA

2. **Network Errors**
   - All widgets handle fetch failures gracefully
   - Show error messages to users
   - Provide retry buttons

3. **CORS**
   - All selected APIs support CORS
   - Should work in development and production
   - No proxy needed

---

## Enabling/Disabling Examples

### To Disable an Example Widget

In `src/widgetConfig.js`, change `enabled: true` to `enabled: false`:

```javascript
PokemonBattle: {
  component: lazy(() => import('./widgets/examples/PokemonBattle.jsx')),
  title: '⚔️ Pokemon Battle',
  difficulty: 'example',
  concepts: ['useState', 'useEffect', 'fetch API', 'game logic', 'async/await'],
  author: 'Example Widget',
  gridSize: { w: 3, h: 4 },
  enabled: false,  // ← Changed from true
},
```

### Why You Might Disable Them

- **Limited screen space** - More room for student widgets
- **Reduce cognitive load** - Start with blank slate
- **Network restrictions** - Classroom has API access issues
- **Focus on specific concepts** - Only show relevant examples

### Recommendation

**Keep all enabled** for first workshop, then adjust based on:
- Student feedback
- Network conditions
- Classroom goals
- Available time

---

## Assessment Ideas

### Discussion Questions
1. Compare the error handling in all three widgets. Which approach is clearest?
2. Why does Quote Generator need cleanup but Pokemon Battle doesn't?
3. How would you add loading states to Pokemon Battle's attack button?

### Extension Challenges
1. **Pokemon Battle**: Add type effectiveness (fire beats grass, etc.)
2. **Quote Generator**: Add favorite quotes list with localStorage
3. **NASA Picture**: Add image download functionality

### Code Review Exercise
Have students:
1. Pick one example widget
2. Add comments explaining every useState and useEffect
3. Identify one improvement they would make
4. Share with class

---

## Summary

The three example widgets provide:
- ✅ Real-world API integration patterns
- ✅ Progressive complexity (simple → complex)
- ✅ Different use cases (data display, game, media)
- ✅ Best practices for error handling
- ✅ Reference code students can study
- ✅ Immediate visual feedback when app starts

Students should feel free to copy patterns, ask questions about the code, and use these as templates for their own implementations.
