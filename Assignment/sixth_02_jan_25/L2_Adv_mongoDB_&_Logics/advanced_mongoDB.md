// Users Collection Structure
{
  "_id": ObjectId,
  "username": String,
  "email": String,
  "password": String,
  "role": String // Example roles: student, instructor, admin
}

// Courses Collection Structure
{
  "_id": ObjectId,
  "title": String,
  "description": String,
  "instructor": ObjectId, // Reference to the Users collection
  "students": [ObjectId] // Array of user IDs (students)
}

// Insert a New User
db.users.insertOne({
  "username": "john_doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "role": "student"
});

// Insert a New Course
db.courses.insertOne({
  "title": "Introduction to MongoDB",
  "description": "Learn the basics of MongoDB",
  "instructor": ObjectId("instructor_id"),
  "students": [ObjectId("student_id1"), ObjectId("student_id2")]
});

// Read All Users
db.users.find();

// Update a User's Email
db.users.updateOne(
  { "_id": ObjectId("user_id") },
  { $set: { "email": "new_email@example.com" } }
);

// Delete a Course
db.courses.deleteOne({ "_id": ObjectId("course_id") });

// Find All Students Enrolled in a Specific Course
db.courses.find(
  { "title": "Introduction to MongoDB" },
  { "students": 1, "_id": 0 }
);

// Sort Users by Username
db.users.find().sort({ "username": 1 });

// Ensure Unique Email for Users
db.users.createIndex({ "email": 1 }, { unique: true });

// Ensure No Duplicate Course Titles
db.courses.createIndex({ "title": 1 }, { unique: true });
