import { usuarioLogueado } from "./booleanos"

describe("Pruebas de login", () => {
  it("Debe regresar true", () => {
    let resp = usuarioLogueado
    //para booleanos
    // para verdadero
    expect(resp).toBeTruthy();

    //para ser falso
    // expect(resp).toBeFalsy();
    // expect(resp).not.toBeTruthy();

  })
})
