package com.food.balance;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.food.AutoIdGenated;
import com.food.db.MyConnection;

public class BalanceDA {
	Connection con;
	PreparedStatement pst;
	
	public void addBalance(Balance b) {
		String balanceAutoid = new AutoIdGenated().autoIdGenated("balance", "balance_id", "BA-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into balance"
					+ "(balance_id, user_id, user_name, amount, "
					+ "status) values(?,?,?,?,?)");
			pst.setString(1, balanceAutoid);
			pst.setString(2, b.getUserId());
			pst.setString(3, b.getUserName());
			pst.setDouble(4, b.getAmount());
			pst.setString(5, null);
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	
	public void updateBalance(Balance b) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update balance set amount = amount+? where user_id =?");
			pst.setString(2, b.getUserId());
			pst.setDouble(1, b.getAmount());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public void updateBalanceForWithdraw(Balance b) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update balance set amount = amount-? where user_id =?");
			pst.setString(2, b.getUserId());
			pst.setDouble(1, b.getAmount());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public Balance getBalanceByUserID(String userId) {
		Balance ba = null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("SELECT * FROM balance WHERE user_id = ?");
			pst.setString(1, userId);
			ResultSet set = pst.executeQuery();
			while(set.next()) {
				ba = new Balance(set.getString(1), set.getString(2), set.getString(3),
						set.getDouble(4), set.getString(5), set.getString(6), set.getString(7));
			}
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		return ba;
	}
	
	
	
}
