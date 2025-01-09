use LMS_DB;

db.createCollection("users");
db.createCollection("courses");



db.users.insertMany([
  {
    name: "Alice Admin",
    email: "alice@example.com",
    password: "hashed_password_admin",
    role: "admin",
  },
  {
    name: "Bob Instructor",
    email: "bob@example.com",
    password: "hashed_password_instructor",
    role: "instructor",
  },
  {
    name: "Charlie Student",
    email: "charlie@example.com",
    password: "hashed_password_student",
    role: "student",
  },
]);




db.courses.insertMany([
  {
    title: "Introduction to Programming",
    instructor: "Bob Instructor",
    duration: "6 weeks",
    maxCapacity: 30,
  },
  {
    title: "Advanced Mathematics",
    instructor: "Bob Instructor",
    duration: "8 weeks",
    maxCapacity: 25,
  },
  {
    title: "Data Structures and Algorithms",
    instructor: "Bob Instructor",
    duration: "10 weeks",
    maxCapacity: 20,
  },
  {
    title: "Physics 101",
    instructor: "Bob Instructor",
    duration: "6 weeks",
    maxCapacity: 30,
  },
  {
    title: "Chemistry Basics",
    instructor: "Bob Instructor",
    duration: "7 weeks",
    maxCapacity: 30,
  },
]);





// Retrieve all users
db.users.find().pretty();

// Retrieve all courses
db.courses.find().pretty();




// Retrieve all instructors
db.users.find({ role: "instructor" }).pretty();
