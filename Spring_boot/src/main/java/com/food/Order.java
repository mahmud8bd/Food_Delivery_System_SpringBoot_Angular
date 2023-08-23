package com.food;

public class Order {
	private String orderId;
	private String orderDate;
	private String orderStatus;
    private String userId;
    private String userName;
    private String userphone;
    private String userEmail;
    private String userAddress;
    private String shopId;
    private String shopName;
    private String shopAddress;
    private String paymentMethod;
    private String payNumber;
    private String transectionNumber;
    private double discount;
    private double totalPrice;
    
	public Order() {
		super();
	}

	public Order(String orderId, String orderDate, String orderStatus, String userId, String userName, String userphone,
			String userEmail, String userAddress, String shopId, String shopName, String shopAddress,
			String paymentMethod, String payNumber, String transectionNumber, double discount, double totalPrice) {
		super();
		this.orderId = orderId;
		this.orderDate = orderDate;
		this.orderStatus = orderStatus;
		this.userId = userId;
		this.userName = userName;
		this.userphone = userphone;
		this.userEmail = userEmail;
		this.userAddress = userAddress;
		this.shopId = shopId;
		this.shopName = shopName;
		this.shopAddress = shopAddress;
		this.paymentMethod = paymentMethod;
		this.payNumber = payNumber;
		this.transectionNumber = transectionNumber;
		this.discount = discount;
		this.totalPrice = totalPrice;
	}

	public String getOrderId() {
		return orderId;
	}

	public String getOrderDate() {
		return orderDate;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public String getUserId() {
		return userId;
	}

	public String getUserName() {
		return userName;
	}

	public String getUserphone() {
		return userphone;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public String getUserAddress() {
		return userAddress;
	}

	public String getShopId() {
		return shopId;
	}

	public String getShopName() {
		return shopName;
	}

	public String getShopAddress() {
		return shopAddress;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public String getPayNumber() {
		return payNumber;
	}

	public String getTransectionNumber() {
		return transectionNumber;
	}

	public double getDiscount() {
		return discount;
	}

	public double getTotalPrice() {
		return totalPrice;
	}

	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}

	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public void setUserphone(String userphone) {
		this.userphone = userphone;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public void setPayNumber(String payNumber) {
		this.payNumber = payNumber;
	}

	public void setTransectionNumber(String transectionNumber) {
		this.transectionNumber = transectionNumber;
	}

	public void setDiscount(double discount) {
		this.discount = discount;
	}

	public void setTotalPrice(double totalPrice) {
		this.totalPrice = totalPrice;
	}

	
}
