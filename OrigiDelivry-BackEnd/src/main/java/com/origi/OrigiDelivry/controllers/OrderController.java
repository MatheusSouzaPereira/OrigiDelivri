package com.origi.OrigiDelivry.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.origi.OrigiDelivry.dto.OrderDTO;
import com.origi.OrigiDelivry.services.OrderService;

// Formas de fazer um Controlador REST no SpringBoot

@RestController
@RequestMapping(value = "/orders")
public class OrderController {
	

	
	@Autowired
	private OrderService service; 
	
	// Fazer um endpoint
	@GetMapping
	public ResponseEntity<List<OrderDTO>> findAll(){
		List<OrderDTO> list = service.findAll(); 
		return ResponseEntity.ok().body(list) ; 
	}
	
	
}
