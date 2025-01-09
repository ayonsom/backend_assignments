use LMS_DB;

db.courses.insertOne({
  title: "Introduction to MongoDB",
  instructor: "Jane Doe",
  duration: "4 weeks",
  maxCapacity: 25
});



db.courses.find().pretty();


db.courses.find({ instructor: "Jane Doe" }).pretty();

db.courses.find({ maxCapacity: { $lte: 25 } }).pretty();


db.courses.updateOne(
  { _id: ObjectId("course_id_here") },
  { $set: { title: "Advanced MongoDB", instructor: "John Smith", duration: "6 weeks" } }
);


db.courses.deleteOne({ _id: ObjectId("course_id_here") });


db.users.insertOne({
  name: "Alice",
  email: "alice@example.com",
  password: "hashed_password",
  role: "student"
});


db.users.find().pretty();


db.users.find({ role: "instructor" }).pretty();


db.users.updateOne(
  { _id: ObjectId("user_id_here") },
  { $set: { email: "new_email@example.com" } }
);


db.users.deleteOne({ _id: ObjectId("user_id_here") });


const course = db.courses.findOne({ _id: ObjectId("non_existent_course_id") });
if (!course) {
  print("Course not found");
} else {
  print(course);
}



db.createCollection("courses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "instructor", "duration", "maxCapacity"],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        instructor: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        duration: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        maxCapacity: {
          bsonType: "int",
          description: "must be an integer and is required"
        }
      }
    }
  }
});



