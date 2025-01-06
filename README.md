# TypeScript Type Error: String vs Array of Strings

This repository demonstrates a common type error in TypeScript: passing an array of strings to a function that expects a single string.

## Bug Description
The `greeter` function expects a single string argument. However, the code passes an array of strings to the function, leading to a type error.

## Solution
The solution involves either modifying the `greeter` function to accept an array of strings, or modifying the function call to pass a single string.