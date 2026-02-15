function makeRed() {
  document.body.style.backgroundColor = "red";
}
function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makePurple() {
  document.body.style.backgroundColor = "purple";
}

const btnMakeBlue = document.getElementById('btn-make-blue');

btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

const btnMakeViolet = document.getElementById('btn-make-violet');
btnMakeViolet.onclick = makeViolet;

function makeViolet() {
    document.body.style.backgroundColor = 'violet';
}

// addEventListener

document.getElementById('btn-make-gold')
  .addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
  })