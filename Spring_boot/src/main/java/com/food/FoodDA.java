package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.food.db.MyConnection;

public class FoodDA {
 Connection con;
 PreparedStatement pst;
  
	public void saveFood(Foods f) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into foods (food_id, food_name, food_type, "
					+ "food_description, food_price, food_discount, food_discount_price, "
					+ "shop_id, shop_name, shop_address, action) values(?,?,?,?,?,?,?,?,?,?,?)");
			pst.setString(1, f.getFoodId());
			pst.setString(2, f.getFoodName());
			pst.setString(3, f.getFoodType());
			pst.setString(4, f.getFoodDescription());
			pst.setDouble(5, f.getFoodPrice());
			pst.setInt(6, f.getFoodDiscount());
			pst.setDouble(7, (f.getFoodPrice() - (f.getFoodPrice() * f.getFoodDiscount() /100)));
			pst.setString(8, f.getShopId());
			pst.setString(9, f.getShopName());
			pst.setString(10, f.getShopAddress());
			pst.setBoolean(11, false);
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public List<Foods> allFoods() {
		List<Foods> fList = new ArrayList<>();
		Foods food;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("SELECT * FROM foods ORDER BY food_id DESC;");
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				food = new Foods(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getDouble(5), set.getInt(6),
						set.getDouble(7),set.getString(8),set.getString(9),set.getString(10),
						set.getBoolean(11));
				fList.add(food);
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return fList;
	}
	
	public Foods getfoodById(String foodId) {
		Foods food =null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from foods where food_id =?");
			pst.setString(1, foodId);
			ResultSet set = pst.executeQuery();
			
			while (set.next()) {
				food = new Foods(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getDouble(5), set.getInt(6),
						set.getDouble(7),set.getString(8),set.getString(9),set.getString(10),
						set.getBoolean(11));
			}
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}
		return food;
	}
	
	public void deleteFood(Foods f) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("delete from foods where food_id=?");
			pst.setString(1, f.getFoodId());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	

	
	public void updateFood(Foods f) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update foods set food_name=?, food_type=?, "
					+ "food_description=?, food_price=?, food_discount=?, food_discount_price=?,"
					+ " shop_id=?, shop_name=?, shop_address=?, action=? where food_id=?");
			pst.setString(11, f.getFoodId());
			pst.setString(1, f.getFoodName());
			pst.setString(2, f.getFoodType());
			pst.setString(3, f.getFoodDescription());
			pst.setDouble(4, f.getFoodPrice());
			pst.setInt(5, f.getFoodDiscount());
			pst.setDouble(6, f.getFoodDiscountPrice());
			pst.setString(7, f.getShopId());
			pst.setString(8, f.getShopName());
			pst.setString(9, f.getShopAddress());
			pst.setBoolean(10, f.isAction());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	
	public void confirmFood(Foods f) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update foods set action=? where food_id=?");
			pst.setString(2, f.getFoodId());
			pst.setBoolean(1, f.isAction());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
	}
}
