import { incrementar } from "./numeros"

describe("Pruebas de numeros", () => {

  it("Si el numero es mayor a 100, debe retornar 100", () => {
    let res = incrementar(400)
    expect(res).toBe(100)
  })

  it("Si el numero es menor a 0, debe parar", () => {
    let res = incrementar(0)
    expect(res).toBe(0)
  })

  it("El numero es valido y debe sumar 1", () => {
    let res = incrementar(10)
    expect(res).toBe(11)
  })

})
