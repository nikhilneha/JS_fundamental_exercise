//Q.write a program to print the first 15 numbers of the pell series. Pell series is such a series which starts from
// 1 and 2, and subsequent numbers is the sum of twice the previous number and the number previous to the previous
// number.  Pell series 1,2,5,12,29,70,169,408,985,2378,5741,13860

function pell(n)
{
    let first=1
    let second=2
    let next=0

    for(i=1;i<=n;i++)
    {
       console.log(first)
       next=(first+second)+second
       first=second
       second=next
    }
}
pell(15)