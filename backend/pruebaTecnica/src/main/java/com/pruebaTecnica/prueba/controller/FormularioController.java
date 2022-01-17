package com.pruebaTecnica.prueba.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller 
public class FormularioController {
	@RequestMapping("/Controller")
	public String hello(@RequestParam(value="email", required=false) String name) {
		return String.format("Hello %s!", name);
	}
	
}
