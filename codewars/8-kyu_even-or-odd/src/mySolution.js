/* 
Title:
- Even or Odd (8 kyu)

Description: 
- Create a function that takes an integer as an argument 
and returns "Even" for even numbers or "Odd" for odd numbers. 

Tags: 
- Mathematics, Fundamentals
*/

export function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
