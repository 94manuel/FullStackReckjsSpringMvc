package com.pruebaTecnica.prueba.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pruebaTecnica.prueba.model.Formulario;
import com.pruebaTecnica.prueba.model.Login;

public interface FormularioRepo extends JpaRepository<Formulario, Integer>{

}
