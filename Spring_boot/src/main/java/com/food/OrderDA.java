package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.food.db.MyConnection;

public class OrderDA {
	Connection con;
	PreparedStatement pst;
	
	
	public void saveOrder(Order or) {
		//String orderIdAuto = new AutoIdGenated().autoIdGenated("orders", "order_id", "OR-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into orders(order_id, order_date, order_status, "
					+ "user_id, user_name, user_phone, user_email, user_address, shop_id, "
					+ "shop_name, shop_address, pay_method, pay_number, transection_number, "
					+ "discount, total_price) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");
			pst.setString(1, or.getOrderId());
			pst.setString(2, or.getOrderDate());
			pst.setString(3, or.getOrderStatus());
			pst.setString(4, or.getUserId());
			pst.setString(5, or.getUserName());
			pst.setString(6, or.getUserphone());
			pst.setString(7, or.getUserEmail());
			pst.setString(8, or.getUserAddress());
			pst.setString(9, or.getShopId());
			pst.setString(10, or.getShopName());
			pst.setString(11, or.getShopAddress());
			pst.setString(12, or.getPaymentMethod());
			pst.setString(13, or.getPayNumber());
			pst.setString(14, or.getTransectionNumber());
			pst.setDouble(15, or.getDiscount());
			pst.setDouble(16, or.getTotalPrice());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	
	public List<Order> getOrderByUserName(String userName){
		List<Order> orderFood = new ArrayList<>();
		Order order = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from orders where user_name=?");
			pst.setString(1, userName);
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				order = new Order(set.getString(1), set.getString(2),set.getString(3),
						set.getString(4), set.getString(5),set.getString(6),set.getString(7),
						set.getString(8),set.getString(9),set.getString(10), set.getString(11),
						set.getString(12), set.getString(13), set.getString(14), set.getDouble(15),
						set.getDouble(16));
				orderFood.add(order);
			}
			con.close();
		} catch (Exception e) {
			
		}
		return orderFood;
	}
	
	
	public Order getOrderByOrderId(String orderId){
		Order order = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from orders where order_id=?");
			pst.setString(1, orderId);
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				order = new Order(set.getString(1), set.getString(2),set.getString(3),
						set.getString(4), set.getString(5),set.getString(6),set.getString(7),
						set.getString(8),set.getString(9),set.getString(10), set.getString(11),
						set.getString(12), set.getString(13), set.getString(14), set.getDouble(15),
						set.getDouble(16));
			}
			con.close();
		} catch (Exception e) {
			
		}
		return order;
	}
	
	public List<Order> getOrderALL(){
		List<Order> allOrderFood = new ArrayList<>();
		Order order = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from orders");
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				order = new Order(set.getString(1), set.getString(2),set.getString(3),
						set.getString(4), set.getString(5),set.getString(6),set.getString(7),
						set.getString(8),set.getString(9),set.getString(10), set.getString(11),
						set.getString(12), set.getString(13), set.getString(14), set.getDouble(15),
						set.getDouble(16));
				allOrderFood.add(order);
			}
			con.close();
		} catch (Exception e) {
			
		}
		return allOrderFood;
	}
}
