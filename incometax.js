//Given below is a hypothetical table showing rates of income tax for male citizens below the age of 65 years
//  Taxable income(TI)in                                 Income Tax in
//  Does notexceed 1,60,000                                Nil
//  >1,60,000 and <=5,00,000                               (TI-1,60,000)*10%
//  >5,00,001 and <=8,00,000                               [(TI-5,00,000)*20%]+34000
// >8,00,001                                               [(TI-8,00,000)*30%]+94000
// write a program to input the age,gender(male or female) and Taxable Income of a person.If the age is more than 65
// years or the gender is female display wrong category
// if the age is less than or equal to 65 years and the gender is male, compute and display the Income tax payable 
// as per the table given above.


let age=65
let age1=prompt("Enter your Age")
if(age>age1)
{
    let gender="male"
    let gender1=prompt("Enter your Gender")
    if(gender==gender1)
    {
      let ti=prompt("Enter Taxable income")
      if(ti<=160000)
      {
        document.write("Income tax is nil")
      }
      else if(ti>160000 && ti<=500000)
      {
        let a=(ti-160000)*10/100
        document.write("Income Tax =",a)
      }
      else if(ti>500000 && ti<=800000)
      {
        let b=[(ti-500000)*20/100]+34000
        document.write("Income Tax =",b)
      }
      else if(ti>800000)
      {
        let c=[(ti-800000)*30/100]+94000
      }
    }

else
{
  document.write("Wrong Category")
}
}
else
{
    document.write("Wrong category")
}