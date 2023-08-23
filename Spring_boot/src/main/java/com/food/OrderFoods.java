package com.food;

public class OrderFoods {
	 	private String orderId;
	 	private String userId;
	 	private String shopId;
	 	private String foodId;
	 	private String foodName;
	 	private int foodQuantity;
	    private double foodPrice;
	    private String shopName;
	    private String foodDescription;
	    private String orderSataus;
	    private int orderDiscount;
	    private double deliveryCharge;
	    private double totalPrice;
	    private String orderFoodId;
	    private String orderStep;
	    
		public OrderFoods() {
			super();
		}

		public OrderFoods(String orderId, String userId, String shopId, String foodId, String foodName,
				int foodQuantity, double foodPrice, String shopName, String foodDescription, String orderSataus,
				int orderDiscount, double deliveryCharge, double totalPrice, String orderFoodId, String orderStep) {
			super();
			this.orderId = orderId;
			this.userId = userId;
			this.shopId = shopId;
			this.foodId = foodId;
			this.foodName = foodName;
			this.foodQuantity = foodQuantity;
			this.foodPrice = foodPrice;
			this.shopName = shopName;
			this.foodDescription = foodDescription;
			this.orderSataus = orderSataus;
			this.orderDiscount = orderDiscount;
			this.deliveryCharge = deliveryCharge;
			this.totalPrice = totalPrice;
			this.orderFoodId = orderFoodId;
			this.orderStep = orderStep;
		}

		public String getOrderId() {
			return orderId;
		}

		public String getUserId() {
			return userId;
		}

		public String getShopId() {
			return shopId;
		}

		public String getFoodId() {
			return foodId;
		}

		public String getFoodName() {
			return foodName;
		}

		public int getFoodQuantity() {
			return foodQuantity;
		}

		public double getFoodPrice() {
			return foodPrice;
		}

		public String getShopName() {
			return shopName;
		}

		public String getFoodDescription() {
			return foodDescription;
		}

		public String getOrderSataus() {
			return orderSataus;
		}

		public int getOrderDiscount() {
			return orderDiscount;
		}

		public double getDeliveryCharge() {
			return deliveryCharge;
		}

		public double getTotalPrice() {
			return totalPrice;
		}

		public String getOrderFoodId() {
			return orderFoodId;
		}

		public String getOrderStep() {
			return orderStep;
		}

		public void setOrderId(String orderId) {
			this.orderId = orderId;
		}

		public void setUserId(String userId) {
			this.userId = userId;
		}

		public void setShopId(String shopId) {
			this.shopId = shopId;
		}

		public void setFoodId(String foodId) {
			this.foodId = foodId;
		}

		public void setFoodName(String foodName) {
			this.foodName = foodName;
		}

		public void setFoodQuantity(int foodQuantity) {
			this.foodQuantity = foodQuantity;
		}

		public void setFoodPrice(double foodPrice) {
			this.foodPrice = foodPrice;
		}

		public void setShopName(String shopName) {
			this.shopName = shopName;
		}

		public void setFoodDescription(String foodDescription) {
			this.foodDescription = foodDescription;
		}

		public void setOrderSataus(String orderSataus) {
			this.orderSataus = orderSataus;
		}

		public void setOrderDiscount(int orderDiscount) {
			this.orderDiscount = orderDiscount;
		}

		public void setDeliveryCharge(double deliveryCharge) {
			this.deliveryCharge = deliveryCharge;
		}

		public void setTotalPrice(double totalPrice) {
			this.totalPrice = totalPrice;
		}

		public void setOrderFoodId(String orderFoodId) {
			this.orderFoodId = orderFoodId;
		}

		public void setOrderStep(String orderStep) {
			this.orderStep = orderStep;
		}

		
}
