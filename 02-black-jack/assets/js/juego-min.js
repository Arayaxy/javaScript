const miModulo = (() => {
  "use strict";
  let e = [],
    t = ["C", "D", "H", "S"],
    l = ["A", "j", "Q", "K"],
    a = [],
    r = document.querySelector("#btnPedir"),
    n = document.querySelector("#btnNuevo"),
    s = document.querySelector("#btnPlantar"),
    d = document.querySelectorAll(".divCartas"),
    i = document.querySelectorAll("small"),
    o = (t = 2) => {
      (e = c()), (a = []);
      for (let l = 0; l < t; l++) a.push(0);
      i.forEach((e) => (e.innerText = 0)),
        d.forEach((e) => (e.innerHTML = "")),
        (r.disabled = !1),
        (s.disabled = !1);
    },
    c = () => {
      e = [];
      for (let a = 2; a <= 10; a++) for (let r of t) e.push(a + r);
      for (let n of t) for (let s of l) e.push(s + n);
      return _.shuffle(e);
    },
    u = () => {
      if (0 === e.length) throw "No hay cartas en el deck";
      return e.pop();
    },
    $ = (e) => {
      let t = e.substring(0, e.length - 1);
      return isNaN(t) ? ("A" === t ? 11 : 10) : 1 * t;
    },
    f = (e, t) => ((a[t] = a[t] + $(e)), (i[t].innerText = a[t]), a[t]),
    h = (e, t) => {
      let l = document.createElement("img");
      (l.src = `assets/cartas/${e}.png`),
        l.classList.add("cartas"),
        d[t].append(l);
    },
    b = () => {
      let [e, t] = a;
      setTimeout(() => {
        t === e
          ? alert("Empate")
          : e > 21
          ? alert("gana la maquina")
          : t > 21
          ? alert("Ganaste")
          : alert("Gana el PC");
      }, 30);
    },
    g = (e) => {
      let t = 0;
      do {
        let l = u();
        (t = f(l, a.length - 1)), h(l, a.length - 1);
      } while (t < e && e <= 21);
      b();
    };
  return (
    r.addEventListener("click", () => {
      let e = u(),
        t = f(e, 0);
      h(e, 0),
        t > 21
          ? (console.warn("Lo siento, la casa siempre gana"),
            (r.disabled = !0),
            (s.disabled = !0),
            g(t))
          : 21 === t &&
            (console.warn("21, genial!"),
            (r.disabled = !0),
            (s.disabled = !0),
            g(t));
    }),
    s.addEventListener("click", () => {
      (r.disabled = !0), (s.disabled = !0), g(a[0]);
    }),
    n.addEventListener("click", () => {
      o();
    }),
    { nuevoJuego: o }
  );
})();
