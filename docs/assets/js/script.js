const no = document.getElementById("no");
const yes = document.getElementById("yes");
const wrapper = document.querySelector(".wrapper");
const gif = document.getElementById("gif");
let index = -1,
  instances = -1;

document.addEventListener("DOMContentLoaded", getMessage);
yes.addEventListener("click", messageConfirmed);

no.addEventListener("click", increaseButtonSize);
yes.addEventListener("click", messageConfirmed);

function increaseButtonSize() {
  const scaleValues = [1.5, 1.8, 2, 3];
  instances++;
  gif.src = "assets/images/gifs/crying.gif";

  if (instances === scaleValues.length) {
    no.style.display = "none";
    document.getElementById("reject").style.marginBottom = "40px";
    instances--;
  }

  yes.style.scale = scaleValues[instances];

  getMessage();
}

function messageConfirmed() {
  gif.src = "assets/images/gifs/confirmed.gif";
  no.style.display = "none";
  yes.style.display = "none";

  document.getElementById("reject").innerHTML =
    "Thank youuuu :))) Pokieee, Ill pick you up";
}

function getMessage() {
  index++;
  const messages = [
    "Can you be my date in valentines maam?",
    "Pretty please",
    "Do you hate me?",
    "Please my pookie",
    "Pretty pleaseeee",
  ];

  if (index === messages.length) {
    index--;
  }

  document.getElementById("reject").innerHTML = messages[index];
}
