MAXCOUNT=100
COUNT=1
var arr = new Array();
console.log("The repeted twice in range 1-100:");
i=0
while ( COUNT <= MAXCOUNT )
{
    
    if(COUNT%11==0)
    {
        console.log(COUNT);
        arr[i]=COUNT;
        i=i=1;
    }
    COUNT=COUNT+1;
}