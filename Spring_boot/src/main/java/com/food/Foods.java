package com.food;

public class Foods {
	private String foodId;
	private String foodName;
	private String foodType;
	private String foodDescription;
	private double foodPrice;
	private int foodDiscount;
	private double foodDiscountPrice;
	private String shopId;
	private String shopName;
	private String shopAddress;
	private boolean action;

	public Foods() {
		super();
	}

	public Foods(String foodId, String foodName, String foodType, String foodDescription, double foodPrice,
			int foodDiscount, double foodDiscountPrice, String shopId, String shopName, String shopAddress,
			boolean action) {
		super();
		this.foodId = foodId;
		this.foodName = foodName;
		this.foodType = foodType;
		this.foodDescription = foodDescription;
		this.foodPrice = foodPrice;
		this.foodDiscount = foodDiscount;
		this.foodDiscountPrice = foodDiscountPrice;
		this.shopId = shopId;
		this.shopName = shopName;
		this.shopAddress = shopAddress;
		this.action = action;
	}

	public String getFoodId() {
		return foodId;
	}

	public void setFoodId(String foodId) {
		this.foodId = foodId;
	}

	public String getFoodName() {
		return foodName;
	}

	public void setFoodName(String foodName) {
		this.foodName = foodName;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}

	public String getFoodDescription() {
		return foodDescription;
	}

	public void setFoodDescription(String foodDescription) {
		this.foodDescription = foodDescription;
	}

	public double getFoodPrice() {
		return foodPrice;
	}

	public void setFoodPrice(double foodPrice) {
		this.foodPrice = foodPrice;
	}

	

	public int getFoodDiscount() {
		return foodDiscount;
	}

	public void setFoodDiscount(int foodDiscount) {
		this.foodDiscount = foodDiscount;
	}

	public double getFoodDiscountPrice() {
		return foodDiscountPrice;
	}

	public void setFoodDiscountPrice(double foodDiscountPrice) {
		this.foodDiscountPrice = foodDiscountPrice;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getShopAddress() {
		return shopAddress;
	}

	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}

	public boolean isAction() {
		return action;
	}

	public void setAction(boolean action) {
		this.action = action;
	}

	

	
	
}
