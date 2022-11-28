// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let s = 2; s += 2;

function setup(){
 
  createCanvas(200, 200);
   fill(191 , 30, 51);
  count = 0;
  cycle = 40;
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  let size = count + 60;
  if(keyIsDown("A".charCodeAt(0))){ count = (count + s) % cycle; } 
  
 

  ellipse(x, y, size);
}
