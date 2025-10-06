import { lazy } from 'react';

/**
 * Widget Registry Configuration
 *
 * This file contains the configuration for all available widgets.
 * Each widget entry includes:
 * - component: Lazy-loaded component
 * - title: Display name
 * - difficulty: beginner | intermediate | advanced
 * - concepts: Array of React concepts taught
 * - author: Student name (filled in by student)
 * - gridSize: Default grid dimensions { w: width, h: height }
 * - enabled: Whether widget is active (set to true when completed)
 */

export const widgetRegistry = {
  // ==========================================
  // EXAMPLE WIDGETS (Pre-built for demonstration)
  // ==========================================
  // These widgets are fully implemented examples that students can:
  // - Enable to see working implementations
  // - Study the source code to learn patterns
  // - Use as reference when building their own widgets

  PokemonBattle: {
    component: lazy(() => import('./widgets/examples/PokemonBattle.jsx')),
    title: '⚔️ Pokemon Battle',
    difficulty: 'example',
    concepts: ['useState', 'useEffect', 'fetch API', 'game logic', 'async/await'],
    author: 'Example Widget',
    gridSize: { w: 3, h: 4 },
    enabled: false,
  },

  QuoteGenerator: {
    component: lazy(() => import('./widgets/examples/QuoteGenerator.jsx')),
    title: '💭 Quote Generator',
    difficulty: 'example',
    concepts: ['useState', 'useEffect', 'fetch API', 'auto-refresh', 'error handling'],
    author: 'Example Widget',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  NasaPicture: {
    component: lazy(() => import('./widgets/examples/NasaPicture.jsx')),
    title: '🌌 NASA Picture of the Day',
    difficulty: 'example',
    concepts: ['useState', 'useEffect', 'fetch API', 'date selection', 'media handling'],
    author: 'Example Widget',
    gridSize: { w: 4, h: 4 },
    enabled: false,
  },

  // ==========================================
  // STUDENT WIDGETS (To be completed)
  // ==========================================

  // BEGINNER useState WIDGETS (1-6)
  SimpleCounter: {
    component: lazy(() => import('./widgets/SimpleCounter/SimpleCounter.starter.jsx')),
    title: 'Simple Counter',
    difficulty: 'beginner',
    concepts: ['useState'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: true,
  },

  ToggleSwitch: {
    component: lazy(() => import('./widgets/ToggleSwitch/ToggleSwitch.starter.jsx')),
    title: 'Toggle Switch',
    difficulty: 'beginner',
    concepts: ['useState', 'conditional rendering'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: true,
  },

  ColorPicker: {
    component: lazy(() => import('./widgets/ColorPicker/ColorPicker.starter.jsx')),
    title: 'Color Picker',
    difficulty: 'beginner',
    concepts: ['useState', 'event handling'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: true,
  },

  CharacterCounter: {
    component: lazy(() => import('./widgets/CharacterCounter/CharacterCounter.starter.jsx')),
    title: 'Character Counter',
    difficulty: 'beginner',
    concepts: ['useState', 'controlled inputs'],
    author: '',
    gridSize: { w: 3, h: 2 },
    enabled: false,
  },

  TemperatureConverter: {
    component: lazy(() => import('./widgets/TemperatureConverter/TemperatureConverter.starter.jsx')),
    title: 'Temperature Converter',
    difficulty: 'beginner',
    concepts: ['useState', 'calculations'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  TagSelector: {
    component: lazy(() => import('./widgets/TagSelector/TagSelector.starter.jsx')),
    title: 'Tag Selector',
    difficulty: 'beginner',
    concepts: ['useState', 'arrays'],
    author: '',
    gridSize: { w: 3, h: 2 },
    enabled: false,
  },

  // INTERMEDIATE useState WIDGETS (7-12)
  TodoList: {
    component: lazy(() => import('./widgets/TodoList/TodoList.starter.jsx')),
    title: 'Todo List',
    difficulty: 'intermediate',
    concepts: ['useState', 'arrays', 'CRUD operations'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  FormValidator: {
    component: lazy(() => import('./widgets/FormValidator/FormValidator.starter.jsx')),
    title: 'Form Validator',
    difficulty: 'intermediate',
    concepts: ['useState', 'validation', 'multiple states'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  ShoppingCart: {
    component: lazy(() => import('./widgets/ShoppingCart/ShoppingCart.starter.jsx')),
    title: 'Shopping Cart',
    difficulty: 'intermediate',
    concepts: ['useState', 'objects', 'calculations'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  FilterPanel: {
    component: lazy(() => import('./widgets/FilterPanel/FilterPanel.starter.jsx')),
    title: 'Filter Panel',
    difficulty: 'intermediate',
    concepts: ['useState', 'filtering', 'multiple states'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  TabNavigation: {
    component: lazy(() => import('./widgets/TabNavigation/TabNavigation.starter.jsx')),
    title: 'Tab Navigation',
    difficulty: 'intermediate',
    concepts: ['useState', 'conditional rendering'],
    author: '',
    gridSize: { w: 4, h: 3 },
    enabled: false,
  },

  ModalManager: {
    component: lazy(() => import('./widgets/ModalManager/ModalManager.starter.jsx')),
    title: 'Modal Manager',
    difficulty: 'intermediate',
    concepts: ['useState', 'portals', 'boolean state'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  // useEffect BASICS WIDGETS (13-18)
  CountdownTimer: {
    component: lazy(() => import('./widgets/CountdownTimer/CountdownTimer.starter.jsx')),
    title: 'Countdown Timer',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'setInterval', 'cleanup'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  LiveClock: {
    component: lazy(() => import('./widgets/LiveClock/LiveClock.starter.jsx')),
    title: 'Live Clock',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'setInterval', 'Date API'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  ColorCycler: {
    component: lazy(() => import('./widgets/ColorCycler/ColorCycler.starter.jsx')),
    title: 'Color Cycler',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'setInterval'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  LocalStoragePersistence: {
    component: lazy(() => import('./widgets/LocalStoragePersistence/LocalStoragePersistence.starter.jsx')),
    title: 'LocalStorage Persistence',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'localStorage'],
    author: '',
    gridSize: { w: 3, h: 2 },
    enabled: false,
  },

  AutoSaveForm: {
    component: lazy(() => import('./widgets/AutoSaveForm/AutoSaveForm.starter.jsx')),
    title: 'Auto-Save Form',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'debouncing'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  WindowSizeTracker: {
    component: lazy(() => import('./widgets/WindowSizeTracker/WindowSizeTracker.starter.jsx')),
    title: 'Window Size Tracker',
    difficulty: 'intermediate',
    concepts: ['useState', 'useEffect', 'event listeners', 'cleanup'],
    author: '',
    gridSize: { w: 2, h: 2 },
    enabled: false,
  },

  // ADVANCED useEffect WIDGETS (19-25)
  WeatherWidget: {
    component: lazy(() => import('./widgets/WeatherWidget/WeatherWidget.starter.jsx')),
    title: 'Weather Widget',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'fetch API', 'async/await', 'loading states'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  RandomUserProfile: {
    component: lazy(() => import('./widgets/RandomUserProfile/RandomUserProfile.starter.jsx')),
    title: 'Random User Profile',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'fetch API', 'error handling'],
    author: '',
    gridSize: { w: 2, h: 3 },
    enabled: false,
  },

  LiveSearch: {
    component: lazy(() => import('./widgets/LiveSearch/LiveSearch.starter.jsx')),
    title: 'Live Search',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'debouncing', 'API calls'],
    author: '',
    gridSize: { w: 3, h: 3 },
    enabled: false,
  },

  ChartWidget: {
    component: lazy(() => import('./widgets/ChartWidget/ChartWidget.starter.jsx')),
    title: 'Chart Widget',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'third-party libraries', 'data visualization'],
    author: '',
    gridSize: { w: 4, h: 3 },
    enabled: false,
  },

  DataTable: {
    component: lazy(() => import('./widgets/DataTable/DataTable.starter.jsx')),
    title: 'Data Table',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'pagination', 'API integration'],
    author: '',
    gridSize: { w: 4, h: 3 },
    enabled: false,
  },

  NotificationCenter: {
    component: lazy(() => import('./widgets/NotificationCenter/NotificationCenter.starter.jsx')),
    title: 'Notification Center',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'setTimeout', 'arrays'],
    author: '',
    gridSize: { w: 3, h: 4 },
    enabled: false,
  },

  ActivityTracker: {
    component: lazy(() => import('./widgets/ActivityTracker/ActivityTracker.starter.jsx')),
    title: 'Activity Tracker',
    difficulty: 'advanced',
    concepts: ['useState', 'useEffect', 'event listeners', 'user activity'],
    author: '',
    gridSize: { w: 3, h: 2 },
    enabled: false,
  },
};

/**
 * Get all enabled widgets
 */
export const getEnabledWidgets = () => {
  return Object.entries(widgetRegistry)
    .filter(([, config]) => config.enabled)
    .map(([key, config]) => ({ key, ...config }));
};

/**
 * Get widgets by difficulty
 */
export const getWidgetsByDifficulty = (difficulty) => {
  return Object.entries(widgetRegistry)
    .filter(([, config]) => config.difficulty === difficulty)
    .map(([key, config]) => ({ key, ...config }));
};

/**
 * Enable a widget (students will update this when they complete their widget)
 */
export const enableWidget = (widgetKey, authorName) => {
  if (widgetRegistry[widgetKey]) {
    widgetRegistry[widgetKey].enabled = true;
    widgetRegistry[widgetKey].author = authorName;
  }
};
