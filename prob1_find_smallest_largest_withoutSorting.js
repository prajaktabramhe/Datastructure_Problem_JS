function findMinMax()
{
    for (let i = 0; i < number.length; i++)
    {
    let random = Math.floor(100 + Math.random() * 900 );
    number [i] = random;
    }
    
    large=number[0]; 
    small=number[0]; 
    for (let j = 0; j < number.length; j++)
    {
        if (number[j] > large)
        {
            large = number[j];
        }
        if  (number[j] < small)
        {
            small = number[j];
        }
    }
}
    
    let large =0;
    let small = 0;
    let temp = 0;
    let number = new Array(10);
    findMinMax();
    console.log("maximum : "+large+" minumum : "+small);