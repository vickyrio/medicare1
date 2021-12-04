package com.simplilearn.Medicare_App.service.impl;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.simplilearn.Medicare_App.model.Category;
import com.simplilearn.Medicare_App.model.Medicine;
import com.simplilearn.Medicare_App.repository.MedicineRepository;
import com.simplilearn.Medicare_App.service.MedicineService;

@Service
public class MedicineServiceImpl implements MedicineService{
	
	@Autowired
	private MedicineRepository medicineRepository;

	@Override
	public Medicine addMedicine(Medicine medicine) {
		return this.medicineRepository.save(medicine);
	}

	@Override
	public Medicine updateMedicine(Medicine medicine) {
		return this.medicineRepository.save(medicine);
	}

	@Override
	public Set<Medicine> getMedicines() {
		return new LinkedHashSet<Medicine>(this.medicineRepository.findAll());
	}

	@Override
	public Medicine getMedicine(Long medicineId) {
		return this.medicineRepository.findById(medicineId).get();
	}

	@Override
	public Medicine deleteMedicine(Long id) {
		Medicine medicine = this.medicineRepository.getOne(id); //only added line 1
		this.medicineRepository.deleteById(id);
		return medicine;
		
	}

	@Override
	public void deleteByName(String name) {
		this.medicineRepository.deleteByName(name);
		
	}

	@Override
	public List<Medicine> MedicinesOfCategory(Category category) {
		// TODO Auto-generated method stub
		return this.medicineRepository.findByCategory(category);
	}

	@Override
	public List<Medicine> getActiveMedicine() {
		return this.medicineRepository.findByActive(true);
	}

	@Override
	public List<Medicine> getActiveMedicinesOfCategory(Category category) {
		// TODO Auto-generated method stub
		return this.medicineRepository.findByCategoryAndActive(category, true);
	}
	
	@Override
    public List<Medicine> searchByName(String name) {
        // TODO Auto-generated method stub
        return this.medicineRepository.findByNameAndActive(name, true);
    }

}
