function countingCharacters(stringToCount) {
	console.log(stringToCount + " has " + stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
	
	var characterCount = 0;
	
	for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
		
		if (stringToCount[characterPosition] == characterToFind){
			
			characterCount++;
			
		}
		
	}
	
	console.log("String to search in: " + stringToCount);
	console.log("Character to find: " + characterToFind);
	console.log("Number of times the " + characterToFind + " character appears: " + characterCount);
	
	
}

function countingCharacters3(str, search){
	
	var count = 0; 
    var numChars = search.length;         
    var lastIndex = str.length - numChars;     // We will use a for loop to go through our string     // This time, we are looking for a series of characters - a substring     
	for (var index = 0; index <= lastIndex; index++){         // substring gets a part of a string from a start to end index         
			var current = str.substring(index, index + numChars);         // if the substring matches our series, increase our counter         
				if (current == search){                         
            count++;         
        }     
    }
    
    return count;
}
