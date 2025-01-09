app.post("/courses", async (req, res) => {
  const { title, instructor, duration, maxCapacity } = req.body;
  if (!title) {
    return res.status(400).send("Course title is required.");
  }
  
  try {
    const newCourse = new CourseModel({ title, instructor, duration, maxCapacity });
    await newCourse.save();
    res.status(201).send({ msg: "Course created successfully", course: newCourse });
  } catch (error) {
    res.status(500).send({ msg: "Failed to create course", error });
  }
});


app.get("/courses", async (req, res) => {
  try {
    const courses = await CourseModel.find();
    res.send(courses);
  } catch (error) {
    res.status(500).send({ msg: "Failed to retrieve courses", error });
  }
});


app.get("/courses/filter", async (req, res) => {
  const { instructor, maxCapacity } = req.query;
  try {
    const courses = await CourseModel.find({ instructor, maxCapacity });
    res.send(courses);
  } catch (error) {
    res.status(500).send({ msg: "Failed to retrieve courses", error });
  }
});


app.put("/courses/:id", async (req, res) => {
  const { id } = req.params;
  const { title, instructor, duration } = req.body;
  
  try {
    const updatedCourse = await CourseModel.findByIdAndUpdate(
      id,
      { title, instructor, duration },
      { new: true }
    );
    if (!updatedCourse) {
      return res.status(404).send("Course not found.");
    }
    res.send({ msg: "Course updated successfully", course: updatedCourse });
  } catch (error) {
    res.status(500).send({ msg: "Failed to update course", error });
  }
});


app.delete("/courses/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedCourse = await CourseModel.findByIdAndDelete(id);
    if (!deletedCourse) {
      return res.status(404).send("Course not found.");
    }
    res.send({ msg: "Course deleted successfully", course: deletedCourse });
  } catch (error) {
    res.status(500).send({ msg: "Failed to delete course", error });
  }
});


app.post("/users", async (req, res) => {
  const { name, email, password, role } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("Name, email, and password are required.");
  }
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ name, email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).send({ msg: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).send({ msg: "Failed to create user", error });
  }
});


app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ msg: "Failed to retrieve users", error });
  }
});


app.get("/users/role/:role", async (req, res) => {
  const { role } = req.params;
  try {
    const users = await UserModel.find({ role });
    res.send(users);
  } catch (error) {
    res.status(500).send({ msg: "Failed to retrieve users", error });
  }
});


app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { email } = req.body;
  
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { email },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).send("User not found.");
    }
    res.send({ msg: "User updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).send({ msg: "Failed to update user", error });
  }
});


app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  
  try {
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send("User not found.");
    }
    res.send({ msg: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(500).send({ msg: "Failed to delete user", error });
  }
});
