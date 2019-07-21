import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NuevoRegistroComponent} from './nuevo-registro/nuevo-registro.component';
import {AppComponent} from './app.component';
import {ListaRegistrosComponent} from './lista-registros/lista-registros.component';
import {ActualizarRegistroComponent} from './actualizar-registro/actualizar-registro.component';
import {formLoginComponent} from './formLogin/formLogin.component';


const routes: Routes = [
  {path:'NuevoRegistro',component:NuevoRegistroComponent},
  {path:'',component:formLoginComponent},
  {path:'actualizarRegistro/:id',component:ActualizarRegistroComponent},
  {path:'Listar',component:ListaRegistrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
