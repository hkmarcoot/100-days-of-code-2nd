/*
Title:
- Terminal Game - Create Hero Prototype

Description:
- In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:

attribute	value
name	user argument or 'Hero'
position	'00'
health	100
damage	5
experience	0

Tags:
- Fundamentals

*/

export function Hero(name) {
  name = typeof name === "undefined" ? "Hero" : name;
  let myHero = {
    name: name,
    experience: 0,
    health: 100,
    position: "00",
    damage: 5,
  };
  return myHero;
}
