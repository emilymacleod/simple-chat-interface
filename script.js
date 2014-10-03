 
	// this is how i append messages to my chat window
    //    text += document.getElementById.value + "<br>";
 var person = '';

 function sendMessage(event){
    var msg = document.getElementById("msg-form").value;
    var text = "";
    var parag = document.createElement("P");
	var stuff = document.createTextNode(person+" said: "+msg);
	parag.appendChild(stuff);
	document.getElementById("TextArea").appendChild(parag);
	};

    //     document.getElementById("msg-form").value ="";
   // this is how messages are sent to my chat window

 function writeSomething(){
 	sendMessage("ads");
 	alert ("Welcome to my chat!");
 	};

 	// this is how my enter name button function was made

 function enterName() {
     person = prompt("Please enter your name ", "");
    
    if (person != null) {
        document.getElementById("name").innerHTML =
        "Hello " + person + "! How are you today?";

 		};
 	}; 