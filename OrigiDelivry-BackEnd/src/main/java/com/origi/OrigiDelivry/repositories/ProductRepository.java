package com.origi.OrigiDelivry.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.origi.OrigiDelivry.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	//Forma de Ordernar a Pesquisa Por nome 
	List<Product> findAllByOrderByNameAsc() ; 
	

}
