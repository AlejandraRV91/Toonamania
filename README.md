# Toonamania (Back-end)

Welcome to Toonamania, a project for managing information about characters from various shows. This document will guide you through the necessary steps to set up and understand the project on your local machine.

## Project Setup

Follow these steps to set up the project on your machine:

### Prerequisites

Make sure you have Node.js and PostgreSQL installed on your system.

### Configuration Steps

1.  **Clone this repository** to your local machine:

    ```
    git clone https://github.com/AlejandraRV91/Toonamania.git
    ```

2.  **Install project dependencies** by running the following command:

    ```
    npm install
    ```

3.  To **configure the project**, you need to create a file named `.env` at the root of your project and add the following environment variables:

```dotenv
PORT= The port where your application will run (for example, 3000)
PG_HOST= The host where your PostgreSQL database is running (e.g., localhost)
PG_PORT= The port on which your PostgreSQL database is listening (default is 5432)
PG_DATABASE= toonamania
PG_USER= The username for connecting to your PostgreSQL database (e.g., postgres)
PG_PASSWORD= The password for the specified database user (leave empty if not applicable)
```

4.  **Configure the database:**

    -   Ensure you have a running PostgreSQL server.

5.  **Initialize the database and load seed data:**

To populate the database with some test data, execute the following command:

```shell
npm run db:init
```

This will run the `db/schema.sql` script that will create the `characters` table in your database.

```shell
npm run db:seed
```

This will run the `db/seed.sql` script that will populate your `characters` table with some records.

6.  **Run the project:**

-   **Normal Mode:**
    To start the server and run the project, use:

```bash
npm start
```

This command will start the server on the specified port and connect to the PostgreSQL database.

-  **Development Mode:**

If you prefer using Nodemon for automatic server restarts during development, run:

```bash
npm run dev
```

This command will start the server using Nodemon, which will monitor for any changes in your files and automatically restart the server.

## Database Structure

The project uses a PostgreSQL database with a `characters` table. Here's a description of the table:

### Characters

-   `id`: Unique identifier of the character (integer).
-   `name`: Character's name (string, max 100 characters).
-   `age`: Character's age (integer).
-   `image`: URL to the character's image (text).
-   `description`: Character's description (text).
-   `created_at`: Timestamp of when the character was created (default: current timestamp).
-   `updated_at`: Timestamp of when the character was last updated (default: current timestamp).

## Routes

Below is a list of the routes in the application:

-   `GET /characters`: Returns a list of characters.
-   `GET /characters/id/:id`: Retrieves a character by ID.
-   `GET /characters/name/:name`: Retrieves a character by name.
-   `POST /characters`: Creates a new character.
-   `PUT /characters/:id`: Updates details of a specific character based on its ID.
-   `PATCH /characters/:id`: Partially updates details of a specific character based on its ID.
-   `DELETE /characters/:id`: Deletes a specific character based on its ID.

## Contributions

If you wish to contribute to the project, we welcome your pull requests!
