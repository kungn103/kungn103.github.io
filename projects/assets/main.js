var balls = document.getElementsByClassName("ball")
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerWidth + "%";

  for(var i=0;i<20;i++){
    balls[i].style.left = x; 
    balls[i].style.top = y; 
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}





