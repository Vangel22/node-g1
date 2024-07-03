const { read, write } = require("../read-write");

// Create student
// POST METHOD
// req.body ni e isto sto bese studentData
const createStudent = async (req, res) => {
  const students = await read();
  students.push(req.body);
  await write(students);
  res.status(201).send("Student created!");
};

// Update student
const updateStudent = async (studentIndex, studentData) => {
  let students = await read();
  students = students.map((student, index) => {
    if (index === studentIndex) {
      // Sme go pronasle studentot koj sakame da go azurirame
      return {
        ...student, // ime: Pero, prezime: Perovski
        // ime: "Pero",
        // prezime: "Perovski"
        // studentData vo nego sodrzi { ime: "Petre" }
        ...studentData,
        // ime: "Petre",
      };
    } else {
      return student;
    }
  });

  await write(students);

  // const test = [1, 2, 3].map((num) => num + 1);
  // const test2 = [1, 2, 3].map((num) => {
  //   return num + 1;
  // });
  // console.log("test", test);
  // console.log("test2", test2);
};

// Read student
// GET METHOD
const getStudents = async (req, res) => {
  const data = await read();
  res.status(200).send(data);
};

// Delete student
const deleteStudent = async (req, res) => {
  const studentIndex = req.params.index;

  let students = await read();

  students = students.filter(
    (student, index) => index !== Number(studentIndex)
  );

  await write(students);

  res.status(200).send("Student deleted!");
};

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};
