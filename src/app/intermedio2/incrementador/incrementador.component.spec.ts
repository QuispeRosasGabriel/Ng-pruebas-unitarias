import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule]
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;

  });

  it('Crea el componente', () => {
    expect(component).toBeTruthy()
  });

  it("Debe mostrar la leyenda y el progreso", () => {

    component.leyenda = "Progreso de carga"
    fixture.detectChanges() // disparar la deteccion de cambios
    let elemen: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(elemen.innerHTML).toContain("Progreso de carga")

  })

  it("Debe mostrar en el input el valor del progreso", () => {
    component.cambiarValor(5)
    fixture.detectChanges()

    //espera a que los cambios sean detectados
    fixture.whenStable().then(() => {

      const input = fixture.debugElement.query(By.css("input")).nativeElement;

      expect(input.value).toBe("55");
    })
  })

  it("Debe decrementar en 5 con un clic en el boton", () => {
    const botones = fixture.debugElement.queryAll(By.css(".btn-primary"));
    // simular click para probar botones
    botones[0].triggerEventHandler("click", null);
    expect(component.progreso).toBe(45)

    botones[1].triggerEventHandler("click", null);
    expect(component.progreso).toBe(50)
  })

  it("Confirmar que el progreso ha cambiado", () => {
    const botones = fixture.debugElement.queryAll(By.css(".btn-primary"))
    botones[0].triggerEventHandler("click", null);

    fixture.detectChanges();

    fixture.whenStable().then(() => {

      let elemen: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
      expect(elemen.innerHTML).toContain("45")

    })


  })
});
