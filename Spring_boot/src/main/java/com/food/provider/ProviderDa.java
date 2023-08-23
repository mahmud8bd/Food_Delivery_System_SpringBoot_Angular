package com.food.provider;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.food.AutoIdGenated;
import com.food.db.MyConnection;

public class ProviderDa {
	Connection con;
	PreparedStatement pst;
	
	public void addShop(Provider sp) {
		String shopIdAuto = new AutoIdGenated().autoIdGenated("providers", "shop_id", "SP-");
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("insert into providers (shop_id, shop_full_name, "
					+ "shop_user_name, shop_type, shop_email, shop_phone, "
					+ "shop_address, shop_password) values(?,?,?,?,?,?,?,?)");
			pst.setString(1, shopIdAuto);
			pst.setString(2, sp.getShopFullName());
			pst.setString(3, sp.getShopUserName());
			pst.setString(4, sp.getShopType());
			pst.setString(5, sp.getShopEmail());
			pst.setString(6, sp.getShopPhone());
			pst.setString(7, sp.getShopAddress());
			pst.setString(8, sp.getShopPassword());
			pst.executeUpdate();
			con.close();
			
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	public HashMap<String, String> checkProvider(Provider sp) {
		HashMap<String, String> proviserPass = new HashMap<>();
		proviserPass.put("status", "Fail");
		
		try {
			con=MyConnection.getConnection();
			pst=con.prepareStatement("select * from providers where shop_user_name=? and shop_password=?");
			pst.setString(1, sp.getShopUserName());
			pst.setString(2, sp.getShopPassword());
			ResultSet set=pst.executeQuery();
			
			if(set.next()) {
				proviserPass.put("status", "success");
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		
		return proviserPass;
	}
	
	
	public Provider getProviderByUserName(String username) {
		Provider sp =null;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from providers where shop_user_name =?");
			pst.setString(1, username);
			ResultSet set = pst.executeQuery();
			while (set.next()) {
				sp = new Provider(set.getString(1), set.getString(2), set.getString(3),
						set.getString(4),set.getString(5), set.getString(6), set.getString(7), set.getString(8));
			}
			con.close();
			
		} catch (Exception e) {
			System.out.println(e);
		}
		return sp;
	}
	
	
	public List<Provider> allProvider(){
		List<Provider> providerList = new ArrayList<>();
		
		Provider provider;
		try {
			con = MyConnection.getConnection();
			pst = con.prepareStatement("select * from providers");
			ResultSet set = pst.executeQuery();
			while(set.next()){
				provider = new Provider(set.getString(1), set.getString(2),
						set.getString(3), set.getString(4), set.getString(5),
						set.getString(6), set.getString(7), set.getString(8));
				providerList.add(provider);
			}
			con.close();
		} catch (Exception e) {
			// TODO: handle exception
		}
		return providerList;
		
	}
}
