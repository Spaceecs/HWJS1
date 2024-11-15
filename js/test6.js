const exchangeRate = 0.93;
let dollars = prompt("Enter dollars count")
dollars = parseFloat(dollars)
let euro = dollars*exchangeRate
alert(`Euro count = ${euro}`)