/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.pruebaPratech.Backend;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.Repository;

public interface RegistroRepostorio extends CrudRepository<Registro,Integer> {
    List<Registro> findAll();
    Registro findOne(int id);
    Registro save(Registro registro);
    void delete(Registro registro);
    boolean exists(int id);
}
