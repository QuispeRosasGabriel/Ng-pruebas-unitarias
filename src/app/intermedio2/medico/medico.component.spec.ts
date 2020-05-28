//pruebas de intergracion
import { TestBed, ComponentFixture } from "@angular/core/testing"
import { MedicoComponent } from "./medico.component"
import { MedicoService } from './medico.service'
import { HttpClientModule } from '@angular/common/http'

describe("MedicoComponent", () => {
  var componente: MedicoComponent
  let fixture: ComponentFixture<MedicoComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MedicoComponent
      ],
      providers: [
        MedicoService,
      ],
      imports: [
        HttpClientModule
      ]
    })

    fixture = TestBed.createComponent(MedicoComponent)
    componente = fixture.componentInstance
  })

  it("Debe de crearse el componente", () => {
    expect(componente).toBeTruthy()
  })

  it("Debe de retornar el saludo al medico", () => {

    let nombre = "Juan"
    let mensaje = componente.saludarMedico(nombre)
    expect(mensaje).toContain(nombre)
  })
})
