import { FormularioRegister } from "./formulario"
import { FormBuilder } from '@angular/forms';

describe("Formulario reactivos", () => {
  let componente: FormularioRegister

  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  })

  it("Debe de crear un formulario con 2 campos", () => {
    expect(componente.form.contains("email")).toBeTruthy()
    expect(componente.form.contains("password")).toBeTruthy()
  })

  it("El email debe ser obligatorio", () => {
    //obteniendo valor de email
    const control = componente.form.get("email");
    control.setValue("")

    expect(control.valid).toBeFalsy()
  })

  it("El email debe ser un email valido", () => {
    //obteniendo valor de email
    const control = componente.form.get("email");
    control.setValue("gaboelpro@gmail.com")

    expect(control.valid).toBeTruthy()
  })

})
