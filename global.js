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

document.getElementById("one").onclick = change_color_one;

function change_color_one() {
  document.getElementById("one").style.background = brush;
}

document.getElementById("two").onclick = change_color_two;

function change_color_two() {
  document.getElementById("two").style.background = brush;
}

document.getElementById("three").onclick = change_color_three;

function change_color_three() {
  document.getElementById("three").style.background = brush;
}

document.getElementById("four").onclick = change_color_four;

function change_color_four() {
  document.getElementById("four").style.background = brush;
}

document.getElementById("five").onclick = change_color_five;

function change_color_five() {
  document.getElementById("five").style.background = brush;
}

document.getElementById("six").onclick = change_color_six;

function change_color_six() {
  document.getElementById("six").style.background = brush;
}

document.getElementById("seven").onclick = change_color_seven;

function change_color_seven() {
  document.getElementById("seven").style.background = brush;
}

document.getElementById("eight").onclick = change_color_eight;

function change_color_eight() {
  document.getElementById("eight").style.background = brush;
}

document.getElementById("nine").onclick = change_color_nine;

function change_color_nine() {
  document.getElementById("nine").style.background = brush;
}
