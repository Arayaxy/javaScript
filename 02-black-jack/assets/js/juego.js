const miModulo = (() => {
  "use strict";

  let deck = [];

  const tipos = ["C", "D", "H", "S"],
    figuras = ["A", "j", "Q", "K"];

  let puntosJugadores = [];

  //LLamadas html
  const btnPedir = document.querySelector("#btnPedir"),
    btnNuevo = document.querySelector("#btnNuevo"),
    btnPlantar = document.querySelector("#btnPlantar");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHTML = document.querySelectorAll("small");
  //Esta funcion inicia el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);
    }
    puntosHTML.forEach((elem) => (elem.innerText = 0));
    divCartasJugadores.forEach((elem) => (elem.innerHTML= ''));
    btnPedir.disabled = false;
    btnPlantar.disabled = false;
  };
  //esta funcion crea una nueva baraja y la mezcla de manera aleatoria
  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let figura of figuras) {
        deck.push(figura + tipo);
      }
    }

    return _.shuffle(deck);
  };

  // esta funcion me permite robar cartas
  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "No hay cartas en el deck";
    }

    return deck.pop();
  };

  // pedirCarta();
  //valor carta
  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };
  //Turno: 0 = primer jugador el segundo jugador = cp;

  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
  };
  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("cartas");
    divCartasJugadores[turno].append(imgCarta);
  };

  const determinarGanador = () => {
    const [puntosMinimos, puntosCp] = puntosJugadores;

    setTimeout(() => {
      if (puntosCp === puntosMinimos) {
        alert("Empate");
      } else if (puntosMinimos > 21) {
        alert("gana la maquina");
      } else if (puntosCp > 21) {
        alert("Ganaste");
      } else {
        alert("Gana el PC");
      }
    }, 30);
  };

  // Turno Pc
  const turnoComputadora = (puntosMinimos) => {
    let puntosCp = 0;
    do {
      const carta = pedirCarta();
      puntosCp = acumularPuntos(carta, puntosJugadores.length - 1);
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosCp < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  //Eventos

  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);

    crearCarta(carta, 0);

    if (puntosJugador > 21) {
      console.warn("Lo siento, la casa siempre gana");
      btnPedir.disabled = true;
      btnPlantar.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("21, genial!");
      btnPedir.disabled = true;
      btnPlantar.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnPlantar.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnPlantar.disabled = true;

    turnoComputadora(puntosJugadores[0]);
  });
  //nuevo juego
  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });
  return{
    nuevoJuego: inicializarJuego
  }
})();
