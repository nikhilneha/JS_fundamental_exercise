//Q. write a program to find the sum of all 3-digit even natural numbers

function even()
{
    let s=0
    for(let i=100;i<=998;i+=2)
    {
      s+=i
    }
    console.log("Sum =",s)
}
even()