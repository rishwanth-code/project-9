var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;
function red_bg(){
  background("red")
    }
    function green_bg(){
      background("green")
    }

function setup() {
  createCanvas(400, 400); 
  btn_red = createButton("red") 
  btn_red.position(150,200)
  btn_red.mousePressed(red_bg)
  btn_green = createButton("green")
  btn_green.position(250,200)
  btn_green.mousePressed(green_bg)

}

function draw() {
  
  

}


