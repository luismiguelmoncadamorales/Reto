import { Component, OnInit } from '@angular/core';
import { Registro } from '../Modelo/Registro';
import { ServiceRegistroService } from '../service-registro.service';
import { Router } from '@angular/router';
import { core } from '@angular/compiler';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrls: ['./nuevo-registro.component.css']
})
export class NuevoRegistroComponent implements OnInit {
  registro= new Registro;
  constructor(private service:ServiceRegistroService,private router:Router) { }
  logOut(){
    this.service.logoutRegistro();
    this.router.navigate(['']);
  }

  agregarRegistro(cedula,nombre,apellidos,correo,password){
    console.log(cedula.value,nombre.value,apellidos.value,correo.value,password.value);
    this.registro.cedula=cedula.value;
    this.registro.nombre=nombre.value;
    this.registro.apellidos=apellidos.value;
    this.registro.correo=correo.value;
    this.registro.password=password.value;
    console.log(this.registro);
    this.service.agregarRegistro(this.registro).subscribe(x=>{
      if(x===null){
        alert("El nuevo registro ya existe");
        cedula.value='';
        nombre.value='';
        apellidos.value='';
        correo.value='';
        password.value='';
        return false
      }else{
        alert("Registro insertado");
        this.router.navigate(["/Listar"]);
      }
      
    });
  }
  ngOnInit() {
    this.registro=this.service.getCurrentValue();
      if(this.registro===null){
        this.router.navigate(['']);
      }
  }
  
}
