import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceRegistroService } from '../service-registro.service';
import { Router } from '@angular/router';
import { Registro } from '../Modelo/Registro';

@Component({
  selector: 'app-actualizar-registro',
  templateUrl: './actualizar-registro.component.html',
  styleUrls: ['./actualizar-registro.component.css']
})
export class ActualizarRegistroComponent implements OnInit {
  id :number;
  registro:Registro;
  seActualizo:boolean;
  constructor(private rutaActiva: ActivatedRoute,private service:ServiceRegistroService,private router:Router) { }

  ngOnInit() {
    this.registro=this.service.getCurrentValue();
      if(this.registro===null){
        this.router.navigate(['']);
      }else{
        this.id=this.rutaActiva.snapshot.params.id;
        this.service.getRegistroPorId(this.id).subscribe(x=>{this.registro=x});
      }
  }
  logOut(){
    this.service.logoutRegistro();
    this.router.navigate(['']);
  }
  actualizarRegistro(){
    this.service.actualizarRegistro(this.registro).subscribe(x=>{
      this.registro=x;
      alert("Registro Actulizado");
      this.router.navigate(["/Listar"]);
    });
    
  }

}
