# Finance Dashboard
A stock portfolio tracking application built with **React** and **Vite**.  
This dashboard allows users to:

- Add stock purchase details  
- Fetch real-time stock prices via the **AlphaVantage API**  
- Calculate profit and loss dynamically  

---

## Prerequisites
Before running this project, ensure you have the following installed:

- **Node.js** (version 18 or higher recommended)  
- **npm** (Node Package Manager, comes with Node.js)  

---

## How to Run the Project Locally
```bash
1. Clone or Download the Repository
If you already have the project files, navigate to the project folder in your terminal:
cd your-project-folder-name

2. Install Dependencies
Install the required packages listed in package.json: npm install

3. Start the Development Server
Run the following command:npm run dev
Once the server starts, the terminal will display a local URL
(usually http://localhost:5173/). Open this in your browser to view the app.

Running Tests
This project includes unit tests using Vitest and React Testing Library.
npm run test

Technologies Used
React – Frontend library for building the user interface
Vite – Fast development and build tool
CSS – Styling (dark theme implementation)
AlphaVantage API – Fetching real-time global stock quotes
Vitest – Unit testing framework

Features
Add, view, and track stock purchases
Real-time stock price updates via API
Dynamic profit/loss calculations

## Bugs and Challenges Encountered & Resolutions

1. **CSS Styling and Syntax Issues**  
- **Challenge:** Styles defined in CSS files were not applying to components (e.g., the dropdown and converter).  
- **Resolution:** I realized I was using the HTML `id` attribute instead of React’s `className` in my JSX. I also made sure to explicitly import the CSS files at the top of the component files (e.g., `import "./StockForm.css"`). Additionally, I fixed general CSS syntax mistakes, like missing braces and semicolons.

2. **Component Composition and Imports**  
- **Challenge:** Updates made to the main `App.jsx` file were not showing in the browser, especially when adding new features like `CurrencyDropdown`.  
- **Resolution:** I discovered I had forgotten to import the component into the main file. I fixed this by adding the import statement and making sure the component tag was included inside the return statement of the `App` function.

3. **Error Handling Logic**  
- **Challenge:** Entering an invalid stock symbol would clear the entire stock list to show the error message, which was a poor user experience.  
- **Resolution:** I updated the conditional rendering logic in `StockList.jsx`. Now, the error message displays **below** the existing stock list, so valid data stays visible while alerting the user.

4. **React Terminology and Syntax Sensitivity**  
- **Challenge:** Navigating new concepts like `useState`, `useEffect`, and understanding the difference between Components and Props was initially confusing. Build errors often came from small syntax mistakes, like missing commas or mismatched braces.  
- **Resolution:** I took more time to learn the concepts introduced in all lessons **beyond just coding**, heavily using AI and other resources to understand how things work. While I could grasp the ideas better conceptually, writing the code from scratch with the correct syntax was still very challenging. I focused on step-by-step debugging and understanding how data flows from parent to child via props to make the app stable.