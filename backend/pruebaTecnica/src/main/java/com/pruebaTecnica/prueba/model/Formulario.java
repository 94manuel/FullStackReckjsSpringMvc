package com.pruebaTecnica.prueba.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

@Entity
@Table(name = "formulario")
public class Formulario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	@Column(name = "documento", length = 10)
	private String documento;
	@Column(name = "email", length = 100)
	private String email;
	@Column(name = "Comentarios", length = 300)
	private String Comentarios;
	@Column(name = "PcFavorita", length = 100)
	private String PcFavorita;
	@Column(name = "fecha", length = 50)
	private String fecha;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDocumento() {
		return documento;
	}
	public void setDocumento(String documento) {
		this.documento = documento;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getComentarios() {
		return Comentarios;
	}
	public void setComentarios(String comentarios) {
		Comentarios = comentarios;
	}
	public String getPcFavorita() {
		return PcFavorita;
	}
	public void setPcFavorita(String pcFavorita) {
		PcFavorita = pcFavorita;
	}
	public String getFecha() {
		return fecha;
	}
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
}
