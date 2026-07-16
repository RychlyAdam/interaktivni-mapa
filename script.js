const recepce = document.getElementById("recepce");
const okno = document.getElementById("okno");
const zavrit = document.getElementById("zavrit");

recepce.addEventListener("click", function () {
    okno.style.display = "block";
});

zavrit.addEventListener("click", function () {
    okno.style.display = "none";
});
