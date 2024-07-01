<div align="center">
  <br />
    <a>
      <img src="" alt="Project Banner">
    </a>
  <br />
  <h3 align="center">Foodie - A recipe app</h3>
</div>

## <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stacks](#tech-stacks)
3. [Quick Start](#quick-start)
4. [Features](#features)
5. [To-do](#to-do)

## <a name="introduction"> Introduction </a>

Foodie allows you to view, add, and manage your favorite recipes.

It's built using React for the frontend and Node.js with Prisma for the backend.

## <a name="tech-stacks"> Tech Stack </a>

- React
- Node.js
- TypeScript
- PostgresSQL

## <a name="quick-start"> Quick Start </a>

**Prerequisites**

- [npm](https://www.npmjs.com/)
- [Node.js](https://nodejs.org/en)
- [ElephantSQL](https://www.elephantsql.com/) An account for database
  - Create a new database instance on ElephantSQL.
  - Copy the connection string provided by ElephantSQL.
- [Spoonacular API key](https://spoonacular.com/food-api) for recipe API
  - Add the api key to the `API_KEY` variable in the `.env` file
- [Prisma](https://www.prisma.io/) setup

  - Replace the `DATABASE_URL` in the `.env` file with your ElephantSQL connection string

  <br/>

  **Backend setup**

  ```bash
  # Clone the Repository
    git clone https://github.com/sudulal123/foodie.git
    cd foodie

  # Navigate to the backend directory
   cd backend

  # Install npm packages
   npm install

  # Initialize Prisma and generate the Prisma client
    npx prisma init
    npx prisma generate

  # Start the backend server
    npm start
  ```

  **Frontend setup**:

  ```bash
  # Navigate to frontend directory
    cd frontend

  # Install npm packages
    npm install

  # start frontend server
    npm run dev
  ```

## <a name="features"> Features </a>

**TBD**: TBD.

**TBD**: TBD.

**TBD**: TBD.

## <a name="to-do"> To-do </a>

- [ ] To Fix: TBD
- [ ] To Fix: TBD
- [ ] To implement: TBD
