
// las pruebas tienen 2 partes

import { mensaje } from "./string"

// describe("Pruebas de strings")
// it("Debe regresar un string")

describe("Pruebas de stings", () => {
  it("Debe de regresar un string", () => {
    const resultado = mensaje("Gabriel")

    //espera que sea del tipo
    expect(typeof resultado).toBe("string")

  })


  it("Debe de retornar un saludo con el nombre enviado", () => {
    const nombre = "Juan"
    const resultado = mensaje(nombre)

    //espera que contenga esto en el resultado
    expect(resultado).toContain(nombre)

  })


})
