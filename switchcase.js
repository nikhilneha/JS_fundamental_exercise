//Q. Convert the following if else if construct into switch case
// if(var==1)  console.log("good")
// else if (var==2)   console.log("better")
// else if(var==3)    console.log("best")
// else               console.log("invalid")

let v=2
switch(v)
{
   case 1:
   console.log("Good")
   break;
   case 2:
    console.log("Better")
    break;
    case 3:
        console.log("Best")
        break;
        default:
            console.log("Invalid")
}