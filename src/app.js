import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";



window.onload = function () {
  let palos = ["♦", "♥", "♠", "♣"]
  let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];

  // document.querySelector("#card").innerHTML = (numeros[azar2]+ palos[azar]);
  let palosRenderizados = document.querySelectorAll(".palo")
  let boton = document.querySelector(".updatecard");

  palosRenderizados[1].style.transform = "rotate(180deg)";

  function generarCarta() {

    let azar = Math.floor(Math.random() * palos.length)
    let azar2 = Math.floor(Math.random() * numeros.length)

    palosRenderizados[0].innerHTML = (palos[azar]);
    palosRenderizados[1].innerHTML = (palos[azar]);
    document.querySelector(".numero").innerHTML = (numeros[azar2]);

    if (palos[azar] === "♥" || palos[azar] === "♦") {
      palosRenderizados[0].style.color = "red"
      palosRenderizados[1].style.color = "red"
    } else {
      palosRenderizados[0].style.color = "black"
      palosRenderizados[1].style.color = "black"
    }

  }

  generarCarta();

  boton.addEventListener("click", generarCarta)

  let inputHeight = document.getElementById("heightInput");
  let inputWidth = document.getElementById("widthInput");
  let tarjeta = document.querySelector(".tarjeta");
  let botonSize = document.getElementById("applySize");

  botonSize.addEventListener("click", function () {

    let height = inputHeight.value;
    let width = inputWidth.value;

    tarjeta.style.height = height + "px";
    tarjeta.style.width = width + "px";


  })

  // setInterval(function () {
  //   location.reload();
  // }, 20000);

  // inputHeight.addEventListener("input", function (event){

  // let height = event.target.value;
  // tarjeta.style.height = height + "px";

  // });

  // inputWidth.addEventListener("input", function (event){

  // let width = event.target.value;
  // tarjeta.style.width = width + "px";

};



