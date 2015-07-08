var brush;

function red_button() {
  brush = "red";
};

function blue_button() {
  brush = "blue";
};

function yellow_button() {
  brush = "yellow";
};

document.getElementById("red_button").onclick = red_button;
document.getElementById("blue_button").onclick = blue_button;
document.getElementById("yellow_button").onclick = yellow_button;

document.getElementById("canvas").onclick = change_color;

function change_color() {
  document.getElementById("canvas").style.background = brush;
  
}