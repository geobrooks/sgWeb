
function displayEvens(){
	
var myStarting = document.getElementById("starting").value;
var myEnding = document.getElementById("ending").value;
var myStep = document.getElementById("step").value;

	console.log(myStarting);
	console.log(myEnding);
	console.log(myStep);
	
	for(i=myStarting; i <= myEnding; i += myStep){
		
		if(i%2 == 0){
			console.log(myStarting);
			
			
		}
		console.log(i);
	}
}

	