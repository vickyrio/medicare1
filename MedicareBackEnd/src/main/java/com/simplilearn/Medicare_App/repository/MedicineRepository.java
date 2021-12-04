package com.simplilearn.Medicare_App.repository;

import org.springframework.stereotype.Repository;

import com.simplilearn.Medicare_App.model.Category;
import com.simplilearn.Medicare_App.model.Medicine;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface MedicineRepository extends JpaRepository<Medicine,Long>{
	
	public void deleteByName(String name);
	
	public List<Medicine> findByCategory(Category category);
	
	public List<Medicine> findByActive(Boolean b);
	public List<Medicine> findByCategoryAndActive(Category category, Boolean b);
 
	public List<Medicine> findByNameAndActive(String name, Boolean b);

}
