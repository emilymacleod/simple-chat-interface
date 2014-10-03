 function sendMessage(event){
    var msg = document.getElementById("msg-form").value;
    var text = "";
    var parag = document.createElement("P");
	var stuff = document.createTextNode(msg);
	parag.appendChild(stuff);
	document.getElementById("TextArea").appendChild(parag);
    //    text += document.getElementById.value + "<br>";
	};

    //     document.getElementById("msg-form").value ="";

 function writeSomething(){
 	sendMessage("ads");
 	alert ("Welcome to my chat!");
 	};

 function enterName() {
    var person = prompt("Please enter your name", "");
    
    if (person != null) {
        document.getElementById("name").innerHTML =
        "Hello " + person + "! How are you today?";

 		};
 	}; 