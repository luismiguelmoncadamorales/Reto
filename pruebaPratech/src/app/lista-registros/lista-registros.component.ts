import { Component, OnInit, Input } from '@angular/core';
import { ServiceRegistroService } from '../service-registro.service';
import { Router } from '@angular/router';
import { Registro } from '../Modelo/Registro';

@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent implements OnInit {
  registros:Registro[];
  registro:Registro;
  constructor(private service:ServiceRegistroService,private router:Router) { }

  ngOnInit() {
      this.registro=this.service.getCurrentValue();
      if(this.registro===null){
        this.router.navigate(['']);
      }else{
        this.service.getRegistros().subscribe(x=>{ 
          this.registros=x;
        });
      }
      
  }
  logOut(){
    this.service.logoutRegistro();
    this.router.navigate(['']);
  }
  listaCompleta(){
    this.registros=[];
    this.service.getRegistros().subscribe(x=>{ this.registros=x;
    });
  }
  eliminarRegistro(id){
     this.service.eliminarRegistro(id).subscribe(x=>{
       if(x===null){
          alert("Error al eliminar el registro");
       }else{
        this.listaCompleta();
       }
     });
  }

  buscarRegistro(id){
    if(id.value===""){
      alert("Ingrese cedula");
    }else{
      this.service.getRegistroPorId(id.value).subscribe(x=>{
        if(x===null){
          alert("Registro no encontrado");
        }else{
          this.registros=[];
          console.log(x);
          this.registros.push(x);
        }
        id.value='';
      });
    }
  }
}
