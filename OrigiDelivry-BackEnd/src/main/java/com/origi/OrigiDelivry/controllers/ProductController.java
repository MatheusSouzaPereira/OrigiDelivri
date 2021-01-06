package com.origi.OrigiDelivry.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.origi.OrigiDelivry.dto.ProductDTO;
import com.origi.OrigiDelivry.services.ProductService;

// Formas de fazer um Controlador REST no SpringBoot

@RestController
@RequestMapping(value = "/products")
public class ProductController {
	

	
	@Autowired
	private ProductService service; 
	
	// Fazer um endpoint
	@GetMapping
	public ResponseEntity<List<ProductDTO>> findAll(){
		List<ProductDTO> list = service.findAll(); 
		return ResponseEntity.ok().body(list) ; 
	}
	
	
}
