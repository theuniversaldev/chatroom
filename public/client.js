/*
     Client-Side Code for The Rooms
*/

var newBtn = document.getElementById("new");

newBtn.addEventListener("click", function() {
     var sessionName = prompt("What Would You Like Your Username To Be??? If you enter NOTHING, you will automatically be ANONYMOUS...");
     if(sessionName == "") {
          sessionName = "ANONYMOUS";
     }

     $.get("makeTable.asp", function(data, status) {
          alert("DATA: " + data + ", and STATUS: " + status + ".");
     });
});
