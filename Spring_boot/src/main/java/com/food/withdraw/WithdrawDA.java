package com.food.withdraw;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.food.AutoIdGenated;
import com.food.db.MyConnection;

public class WithdrawDA {
	Connection con;
	PreparedStatement pst;
	
	public void addWithdraw(Withdraw w) {
		String withdrawAutoid = new AutoIdGenated().autoIdGenated("withdraw", "withdrow_id", "WD-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into withdraw (withdrow_id, user_id, "
					+ "user_name, amount, status) values(?,?,?,?,?)");
			pst.setString(1, withdrawAutoid);
			pst.setString(2, w.getUserId());
			pst.setString(3, w.getUserName());
			pst.setDouble(4, w.getAmount());
			pst.setString(5, "panding");
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public void updateWithdrawById(Withdraw w) {
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("update withdraw set status=? where withdrow_id=?");
			pst.setString(2, w.getWithdrawId());
			pst.setString(1, w.getStatus());
			pst.executeUpdate();
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public List<Withdraw> allWithdraw(){
		List<Withdraw> allList = new ArrayList<>();
		Withdraw w;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from withdraw order by withdrow_id desc");
			ResultSet set = pst.executeQuery();
			while(set.next()) {
				w = new Withdraw(set.getString(1), set.getString(2), set.getString(3),
						set.getDouble(4), set.getString(5), set.getString(6), set.getString(7));
				allList.add(w);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		return allList;
	}
}
