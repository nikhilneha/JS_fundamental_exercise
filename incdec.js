//Q. What is the value of y after evaluating the expression given below?
//y+=++y+y--+--y  when y=8

let y=8
y+=++y+y--+--y            // Ans y=33
console.log(y)

//Q. Give the output of following expression
// a+=a++ + ++a+--a+a--

let a=7
a+=a++ + ++a+--a+a--         // Ans a=39
console.log(a)

//Q. if x=10 then find
// z=(++x *(x++ +5))

let x=10
let z=(++x *(x++ +5))      // Ans z=176
console.log(z)

//Q. what are the values of x and y when the following statements areexecuted?
// let d=63,e=36
// let s=(d<e)?true:false
// let m=(d>e)?d:e

let d=63,e=36
let s=(d<e)?true:false
let m=(d>e)?d:e
console.log(s,m)

//Q. Name the operator given below
// i.<  (Binary operator or relational operator)
// ii. ++ (unary operator)