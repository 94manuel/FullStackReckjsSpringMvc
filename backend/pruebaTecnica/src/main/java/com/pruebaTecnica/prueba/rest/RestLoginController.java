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

import com.pruebaTecnica.prueba.model.Login;
import com.pruebaTecnica.prueba.repo.LoginRepo;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/login")
public class RestLoginController {
	@Autowired
	private LoginRepo repo;

	@GetMapping
	public List<Login> listar(){
		return repo.findAll();
	}
	
	@PostMapping
	public Login insertar(@RequestBody Login per){
		return repo.save(per);
	}
	
	@PostMapping("/entrar")
	public Login entrar(@RequestBody Login per){
		repo.findAll();
		return repo.save(per);
	}
	@PutMapping
	public void modificar(@RequestBody Login per){
		repo.save(per);
	}
	
	@DeleteMapping(value = "/{id}")
	public void eliminar(@PathVariable("id") Integer id){
		repo.deleteById(id);
	}
}
