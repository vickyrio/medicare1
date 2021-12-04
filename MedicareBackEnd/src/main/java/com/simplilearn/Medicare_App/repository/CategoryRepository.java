package com.simplilearn.Medicare_App.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.simplilearn.Medicare_App.model.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long>{

}
