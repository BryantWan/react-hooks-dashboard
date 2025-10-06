# React Hooks Dashboard - Project Tree

```
react-hooks-dashboard/
│
├── 📄 README.md                          # Main project documentation
├── 📄 PROJECT_SUMMARY.md                 # Complete project overview
├── 📄 INSTRUCTOR_GUIDE.md                # Workshop facilitation guide
├── 📄 package.json                       # Dependencies and scripts
├── 📄 package-lock.json                  # Lock file
├── 📄 .gitignore                         # Git ignore rules
├── 📄 vite.config.js                     # Vite + Vitest configuration
├── 📄 tailwind.config.js                 # Tailwind CSS config
├── 📄 postcss.config.js                  # PostCSS config
├── 📄 .eslintrc.cjs                      # ESLint configuration
├── 📄 index.html                         # HTML entry point
│
├── 📁 .github/                           # GitHub configuration
│   ├── 📁 workflows/
│   │   ├── ci.yml                        # CI pipeline
│   │   └── pr-checks.yml                 # PR validation
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── widget-assignment.md          # Widget assignment template
│   │   ├── bug-report.md                 # Bug report template
│   │   └── help-needed.md                # Help request template
│   └── pull_request_template.md          # PR template
│
├── 📁 docs/                              # Documentation
│   ├── SETUP.md                          # Setup guide (13 KB)
│   ├── WORKFLOW.md                       # Git workflow (23 KB)
│   ├── WIDGET_GUIDE.md                   # React hooks guide (41 KB)
│   └── ISSUES.md                         # Widget assignments (50 KB)
│
├── 📁 src/                               # Source code
│   ├── 📄 main.jsx                       # React entry point
│   ├── 📄 App.jsx                        # Main App component
│   ├── 📄 index.css                      # Global styles with Tailwind
│   ├── 📄 widgetConfig.js                # Widget registry
│   │
│   ├── 📁 components/                    # Core components
│   │   ├── Dashboard.jsx                 # Main dashboard
│   │   ├── WidgetTile.jsx                # Widget wrapper
│   │   ├── DevTools.jsx                  # Dev tools panel
│   │   └── ErrorBoundary.jsx             # Error boundary
│   │
│   ├── 📁 utils/                         # Utilities
│   │   ├── testSetup.js                  # Vitest setup
│   │   ├── testUtils.jsx                 # Testing helpers
│   │   └── mockApi.js                    # Mock API endpoints
│   │
│   └── 📁 widgets/                       # All 25 widgets
│       │
│       ├── 📁 SimpleCounter/             # Widget 1 (Beginner)
│       │   ├── SimpleCounter.starter.jsx
│       │   ├── SimpleCounter.template.jsx
│       │   ├── SimpleCounter.spec.md
│       │   ├── README.md
│       │   └── __tests__/
│       │       └── SimpleCounter.test.jsx
│       │
│       ├── 📁 ToggleSwitch/              # Widget 2 (Beginner)
│       │   ├── ToggleSwitch.starter.jsx
│       │   ├── ToggleSwitch.template.jsx
│       │   ├── ToggleSwitch.spec.md
│       │   └── README.md
│       │
│       ├── 📁 ColorPicker/               # Widget 3 (Beginner)
│       │   ├── ColorPicker.starter.jsx
│       │   ├── ColorPicker.template.jsx
│       │   ├── ColorPicker.spec.md
│       │   └── README.md
│       │
│       ├── 📁 CharacterCounter/          # Widget 4 (Beginner)
│       │   ├── CharacterCounter.starter.jsx
│       │   ├── CharacterCounter.template.jsx
│       │   ├── CharacterCounter.spec.md
│       │   └── README.md
│       │
│       ├── 📁 TemperatureConverter/      # Widget 5 (Beginner)
│       │   ├── TemperatureConverter.starter.jsx
│       │   ├── TemperatureConverter.template.jsx
│       │   ├── TemperatureConverter.spec.md
│       │   └── README.md
│       │
│       ├── 📁 TagSelector/               # Widget 6 (Beginner)
│       │   ├── TagSelector.starter.jsx
│       │   ├── TagSelector.template.jsx
│       │   ├── TagSelector.spec.md
│       │   └── README.md
│       │
│       ├── 📁 TodoList/                  # Widget 7 (Intermediate)
│       │   ├── TodoList.starter.jsx
│       │   ├── TodoList.template.jsx
│       │   ├── TodoList.spec.md
│       │   └── README.md
│       │
│       ├── 📁 FormValidator/             # Widget 8 (Intermediate)
│       │   ├── FormValidator.starter.jsx
│       │   ├── FormValidator.template.jsx
│       │   ├── FormValidator.spec.md
│       │   └── README.md
│       │
│       ├── 📁 ShoppingCart/              # Widget 9 (Intermediate)
│       │   ├── ShoppingCart.starter.jsx
│       │   ├── ShoppingCart.template.jsx
│       │   ├── ShoppingCart.spec.md
│       │   └── README.md
│       │
│       ├── 📁 FilterPanel/               # Widget 10 (Intermediate)
│       │   ├── FilterPanel.starter.jsx
│       │   ├── FilterPanel.template.jsx
│       │   ├── FilterPanel.spec.md
│       │   └── README.md
│       │
│       ├── 📁 TabNavigation/             # Widget 11 (Intermediate)
│       │   ├── TabNavigation.starter.jsx
│       │   ├── TabNavigation.template.jsx
│       │   ├── TabNavigation.spec.md
│       │   └── README.md
│       │
│       ├── 📁 ModalManager/              # Widget 12 (Intermediate)
│       │   ├── ModalManager.starter.jsx
│       │   ├── ModalManager.template.jsx
│       │   ├── ModalManager.spec.md
│       │   └── README.md
│       │
│       ├── 📁 CountdownTimer/            # Widget 13 (useEffect Basics)
│       │   ├── CountdownTimer.starter.jsx
│       │   ├── CountdownTimer.template.jsx
│       │   ├── CountdownTimer.spec.md
│       │   └── README.md
│       │
│       ├── 📁 LiveClock/                 # Widget 14 (useEffect Basics)
│       │   ├── LiveClock.starter.jsx
│       │   ├── LiveClock.template.jsx
│       │   ├── LiveClock.spec.md
│       │   └── README.md
│       │
│       ├── 📁 ColorCycler/               # Widget 15 (useEffect Basics)
│       │   ├── ColorCycler.starter.jsx
│       │   ├── ColorCycler.template.jsx
│       │   ├── ColorCycler.spec.md
│       │   └── README.md
│       │
│       ├── 📁 LocalStoragePersistence/   # Widget 16 (useEffect Basics)
│       │   ├── LocalStoragePersistence.starter.jsx
│       │   ├── LocalStoragePersistence.template.jsx
│       │   ├── LocalStoragePersistence.spec.md
│       │   └── README.md
│       │
│       ├── 📁 AutoSaveForm/              # Widget 17 (useEffect Basics)
│       │   ├── AutoSaveForm.starter.jsx
│       │   ├── AutoSaveForm.template.jsx
│       │   ├── AutoSaveForm.spec.md
│       │   └── README.md
│       │
│       ├── 📁 WindowSizeTracker/         # Widget 18 (useEffect Basics)
│       │   ├── WindowSizeTracker.starter.jsx
│       │   ├── WindowSizeTracker.template.jsx
│       │   ├── WindowSizeTracker.spec.md
│       │   └── README.md
│       │
│       ├── 📁 WeatherWidget/             # Widget 19 (Advanced)
│       │   ├── WeatherWidget.starter.jsx
│       │   ├── WeatherWidget.template.jsx
│       │   ├── WeatherWidget.spec.md
│       │   └── README.md
│       │
│       ├── 📁 RandomUserProfile/         # Widget 20 (Advanced)
│       │   ├── RandomUserProfile.starter.jsx
│       │   ├── RandomUserProfile.template.jsx
│       │   ├── RandomUserProfile.spec.md
│       │   └── README.md
│       │
│       ├── 📁 LiveSearch/                # Widget 21 (Advanced)
│       │   ├── LiveSearch.starter.jsx
│       │   ├── LiveSearch.template.jsx
│       │   ├── LiveSearch.spec.md
│       │   └── README.md
│       │
│       ├── 📁 ChartWidget/               # Widget 22 (Advanced)
│       │   ├── ChartWidget.starter.jsx
│       │   ├── ChartWidget.template.jsx
│       │   ├── ChartWidget.spec.md
│       │   └── README.md
│       │
│       ├── 📁 DataTable/                 # Widget 23 (Advanced)
│       │   ├── DataTable.starter.jsx
│       │   ├── DataTable.template.jsx
│       │   ├── DataTable.spec.md
│       │   └── README.md
│       │
│       ├── 📁 NotificationCenter/        # Widget 24 (Advanced)
│       │   ├── NotificationCenter.starter.jsx
│       │   ├── NotificationCenter.template.jsx
│       │   ├── NotificationCenter.spec.md
│       │   └── README.md
│       │
│       └── 📁 ActivityTracker/           # Widget 25 (Advanced)
│           ├── ActivityTracker.starter.jsx
│           ├── ActivityTracker.template.jsx
│           ├── ActivityTracker.spec.md
│           └── README.md
│
├── 📁 public/                            # Static assets
│   └── vite.svg
│
└── 📁 dist/                              # Build output (generated)
    ├── index.html
    ├── assets/
    └── ...
```

## 📊 File Statistics

- **Total Files:** 153+
- **Widget Files:** 100 (25 widgets × 4 files each)
- **Core Components:** 4
- **Utility Files:** 3
- **Documentation:** 8
- **GitHub Templates:** 5
- **Configuration Files:** 7

## 🎯 Widget Breakdown

### Beginner useState (6 widgets)
1-6: SimpleCounter → TagSelector

### Intermediate useState (6 widgets)
7-12: TodoList → ModalManager

### useEffect Basics (6 widgets)
13-18: CountdownTimer → WindowSizeTracker

### Advanced useEffect (7 widgets)
19-25: WeatherWidget → ActivityTracker

## 🚀 Quick Access

- **Start Coding:** `npm run dev`
- **Run Tests:** `npm test`
- **Build Project:** `npm run build`
- **Main README:** [README.md](README.md)
- **Setup Guide:** [docs/SETUP.md](docs/SETUP.md)
- **Widget Assignments:** [docs/ISSUES.md](docs/ISSUES.md)

---

**Project Status:** ✅ Production Ready
