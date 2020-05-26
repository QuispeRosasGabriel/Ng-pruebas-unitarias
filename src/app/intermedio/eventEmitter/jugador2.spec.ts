import { Jugador2 } from "./jugador2"

describe("Prueba de jugador 2 con Emit", () => {
  let jugador2 = new Jugador2();

  beforeEach(() => jugador2 = new Jugador2());

  it("Debe emitir un evento cuando recibe daño", () => {
    let nuevoHP = 0
    jugador2.hpCambia
      .subscribe(resp => {
        nuevoHP = resp;
      })

    jugador2.recibeDanio(1000);

    expect(nuevoHP).toBe(0);
  })

  it("Debe emitir un evento cuando recibe daño y sobrevivir si es menos de 100", () => {
    let nuevoHP = 0
    jugador2.hpCambia
      .subscribe(resp => {
        nuevoHP = resp;
      })

    jugador2.recibeDanio(50);

    expect(nuevoHP).toBe(50);
  })

})
