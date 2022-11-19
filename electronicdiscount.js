//Q. An  electronics shop has announced the following seasonal discounts on the purchase of certain items
//  purchase amount in ₹                   Discount on laptop                      discount on desktop Pc
//    0-25000                                   0%                                        5%
//    25001-57000                               5%                                        7.5%
//    57001-100000                              7.5%                                      10%
//    more than 100000                          10%                                       15%
// write a program based on the above criteria, to input name,adress,amount of purchase and the type of purchase
//(L for Laptop and D for desktop)by a customer.Compute and print the netamount to be paid by a customer along
// with his name and adress
// hint discount=(discount rate/100)*amount of purchase
// Net amount=amount of purchase-discount


function discount()
{
     name=prompt("Enter your full Name")
     document.write("Name :- "+name+ " <br>")
     adress=prompt("Enter your full adress")
     document.write("Adress :- "+adress+ " <br>")
     pc=prompt("Enter the amount of purchase")
     document.write("Amount of purchase :- "+pc+ "<br>")
    dl1=prompt("Enter the type of purchase")
    document.write("Purchase item :- "+dl1+ "<br>")
    let dl="laptop"
    if(dl===dl1)
    {
    if(pc<=25000)
    {
        dl2=pc*0
    }
    else if(pc>=25001 && pc<=57000)
    {
        dl2=pc*5/100
    }
    else if(pc>=57001 && pc<=100000)
    {
        dl2=pc*7.5/100
    }
    else if(pc>=100001)
    {
        dl2=pc*10/100
    }
    let netamount=pc-dl2
    document.write("Discount Amount :- "+dl2+ "<br>")
    document.write("Net Amount for Laptop :- ",netamount+ "<br>")
}
let dd="computer"
 if(dd===dl1)
{
    if(pc<=25000)
    {
        dd1=pc*5/100
    }
    else if(pc>=25001 && pc<=57000)
    {
        dd1=pc*7.5/100
    }
    else if(pc>=57001 && pc<=100000)
    {
        dd1=pc*10/100
    }
    else if(pc>=100001)
    {
        dd1=pc*15/100
    }
    let netTotal=pc-dd1
    document.write("Discount Amount :- "+dd1+ "<br>" )
    document.write("Net Amount for the computer =",netTotal)
}

}
discount()