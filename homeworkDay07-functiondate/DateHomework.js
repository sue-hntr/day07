$( document ).ready(function() {
    console.log("ready!");
    $("form").submit(function(){
	$("#date").val();
	var DDate = $("#date").val();
	console.log(DDate);

	var dateArray = DDate.split("-");
	var y = dateArray[0];
	var m = dateArray[1];
	var d = dateArray[2];
	console.log (m + "/" + d + "/"+ y);
	if (y < 1950){
		console.log("You are not that old. Try again!")
		return false;
	}
/*
		if ((i=0) && (dateArray[i]>1950)){
			$("#year").text("Year OK ");
			console.log("got to Year OK")

		} else{
			$("#year").text("*Fibber.try again for year*");
			console.log("Fibber");

			return false;
		}
		}
*/

		})
	})
	


		/*
		if ((i=1) && (dateArray[i] < 13)){
			$("#month").text("Month OK ");
		} else{
			$("#month").text("*try again for month*");
			return false;
		}
		if ((i=2) && (dateArray[i] < 13)){
			$("#day").text("Month OK ");
		} else{
			$("#day").text("*try again for day*");
			return false;
		}


		}
	})
	})

 */






//Continuing with this input validation, 
//add a username and password field. 
//Make sure the user’s password is "12345" and 
//the username field is not blank when 
//the form gets submitted.











/*
$(document).ready(function(){
	var goodPass = "12345";
	$("#password").keyup(function(){ 
	   if( 
	   		$("#password").val() == goodPass)
	  
	   { 
	      $("h1").text("Good Job");
	  	}
	  else 
	  { 
        $("h1").text("Try Again");
   		}; 
   	});
   	}) 


*/

