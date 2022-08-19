 // Your web app's Firebase configuration

 var firebaseConfig = {

    apiKey: "AIzaSyBSu3NHSa6Z5-0_kouInhiqLPfdxqEss3w",

    authDomain: "chat-app-c0a67.firebaseapp.com",
  
    databaseURL: "https://chat-app-c0a67-default-rtdb.firebaseio.com",
  
    projectId: "chat-app-c0a67",
  
    storageBucket: "chat-app-c0a67.appspot.com",
  
    messagingSenderId: "1041475304138",
  
    appId: "1:1041475304138:web:cf038ae16c607052009233"
  

  };


  // Initialize Firebase

firebase.initializeApp(firebaseConfig);
var myName= prompt("Entre com seu nome");

function sendMessage(){
    let message = document.getElementById("message").value;

    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    });
    console.log(message)

    return false;
}

firebase.database().ref("messages").on("child_added", function(snapshot){
    let html = "";
    html += "<li>";
        html += snapshot.val().sender + ": " + snapshot.val().message;
    html += "</li>";

    document.getElementById("messages").innerHTML += html;
});