package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.HashMap;

import com.food.db.MyConnection;

public class AdminDA {
	 Connection con;
	 PreparedStatement pst;
	 
	
	
	public void saveAdmin(Admin a) {
		String adminIdAuto = new AutoIdGenated().autoIdGenated("admin", "admin_id", "AD-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into admin (admin_id, user_name, email, password,"
					+ " phone, address) values(?,?,?,?,?,?)");
			pst.setString(1, adminIdAuto);
			pst.setString(2, a.getUsername());
			pst.setString(3, a.getEmail());
			pst.setString(4, a.getPassword());
			pst.setString(5, a.getPhone());
			pst.setString(6, a.getAddress());
			pst.executeUpdate();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	
	public HashMap<String, String> checkAdmin(Admin a1) {
		HashMap<String, String> adminPass = new HashMap<>();
		adminPass.put("status", "Fail");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from admin where  user_name=? and password=?");
			pst.setString(1, a1.getUsername());
			pst.setString(2, a1.getPassword());
			ResultSet set = pst.executeQuery();
			
			if(set.next()) {
				adminPass.put("status", "success");
			}
		} catch (Exception e) {
			System.out.println("Cann.t get info" + e);
		}
		return adminPass;
	}
	
	public Admin getAdminByUserName(String username) {
		Admin admin =null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from admin where user_name =?");
			pst.setString(1, username);
			ResultSet set = pst.executeQuery();
			while (set.next()) {
				admin = new Admin(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getString(5),set.getString(6));
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return admin;
	}
}
