package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;



import javax.persistence.Column;


@Entity
@Table(name = "cameras", uniqueConstraints={@UniqueConstraint(columnNames ={"name","ip"})})
public class Camera {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	
	
	@Column(name = "name" )
	private String name;
	

	@Column(name = "model")
	private String model;
	
	@Column(name = "resolution")
	private int resolution;
	
	@Column(name = "ip")
	private String ip;
	
	
	public Camera() {
		
	}
	

	public Camera(String name, String model, int resolution, String ip) {
		super();
		this.name = name;
		this.model = model;
		this.resolution = resolution;
		this.ip = ip;
	}
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getResolution() {
		return resolution;
	}
	public void setResolution(int resolution) {
		this.resolution = resolution;
	}
	public String getIp() {
		return ip;
	}
	public void setIp(String ip) {
		this.ip = ip;
	}
	

}
