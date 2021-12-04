package com.simplilearn.Medicare_App;


import java.util.HashSet;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.simplilearn.Medicare_App.exceptions.UserFoundException;
import com.simplilearn.Medicare_App.model.Role;
import com.simplilearn.Medicare_App.model.User;
import com.simplilearn.Medicare_App.model.UserRole;
import com.simplilearn.Medicare_App.service.UserService;

@SpringBootApplication
public class MedicareAppApplication implements CommandLineRunner{

	@Autowired
	private UserService userService;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(MedicareAppApplication.class, args);

		//Selenium testing

//		System.setProperty("webdriver.chrome.driver", "C:\\Software\\Selenium\\geckodriver\\chromedriver.exe");
//
//		WebDriver driver = new ChromeDriver();
//
//		String baseUrl = "http://localhost:4200/";
//		String expectedTitle="MedicareFrontend";
//		String actualTitle="";
//		String tagName="";
//
//		driver.get(baseUrl);
//		actualTitle = driver.getTitle();
//
//		//1. Testing Project Title
//
//		if (actualTitle.contentEquals(expectedTitle)) {
//			System.out.println("test passed!!");
//		}else 
//			System.out.println("test failed :(");
//
//
//		//2. Testing navbar locator
//
//		tagName = driver.findElement(By.id("navbar")).getTagName();
//		System.out.println("2."+driver.findElement(By.id("navbar")).getTagName());
//
//		//3. testing login page
		
//		System.out.println("3."+driver.findElement(By.("a")).getTagName());

	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("code started");

		//		try {
		//		User user = new User( "Darakhshan", this.bCryptPasswordEncoder.encode("Darakhshan18"), "Darakhshan", "Naiyer", "Naiyer@gmail.com", "46967838", "default.png");

		//			User user = new User( "Layba", this.bCryptPasswordEncoder.encode("Layba01"), "Layba", "Ansari", "Layba@gmail.com", "46967838", "default.png");

		//		Role role1 = new Role(24L, "ADMIN");
		//			Role role1 = new Role(25L, "NORMAL");

		//			UserRole userRole = new UserRole();	
		//			userRole.setRole(role1);
		//			userRole.setUser(user);
		//
		//			Set<UserRole> userRoleSet = new HashSet<UserRole>();
		//
		//			userRoleSet.add(userRole);
		//
		//			User user1 = this.userService.createUser(user, userRoleSet);
		//
		//			System.out.println(user1.getUsername());
		//
		//		}catch(UserFoundException e) {
		//			e.printStackTrace();
		//		}




	}

}
