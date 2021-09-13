package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Camera;
import com.example.demo.repository.CameraRepository;



@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class CameraController {
	
	@Autowired
	private CameraRepository cameraRepository;
	
	//get all cameras
	
	@GetMapping("/cameras")
	public List<Camera> getAllCameras(){
		
		return cameraRepository.findAll();
	}
	
	//create camera rest api
	
	@PostMapping("/cameras")
	public Camera createCamera(@RequestBody Camera camera) {
		return  cameraRepository.save(camera);
	}
	
	//get camera by id
	
	@GetMapping("/cameras/{id}")
	public ResponseEntity<Camera> getCameraById(@PathVariable Long id) {
		
		
		Camera camera = cameraRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existing camera with this id:" + id));
		
		return ResponseEntity.ok(camera);
		
	}
	
	
	//update camera
	
	@PutMapping("/cameras/{id}")
	public ResponseEntity<Camera> updateCamera(@PathVariable Long id ,@RequestBody Camera cameraDetails){
		
		
		Camera camera = cameraRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existing camera with this id:" + id));
		
		camera.setName(cameraDetails.getName());
		camera.setModel(cameraDetails.getModel());
		camera.setResolution(cameraDetails.getResolution());
		camera.setIp(cameraDetails.getIp());
		
		Camera updatedCamera = cameraRepository.save(camera);
		return ResponseEntity.ok(updatedCamera);
	}
	
	
	@DeleteMapping("/cameras/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCamera(@PathVariable Long id){
		
		Camera camera = cameraRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existing camera with this id:" + id));
		
		cameraRepository.delete(camera);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted",Boolean.TRUE);
		return ResponseEntity.ok(response);

		
	}


	
}

