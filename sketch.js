var database;
var canvas,backgroundImg;
var player,form,game;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

 
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}




