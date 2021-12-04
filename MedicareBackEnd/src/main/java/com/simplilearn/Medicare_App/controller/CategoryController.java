package com.simplilearn.Medicare_App.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simplilearn.Medicare_App.model.Category;
import com.simplilearn.Medicare_App.service.CategoryService;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping(path = "/category")
public class CategoryController {
	
	@Autowired
	private CategoryService categoryService;
	
	//add category
	@PostMapping("/add")
	public ResponseEntity<?> addCategory(@RequestBody Category category){		
		Category category1 = this.categoryService.addCategory(category);	
		return ResponseEntity.ok(category1);
	}
	
	//get category
	@GetMapping("/{categoryId}")
	public Category getCategory(@PathVariable("categoryId") Long categoryId){			
		return this.categoryService.getCategory(categoryId);		 
	}
	
	// get all categories
	
	@GetMapping("/")
	public ResponseEntity<?> getAllCatagories(){
		return ResponseEntity.ok(this.categoryService.getCategories());	
	}
	
	@PutMapping("/")
	public Category updateCategory(@RequestBody Category category) {
		return this.categoryService.updateCategory(category);
	}
	
	@DeleteMapping("/{categoryId}")
	public void deleteCategory(@PathVariable("categoryId") Long categoryId) {
		this.categoryService.deleteCategory(categoryId);
	}
	
	

}
