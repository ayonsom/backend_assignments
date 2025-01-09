1. Dynamic Course Filtering and Sorting
Filtering by Instructor Name, Duration, and Capacity

app.get("/courses/filter", async (req, res) => {
  const { instructor, duration, maxCapacity } = req.query;
  const filter = {};

  if (instructor) filter.instructor = instructor;
  if (duration) filter.duration = duration;
  if (maxCapacity) filter.maxCapacity = { $lte: maxCapacity };

  try {
    const courses = await CourseModel.find(filter).sort({ createdAt: -1 });
    res.send(courses);
  } catch (error) {
    res.status(500).send({ msg: "Failed to retrieve courses", error });
  }
});


2. Simulating Enrollment Logic in MongoDB
Add a Field for Enrolled Course IDs in the Users Collection
Update your user schema to include an enrolledCourses field:

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['admin', 'instructor', 'student'],
  },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});


Simulate a Student Enrolling in a Course

app.post("/users/enroll", async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    if (user.role !== "student") {
      return res.status(403).send("Only students can enroll in courses.");
    }
    if (user.enrolledCourses.includes(courseId)) {
      return res.status(409).send("User is already enrolled in this course.");
    }

    user.enrolledCourses.push(courseId);
    await user.save();
    res.send({ msg: "Enrollment successful", user });
  } catch (error) {
    res.status(500).send({ msg: "Enrollment failed", error });
  }
});



Check if a User is Already Enrolled in a Course
This is handled in the enrollment logic above with the check:

if (user.enrolledCourses.includes(courseId)) {
  return res.status(409).send("User is already enrolled in this course.");
}



3. Database Consistency
Prevent Deleting Courses with Enrolled Students

app.delete("/courses/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const studentsEnrolled = await UserModel.find({ enrolledCourses: id }).countDocuments();
    if (studentsEnrolled > 0) {
      return res.status(400).send("Course cannot be deleted as it has enrolled students.");
    }

    const deletedCourse = await CourseModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).send("Course not found.");
    }
    res.send({ msg: "Course deleted successfully", course: deletedCourse });
  } catch (error) {
    res.status(500).send({ msg: "Failed to delete course", error });
  }
});



Ensure Each Course Enrollment is Unique Per Student
This is ensured with the enrollment logic in the POST /users/enroll endpoint.

User Roles Validation
Validation to ensure only students can be enrolled in courses is handled in the enrollment logic:


if (user.role !== "student") {
  return res.status(403).send("Only students can enroll in courses.");
}



