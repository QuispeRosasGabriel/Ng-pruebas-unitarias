import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {
  medico: any[] = []

  constructor(private _medicoService: MedicoService) { }

  ngOnInit() {
  }

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`
  }

  obtenerMedicos() {
    this._medicoService.getMedicos()
      .subscribe((resp: any[]) => this.medico = resp);
  }

}
