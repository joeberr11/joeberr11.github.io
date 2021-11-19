//Due Novemeber 29th
//Joseph Berrigan
//Assign #5
function rideInfo(rideID, rideName){
  alert("You clicked on the ride " + rideName + " with the ID of " + rideID);
}
function orderTics(){
  alert("Your total is $35.");
}
var rideNames = ['Wormholes','Milky Maze','Blaster Tag','The Black Hole','Hyper Drive'];
var rideAlts = ['Wormholes','Milky-Maze','Blaster-Tag','Black-Hole','Hyper-Drive'];
var rideDescriptions = ["This galaxy themed mini golf is for all ages with twist and turns full of extraterrerial suprises. There are ups and downs and tons of alien obstacles such as spaceships and asteroids.","The Milky Maze is a haunted house designed to be out of this world! You'll find yourself running from aliens pursuing you on their spaceships. Even though you're in space, we'll still hear your screams.","Blaster Tag is classic laser tag pitting aliens against humans. The alien team will receive blasters while the human team defend themselves with space rifles.","You'll find yourself sucked into complete darkness with unexpected monsterous drops and twists into deep space. Bring your swim suits becaue this Black Hole leads to sea.","You'll go light speed on our signature rollarcoaster ride. Strap in as you teleport through the universe while dodging comets and meteoroids."];
var rideImages = ["images/spaceGolf.jpg","images/alienHouse.jpg","images/laserTag.jpg","images/waterSlide.jpg","images/hyperDrive.jpg"];
var headerClass = ["two", "three", "four", "five", "six"];
function showRides(){
  for (var i = 0; i < rideNames.length; i++) {

  //  document.getElementsByClassName(headerClass[i]).write(rideNames[i]);
  //  document.getElementsByClassName(headerClass[i]).innerHTML = rideNames[i];
  //  document.write("<p>" + rideDescriptions[i] + "</p>");
  //  document.write("<img>" + rideImages[i] + "<img>");
  //var x = "<h3 class = " + headerClass[i] + " ><img src= " + rideImages[i] + " alt=''></h3> <p>" + rideDescriptions[i] + " </p> <br>";
  //document.getElementById("ridesList").innerHTML = x;

  document.getElementById("ridesList").innerHTML += "<h3 class = " + headerClass[i] + " ><img src= " + rideImages[i] + " alt= " + rideAlts[i] + " >" + rideNames[i] + "</h3> <p>" + rideDescriptions[i] + " </p> <br>";
  //console.log(document.getElementById("ridesList").innerHTML += "<h3 class = " + headerClass[i] + " ><img src= " + rideImages[i] + " alt=''>" + rideNames[i] + "</h3> <p>" + rideDescriptions[i] + " </p> <br>");
  //document.write("hi");
  }
//window.alert("hi");
}

function order(){
//  var btn = document.getElementById("submit");
//  if (btn.addEventListener) {
  //  btn.addEventListener("click",proccessInput);
//  }
//  else if (btn.attachEvent){
//    btn.attachEvent("onclick", proccessInput);
//window.alert("hey");
orderTics();
if ( document.getElementById('name').value == "" || document.getElementById('email').value == ""  || document.getElementById('phone').value == ""  || document.getElementById('age').value == "" )
    {
        // something is wrong
        window.alert('Fill out contact information');
        event.preventDefault();
        //return false;
    }


else {
window.alert("Thank you for filling in the contact information!");
  //return true;
}

//console.log("hi");

}
//document.getElementById("ridesList").addEventListener("load", showRides());
//document.getElementById("submit").addEventListener("click", function(){order()}, false);
