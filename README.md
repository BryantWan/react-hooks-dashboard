# React Hooks Dashboard - Educational Project

A comprehensive React educational project designed for teaching `useState` and `useEffect` hooks in a collaborative classroom environment. Students work on individual widgets that combine into a unified dashboard application.

## 🎯 Project Overview

This project contains **25 self-contained widget components** that progressively teach React hooks concepts:
- **3 Example Widgets** - Pre-built demos (Pokemon Battle, Quote Generator, NASA Picture)
- **6 Beginner useState Widgets** - Basic state management
- **6 Intermediate useState Widgets** - Complex state and CRUD operations
- **6 useEffect Basics Widgets** - Side effects and cleanup
- **7 Advanced useEffect Widgets** - API integration and advanced patterns

## ✨ Features

- 📚 **Progressive Learning** - Widgets organized by difficulty level
- 🎨 **Tailwind CSS** - Modern, responsive styling
- 🧪 **Testing Ready** - Vitest + React Testing Library setup
- 🔧 **Development Tools** - Built-in DevTools panel for testing
- 📦 **Modular Architecture** - Each widget is independent
- 🚀 **CI/CD Pipeline** - Automated testing and linting
- 📖 **Comprehensive Docs** - Detailed guides for every step

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-hooks-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

The app includes **3 example widgets** (disabled by default) that students can enable to see working implementations:
   - 🎮 **Pokemon Battle** - Interactive Pokemon battles using PokeAPI
   - 💭 **Quote Generator** - Random quotes with auto-refresh (ZenQuotes API)
   - 🌌 **NASA Picture of the Day** - Daily astronomy images from NASA

   Enable them in `src/widgetConfig.js` to study fully-implemented examples!

## 📚 Documentation

### 👨‍🎓 For Students
- **[📖 Student Guide](docs/student/STUDENT_GUIDE.md)** - **START HERE!** Complete guide for students
- [Setup Instructions](docs/student/SETUP.md) - Environment setup
- [Git Workflow](docs/student/WORKFLOW.md) - How to use Git
- [Widget Guide](docs/student/WIDGET_GUIDE.md) - React hooks patterns

### 👨‍🏫 For Instructors
- **[📋 Instructor Guide](docs/instructor/INSTRUCTOR_GUIDE.md)** - Workshop facilitation
- [Project Summary](docs/instructor/PROJECT_SUMMARY.md) - Complete overview
- [Widget Assignments](docs/instructor/ISSUES.md) - Pre-written issues

### 📑 Full Documentation Index
- **[See all docs →](docs/README.md)**

## 🎓 For Students

### How to Choose a Widget

1. **Check available widgets** in [Widget Assignments](docs/instructor/ISSUES.md)
2. **Choose based on your skill level:**
   - 🟢 **Beginner** - New to React hooks (15-30 min)
   - 🟡 **Intermediate** - Comfortable with basics (35-50 min)
   - 🔴 **Advanced** - Ready for challenges (45-70 min)

### Implementation Levels

Each widget has **3 difficulty versions**:

1. **Starter** (`.starter.jsx`) - 90% complete, fill in the blanks
2. **Template** (`.template.jsx`) - Component shell, implement logic
3. **Spec** (`.spec.md`) - Build from scratch using requirements

### Workflow

```bash
# 1. Create your branch
git checkout -b firstname-lastname-widgetname

# 2. Navigate to your widget
cd src/widgets/YourWidget

# 3. Read the README
cat README.md

# 4. Choose your file and implement
# - YourWidget.starter.jsx (beginner)
# - YourWidget.template.jsx (intermediate)
# - YourWidget.spec.md (advanced)

# 5. Enable your widget
# Edit src/widgetConfig.js:
# - Set enabled: true
# - Add your name as author

# 6. Test locally
npm run dev

# 7. Commit and push
git add .
git commit -m "feat: implement YourWidget"
git push origin firstname-lastname-widgetname

# 8. Create Pull Request
# Use the PR template to describe your work
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests |
| `npm run test:ui` | Run tests with UI |

## 📂 Project Structure

```
react-hooks-dashboard/
├── .github/              # GitHub workflows and templates
├── docs/                 # Documentation
├── src/
│   ├── components/       # Core components
│   │   ├── Dashboard.jsx
│   │   ├── WidgetTile.jsx
│   │   ├── DevTools.jsx
│   │   └── ErrorBoundary.jsx
│   ├── widgets/          # All widget components
│   │   ├── SimpleCounter/
│   │   ├── ToggleSwitch/
│   │   └── ... (25 total)
│   ├── utils/            # Utilities and helpers
│   ├── widgetConfig.js   # Widget registry
│   └── App.jsx
├── package.json
└── README.md
```

## 🎨 Widget Categories

### Beginner useState (6 widgets)
- SimpleCounter - Basic counter with increment/decrement
- ToggleSwitch - ON/OFF toggle
- ColorPicker - Color selection
- CharacterCounter - Text input with count
- TemperatureConverter - Celsius/Fahrenheit conversion
- TagSelector - Multi-select checkboxes

### Intermediate useState (6 widgets)
- TodoList - Add/remove/complete todos
- FormValidator - Multi-field form validation
- ShoppingCart - Cart with quantities and total
- FilterPanel - Multiple filter controls
- TabNavigation - Tab switching
- ModalManager - Modal open/close

### useEffect Basics (6 widgets)
- CountdownTimer - Timer with cleanup
- LiveClock - Real-time clock
- ColorCycler - Auto-cycling colors
- LocalStoragePersistence - Data persistence
- AutoSaveForm - Auto-save with debounce
- WindowSizeTracker - Window resize tracking

### Advanced useEffect (7 widgets)
- WeatherWidget - API data fetching
- RandomUserProfile - User data with loading states
- LiveSearch - Debounced search
- ChartWidget - Data visualization
- DataTable - Paginated table
- NotificationCenter - Timed notifications
- ActivityTracker - Inactivity detection

## 🧪 Testing

Each widget can have tests. Run tests with:

```bash
# Run all tests
npm test

# Run specific widget tests
npm test SimpleCounter

# Run with UI
npm run test:ui
```

Example test structure:
```
src/widgets/SimpleCounter/
├── SimpleCounter.starter.jsx
├── __tests__/
│   └── SimpleCounter.test.jsx
└── README.md
```

## 🤝 Contributing

### Branch Naming Convention
```
firstname-lastname-widgetname
```
Example: `john-doe-simplecounter`

### Commit Message Format
```
feat: implement SimpleCounter widget
fix: resolve state update issue in TodoList
docs: update ColorPicker README
```

### Pull Request Process
1. Complete your widget implementation
2. Update `widgetConfig.js` to enable your widget
3. Test thoroughly in the browser
4. Create PR using the template
5. Request review from instructor
6. Address any feedback
7. Merge when approved

## 🎯 Learning Objectives

By completing this project, students will:
- ✅ Master `useState` for state management
- ✅ Understand `useEffect` for side effects
- ✅ Learn proper cleanup patterns
- ✅ Practice event handling
- ✅ Work with APIs and async code
- ✅ Use Git for collaboration
- ✅ Follow React best practices
- ✅ Write clean, maintainable code

## 🔧 Development Tools

The project includes a **DevTools** panel (development only):
- Toggle to show all widgets
- View widget status
- Clear localStorage
- See registry information

Access it via the button in the bottom-right corner.

## 📖 Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vitest Testing](https://vitest.dev)
- [React Testing Library](https://testing-library.com/react)

## ❓ Getting Help

If you need help:
1. 📖 Check the widget's README file
2. 📚 Read [WIDGET_GUIDE.md](docs/WIDGET_GUIDE.md)
3. 🐛 Search existing issues
4. 💬 Ask in class discussion
5. 🎫 Create a "help-needed" issue

## 📋 Instructor Notes

### Setup for Classroom
1. Clone and set up the repository
2. Create GitHub issues from [ISSUES.md](docs/ISSUES.md)
3. Assign widgets to students (1 widget per student)
4. Protect main branch (require PR reviews)
5. Enable GitHub Actions for CI/CD

### Grading Criteria
- Widget functionality (40%)
- Code quality (30%)
- Testing (15%)
- Documentation (15%)

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

Built with:
- React 19
- Vite 7
- Tailwind CSS 4.1
- Vitest 3
- React Grid Layout

---

**Happy Coding! 🚀**

For questions or issues, please create an issue using the templates in `.github/ISSUE_TEMPLATE/`
