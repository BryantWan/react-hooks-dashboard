# Environment Setup Guide

Welcome to the React Hooks Dashboard project! This guide will walk you through setting up your development environment step by step.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Running the Development Server](#running-the-development-server)
- [Verification Steps](#verification-steps)
- [Troubleshooting](#troubleshooting)
- [IDE Setup](#ide-setup)
- [Additional Tools](#additional-tools)

## Prerequisites

Before starting, ensure you have the following software installed on your computer:

### Required Software

#### 1. Node.js (Version 18 or higher)

Node.js is a JavaScript runtime that allows you to run JavaScript on your computer (outside of a browser).

**Check if installed:**
```bash
node --version
```

You should see something like `v18.x.x` or higher. If not installed:

**Installation:**
- **Windows/Mac**: Download from [nodejs.org](https://nodejs.org/)
  - Choose the LTS (Long Term Support) version
  - Run the installer and follow the prompts
- **Mac (with Homebrew)**:
  ```bash
  brew install node
  ```
- **Linux (Ubuntu/Debian)**:
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

**Verify npm is also installed:**
```bash
npm --version
```

You should see a version number like `9.x.x` or higher.

#### 2. Git

Git is a version control system that tracks changes to your code.

**Check if installed:**
```bash
git --version
```

**Installation:**
- **Windows**: Download from [git-scm.com](https://git-scm.com/)
- **Mac**:
  ```bash
  brew install git
  ```
  Or install Xcode Command Line Tools:
  ```bash
  xcode-select --install
  ```
- **Linux (Ubuntu/Debian)**:
  ```bash
  sudo apt-get install git
  ```

**Configure Git (first time only):**
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

#### 3. Code Editor

We recommend **Visual Studio Code** (VS Code) - it's free and powerful.

**Download:**
- Go to [code.visualstudio.com](https://code.visualstudio.com/)
- Download for your operating system
- Install following the prompts

**Recommended VS Code Extensions:**
- ESLint - JavaScript linting
- Prettier - Code formatter
- ES7+ React/Redux/React-Native snippets - React code snippets
- Tailwind CSS IntelliSense - Tailwind autocomplete
- GitLens - Enhanced Git integration

## Installation Steps

### Step 1: Clone the Repository

Open your terminal (Command Prompt, PowerShell, or Terminal app) and navigate to where you want to store the project.

```bash
# Navigate to your projects folder
cd ~/Documents/Projects  # Mac/Linux
# or
cd C:\Users\YourName\Documents\Projects  # Windows

# Clone the repository
git clone <repository-url>

# Navigate into the project folder
cd react-hooks-dashboard
```

**Verify you're in the right place:**
```bash
ls  # Mac/Linux
# or
dir  # Windows
```

You should see files like `package.json`, `README.md`, etc.

### Step 2: Install Dependencies

This command downloads all the libraries and tools the project needs:

```bash
npm install
```

**What's happening?**
- npm reads `package.json` to see what packages are needed
- Downloads packages from the npm registry
- Installs them in a `node_modules` folder
- Creates/updates `package-lock.json` to lock versions

**Expected output:**
- You'll see a progress bar and package names scrolling by
- Should take 1-3 minutes depending on your internet speed
- Ends with something like:

```
added 312 packages, and audited 313 packages in 45s

120 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

**If you see warnings about vulnerabilities:**
- Low severity warnings are usually fine for a learning project
- High severity warnings should be addressed with:
  ```bash
  npm audit fix
  ```

### Step 3: Verify Installation

Check that everything installed correctly:

```bash
# Check that node_modules was created
ls node_modules  # Mac/Linux
dir node_modules  # Windows

# You should see many folders (dependencies)
```

## Running the Development Server

### Start the Server

```bash
npm run dev
```

**What this does:**
- Starts Vite development server
- Compiles your React code
- Watches for file changes
- Provides hot module replacement (instant updates)

**Expected output:**
```
  VITE v7.1.7  ready in 234 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Important notes:**
- The server runs in your terminal - keep this window open!
- Press `Ctrl + C` to stop the server when done
- The port number (5173) might be different if that port is busy

### Access the Application

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Navigate to: `http://localhost:5173`
3. You should see the React Hooks Dashboard!

**What you'll see:**
- A message saying "No widgets enabled yet"
- A "DevTools" button in the bottom-right corner
- Click DevTools to see all available widgets

### Making Changes

Try editing a file to see hot reload in action:

1. Open `src/App.jsx` in your code editor
2. Make a small change (like changing some text)
3. Save the file
4. Watch the browser automatically update!

## Verification Steps

Let's verify everything is working correctly:

### 1. Check the Dashboard Loads

- Navigate to `http://localhost:5173`
- Dashboard should load without errors
- Check browser console (F12 → Console tab)
- Should see minimal/no errors

### 2. Check DevTools

- Click the DevTools button (bottom-right)
- You should see a panel with widget information
- Try toggling "Show All Widgets"
- Widgets should appear on the dashboard

### 3. Run Tests

```bash
# In a new terminal window (keep dev server running)
npm test

# You should see test results
```

Expected output:
```
✓ src/widgets/SimpleCounter/__tests__/SimpleCounter.test.jsx (3)
   ✓ SimpleCounter (3)
     ✓ renders initial count
     ✓ increments count
     ✓ decrements count

Test Files  1 passed (1)
     Tests  3 passed (3)
```

### 4. Run Linter

```bash
npm run lint
```

Should complete with no errors (warnings are OK).

### 5. Check Git Status

```bash
git status
```

Should show:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

## Troubleshooting

### Common Issues and Solutions

#### Issue: Port 5173 Already in Use

**Error message:**
```
Port 5173 is in use, trying another one...
```

**Solutions:**
1. **Find and stop the process using port 5173:**

   Mac/Linux:
   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

   Windows (PowerShell):
   ```powershell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 5173).OwningProcess | Stop-Process
   ```

2. **Or use a different port:**
   ```bash
   npm run dev -- --port 3000
   ```

#### Issue: Permission Errors During npm install

**Error message:**
```
EACCES: permission denied
```

**Solutions:**

**DO NOT use sudo with npm!** Instead:

1. **Fix npm permissions (Mac/Linux):**
   ```bash
   mkdir ~/.npm-global
   npm config set prefix '~/.npm-global'
   echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
   source ~/.bashrc
   ```

2. **On Windows:** Run terminal as Administrator

3. **Or use nvm (Node Version Manager):**
   - Install nvm: [github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)
   - Then: `nvm install 18` and `nvm use 18`

#### Issue: Module Not Found Errors

**Error message:**
```
Cannot find module 'react'
Error: Cannot find module './components/Dashboard'
```

**Solutions:**

1. **Delete and reinstall node_modules:**
   ```bash
   rm -rf node_modules package-lock.json  # Mac/Linux
   # or
   rmdir /s node_modules & del package-lock.json  # Windows

   npm install
   ```

2. **Clear npm cache:**
   ```bash
   npm cache clean --force
   npm install
   ```

#### Issue: Git Clone Fails

**Error message:**
```
fatal: repository not found
fatal: could not read Username
```

**Solutions:**

1. **Check repository URL is correct**
2. **Verify Git credentials:**
   ```bash
   git config --global user.name
   git config --global user.email
   ```

3. **For private repos, authenticate:**
   - Use HTTPS with personal access token
   - Or set up SSH keys: [docs.github.com/authentication](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

#### Issue: Blank White Page

**Symptoms:**
- Browser shows white screen
- No errors in terminal

**Solutions:**

1. **Check browser console (F12):**
   - Look for JavaScript errors
   - Common: missing imports, syntax errors

2. **Hard reload:**
   - Windows/Linux: `Ctrl + Shift + R`
   - Mac: `Cmd + Shift + R`

3. **Clear browser cache:**
   - Settings → Privacy → Clear browsing data

4. **Restart dev server:**
   - `Ctrl + C` in terminal
   - `npm run dev` again

#### Issue: Hot Reload Not Working

**Symptoms:**
- Make changes but browser doesn't update
- Have to manually refresh

**Solutions:**

1. **Save the file** (Ctrl+S / Cmd+S)
2. **Check file is in `src/` directory**
3. **Restart dev server**
4. **Check file watchers limit (Linux):**
   ```bash
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

#### Issue: npm command not found

**Solutions:**

1. **Restart terminal/computer** after installing Node.js
2. **Check Node.js installation:**
   ```bash
   which node  # Mac/Linux
   where node  # Windows
   ```

3. **Add to PATH manually:**

   Mac/Linux (add to `~/.bashrc` or `~/.zshrc`):
   ```bash
   export PATH="/usr/local/bin:$PATH"
   ```

   Windows: Add Node.js installation folder to System PATH in Environment Variables

#### Issue: Slow npm install

**Solutions:**

1. **Use a different registry:**
   ```bash
   npm install --registry=https://registry.npmmirror.com
   ```

2. **Check internet connection**

3. **Disable antivirus temporarily** (sometimes blocks npm)

4. **Use npm cache:**
   ```bash
   npm install --prefer-offline
   ```

## IDE Setup

### Visual Studio Code Configuration

Create a `.vscode/settings.json` file in your project root (if it doesn't exist):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

### Keyboard Shortcuts

Useful VS Code shortcuts:

- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + P` - Command palette
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + J` - Toggle terminal
- `Ctrl/Cmd + /` - Comment/uncomment line
- `Alt/Option + Shift + F` - Format document
- `F12` - Go to definition
- `Ctrl/Cmd + Click` - Go to definition

## Additional Tools

### Optional but Recommended

#### React Developer Tools

Browser extension for debugging React apps:

- **Chrome**: [Chrome Web Store](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- **Firefox**: [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

**How to use:**
1. Open browser DevTools (F12)
2. Look for "Components" and "Profiler" tabs
3. Inspect React component tree
4. View component state and props

#### Git GUI Client

If you prefer graphical interfaces over command line:

- **GitHub Desktop**: [desktop.github.com](https://desktop.github.com/)
- **GitKraken**: [gitkraken.com](https://gitkraken.com/)
- **SourceTree**: [sourcetreeapp.com](https://sourcetreeapp.com/)

#### Terminal Alternatives

Better terminal experiences:

- **Mac**: [iTerm2](https://iterm2.com/)
- **Windows**: [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701)
- **Cross-platform**: [Hyper](https://hyper.is/)

## Next Steps

Once your environment is set up:

1. Read [WORKFLOW.md](./WORKFLOW.md) - Learn the Git workflow
2. Read [WIDGET_GUIDE.md](./WIDGET_GUIDE.md) - Understand React hooks
3. Read [ISSUES.md](./ISSUES.md) - Choose a widget to build
4. Start coding!

## Getting Help

If you're still stuck after trying troubleshooting steps:

1. **Check existing GitHub issues** - Your problem might be solved already
2. **Search the error message** - Often leads to Stack Overflow solutions
3. **Ask in class discussion** - Your classmates might help
4. **Create a GitHub issue** - Include:
   - Operating system
   - Node.js version (`node --version`)
   - npm version (`npm --version`)
   - Full error message
   - What you've tried

## Summary Checklist

Before moving on, verify:

- [ ] Node.js 18+ installed and verified
- [ ] Git installed and configured
- [ ] Code editor (VS Code) installed
- [ ] Repository cloned successfully
- [ ] Dependencies installed with `npm install`
- [ ] Dev server runs with `npm run dev`
- [ ] Dashboard loads at `http://localhost:5173`
- [ ] DevTools panel opens and shows widgets
- [ ] Tests run with `npm test`
- [ ] No major errors in browser console

**All checked?** You're ready to start building widgets!

---

**Happy coding!** If you encounter any issues not covered here, please let your instructor know so we can update this guide.
