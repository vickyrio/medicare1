package com.simplilearn.Medicare_App.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.simplilearn.Medicare_App.model.User;


public interface UserRepository extends JpaRepository<User, Long>{
	
	public User findByUsername(String username);

}
