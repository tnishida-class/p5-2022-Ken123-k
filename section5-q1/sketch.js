// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  regularPolygon(3, 111,21,15,0);
  balloon("I love keyakizaka46",0,0,0,255);
  
}

function balloon(t,bc,rx,ry,tc){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(bc);
  rect(rx, ry, w + p * 2, h + p * 2);

  fill(tc);
  text(t, rx + p, ry + h + p);
}

function regularPolygon(n, cx, cy, r,bc){
  beginShape();
  for(var i = 0; i < n; i++){
    let theta = TWO_PI * i * 1 / n - QUARTER_PI - 0.3 ;
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x,y);
    fill(bc)
  }
  endShape(CLOSE);
}
