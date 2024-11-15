let money = prompt("Enter your money count")
money = parseFloat(money)
let chocolate = prompt("Enter chocolate cost")
chocolate = parseFloat(chocolate)
let chocoCount=0
while(money>=chocolate)
{
    money-=chocolate
    chocoCount++
}
alert(`Count of chocolate = ${chocoCount}`)