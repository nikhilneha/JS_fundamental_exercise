//Q. write a program to find thr sum of all 3 digit odd natural numbers, which are multiple of 5


function odd()
{
    let s=0
    for(let i=101;i<=999;i+=2)
    {
        if(i%5==0)
        {
            s+=i
        }
    }
    console.log("Sum =",s)
}
odd()