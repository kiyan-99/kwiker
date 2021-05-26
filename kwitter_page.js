//YOUR FIREBASE LINKS
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
    roomname=localStorage.getItem("roomname");
    function send(){
          msg=document.getElementById("msg").value;
firebase.database().ref(roomname).push({name1:username,mssage:msg,likes:0});
document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
name1=message_data['name1'];
message=message_data['mssage'];
likes=message_data['likes'];
name_with_tag = "<h4> "+ name1 +"<img class='user_tick' src='tick.png'>"; message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+likes+" onclick='updateLike(this.id)'>"; span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ likes +"</span></button><hr>";
row=name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updateLikes=Number(likes)+1;
      firebase.database().ref(roomname).child(message_id).update({likes:updateLikes});
}
