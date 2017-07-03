<%
     db.query("CREATE TABLE lol (user_id TEXT, msg TEXT)").on("data", function() {
          alert("Got 'em!'");
     });
%>
