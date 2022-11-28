function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    let s = i+j;
    fill(s % 2  == 1 ? 196 : 255); 
    console.log(i, j); 
    rect(i * 10, j * 10, 10, 10);
    
    
    
  }
    
}
}