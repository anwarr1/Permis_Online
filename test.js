var countdown = document.getElementById("number");
var x = 120;

setInterval(count, 1000);

function count() {
  if (x > 0) {
    x--;
    countdown.innerHTML = x;
  } else x = 40;
  count();
  step();
}

var skip = document.getElementById("skip");
var score = document.getElementById("score");
var totalScore = document.getElementById("totalScore");

var count = 0;
var scoreCount = 0;

var qaSet = document.querySelectorAll(".QST");
var qaAnsRow = document.querySelectorAll(".QST .input input");

skip.addEventListener("click", function () {
  step();
});

function step() {
  count += 1;
  for (var i = 0; i < qaSet.length; i++) {
    qaSet[i].className = "QST";
  }
  qaSet[count].className = "QST active";
  if (count == 10) {
    skip.style.display = "none";
  }
}

qaAnsRow.forEach(function (qaAnsRowSingle) {
  qaAnsRowSingle.addEventListener("click", function () {
    setTimeout(function () {
      step();
    }, 500);

    var valid = this.getAttribute("valid");
    if (valid == "valid") {
      scoreCount += 1;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
      if (scoreCount > 5)
        document.getElementById("back").style.backgroundColor = "green";
      else document.getElementById("back").style.backgroundColor = "red";
    } else {
      scoreCount -= 0;
      score.innerHTML = scoreCount;
      totalScore.innerHTML = scoreCount;
    }
  });
});
