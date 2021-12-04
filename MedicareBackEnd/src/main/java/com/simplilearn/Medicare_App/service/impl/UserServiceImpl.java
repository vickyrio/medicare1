package com.simplilearn.Medicare_App.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.simplilearn.Medicare_App.exceptions.UserFoundException;
import com.simplilearn.Medicare_App.model.User;
import com.simplilearn.Medicare_App.model.UserRole;
import com.simplilearn.Medicare_App.repository.RoleRepository;
import com.simplilearn.Medicare_App.repository.UserRepository;
import com.simplilearn.Medicare_App.service.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private RoleRepository roleRepository;
	
	//creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {
		
		User local = this.userRepository.findByUsername(user.getUsername());
		
		if(local != null) {
			System.out.println("User is already present!!");
			throw new UserFoundException();
		}else {
			for(UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
			
		}
		return local;
	}

	//To get user by username
	@Override
	public User getUser(String username) {
		// TODO Auto- method stub
		return this.userRepository.findByUsername(username);
	}

	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);	
	}
	
	
	
	
 

}
