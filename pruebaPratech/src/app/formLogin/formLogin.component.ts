import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { Registro } from '../Modelo/Registro';
import { ServiceRegistroService } from '../service-registro.service';
import { Login } from '../Modelo/Login';

@Component({
    selector :'form-login',
    templateUrl:'./formLogin.component.html'
})
export class formLoginComponent{
    login=new Login;
    constructor(private service:ServiceRegistroService,private router:Router) { }

  ngOnInit() {
  }
   Login(correo,password){
        if(correo.value===""||password.value===""){
           alert("Por favor ingrese sus credenciales");
        }else{
            this.login.correo=correo.value;
            this.login.password=password.value;
            this.service.loginRegistro(this.login).subscribe(x=>{
                if(x===null){
                    alert("Credenciales Incorrectas");
                    correo.value='';
                    password.value='';
                    return false;
                }else{
                    this.service.setCurrentValue(x);
                    this.router.navigate(["/Listar"]);
                }
            });
        }
   }
}
