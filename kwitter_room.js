
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBpDNqVA_uJ7ZBrzneuPsxnpgHHcZ-ZHAE",
      authDomain: "kwitter-29ef6.firebaseapp.com",
      databaseURL:"https://kwitter-29ef6-default-rtdb.firebaseio.com",
      projectId: "kwitter-29ef6",
      storageBucket: "kwitter-29ef6.appspot.com",
      messagingSenderId: "105718456251",
      appId: "1:105718456251:web:9e3a75170fca99dd702e9e",
      measurementId: "G-8Z5P2E2GXQ"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
        localStorage.setItem("room_name", room_name);
        
        window.location = "kwitter_page.html";
    }
    
    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
           Room_names = childKey;
           console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }
    
    function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "kwitter.html";
    }
    