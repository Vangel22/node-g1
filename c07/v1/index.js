const {
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} = require("./students");

async function main() {
  const students = await getStudents();

  // CRUD - Create, Read, Update, Delete

  //   await createStudent({ ime: "Ace", prezime: "Acevski" });
  // await deleteStudent(1);

  await updateStudent(0, { ime: "Petre", godina: 2000 });
  await updateStudent(1, { ime: "Aleksandar", godina: 1999 });

  const newStudents = await getStudents();

  console.log("Studenti: ", students);
  console.log("Studenti: ", newStudents);
}

main();

// IIFE - Immediately Invoked Function Expression
// (async () => {
//   const students = await getStudents();

//   //   await createStudent({ ime: "Ace", prezime: "Acevski" });
//   //   await deleteStudent(1);

//   await updateStudent(0, { ime: "Petre", godina: 2000 });
//   await updateStudent(1, { ime: "Aleksandar", godina: 1999 });

//   const newStudents = await getStudents();

//   console.log("Studenti: ", students);
//   console.log("Studenti: ", newStudents);
// })();
