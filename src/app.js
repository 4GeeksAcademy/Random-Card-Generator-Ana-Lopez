import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let palos = ["♦", "♥", "♠", "♣"]
  let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];
  let azar = Math.floor(Math.random() * palos.length)
  let azar2 = Math.floor(Math.random() * numeros.length)


  // document.querySelector("#card").innerHTML = (numeros[azar2]+ palos[azar]);
  let palosRenderizados = document.querySelectorAll(".palo")
  palosRenderizados[0].innerHTML = (palos[azar]);
  palosRenderizados[1].innerHTML = (palos[azar]);
  document.querySelector(".numero").innerHTML = (numeros[azar2]);
  let boton = document.querySelector(".updatecard");

  palosRenderizados[1].style.transform = "rotate(180deg)";

  if (palos[azar] === "♥") {
    palosRenderizados[0].style.color = "red"
    palosRenderizados[1].style.color = "red"

  }


  boton.addEventListener("click", function () {

    let palos = ["♦", "♥", "♠", "♣"]
    let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];
    let azar = Math.floor(Math.random() * palos.length)
    let azar2 = Math.floor(Math.random() * numeros.length)

    if (palos[azar] === "♥"){
    palosRenderizados[0].style.color= "red"
    palosRenderizados[1].style.color="red"

  }

    let palosRenderizados = document.querySelectorAll(".palo")
    palosRenderizados[0].innerHTML = (palos[azar]);
    palosRenderizados[1].innerHTML = (palos[azar]);
    document.querySelector(".numero").innerHTML = (numeros[azar2]);
  });

};
