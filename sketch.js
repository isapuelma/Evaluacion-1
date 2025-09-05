var x = 0; //variables, parte de esquina derecha//
var y = 0;
var canvas; 
//esta declaración es una variante global, no se pueden usar tildes//

function setup() { //función + nombre//
  canvas = createCanvas(windowWidth, windowHeight); //uso canvas que ya declaré. Create canvas es la función//
  canvas.parent("cuerpo");
  canvas.position(0,0);
  canvas.style('z-index','-1');
  noStroke();
  frameRate (12); 
}

function draw() { //función draw es un loop//
  colorMode(HSB, 359, 100, 100)
  background(map(mouseX, 0,windowWidth,0,359),100,map(mouseY,0,windowHeight,50,100));
  x = lerp(x, mouseX, 0.1); 
  y = lerp(y, mouseY, 0.1);
  fill("white");
  textSize(random(100,200)); 
  text("🦋",x,y);
}

function windowResized() { //pantalla liquid, solo ajusta tamaño, resposive adapta el diseño según el tamaño//
  resizeCanvas(windowWidth, windowHeight);
}

//p5, es para sketch
mapeo
