import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import "rxjs/add/observable/from"
import "rxjs/add/observable/empty"
import { observable, Observable } from 'rxjs';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);

  });


  it('Init: Debe cargar los medicos', () => {

    const medicos = ["Medico1", "Medico2", "Medico3"]
    //espias
    spyOn(servicio, "getMedicos").and.callFake(() => {
      return observable.from([medicos])
    })

    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0)

  });

  it("Debe llamar al servidor para agregar un medico", () => {
    const espia = spyOn(servicio, "agregarMedico").and.callFake((medico) => {

      //regresando observalbe vacio
      return Observable.empty();
    })
    componente.agregarMedico()

    expect(espia).toHaveBeenCalled();
  })

  it("Debe agregar un nuevo medico al arreglo de medicos y es pera una respuesta", () => {
    const medico = { id: 1, nombre: "Juan" };
    spyOn(servicio, "agregarMedico")
      .and.returnValue(Observable.from([medico]))
    componente.agregarMedico()
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0)
  })

  it("Si fall la adicion, la propiedad mensaje error debe ser igual al error del servicio", () => {
    const miError = "No se pudo agregar el medico"
    spyOn(servicio, "agregarMedico").and.returnValue(Observable.throw(miError))
    componente.agregarMedico()
    expect(componente.mensajeError).toBe(miError)
  })


  it("Debe llamar al servidor para borrar al medico", () => {
    //simulando confirmacion
    spyOn(window, "confirm").and.returnValue(true);
    const espia = spyOn(servicio, "borrarMedico")
      .and.returnValue(Observable.empty());

    componente.borrarMedico("1");
    expect(espia).toHaveBeenCalledWith("1")
  })

  it("No Debe llamar al servidor para borrar al medico", () => {
    //simulando confirmacion
    spyOn(window, "confirm").and.returnValue(false);
    const espia = spyOn(servicio, "borrarMedico")
      .and.returnValue(Observable.empty());

    componente.borrarMedico("1");
    expect(espia).not.toHaveBeenCalledWith("1")
  })
});
