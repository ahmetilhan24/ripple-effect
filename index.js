var button = document.getElementById("button");

var root = document.documentElement;

button.addEventListener("mousedown",  function(e){
    var xdistance = (e.clientX - this.offsetLeft) / this.offsetWidth;
    var ydistance = (e.clientY - this.offsetTop) / this.offsetHeight;
    root.style.setProperty("--xdistance", xdistance);
    root.style.setProperty("--ydistance", ydistance);
})