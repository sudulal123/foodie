<div align="center">
  <br />
    <a>
      <img src="https://github.com/user-attachments/assets/f7afa488-afa0-4565-ae00-58f57c5bb52a" alt="Project Banner">
    </a>
  <br />
  <h3 align="center">Foodie - A recipe app</h3>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stacks](#tech-stacks)
3. [Quick Start](#quick-start)
4. [Features](#features)
5. [Goals](#goals)

## <a name="introduction"> Introduction </a>

Foodie allows you to search, and view your favorite recipes.

It's built using React for the frontend and Node.js for the backend.

## <a name="tech-stacks"> Tech Stack </a>

- React
- Node.js
- Framer-motion

## <a name="quick-start"> Quick Start </a>

**Prerequisites**

- [Node.js](https://nodejs.org/en)
- [Spoonacular API key](https://spoonacular.com/food-api) for recipe API
  - Add the api key to the `API_KEY` variable in the `.env` file

  <br/>

  **Setup**:

  ```bash
  # Clone the Repository
  git clone https://github.com/sudulal123/foodie.git

  # Navigate to the directory
  cd foodie

  # Install npm packages (only the first time)
  npm install

  # Run the local server at http://localhost:3000
  npm run start

  # Build for production in the build/ directory
  npm run build
  ```

## <a name="features"> Features </a>

**Reload Animation**: Implement subtle animations for page reloads and transitions. 

**Card swipe**: Card swipe functionality for enhanced viewing options.

**Search functionality**: Search Functionality for Preferred Cuisine.

## <a name="goals"> Goals </a>

The goal of this project is to focus less on aesthetic and more on data fetching using API. 

We use `Spoonacular API` for fetching Food Recipe information including description and pictures of food, as well as ingredients. 

Then we display the information in a categorical manner, such as Italian, Japanese, Thai & Japanese cuisine. To make the website more lively, we also use Framer-motion for subtle animation.

<!-- 
5. [To-do](#to-do)
## <a name="to-do"> To-do </a>
- [ ] TBD
- [ ] TBD
- [ ] TBD
-->
