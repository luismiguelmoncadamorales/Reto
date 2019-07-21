
package com.pruebaPratech.Backend;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/registros"})
public class Controlador {
    @Autowired
    private RegistroRepostorio registroImpl;
    
    @GetMapping ({"/lista"})
    public List<Registro>listar(){
        return registroImpl.findAll();
    }
    
    @RequestMapping(value = "/BuscarRegistro/{id}", method = RequestMethod.GET)
    public Registro BuscarRegistro(@PathVariable("id")int id){
        if (registroImpl.exists(id)) {
            return registroImpl.findOne(id);
        }else{
            return null;
        }
    }
    @PutMapping("/Actualizar")
     Registro ActualizarRegistro(@RequestBody Registro nuevoRegistro) {
         try {
            registroImpl.save(nuevoRegistro);
        } catch (Exception e) {
        }
         return nuevoRegistro;
    }
     @PostMapping("/Agregar")
     Registro AgregarRegistro(@RequestBody Registro registro) {
         try {
             if (!registroImpl.exists(registro.getCedula())) {
                 registroImpl.save(registro);
             }else{
                 registro=null;
             }
        } catch (Exception e) {
        }
         return registro;
    }
    @DeleteMapping("/Eliminar/{id}")
    Registro EliminarRegistro(@PathVariable("id")int id) {
         Registro registro=registroImpl.findOne(id);
         try {
             registroImpl.delete(registro);
        } catch (Exception e) {
            registro=null;
        }
         return registro;
    }
    @PostMapping("/Login")
     Registro LoginRegistro(@RequestBody Login login) {
         Registro registro=null;
         List<Registro> listaRegistro=registroImpl.findAll();
         try {
             for (int i = 0; i < listaRegistro.size(); i++) {
                 if (listaRegistro.get(i).getCorreo().equals(login.getCorreo())&&listaRegistro.get(i).getPassword().equals(login.getPassword())) {
                     registro=listaRegistro.get(i);
                 }
             }
        } catch (Exception e) {
            registro=null;
        }
         return registro;
    }
}
