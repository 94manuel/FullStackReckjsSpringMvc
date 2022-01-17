package com.pruebaTecnica.prueba.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pruebaTecnica.prueba.model.Formulario;
import com.pruebaTecnica.prueba.repo.FormularioRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/formulario")
public class RestFormularioController {
	@Autowired
	private FormularioRepo repo;

	@GetMapping
	public List<Formulario> listar(){
		return repo.findAll();
	}
	
	@PostMapping
	public Formulario insertar(@RequestBody Formulario per){
		return repo.save(per);
	}
	
	@PutMapping
	public void modificar(@RequestBody Formulario per){
		repo.save(per);
	}
	
	@DeleteMapping(value = "/{id}")
	public void eliminar(@PathVariable("id") Integer id){
		repo.deleteById(id);
	}
}
