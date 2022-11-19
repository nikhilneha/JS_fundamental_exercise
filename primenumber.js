//Q.  Write a program to input an integer and check whether it is a prime number or not


let prime=prompt("Enter an integer number")
function primeNum(prime)
{
    
 let i=2
 while(i<prime)
 {
    if(prime%i==0)
    {
        return +prime+" is not a prime number"
    }
    i++ 
 }
   return +prime+" is a prime number"
}
result=primeNum(prime)
document.write(result)