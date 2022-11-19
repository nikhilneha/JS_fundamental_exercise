//Q. write a program to input the principle,Rate and Time and calculate the simple interest

function simpleInterest(){
document.write("Enter the principle,Rate and Time","<br>")
let p=prompt("Enter the Principle")
let r=prompt("Enter the Rate")
let t=prompt("Enter the Time")
let si=(p*r*t)/100
document.write("Simple Interest =",si)
}
simpleInterest()
