//Q. write a program to input an interger and find its factorial.Factorial of a number is the product of 
//all natural numbers till that number.For example, factorial of 5 is 120 i.e 1*2*3*4*5=120


function factorial(a)
{
    let sum=1
     for(let i=1;i<=a;i++)
    {
        sum=sum*i
    }
    console.log(sum)
}
factorial(6)
