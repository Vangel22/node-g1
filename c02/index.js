const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 22 },
  { name: "Eve", age: 28 },
];

// find => go vrakja prviot pogodok vo nizata

// sort => sporeduva dva elementi i soodvetno gi sortira

// reduce => gi sobira site vrednosti

// map => ni vrakja niza

// filter => filtrirame po odreden podatok

// forEach => ja izminuvame celata niza i ne vrakjame nisto

// TASKS

// Task 3
// users.forEach((user) => console.log(user.name, user.age));

// Task 4
// const totalAge = users.reduce((acc, curr) => {
//   acc = acc + curr.age;
//   return acc;
// }, 0);

const totalAge = users.reduce((acc, curr) => (acc = acc + curr.age), 0);
// console.log("total age", totalAge);

// -1 - rastecki, 0 - ednakvo , 1 - opagjacki
const sortByYears = users.sort((a, b) => a.age - b.age); // nemozete da koristite minus koga sortirate spored bukvi

const sortDec = users.sort((a, b) => {
  if (a.age > b.age) return -1;
  if (a.age < b.age) return 1;

  return a - b;
});

const sortDecByName = users.sort((a, b) => {
  if (a.name > b.name) return -1;
  if (a.name < b.name) return 1;

  return a - b;
});

// console.log(sortDecByName);

const filterOlderThanThirty = users.filter((user) => user.age >= 30);
console.log(filterOlderThanThirty);

// Za doma vezba
// najdete gi korisnicite koj se 25 godini - SITE
// najdi gi korisnicite pomegju 20 i 30 godini
