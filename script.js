

/*
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
*/

/*
up 38

down 40

left 37

right 39

b 66

a 65

enter 13
*/


$( document ).ready(function() {
    console.log( "ready!" );

	window.addEventListener("keydown", keyDownTextField, false);

	var konami_pattern = ["38","38","40","40","37","39","37","39","66","65","13"];
	var update_pattern = konami_pattern;

	function keyDownTextField (e) {
		var keyCode = e.keyCode;
		
/* 		console.log(keyCode); */
	 
/*
		if(keyCode == '38'){
			console.log('up');
		}else if(keyCode == '40'){
			console.log('down');
		}else if(keyCode == '37'){
			console.log('left');
		}else if(keyCode == '39'){
			console.log('right');
		}
*/
	 	checkPattern(keyCode);
	}
	
	function checkPattern(x){
		console.log(update_pattern);
		console.log(update_pattern[0]);
		
		if(x == update_pattern[0]){
			update_pattern.shift();
		}else{
			update_pattern = konami_pattern;
		}
	}

});