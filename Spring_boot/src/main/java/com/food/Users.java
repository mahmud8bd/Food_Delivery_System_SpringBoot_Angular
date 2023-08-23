package com.food;

public class Users {
	private String userId;
	private String userFullName;
	private String username;
	private String userEmail;
	private String userPassword;
	private String userAddress;
	public Users() {
		super();
	}
	public Users(String userId, String userFullName, String username, String userEmail, String userPassword,
			String userAddress) {
		super();
		this.userId = userId;
		this.userFullName = userFullName;
		this.username = username;
		this.userEmail = userEmail;
		this.userPassword = userPassword;
		this.userAddress = userAddress;
	}
	public String getUserId() {
		return userId;
	}
	public String getUserFullName() {
		return userFullName;
	}
	public String getUsername() {
		return username;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	
}
	