var brush;

function red_button() {
  brush = "red";
  update_brush_display();
};

function blue_button() {
  brush = "blue";
  update_brush_display();
};

function yellow_button() {
  brush = "yellow";
  update_brush_display();
};

function update_brush_display() {
  document.getElementById("brush_color").style.background = brush;
}

document.getElementById("red_button").onclick = red_button;
document.getElementById("blue_button").onclick = blue_button;
document.getElementById("yellow_button").onclick = yellow_button;

document.getElementById("canvas").onclick = change_color;

function change_color() {
  document.getElementById("canvas").style.background = brush;
}