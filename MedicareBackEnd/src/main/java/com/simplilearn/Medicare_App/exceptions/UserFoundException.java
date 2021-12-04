package com.simplilearn.Medicare_App.exceptions;

public class UserFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UserFoundException() {
		super("User with this username is already there in database!! Try with another username");
	}

	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public UserFoundException(String message, Throwable cause) {
		super(message, cause);
		// TODO Auto-generated constructor stub
	}

	public UserFoundException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

	public UserFoundException(Throwable cause) {
		super(cause);
		// TODO Auto-generated constructor stub
	}
	
	

}
