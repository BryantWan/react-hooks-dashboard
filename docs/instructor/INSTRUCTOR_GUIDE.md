# Instructor Guide - React Hooks Dashboard

## 🎓 Welcome, Instructor!

This guide will help you set up and run the React Hooks Dashboard workshop for your classroom. The project is designed for a **90-minute collaborative coding session** with **25 students**.

## 📋 Pre-Workshop Checklist

### 1 Week Before Workshop

- [ ] **Set up GitHub Repository**
  ```bash
  # Create a new repository in your GitHub organization
  # Push this project to the repository
  git remote add origin <your-repo-url>
  git push -u origin main
  ```

- [ ] **Configure Branch Protection**
  - Go to Settings → Branches → Add rule
  - Branch name pattern: `main`
  - Check: "Require pull request reviews before merging"
  - Check: "Require status checks to pass"
  - Save changes

- [ ] **Enable GitHub Actions**
  - Go to Settings → Actions → General
  - Enable "Allow all actions and reusable workflows"
  - Save

- [ ] **Create Issues from ISSUES.md**
  ```bash
  # Manually create 25 GitHub issues from docs/ISSUES.md
  # OR use GitHub CLI:
  # (Requires manual editing to copy from ISSUES.md)
  ```

### 3 Days Before Workshop

- [ ] **Assign Widgets to Students**
  - Match student skill levels to widget difficulty
  - Use GitHub issue assignments
  - Consider: 6 beginner, 6 intermediate beginner, 6 intermediate, 7 advanced

- [ ] **Send Pre-Workshop Email**
  ```
  Subject: React Hooks Workshop - Setup Instructions

  Hi everyone!

  Please complete these steps BEFORE the workshop:

  1. Install Node.js 18+ from https://nodejs.org
  2. Install Git from https://git-scm.com
  3. Install VS Code (recommended) from https://code.visualstudio.com
  4. Clone the repository: git clone <repo-url>
  5. Run: npm install
  6. Verify: npm run dev (should start server on localhost:5173)

  See detailed setup: [link to SETUP.md]

  Your assigned widget: [Widget Name]
  Issue link: [GitHub issue URL]

  See you at the workshop!
  ```

- [ ] **Test the Setup**
  - Clone the repo fresh
  - Run through setup steps
  - Verify everything works

### 1 Day Before Workshop

- [ ] **Prepare Presentation**
  - Brief React hooks introduction (10 min)
  - Demo of the dashboard (5 min)
  - Git workflow explanation (10 min)

- [ ] **Set Up Screen Sharing**
  - Test screen sharing in workshop room
  - Have backup plan (Zoom, etc.)

## 🕐 Workshop Timeline (90 Minutes)

### Introduction (15 minutes)
**What to cover:**
1. **Welcome & Overview** (5 min)
   - Project goals
   - What students will build
   - Show final dashboard vision

2. **React Hooks Primer** (5 min)
   - What are hooks?
   - useState basics
   - useEffect basics
   - Show live demo

3. **Git Workflow** (5 min)
   - Branch naming convention
   - How to make changes
   - Pull request process

**Talking Points:**
- "Each of you will build one widget"
- "All widgets combine into one dashboard"
- "Choose your difficulty level"
- "Help each other!"

### Setup Verification (10 minutes)
**Live troubleshooting:**
```bash
# Have everyone run these commands:
node --version    # Should be 18+
npm --version     # Should be 9+
git --version     # Any recent version

# Navigate to project
cd react-hooks-dashboard
npm install       # If not done already
npm run dev       # Should start on port 5173
```

**Common Issues:**
- Port 5173 already in use → Kill process or use different port
- Permission errors → Run with sudo or fix npm permissions
- Module not found → Delete node_modules, run npm install again

### Individual Work (50 minutes)

**Students should:**
1. **Check their assigned widget** (2 min)
   - Read GitHub issue
   - Read widget README
   - Choose difficulty level

2. **Create branch** (3 min)
   ```bash
   git checkout -b firstname-lastname-widgetname
   ```

3. **Implement widget** (35 min)
   - Work on starter/template/spec version
   - Test in browser with DevTools panel
   - Ask for help when stuck

4. **Enable widget** (5 min)
   - Edit `src/widgetConfig.js`
   - Set `enabled: true`
   - Add author name
   - Test in dashboard

5. **Create pull request** (5 min)
   ```bash
   git add .
   git commit -m "feat: implement WidgetName"
   git push origin firstname-lastname-widgetname
   ```
   - Use PR template
   - Fill out checklist

### Code Review & Integration (10 minutes)

**Live demo:**
1. Show a few pull requests
2. Review code together
3. Discuss improvements
4. Merge 2-3 PRs live
5. Show integrated dashboard

**Questions to ask:**
- "What React concepts did you use?"
- "What was challenging?"
- "How could this be improved?"

### Wrap-Up (5 minutes)

**Summary:**
- Review what was built
- Show the complete dashboard
- Discuss next steps
- Q&A

**Next Steps:**
- Finish PRs for homework
- Code reviews will be done async
- All PRs should be merged within 1 week

## 🎯 Teaching Tips

### For Different Skill Levels

**Absolute Beginners:**
- Assign beginner widgets (1-6)
- Use starter versions
- Pair with stronger students
- Focus on useState basics

**Intermediate:**
- Assign intermediate widgets (7-12)
- Use template versions
- Encourage exploration
- Introduce useEffect basics (13-18)

**Advanced:**
- Assign advanced widgets (19-25)
- Use spec versions
- Challenge with stretch goals
- Ask them to help others

### Managing the Workshop

**Stay on Schedule:**
- Use visible timer
- 5-minute warnings before transitions
- Keep intro short
- Maximize coding time

**Encourage Collaboration:**
- "If you finish early, help someone else"
- "Share your screen with neighbors"
- "Ask questions in the chat/room"

**Handle Questions:**
- Answer quick questions inline
- Group similar questions together
- Use screen share for complex issues
- Direct to documentation first

### Live Debugging

**Common Student Issues:**

1. **"My widget doesn't show up"**
   - Check `widgetConfig.js` → enabled: true
   - Check import path in config
   - Check component export
   - Use DevTools panel to show all widgets

2. **"State isn't updating"**
   - Check useState initialization
   - Check setter function call
   - Show React DevTools

3. **"Effect runs too many times"**
   - Explain dependency array
   - Show console.log for debugging
   - Review useEffect rules

4. **"Git errors"**
   - Check branch name
   - Pull latest changes
   - Resolve conflicts together

## 📊 Grading Guide

### Assessment Criteria

**Functionality (40 points)**
- Widget renders without errors (10 pts)
- All features work as specified (15 pts)
- Handles edge cases (10 pts)
- Responsive design (5 pts)

**Code Quality (30 points)**
- Clean, readable code (10 pts)
- Proper React patterns (10 pts)
- Good variable names (5 pts)
- Code comments (5 pts)

**Testing (15 points)**
- Tested in browser (10 pts)
- Edge cases considered (5 pts)

**Documentation (15 points)**
- PR description complete (5 pts)
- Checklist filled out (5 pts)
- Challenges documented (5 pts)

### Grading Scale
- **90-100:** Exceptional - Everything works, clean code, great PR
- **80-89:** Good - Works well, minor issues, decent documentation
- **70-79:** Satisfactory - Works with bugs, needs improvement
- **60-69:** Needs Work - Partially working, significant issues
- **Below 60:** Incomplete - Major functionality missing

## 🔧 Troubleshooting

### Before Workshop

**Students can't install Node.js:**
- Provide alternative: Use CodeSandbox or StackBlitz online
- Have backup machines ready

**GitHub access issues:**
- Add students as collaborators beforehand
- Have token/SSH setup guide ready

### During Workshop

**Server won't start:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

**Build fails:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Git conflicts:**
```bash
# Pull latest main
git checkout main
git pull origin main

# Rebase your branch
git checkout your-branch
git rebase main
```

## 📚 Additional Resources

### For You (Instructor)

- [React Hooks Documentation](https://react.dev/reference/react)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Classroom](https://classroom.github.com) - For automated setup

### For Students

- All docs in `/docs` folder
- Widget READMEs in each widget folder
- React DevTools browser extension
- [JavaScript.info](https://javascript.info) - JS reference

## 🎉 Success Metrics

**Workshop is successful if:**
- [ ] 80%+ students complete their widget
- [ ] 90%+ students create a pull request
- [ ] 100% students learn useState
- [ ] 70%+ students learn useEffect
- [ ] Students collaborate and help each other
- [ ] Everyone has fun coding!

## 📝 Post-Workshop

**Follow-Up Tasks:**

1. **Review Pull Requests** (1-2 days)
   - Provide constructive feedback
   - Request changes if needed
   - Approve and merge

2. **Grade Assignments** (1 week)
   - Use grading rubric
   - Provide feedback
   - Record grades

3. **Share Final Dashboard**
   - Deploy to Vercel/Netlify
   - Share link with class
   - Celebrate everyone's work!

4. **Gather Feedback**
   - Send survey to students
   - What worked well?
   - What needs improvement?
   - Use for next workshop

## 💡 Pro Tips

1. **Record the workshop** - Students can review later
2. **Use breakout rooms** - For small group help
3. **Have TAs ready** - To help with individual issues
4. **Prepare code snippets** - For common solutions
5. **Show real-world examples** - Connect to production apps
6. **Make it fun** - Celebrate small wins!

## 🆘 Emergency Plan

**If major technical issues:**
1. Switch to live coding demo
2. Show pre-built widgets
3. Do code review of example widgets
4. Extend deadline for PRs
5. Offer office hours for help

## 📬 Contact & Support

**During Workshop:**
- Monitor GitHub issues
- Watch for @mentions
- Be available on Slack/Discord

**After Workshop:**
- Office hours for questions
- Email support
- GitHub discussions

---

## Quick Command Reference

```bash
# Setup
npm install
npm run dev

# Testing
npm test
npm run lint

# Building
npm run build
npm run preview

# Git workflow
git checkout -b firstname-lastname-widget
git add .
git commit -m "feat: implement Widget"
git push origin branch-name
```

---

**Good luck with your workshop! 🚀**

*This project is designed to make teaching React hooks easy and fun. Enjoy!*
