package com.origi.OrigiDelivry.services;


import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.origi.OrigiDelivry.dto.OrderDTO;
import com.origi.OrigiDelivry.dto.ProductDTO;
import com.origi.OrigiDelivry.entities.Order;
import com.origi.OrigiDelivry.entities.OrderStatus;
import com.origi.OrigiDelivry.entities.Product;
import com.origi.OrigiDelivry.repositories.OrderRepository;
import com.origi.OrigiDelivry.repositories.ProductRepository;

@Service
public class OrderService {
	// A anotação @Autowired ela já faz por conta própria já faz a implementação de dependencia 
	
	@Autowired
	private OrderRepository repository ; 
	
	@Autowired
	private ProductRepository productRepository ; 
	
	@Transactional(readOnly = true)
	public List<OrderDTO> findAll(){
		List<Order> list = repository.findOrdersWithProducts(); 
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList()) ; 
	}

	@Transactional
	public OrderDTO insert(OrderDTO dto){
		Order order = new Order(null, dto.getAddress(), dto.getLatitude() , dto.getLongitude(), 
				Instant.now(), OrderStatus.PENDING);
		for (ProductDTO p : dto.getProducts()) {
			Product product = productRepository.getOne(p.getId()); 
		order.getProducts().add(product);
		}
		order = repository.save(order) ; 
		return new OrderDTO(order) ; 
		
	}
}
