package com.origi.OrigiDelivry.services;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.origi.OrigiDelivry.dto.OrderDTO;
import com.origi.OrigiDelivry.entities.Order;
import com.origi.OrigiDelivry.repositories.OrderRepository;





@Service
public class OrderService {
	// A anotação @Autowired ela já faz por conta própria já faz a implementação de dependencia 
	
	@Autowired
	private OrderRepository repository ; 
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts(); 
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()) ; 
	}

}
