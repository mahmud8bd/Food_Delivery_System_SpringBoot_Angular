package com.food.balance;

public class Balance {
	private String balanceId; 
	private String userId;
	private String userName; 
	private double amount;
    private String createDate; 
    private String updateDate;
    private String status;
	public Balance() {
		super();
	}
	public Balance(String balanceId, String userId, String userName, double amount, String createDate,
			String updateDate, String status) {
		super();
		this.balanceId = balanceId;
		this.userId = userId;
		this.userName = userName;
		this.amount = amount;
		this.createDate = createDate;
		this.updateDate = updateDate;
		this.status = status;
	}
	public String getBalanceId() {
		return balanceId;
	}
	public void setBalanceId(String balanceId) {
		this.balanceId = balanceId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getUpdateDate() {
		return updateDate;
	}
	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
    
}
