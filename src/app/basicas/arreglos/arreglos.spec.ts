import { obtenerRobots } from "./arreglos"

describe("Pruebas de arreglos", () => {
  it("Debe de retornar al menos 3 objetos", () => {
    let resp = obtenerRobots();
    //esperando al menos 3 de respusta
    expect(resp.length).toBeGreaterThanOrEqual(3);
  })
  it("Debe evaluar que venga Megaman y Pinocho", () => {
    let resp = obtenerRobots()
    expect(resp).toContain("Pinocho 3000")
    expect(resp).toContain("Megaman")
  })
})
