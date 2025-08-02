# Blog Platform

## Project Description

Blog Platform is a full-stack application that allows users to view, create, and manage blog posts. This is my first project combining a React frontend with a Node.js backend and a MySQL database.

### Key Features:

- Home page with the latest blog posts
- About page describing the project
- Create Blog — available only to logged-in users
- View and filter blogs by categories
- Detailed view of individual blog posts
- Contact form
- User registration and login with basic authentication

## Technologies Used

- **Frontend:** React, PrimeReact, React Router
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Other:** Axios for HTTP requests, multer for image uploads

## Project Structure

- client/ — React frontend application
- server/ — Node.js backend server and API
- database/ — SQL scripts for creating the database and tables

## How to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone <REPOSITORY_URL>
   ```

2. Install dependencies:

```bash
  cd server
  npm install
```

```bash
  cd ../client
  npm install
```

3. Configure the .env file in the server/ directory (see next section).

4. Start the backend server:

```bash
cd ../server
node index.js
```

5. Start the frontend application:

```bash
cd ../client
npm run dev
```

6. Open your browser and go to: http://localhost:3000

## Environment Variables

In the `server/` directory, create a `.env` file based on `.env.example`. Fill it with your database credentials and other sensitive data.

## Database Setup

Before starting the server, create the database and tables using the SQL scripts in the `database/` folder.

You can import the SQL file in your MySQL client or run:

```bash
mysql -u root -p < database/schema.sql

```

## Troubleshooting

- Make sure your MySQL server is running
- Ensure port 5000 (backend) and 3000 (frontend) are free
- Check `.env` file for correct database credentials

## Author

Milos Klepic
