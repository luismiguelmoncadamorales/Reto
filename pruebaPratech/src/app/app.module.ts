import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formLoginComponent} from './formLogin/formLogin.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { ActualizarRegistroComponent } from './actualizar-registro/actualizar-registro.component';
import {ServiceRegistroService} from './service-registro.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    formLoginComponent,
    ListaRegistrosComponent,
    NuevoRegistroComponent,
    ActualizarRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceRegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
