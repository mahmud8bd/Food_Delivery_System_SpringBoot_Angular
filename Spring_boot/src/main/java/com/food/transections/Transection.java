package com.food.transections;

public class Transection {
	private String transectionId;
	private String transectionDate;
	private String orderId;
	private String userId;
	private String userName;
	private String userFullName;
	private String payMethod;
	private String payNumber;
	private String tnsCode;
	private double total;
	private double subtotal;
	public Transection() {
		super();
	}
	public Transection(String transectionId, String transectionDate, String orderId, String userId, String userName,
			String userFullName, String payMethod, String payNumber, String tnsCode, double total, double subtotal) {
		super();
		this.transectionId = transectionId;
		this.transectionDate = transectionDate;
		this.orderId = orderId;
		this.userId = userId;
		this.userName = userName;
		this.userFullName = userFullName;
		this.payMethod = payMethod;
		this.payNumber = payNumber;
		this.tnsCode = tnsCode;
		this.total = total;
		this.subtotal = subtotal;
	}
	public String getTransectionId() {
		return transectionId;
	}
	public String getTransectionDate() {
		return transectionDate;
	}
	public String getOrderId() {
		return orderId;
	}
	public String getUserId() {
		return userId;
	}
	public String getUserName() {
		return userName;
	}
	public String getUserFullName() {
		return userFullName;
	}
	public String getPayMethod() {
		return payMethod;
	}
	public String getPayNumber() {
		return payNumber;
	}
	public String getTnsCode() {
		return tnsCode;
	}
	public double getTotal() {
		return total;
	}
	public double getSubtotal() {
		return subtotal;
	}
	public void setTransectionId(String transectionId) {
		this.transectionId = transectionId;
	}
	public void setTransectionDate(String transectionDate) {
		this.transectionDate = transectionDate;
	}
	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setUserFullName(String userFullName) {
		this.userFullName = userFullName;
	}
	public void setPayMethod(String payMethod) {
		this.payMethod = payMethod;
	}
	public void setPayNumber(String payNumber) {
		this.payNumber = payNumber;
	}
	public void setTnsCode(String tnsCode) {
		this.tnsCode = tnsCode;
	}
	public void setTotal(double total) {
		this.total = total;
	}
	public void setSubtotal(double subtotal) {
		this.subtotal = subtotal;
	}
	
	
}
