package com.food;

public class Admin {
  private String adminId;
  private String username;
  private String email;
  private String password;
  private String phone;
  private String address;
public Admin() {
	super();
}
public Admin(String adminId, String username, String email, String password, String phone, String address) {
	super();
	this.adminId = adminId;
	this.username = username;
	this.email = email;
	this.password = password;
	this.phone = phone;
	this.address = address;
}
public String getAdminId() {
	return adminId;
}
public String getUsername() {
	return username;
}
public String getEmail() {
	return email;
}
public String getPassword() {
	return password;
}
public String getPhone() {
	return phone;
}
public String getAddress() {
	return address;
}
public void setAdminId(String adminId) {
	this.adminId = adminId;
}
public void setUsername(String username) {
	this.username = username;
}
public void setEmail(String email) {
	this.email = email;
}
public void setPassword(String password) {
	this.password = password;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public void setAddress(String address) {
	this.address = address;
}

  
}
