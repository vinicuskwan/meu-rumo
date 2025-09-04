# README for Database

This document provides an overview of the database structure used in the Meu Rumo project.

## Database Overview

The Meu Rumo application utilizes a MySQL database to manage user data, financial transactions, and other essential information. The database schema is defined in the `schema.sql` file located in this directory.

## Schema Structure

The database consists of several tables, each designed to handle specific types of data:

- **Users**: Stores user information such as name, email, and password.
- **Accounts**: Manages financial accounts associated with users, including account type and balance.
- **Expenses**: Records user expenses, including descriptions, amounts, and dates.
- **Subscriptions**: Handles subscription plans for users, detailing plan types and statuses.
- **Payments**: Manages payment records, including amounts, dates, and statuses.
- **Messages**: Stores messages exchanged between users and the system.
- **Content**: Manages educational content provided to users, including titles and descriptions.

## Setup Instructions

To set up the database, execute the SQL commands in the `schema.sql` file using a MySQL client. Ensure that you have the necessary permissions to create databases and tables.

## Future Enhancements

As the application evolves, the database schema may be updated to accommodate new features and requirements. It is essential to maintain proper version control and documentation for any changes made to the schema.

For any questions or issues regarding the database, please refer to the project documentation or contact the development team.