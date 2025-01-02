const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// Custom validation middleware
// {
//     "ID": "number",
//     "Name": "string",
//     "Rating": "number",
//     "Description": "string",
//     "Genre": "string",
//     "Cast": "array of strings"
//   }

function validateTodoMiddleware(req, res, next) {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;
    let errors = [];

    if (typeof ID !== 'number') errors.push("ID must be a number.");
    if (typeof Name !== 'string') errors.push("Name must be a string.");
    if (typeof Rating !== 'number') errors.push("Rating must be a number.");
    if (typeof Description !== 'string') errors.push("Description must be a string.");
    if (typeof Genre !== 'string') errors.push("Genre must be a string.");
    if (!Array.isArray(Cast) || !Cast.every(item => typeof item === 'string')) errors.push("Cast must be an array of strings.");

    if (errors.length > 0) {
        res.status(400).json({ message: "bad request. some data is incorrect.", errors });
    } else {
        next(); // Proceed to the route handler if validation passes
    }
}


app.post('/', validateTodoMiddleware, (req, res) => {
    res.status(200).json({ message: "data received" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
