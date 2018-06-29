var myArray = [0, 1, 3, 5, 10, 311, 34, 2004];

function findMax(theArray)
{	
var maxNumber = 0;
	
	for(var myCounter = 0; myCounter < myArray.length; myCounter++)
	{
		if(myArray[myCounter] >= maxNumber)
		{
			maxNumber = myArray[myCounter];
		}
	}
return maxNumber;
}