// Task
const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
// Kade id ke bide param a imeto ke bide query

const getStudents = (req, res) => {
  const studentId = req.params.id;
  const studentName = req.query.name; // Alice

  const student = students.find((student) => student.id === Number(studentId));

  // Ako ne najdeme student student ke bide undefined
  if (!student) {
    return res.status(404).send("Student not found!");
  }

  console.log("name", studentName);
  // Ako vo query imame ime na student i proveruvam dali najdeniot student go ima istoto ime
  if (studentName && student.name.toLowerCase() !== studentName.toLowerCase()) {
    return res.status(404).send("Student not found with provided name!");
  }

  return res.send(student);
};

module.exports = {
  getStudents,
};
