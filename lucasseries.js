// Q. Write a program to find the sum of 1st 10 numbers of Lucas series i.e  2,1,3,4,7,11,18...
// Lucas series is such a series which starting from 2 and 1 and subsequent numbers are the sum of the
// previous two numbers.

function lucas(n)
{
    let first=2
    let second=1
    let next=0
    for(i=1;i<=n;i++)
    {
       console.log(first)
       next=first+second
       first=second
       second=next
    }
}
lucas(7)