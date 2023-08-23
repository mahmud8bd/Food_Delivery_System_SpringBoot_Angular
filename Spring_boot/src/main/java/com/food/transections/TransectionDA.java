package com.food.transections;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.food.AutoIdGenated;
import com.food.db.MyConnection;

public class TransectionDA {
	Connection con;
	PreparedStatement pst;
	
	public void saveTransection(Transection tns){
		String tnsIdAuto = new AutoIdGenated().autoIdGenated("transections", "transection_id", "TN-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into transections(transection_id, tns_date,"
					+ " order_id, user_id, user_name, user_full_name, pay_method,"
					+ " pay_number, tns_id, total_amount) values(?,?,?,?,?,?,?,?,?,?)");
			pst.setString(1, tnsIdAuto);
			pst.setString(2, tns.getTransectionDate());
			pst.setString(3, tns.getOrderId());
			pst.setString(4, tns.getUserId());
			pst.setString(5, tns.getUserName());
			pst.setString(6, tns.getUserFullName());
			pst.setString(7, tns.getPayMethod());
			pst.setString(8, tns.getPayNumber());
			pst.setString(9, tns.getTnsCode());
			pst.setDouble(10, tns.getSubtotal());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	
	public List<Transection> allTansection(){
		List<Transection> transectionList = new ArrayList<>();
		
		Transection transection;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from transections");
			ResultSet set = pst.executeQuery();
			while(set.next()){
				transection = new Transection(set.getString(1), set.getString(2),
						set.getString(3), set.getString(4), set.getString(5),
						set.getString(6), set.getString(7), set.getString(8),
						set.getString(9), set.getDouble(10), set.getDouble(10));
				transectionList.add(transection);
			}
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return transectionList;
		
	}
}
