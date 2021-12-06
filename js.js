
// 1ere reponse

var result1 = document.getElementById("r1");
var btn1 = document.getElementById("q1");

btn1.addEventListener("click", (event) => {
  if (event.detail == 1) {
    result1.style.display = "block";

    btn1.style.transform = "rotate(90deg)";
  } else if (event.detail == 2) {
    result1.style.display = "none";
    btn1.style.transform = "rotate(0deg)";
  }
});

// 2eme reponse

var result2 = document.getElementById("r2");
var btn2 = document.getElementById("q2");

btn2.addEventListener("click", (event) => {
  if (event.detail == 1) {
    result2.style.display = "block";

    btn2.style.transform = "rotate(90deg)";
  } else if (event.detail == 2) {
    result2.style.display = "none";
    btn2.style.transform = "rotate(0deg)";
  }
});


// 3eme reponse

var result3 = document.getElementById("r3");
var btn3 = document.getElementById("q3");

btn3.addEventListener("click", (event) => {
  if (event.detail == 1) {
    result3.style.display = "block";

    btn3.style.transform = "rotate(90deg)";
  } else if (event.detail == 2) {
    result3.style.display = "none";
    btn3.style.transform = "rotate(0deg)";
  }
});
var result4 = document.getElementById("r4");
var btn4 = document.getElementById("q4");

btn4.addEventListener("click", (event) => {
  if (event.detail == 1) {
    result4.style.display = "block";

    btn4.style.transform = "rotate(90deg)";
  } else if (event.detail == 2) {
    result4.style.display = "none";
    btn4.style.transform = "rotate(0deg)";
  }
});
var result5 = document.getElementById("r5");
var btn5= document.getElementById("q5");

btn5.addEventListener("click", (event) => {
  if (event.detail == 1) {
    result5.style.display = "block";

    btn5.style.transform = "rotate(90deg)";
  } else if (event.detail == 2) {
    result5.style.display = "none";
    btn5.style.transform = "rotate(0deg)";
  }
});
