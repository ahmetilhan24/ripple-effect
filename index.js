const button = document.getElementsByClassName("button");

const root = document.documentElement;

for (i = 0; i < button.length; i++){
    button[i].addEventListener("mousedown", function(e){
        var xdistance = (e.clientX - this.offsetLeft) / this.offsetWidth;
        var ydistance = (e.clientY - this.offsetTop) / this.offsetHeight;
        root.style.setProperty("--xdistance", xdistance);
        root.style.setProperty("--ydistance", ydistance);
    })
}