package com.origi.OrigiDelivry.services;


import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.origi.OrigiDelivry.dto.ProductDTO;
import com.origi.OrigiDelivry.entities.Product;
import com.origi.OrigiDelivry.repositories.ProductRepository;





@Service
public class ProductService {
	// A anotação @Autowired ela já faz por conta própria já faz a implementação de dependencia 
	
	@Autowired
	private ProductRepository repository ; 
	
	@Transactional(readOnly = true)
	public List<ProductDTO> findAll(){
		List<Product> list = repository.findAllByOrderByNameAsc(); 
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList()) ; 
	}

}
