var alasInput = document.querySelector(".alas");
var tinggiInput = document.querySelector(".tinggi");
var calculatebutton = document.querySelector(".calculate");
var luas, alas, tinggi;

function myFunction(){
    alas = alasInput.value;
    tinggi = tinggiInput.value;
    luas = 1/2*(alas*tinggi);
    alert("Jadi luas segitiga adalah :" + luas);
}