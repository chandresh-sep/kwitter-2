const firebaseConfig = {
      apiKey: "AIzaSyDPibvQ1UbbTDh_qmV0N7WsICxISJmrh4U",
      authDomain: "kwitter-45efc.firebaseapp.com",
      databaseURL: "https://kwitter-45efc-default-rtdb.firebaseio.com",
      projectId: "kwitter-45efc",
      storageBucket: "kwitter-45efc.appspot.com",
      messagingSenderId: "849732068652",
      appId: "1:849732068652:web:2a0ec9c5e7437f665bb889",
      measurementId: "G-T986K3GGEV"
    };
    
    firebase.initializeApp(firebaseConfig);

     user_name =localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML ="welcome" + user_name + "!!!";

    function addroom()
     {
      room_name =document.getElementById("room_name").value;
         firebase.database().ref("/").child(room_name).update({
             purpose:"adding room"
         });
   
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";

     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
       console.log("Room-name" + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", room_name);
      window.location= "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}