# Northcoders' News UI

Welcome to the Northcoders' News App! This React-based application allows users to interact with a news platform, where they can view articles, post comments, and even delete their own comments (when logged in as a predefined user). This README contains all the information you need to run the app locally, along with links to the deployed version and the back-end repository.

## Deployed Version

Check out the deployed version of the app [here](https://main--jakewhittakerreactproject.netlify.app).

## Project Description

The Northcoders' News App provides a simple user interface to explore news articles. The main features include:

- Viewing all articles
- Filtering articles by topic
- Sorting articles by various criteria (e.g., date, comments count)
- Viewing comments on each article
- Adding a comment (requires login with a hardcoded user)
- Deleting a comment (for logged-in users only)

## Backend Repository

This app interacts with a separate backend. You can find the backend repository [here](your-backend-repo-link).

## Minimum Requirements

To run this project locally, you need:

- Node.js v21.6.1 or higher
- PostgreSQL v14.11 or higher

## Local Setup Instructions

To run this project locally, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Jxffxjxke/NC-News-FE-Project.git
   ```
2. **Navigate into the Project Directory**

   ```bash
   cd NC-News-FE-Project
   ```

3. **Install Dependencies**
   ```bash
    npm i
   ```
4. **Set up the database**
   Make sure PostgreSQL is installed and running. Then, set up the necessary database for your project. The database setup script or instructions should be provided in your backend repository.
5. **Run the App Locally**
   ```bash
   npm run dev
   ```
6. **Run the App Locally**
    By default, the app runs on http://localhost:5174. Open your browser and navigate to this address to view the app.