package com.food.provider;

public class Provider {
	private String shopId;
	private String shopFullName;
	private String shopUserName;
	private String shopType;
	private String shopEmail;
	private String shopPhone;
	private String shopAddress;
	private String shopPassword;
	public Provider() {
		super();
	}
	public Provider(String shopId, String shopFullName, String shopUserName, String shopType, String shopEmail,
			String shopPhone, String shopAddress, String shopPassword) {
		super();
		this.shopId = shopId;
		this.shopFullName = shopFullName;
		this.shopUserName = shopUserName;
		this.shopType = shopType;
		this.shopEmail = shopEmail;
		this.shopPhone = shopPhone;
		this.shopAddress = shopAddress;
		this.shopPassword = shopPassword;
	}
	public String getShopId() {
		return shopId;
	}
	public String getShopFullName() {
		return shopFullName;
	}
	public String getShopUserName() {
		return shopUserName;
	}
	public String getShopType() {
		return shopType;
	}
	public String getShopEmail() {
		return shopEmail;
	}
	public String getShopPhone() {
		return shopPhone;
	}
	public String getShopAddress() {
		return shopAddress;
	}
	public void setShopId(String shopId) {
		this.shopId = shopId;
	}
	public void setShopFullName(String shopFullName) {
		this.shopFullName = shopFullName;
	}
	public void setShopUserName(String shopUserName) {
		this.shopUserName = shopUserName;
	}
	public void setShopType(String shopType) {
		this.shopType = shopType;
	}
	public void setShopEmail(String shopEmail) {
		this.shopEmail = shopEmail;
	}
	public void setShopPhone(String shopPhone) {
		this.shopPhone = shopPhone;
	}
	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}
	public String getShopPassword() {
		return shopPassword;
	}
	public void setShopPassword(String shopPassword) {
		this.shopPassword = shopPassword;
	}
	
	
}
