<div align="center">
  <br />
    <a>
      <h1 align="center">Foodie - A recipe app</h3>
      <img src="" alt="Project screenshot_1">
      <img src="" alt="Project screenshot_2">
    </a>

  <br />

</div>

## <a>Introduction</a>

Foodie allows you to view, add, and manage your favorite recipes. It's built using React for the frontend and Node.js with Prisma for the backend.

## <a>Tools</a>

- React
- Node.js
- TypeScript
- PostgresSQL


## Setup

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
