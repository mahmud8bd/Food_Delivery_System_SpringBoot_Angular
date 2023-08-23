package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.food.db.MyConnection;

public class UsersDA {
	Connection con;
	PreparedStatement pst;
	
	
	public void addUsers(Users u) {
		String userIdAuto = new AutoIdGenated().autoIdGenated("users", "user_id", "UR-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into users(user_id, full_name, "
					+ "user_name, email, password, address) values(?,?,?,?,?,?)");
			pst.setString(1, userIdAuto);
			pst.setString(2, u.getUserFullName());
			pst.setString(3, u.getUsername());
			pst.setString(4, u.getUserEmail());
			pst.setString(5, u.getUserPassword());
			pst.setString(6, u.getUserAddress());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	
	
	
	public HashMap<String, String> check(Users u1) {
		HashMap<String, String> userPass = new HashMap<>();
		userPass.put("status", "Fail");
		
		try {
			con=MyConnection.getConnection();
			pst=con.prepareStatement("select * from users where user_name=? and password=?");
			pst.setString(1, u1.getUsername());
			pst.setString(2, u1.getUserPassword());
			ResultSet set=pst.executeQuery();
			if(set.next()) {
				userPass.put("status", "success");
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return userPass;
	}
	
	
	public Users getUserByName(String username) {
		Users u =null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from users where user_name =?");
			pst.setString(1, username);
			ResultSet set = pst.executeQuery();
			while (set.next()) {
				u = new Users(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getString(5), set.getString(6));
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return u;
	}
	
	public Users getUserById(String id) {
		Users u =null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from users where user_id=?");
			pst.setString(1, id);
			ResultSet set = pst.executeQuery();
			while (set.next()) {
				u = new Users(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getString(5), set.getString(6));
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return u;
	}
	
	public List<Users> allUsers(){
		List<Users>  listUsers = new ArrayList<>();
		Users user;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from users");
			ResultSet set = pst.executeQuery();
			
			while(set.next()){
				user = new Users(set.getString(1), set.getString(2),
						set.getString(3), set.getString(4), set.getString(5),
						set.getString(6));
				listUsers.add(user);
			}
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return listUsers;
		
	}
}
