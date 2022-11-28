let cx = 380;
let cy = 380;


//モンシロチョウ
class Butterfly {
  constructor(x, y) {
    
    this.theta = 0　
    
  }

  update() {
    this.theta += PI / 100
  }

  display() {
    push();
    noStroke();
    
    if(mouseIsPressed){
    translate(mouseX ,mouseY);
    }else{translate(cx,cy);}
    
  

    for (let i = -1; i <= 1; i += 2) {
      push();
      fill(255);
      translate(0, 10);
      rotate((PI / 4) * sin(this.theta * 2) * i);

      beginShape();
      vertex(0, 0);
      vertex(30 * i, 10);
      vertex(25 * i, 25);
      vertex(0, 0);
      endShape();
      pop();
    }


    pop();
  }
}

let butterfly
let txt = "You are a cabbage butterfly."

function setup() {
  createCanvas(windowWidth, windowHeight)
  butterfly = new Butterfly(width / 2, height / 2)
}
function draw() {
  
  background(0,100,0);
  
  //赤い花
  fill(255,0,0);
  flower(100,  250 , 40);
  
  //黄色い花
  fill(255,255,0);
  flower(680,  670 , 30);
  
  //紫色の花
  fill(255,0,255);
  flower(100,  650 , 30);
  
  //白い花
  fill(255);
  flower(450 , 350 , 20);
  flower(475 , 374 , 20);
  flower(440 , 382 , 20);
  
  //青い花
  fill(30,144,255);
  flower(170 , 450 , 30);
  
  //オレンジの花
  fill(255,122,0);
  flower(470 , 600 , 40);
  
  //おばけキャベツ
  fill(30,205,50);
  cabbage(12, 800 , 100 , 300);
  
  //You are a cabbage butterfly.
  fill(255);
  text(txt,95,50,width,height);
  textSize(40);
  
  //赤い花にとまったとき
  if (mouseIsPressed & mouseX > 80 && mouseX < 120 & mouseY > 230 && mouseY < 270){
    background(0);
    fill(255);
    text("モンシロチョウは", 200, 320);
    text("赤色を認識できない。。", 200, 360);
    fill(255,255,0);
    text("Umm...Y.. You are strange!" , 200, 420);
    textSize(40);
  }
  
  //黄色い花にとまったとき
  if(mouseIsPressed & mouseX > 660 && mouseX < 700 & mouseY > 650 && mouseY < 690){
    background(255,255,240);
    fill(0);
    text("黄色い花は大好き。", 230, 360);
    fill(218,165,32);
    text("You are a lovely cabbage butterfly!" , 230, 380 ,400,height);
    textSize(40);
  }
  
  //白い花にとまったとき
  if(mouseIsPressed & mouseX > 440 && mouseX < 460 & mouseY > 340 && mouseY < 360||mouseIsPressed & mouseX > 465 && mouseX < 485 & mouseY > 364 && mouseY < 384 || mouseIsPressed & mouseX > 430 && mouseX < 450 & mouseY > 372 && mouseY < 392){
    background(255,255,240);
    fill(0);
    text("白い花は", 230, 320)
    text("そこそこ好き。", 230, 360);
    fill(0);
    text("You are a beginner cabbage butterfly." , 230, 380 ,500,height);
    textSize(40);
  
  }

  //紫色の花にとまったとき
  if(mouseIsPressed & mouseX > 85 && mouseX < 115 & mouseY > 635 && mouseY < 665){
    background(255,255,240);
    fill(0);
    text("紫っ！！！", 200, 320)
    text("あいしてるっっ！！！", 200, 360);
    fill(199,21,133);
    text("You are the best cabbage butterfly ever...!!!" , 200, 380 ,500,height);
    textSize(40);
    
  }
  
  //青い花にとまったとき
  if(mouseIsPressed & mouseX > 155 && mouseX < 185 & mouseY > 435 && mouseY < 465){
    background(255,255,240);
    fill(0);
    text("", 200, 320)
    text("青い花は好き。", 200, 360);
    fill(30,144,255);
    text("You are a nice cabbage butterfly." , 200, 380 ,500,height);
  }
  
  //オレンジ色の花にとまったとき
  if(mouseIsPressed & mouseX > 450 && mouseX < 490 & mouseY > 580 && mouseY < 620){
    background(255,255,240);
    fill(0);
    text("すいません。", 230, 280);
    text("オレンジ色の花は", 230, 320);
    text("よくわかりません。", 230, 360);
    fill(255,122,0);
    text("Why did he draw this flower?" , 230, 380 ,400,height);
    textSize(40);  
  }
  
  //おばけキャベツにとまったとき
  if(mouseIsPressed & mouseX > 550 && mouseX < width & mouseY > 0 && mouseY < 300){
    background(255,255,240);
    fill(0);
    text("これはキャベツです。", 200, 320)
    text("モンシロチョウは", 200, 360);
    text("キャベツに産卵します。", 200, 400);
    fill(0,128,0);
    text("So, you are cabbage butterfly." , 200, 420 ,500,height);
  }
  
  butterfly.update();
  butterfly.display();
  
}

//花
function flower(cx, cy, r){
  beginShape(); //花
  for(let i = 0; i < 7; i++){
    
    const theta = TWO_PI * i * 2/7 ;
    const x = cx + cos(theta) * r;
    const y = cy + sin(theta) * r;
    vertex(x, y); 
   
  }
  endShape(CLOSE); 
  
}

//キャベツ
function cabbage(n, cx, cy, r){
  beginShape();//キャベツ
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - HALF_PI;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
  }
  endShape(CLOSE);
}
