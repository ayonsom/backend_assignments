1. first of all download code files from (https://github.com/ayonsom/backend_assignments/tree/main/Evaluation_Backend/Jan_19_2025_)

2. Make sure you have MongoDB installed in your local system, or you can put MongoCluster URI to use Mongo Cloud database.
 
3. Open the folder Jan_19_2025_ which will contain index.js file and others as well. Open VS-Code in the current directory i.e. Jan_19_2025_

4. Open vs-code terminal and type command npm i and then hit Enter and then wait for sometime untill dependencies are installed and terminal becomes normal again.

5. after step 3, run command in terminal as "npm run server" without quotations, you'll see a msg in terminal as :-

    Server is listening at http://localhost:3000/
    Connected to DB...

6. click on the link on terminal to get welcome message & some instructions

7. Available Routes & Their functionalities (use ThunderClient or Postman):-

    a. method : GET  http://localhost:3000/ --> Shows some welcome message & Routes
    b. method : GET  http://localhost:3000/author --> Provides a list of all Authors in the DB
    c. method : GET  http://localhost:3000/author/:id --> Search an author by his document _id and all his posts
    d. method : POST  http://localhost:3000/author/add_author --> Add a new author by providing name & unique email in JSON format
    e. method : PATCH  http://localhost:3000/author/:id --> update author details
    f. method : DELETE  http://localhost:3000/author/:id --> delete author details

    g. method : GET  http://localhost:3000/blogposts --> Shows all blogs
    h. method : GET  http://localhost:3000/blogposts/:id --> Shows requested blog only
    i. method : GET  http://localhost:3000/blogposts/author/:author_id --> Shows requested blog only by specific author only

    j. method : POST  http://localhost:3000/blogposts/new_post --> Create anew post
    k. method : Patch  http://localhost:3000/blogposts/:_id --> update a new post
    l. method : DELETE  http://localhost:3000/blogposts/:_id --> delete a new post