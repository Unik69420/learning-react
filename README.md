# Learning React

This repository is dedicated to my journey of learning React. The project is built using **Vite**, styled with **Tailwind CSS**, and written in **JavaScript**.

## Features

- Hands-on practice with React concepts like components, state, props, and hooks.
- Integration of Tailwind CSS for styling.
- Built using Vite for fast development and a modern build setup.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.18.0 or newer)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

### Installation

1. Create a new Vite project:
   ```bash
   npm create vite@latest
   ```

- When prompted, enter learning-react as the project name.
- Select React as the framework and JavaScript as the variant.

2. Navigate to the project directory:
   ```bash
   cd learning-react
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install Tailwind CSS:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init
   ```

- Configure tailwind.config.js and add Tailwind directives to your src/index.css:
  ```bash
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and navigate to http://localhost:3000 (or the port shown in your terminal).

### Technologies Used

- React: JavaScript library for building user interfaces.
- Vite: A fast and modern build tool for web projects.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- JavaScript (ES6+): The primary programming language for the project.

### Folder Structure

```bash
learning-react/
├── public/         # Static assets
├── src/            # Source code
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── App.jsx     # Main app file
│   └── index.js    # Entry point
├── tailwind.config.js # Tailwind CSS configuration
├── package.json    # Project metadata and dependencies
└── vite.config.js  # Vite configuration
```
