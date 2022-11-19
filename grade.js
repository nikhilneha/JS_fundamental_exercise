//Q. write a program to accept a mark obtained by a student in computer science and print the grades accordingly
//   Marks                Grade
//  Above 90                A
//  70 to 89                B
//  50 to 69                C
//  Below 50                D

function grades()
{
    let marks=76
    console.log("Enter marks in computer science")

    if(marks>=90 && marks<=100)
    {
        console.log("Grade A")
    }
    else if(marks>=70 && marks<=89)
    {
        console.log("Grade B")
    }
    else if(marks>=50 && marks<=69)
    {
        console.log("Grade C")
    }
    else 
    {
       console.log("Grade D")
    }
}
grades()