import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { GrfPuntosComponent } from './grf-puntos/grf-puntos.component';
import { GrfPresupuestoComponent } from './grf-presupuesto/grf-presupuesto.component';
import { GrfAdherenciaComponent } from './grf-adherencia/grf-adherencia.component';
import { DatosProyectoComponent } from './datos-proyecto/datos-proyecto.component';
import { GrfHorasErrorComponent } from './grf-horas-error/grf-horas-error.component';
import { GrfEsfuerzoComponent } from './grf-esfuerzo/grf-esfuerzo.component';
import { GrfHorasExtraComponent } from './grf-horas-extra/grf-horas-extra.component';
import { GrfNumeroUnitariasComponent } from './grf-numero-unitarias/grf-numero-unitarias.component';
import { GrfCoberturaUnitariasComponent } from './grf-cobertura-unitarias/grf-cobertura-unitarias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent,
    GrfPuntosComponent,
    GrfPresupuestoComponent,
    GrfAdherenciaComponent,
    DatosProyectoComponent,
    GrfHorasErrorComponent,
    GrfEsfuerzoComponent,
    GrfHorasExtraComponent,
    GrfNumeroUnitariasComponent,
    GrfCoberturaUnitariasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
