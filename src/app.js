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

  if (palos[azar] === "♥" || palos[azar] === "♦") {
      palosRenderizados[0].style.color = "red"
      palosRenderizados[1].style.color = "red"
    } else {
      palosRenderizados[0].style.color = "black"
      palosRenderizados[1].style.color = "black"
    }


  boton.addEventListener("click", function () {

    // let palos = ["♦", "♥", "♠", "♣"]
    // let numeros = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "Q", "J", "A"];
    let azar = Math.floor(Math.random() * palos.length)
    let azar2 = Math.floor(Math.random() * numeros.length)

    // let palosRenderizados = document.querySelectorAll(".palo")

    if (palos[azar] === "♥" || palos[azar] === "♦") {
      palosRenderizados[0].style.color = "red"
      palosRenderizados[1].style.color = "red"
    } else {
      palosRenderizados[0].style.color = "black"
      palosRenderizados[1].style.color = "black"
    }

    palosRenderizados[0].innerHTML = (palos[azar]);
    palosRenderizados[1].innerHTML = (palos[azar]);
    document.querySelector(".numero").innerHTML = (numeros[azar2]);
  });

};
