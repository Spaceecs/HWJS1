let distance = prompt("Enter the distance")
let time = prompt("Enter the desired travel time")
distance = parseFloat(distance)
time = parseFloat(time)
let speed = distance/time
alert(`You must move at a speed of ${speed} km/h`)