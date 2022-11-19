//Q. A cloth showroom has announced the following festival discounts on the purchase of items,based on the total cost
// of the items purchased
//     Total Cost               Discount
//   less then ₹2000               5%
//   ₹2001 to ₹5000                25%
//   ₹5001 to 10000                35%
//   Above 10000                   50%
// Write a program to input the total cost and compute and display the amount to be paid by the 
// customer after availing the discount

function discount()
{
    let tc,d,ap
    document.write("Enter the total cost of the items","<br>")
     tc=prompt("Enter the total cost")
     if(tc<=2000)
     {
        d=tc*5/100
     }
    else if(tc>=2001 && tc<=5000)
    {
        d=tc*25/100
    }
    else if(tc>=5001 && tc<=10000)
    {
        d=tc*35/100
    }
    else if(tc>10000)
    {
        d=tc*50/100
    }
    ap=tc-d
    document.write("Amount paid =",ap)
}
discount()