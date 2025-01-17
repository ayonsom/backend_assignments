Q: 1
Mongoose & Relationship
Online Library System
Submission Instructions:
Please submit the Masai Repo Link.

Description:
You are tasked with building an Online Library System using Mongoose and MongoDB. The system will manage books, authors, users, and borrowing transactions. It should enable users to borrow books, return them, and view their borrowing history. The system should include the relationships between books and authors, and users and transactions.

Requirements:

Author Schema:
name: String (required).
birth_year: Number (required).
nationality: String.
books: Array of ObjectIDs referencing the Book schema.


Book Schema:
title: String (required, unique).
published_year: Number.
genre: String.
author: ObjectID referencing the Author schema.


User Schema:
username: String (required, unique).
email: String (required, unique).
borrowed_books: Array of ObjectIDs referencing the Transaction schema.

Transaction Schema:
book: ObjectID referencing the Book schema.
user: ObjectID referencing the User schema.
borrow_date: Date (defaults to the current date).
return_date: Date (nullable).
Functionalities:

Add authors, books, and users.
Borrow a book (ensure it is available).
Return a borrowed book.
List books by a specific author or books borrowed by a user.
Update book or user details.
Delete a book (only if no active transactions).
Sample Routes:

POST /borrow
POST /return
GET /books/:authorId
GET /borrowed/:userId