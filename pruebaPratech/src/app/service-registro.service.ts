import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Registro } from './Modelo/Registro';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegistroService {
  public currentUser: Observable<Registro>;

  Url='http://localhost:8080/registros';
  constructor(private http:HttpClient) { }
   getRegistros(){
    return this.http.get<Registro[]>(this.Url+"/lista");
   }
   getRegistroPorId(id:number){
    return this.http.get<Registro>(this.Url+"/BuscarRegistro/"+id);
   }
   actualizarRegistro(registro:Registro){
    return this.http.put<Registro>(this.Url+"/Actualizar",registro);
   }
   agregarRegistro(registro:Registro){
    return this.http.post<Registro>(this.Url+"/Agregar",registro);
   }
   eliminarRegistro(id:number){
     return this.http.delete<Registro>(this.Url+"/Eliminar/"+id);
   }
   loginRegistro(Login){
    return this.http.post<Registro>(this.Url+"/Login",Login);
   }
   setCurrentValue(registro:Registro){
     console.log(registro);
    localStorage.setItem('currentUser', JSON.stringify(registro));
   }
   getCurrentValue():Registro{
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let registro: Registro = JSON.parse(user_string);
      return registro;
    } else {
      return null;
    }
   }
   logoutRegistro() {
     localStorage.removeItem("currentUser");
  }
}
