function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane User", "John User"];

console.log(greeter(user)); // This will cause a compilation error because the parameter type is string and the argument is an array of strings.