import { Jugador } from "./clase"

describe("Evalua clase", () => {
  var jugador = new Jugador();

  beforeAll(() => {
    // console.log("beforeAll");
  })
  beforeEach(() => {
    jugador.hp = 100;
    // console.log("beforeEach");
  })
  afterAll(() => {
    // console.log("afterAll");
  })
  afterEach(() => {
    // console.log("afterEach");
  })

  it("Evalua que retorne 80hp si recibe 20 de danio", () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);

    expect(resp).toBe(80)
  })

  it("Debe retornar 50, en caso reciba 50", () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);

    expect(resp).toBe(50)
  })
  it("Debe retornar 0, en caso reciba 100 o mas", () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(110);

    expect(resp).toBe(0)
  })


})
