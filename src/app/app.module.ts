import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
// import { MedicosComponent } from './espias/medicos.component.ts.txt';
@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    //  MedicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
