var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculatebutton = document.querySelector(".calculate");
var luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    luas = (panjang*lebar);
    alert("Jadi luas persegi panjang adalah :" + luas);
}