💹 Stock Tracker App
📖 About This Project

This project is a Stock Tracker app built using React.
It allows users to:
- Search and add stocks to a personal stock list
- View stock details including price, symbol, and market data
- Update the stock list automatically using live data from an API

This project helped me practice React components, hooks (useState, useEffect, useContext), API calls, and state management.

▶️ How to Run This Project Locally
- Clone the repository
- git clone https://github.com/your-username/your-repo-name.git
- Go into the project folder
- cd your-repo-name


Install dependencies
- npm install
- Start the app
- npm run dev

Open your browser and go to:
http://localhost:5173

🧩 What I Built
1. Stock Search & Add
- Input field for entering stock symbols
- Automatically fetches stock data using an API
- Adds stock to a list when the user clicks Add
- Keeps track of added stocks in state

2. Stock List
- Displays all added stocks in a list format
- Shows live details like stock name, symbol, and price
- Automatically updates the stock list when new stocks are added
- Allows removal of stocks from the list

3. API Usage
Uses a Stock Market API (like Alpha Vantage, IEX Cloud, or any free API)

Fetches:
- Stock symbols
- Stock prices
- Other metadata (company name, exchange)
- API calls are handled inside useEffect
- Uses fetch() to get data asynchronously

🧠 State Management

Before
- Passed stock data between components using props
- Could get messy with multiple levels of components

After (Improvement)
- Used React Context (useContext) to store shared stock data
- Created a StockContext so multiple components can access the same list

Made the code cleaner and easier to maintain

🎨 Styling
Used separate CSS files for each component

Fixed styling issues by:
- Using className correctly in JSX
- Matching CSS selectors to components
- Improving layout with Flexbox for lists and forms

🐞 Bugs & Challenges I Faced
- CSS Not Applying

Problem: Styles didn’t appear in the browser
- Fix: Fixed syntax errors and used className instead of id
- Stock List Not Updating

Problem: List did not update when adding stocks
Fix: Used state correctly and triggered re-render using setState

Too Many Props

Problem: Passing stock data through multiple components became messy

Fix: Used useContext for shared stock data

✨ Extra Improvements

Live stock data from API instead of hardcoded values

Automatic list updates when new stocks are added

Cleaner structure using Context API

Prepared app for future features like removing stocks or showing charts

📝 GitHub & Version Control

Project is pushed to GitHub

Commits were made regularly

Commit messages clearly explain:

What was changed

Why the change was made

Example commit messages:

Add stock search component with API fetch

Implement stock list and dynamic updates

Refactor state using React Context

Fix CSS layout issues

🌱 What I Learned

How to use useState, useEffect, and useContext

How to fetch and use API data in React

How to structure React components properly

How to debug React and CSS issues

How to manage shared state using Context instead of passing props