package com.simplilearn.Medicare_App.service;

import java.util.List;
import java.util.Set;

import org.springframework.http.ResponseEntity;

import com.simplilearn.Medicare_App.model.Category;
import com.simplilearn.Medicare_App.model.Medicine;


public interface MedicineService {
	
	public Medicine addMedicine(Medicine medicine);
	
	public Medicine updateMedicine(Medicine medicine);
	
	public Set<Medicine> getMedicines();
	
	public Medicine getMedicine(Long medicineId);
	
	public Medicine deleteMedicine(Long id);
	
	public void deleteByName(String name);

	public List<Medicine> MedicinesOfCategory(Category category);
	
	public List<Medicine> getActiveMedicine();
	public List<Medicine> getActiveMedicinesOfCategory(Category category);
	
	public List<Medicine> searchByName(String name);
	
}
