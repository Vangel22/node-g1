const { read, write } = require("./read-write");
// Create student
const createStudent = async (studentData) => {
  const students = await read(); // Pero
  students.push(studentData);
  await write(students);
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
const getStudents = async () => {
  return await read();
};

// Delete student
const deleteStudent = async (studentIndex) => {
  let students = await read();

  // const test = students.filter(student => Boolean(student.name));
  // console.log('test', test);

  // ["abc", "cde"].filter((value, index) => console.log(index));
  students = students.filter((student, index) => index !== studentIndex);
  // Najdi mi gi site studenti osven studentot so indeksot koj e ispraten t.e studentIndex

  // [{"ime":"Pero","prezime":"Perovski"},{"name":"Ace","prezime":"Acevski"},{"ime":"Ace","prezime":"Acevski"}]
  // ako studentIndex = 0, ke se otstrani Pero
  await write(students);
};

module.exports = {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
};
