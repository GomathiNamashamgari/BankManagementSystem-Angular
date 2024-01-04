package com.bank.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Customer 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long customerId;
	private String name;
	private Date dateofbirth;
	private String email;
	private Long contact;
	private String address;
	private String city;
	private String state;
	private Integer pincode;
	
	
	 @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
	 private List<Account> accounts;
	
	
}

