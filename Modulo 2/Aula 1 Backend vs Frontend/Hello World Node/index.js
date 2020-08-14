console.log(process.argv);
const number = parseInt(process.argv[2]);
const multiples = [];
for (let i = 3; i < number; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multiples.push(i);
  }
}
console.log(multiples);
