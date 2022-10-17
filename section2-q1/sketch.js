function setup(){
  for(let i = 0; i < 11; i++){
    ellipse(50, 50, 8*i);

    if(i < 5){
      stroke(0, 0, 255);
    }
    
    else{
      stroke(255, 0, 0);
  }
    
      
    noFill();           
  }
}