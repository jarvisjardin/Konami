/*
	Next Steps:
		1) move this logic in to 'konami.js' 
		2) configue code to act as an API
		3) be able to call this code from script.js
		4) figure out a way to include jQuery to the code so when implementing, users won't have to ( * if this is possible * )
*/


$( document ).ready(function() {
	
	konami_code = ["38","38","40","40","37","39","37","39","66","65","13"];
	user_code = [];

	window.addEventListener("keyup", keyDownTextField, false);	
	
	function keyDownTextField (e) {
		user_code.push(e.keyCode); // add keyCode to the user_code array.
	
		for(i=0;i<user_code.length;i++){ //foreach value in the user_code array. do a loop. i represent the array key
			if(user_code[i] != konami_code[i]){ // if any of the values from user_code do not equal the values in konami_code array, clear user_code array and break from loop 
				user_code= [];
				break;
			}
		}
		if(user_code.length == 11){ // if the length of user array equals 11, then the konami code was successfully inputed
			success(); //run a success function.
		}
	}
	
	function success(){
		alert("You entered the KONAMI CODE! Now do something speacial");	
	};
});
