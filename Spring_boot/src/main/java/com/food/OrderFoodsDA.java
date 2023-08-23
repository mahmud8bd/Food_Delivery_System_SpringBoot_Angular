package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.food.db.MyConnection;

public class OrderFoodsDA {
	Connection con;
	PreparedStatement pst;

	public void saveOrderFoods(OrderFoods of) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into order_foods values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)");

			pst.setString(1, of.getOrderId());
			pst.setString(2, of.getUserId());
			pst.setString(3, of.getShopId());
			pst.setString(4, of.getFoodId());
			pst.setString(5, of.getFoodName());
			pst.setInt(6, of.getFoodQuantity());
			pst.setDouble(7, of.getFoodPrice());
			pst.setString(8, of.getShopName());
			pst.setString(9, of.getFoodDescription());
			pst.setString(10, of.getOrderSataus());
			pst.setInt(11, of.getOrderDiscount());
			pst.setDouble(12, of.getDeliveryCharge());
			pst.setDouble(13, of.getTotalPrice());
			pst.setString(14, of.getOrderFoodId());
			pst.setString(15, of.getOrderStep());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {

		}
	}
	
	public void updateOrdeStep(OrderFoods of) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update order_foods set order_step=? where order_food_id=?");

			pst.setString(2, of.getOrderFoodId());
			pst.setString(1, of.getOrderStep());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {

		}
	}
	

	public List<OrderFoods> getMyorderFoodByOrderId(String orderId) {
		List<OrderFoods> myorderFoodList = new ArrayList<>();
		OrderFoods myof = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from order_foods where order_id=?");
			pst.setString(1, orderId);
			ResultSet set = pst.executeQuery();

			while (set.next()) {
				myof = new OrderFoods(set.getString(1), set.getString(2), set.getString(3), set.getString(4),
						set.getString(5), set.getInt(6), set.getDouble(7), set.getString(8), set.getString(9), 
						set.getString(10), set.getInt(11), set.getDouble(12), set.getDouble(13),
						set.getString(14), set.getString(15));
				myorderFoodList.add(myof);
			}
			con.close();

		} catch (Exception e) {

		}
		return myorderFoodList;
	}
	
	public List<OrderFoods> getMyorderFoodByShopId(String shopId) {
		List<OrderFoods> myorderFoodAllList = new ArrayList<>();
		OrderFoods myof;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from order_foods where shop_id=?");
			pst.setString(1, shopId);
			ResultSet set = pst.executeQuery();

			while (set.next()) {
				myof = new OrderFoods(set.getString(1), set.getString(2), set.getString(3), set.getString(4),
						set.getString(5), set.getInt(6), set.getDouble(7), set.getString(8), set.getString(9),
						set.getString(10), set.getInt(11), set.getDouble(12), set.getDouble(13),
						set.getString(14), set.getString(15));
				myorderFoodAllList.add(myof);
			}
			con.close();

		} catch (Exception e) {

		}
		return myorderFoodAllList;
	}
	
	
	public List<OrderFoods> getAll() {
		List<OrderFoods> myAllList = new ArrayList<>();
		OrderFoods myof;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from order_foods");
			ResultSet set = pst.executeQuery();

			while (set.next()) {
				myof = new OrderFoods(set.getString(1), set.getString(2), set.getString(3), set.getString(4),
						set.getString(5), set.getInt(6), set.getDouble(7), set.getString(8), set.getString(9),
						set.getString(10), set.getInt(11), set.getDouble(12), set.getDouble(13),
						set.getString(14), set.getString(15));
				myAllList.add(myof);
			}
			con.close();

		} catch (Exception e) {

		}
		return myAllList;
	}
	
	
	public OrderFoods getOrderFoodByOrderFoodId(String orderFoodId){
		OrderFoods orderFood = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from order_foods where order_food_id=?");
			pst.setString(1, orderFoodId);
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				orderFood = new OrderFoods(set.getString(1), set.getString(2), set.getString(3), set.getString(4),
						set.getString(5), set.getInt(6), set.getDouble(7), set.getString(8), set.getString(9),
						set.getString(10), set.getInt(11), set.getDouble(12), set.getDouble(13),
						set.getString(14), set.getString(15));
			}
			con.close();
		} catch (Exception e) {
			
		}
		return orderFood;
	}
}
