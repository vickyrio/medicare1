package com.simplilearn.Medicare_App.service;

import java.util.Set;


import com.simplilearn.Medicare_App.model.User;
import com.simplilearn.Medicare_App.model.UserRole;


public interface UserService {
	
	public User createUser(User user, Set<UserRole> userRole) throws Exception;
	
	public User getUser(String username);
	
	public void deleteUser(Long userId);

}
