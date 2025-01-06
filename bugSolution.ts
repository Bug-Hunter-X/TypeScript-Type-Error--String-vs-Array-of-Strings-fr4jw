function greeter(person: string) {
  return "Hello, " + person;
}

function greeterArray(people: string[]) {
  return "Hello, " + people.join(', ');
}

let user = ["Jane User", "John User"];
let singleUser = "Jane User";

console.log(greeter(singleUser)); // Correct usage
console.log(greeterArray(user)); // Correct usage with array