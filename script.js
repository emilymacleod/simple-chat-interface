var person = "";

 function sendMessage(event){
    var msg = document.getElementById("msg-form").value;
    var parag = document.createElement("P");
var stuff = document.createTextNode(person+" said: "+msg);
parag.appendChild(stuff);
document.getElementById("TextArea").appendChild(parag);
document.getElementById('msg-form').value='';
  };

    //     document.getElementById("msg-form").value ="";
   // this is how messages are sent to my chat window

  function writeSomething(){
   sendMessage("ads");
   };

  // this is how my enter name button function was made

 function enterName() {
     person = prompt("Please enter your name ", "");
    
    if (person != null) {
        document.getElementById("name").innerHTML =
        "Hello " + person + "! How are you today?";
  };
};