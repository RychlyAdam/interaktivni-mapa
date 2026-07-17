const recepce = document.getElementById("recepce");
const okno = document.getElementById("okno");
const zavrit = document.getElementById("zavrit");

recepce.addEventListener("click", function () {
    okno.style.display = "block";
});

zavrit.addEventListener("click", function () {
    okno.style.display = "none";
});
const restaurace = document.getElementById("restaurace");
const oknoRestaurace = document.getElementById("okno-restaurace");
const zavritRestaurace = document.getElementById("zavrit-restaurace");

restaurace.addEventListener("click", function () {
    oknoRestaurace.style.display = "block";
});

zavritRestaurace.addEventListener("click", function () {
    oknoRestaurace.style.display = "none";
});