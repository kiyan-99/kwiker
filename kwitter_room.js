var firebaseConfig = {
      apiKey: "AIzaSyDBNMu1E1FEaoNCZQ3m1Xp4lIjaChP65Pg",
      authDomain: "idarbot-pfer.firebaseapp.com",
      databaseURL: "https://idarbot-pfer-default-rtdb.firebaseio.com",
      projectId: "idarbot-pfer",
      storageBucket: "idarbot-pfer.appspot.com",
      messagingSenderId: "186110084013",
      appId: "1:186110084013:web:b2b4617a9edb807f651724"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username=localStorage.getItem("username");
    document.getElementById("user_name").innerHTML="welcome"+username;
    function addroom(){
          roomname=document.getElementById("room_name").value;
          firebase.database().ref("/").child(roomname).update({purpose:"adding roomname"});
          localStorage.setItem("roomname",roomname);
          window.location="kwitter_page.html";
    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+""; document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log("iamhear");
localStorage.setItem("roomname",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location="index.html";
}