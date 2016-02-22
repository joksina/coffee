//Coffee on Range
// var array;
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array = [1..10]

// var array;
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array = [1...10]

//Object Literal
//isRuss is a function that returns true
coffee = {
  name: "Russian"
  level: 2
  isRussian: -> true
}

//for in loop
for person in people
  if person.age > 18 then console.log person.name

// List Comprehension

console.log "#{person.name}" for person in people when person.age > 18
addCoffee(coffee) for coffee in coffeeList when coffee isnt isRussian

// Splat arguments
displayTopPicks = (bestCoffee, suggested...) ->
  alert('Top #1 ' + bestCoffee)
  alert('Suggested: ' + suggested.join(','))

