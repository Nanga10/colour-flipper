let btnFlip = document.getElementById("btn-flip");
btnToggle = true;
const bckgColour = document.getElementById("bckg-colour");

btnFlip.addEventListener("click", function () {
  if (btnToggle) {
    bckgColour.style.backgroundColor = "#A14FF0";
    btnFlip.style.backgroundColor = "#FFFF";
    btnFlip.textContent = "WHITE";
    btnToggle = false;
  } else {
    bckgColour.style.backgroundColor = null;
    btnFlip.style.backgroundColor = "#A14FF0";
    btnFlip.textContent = "PURPLE";
    btnToggle = true;
  }
});
