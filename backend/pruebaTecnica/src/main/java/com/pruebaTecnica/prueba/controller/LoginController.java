package com.pruebaTecnica.prueba.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pruebaTecnica.prueba.model.Login;
import com.pruebaTecnica.prueba.repo.LoginRepo;


@Controller 
public class LoginController {
	
	@Autowired
	private LoginRepo repo;
	

	@GetMapping("/greeting")
	public String greeting(@RequestParam(value="email", required=false,defaultValue="world") String email, Model model) {
		Login login = new Login();
		login.setemail("manu@live.com.mx");
		repo.save(login);
		model.addAttribute("email", email);
		return "greeting";
	}
	
	@GetMapping("/c")
	public String listar(Model model) {
		model.addAttribute("login", repo.findAll());
		return "greeting";
	}
	
}
