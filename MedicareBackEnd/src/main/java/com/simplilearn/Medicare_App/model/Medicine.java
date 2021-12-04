package com.simplilearn.Medicare_App.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
public class Medicine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	public boolean isActive() {
		return active;
	}


	public void setActive(boolean active) {
		this.active = active;
	}

	private String name;
	private String seller;
	@Column(length= 5000)
	private String prodDesc;
	private String offers;
	private long price;
	private boolean active = false;
//	@Column(name = "picByte", length= 1000)
//	private byte[] picByte;
	
	@ManyToOne(fetch = FetchType.EAGER)
	private Category category;
	
	public Medicine() {
	}

	
	

	public Medicine(long id, String name, String seller, String prodDesc, String offers, long price, boolean active,
			Category category) {
		super();
		this.id = id;
		this.name = name;
		this.seller = seller;
		this.prodDesc = prodDesc;
		this.offers = offers;
		this.price = price;
		this.active = active;
		this.category = category;
	}


//	public byte[] getPicByte() {
//		return picByte;
//	}
//
//
//	public void setPicByte(byte[] picByte) {
//		this.picByte = picByte;
//	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSeller() {
		return seller;
	}

	public void setSeller(String seller) {
		this.seller = seller;
	}

	public String getProdDesc() {
		return prodDesc;
	}

	public void setProdDesc(String prodDesc) {
		this.prodDesc = prodDesc;
	}

	public String getOffers() {
		return offers;
	}

	public void setOffers(String offers) {
		this.offers = offers;
	}

	public long getPrice() {
		return price;
	}

	public void setPrice(long price) {
		this.price = price;
	}
	
	
	
	

}
