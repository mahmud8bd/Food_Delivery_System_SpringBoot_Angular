package com.food;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.food.db.MyConnection;

public class AutoIdGenated {
	Connection con;
    PreparedStatement pst;

    public String autoIdGenated(String tableName,String IdName, String word) {
        try {
            con = MyConnection.getConnection();
            pst = con.prepareStatement("SELECT MAX(" + IdName + ") FROM " + tableName + " ");
            ResultSet set = pst.executeQuery();

            while (set.next()) {
                if (set.getString("MAX(" + IdName + ")") == null) {
                    return "" + word + "0000001";
                } else {
                    long id = Long.parseLong(set.getString("MAX(" + IdName + ")").substring(3, set.getString("MAX(" + IdName + ")").length()));
                    id++;
                    return "" + word + "" + String.format("%07d", id);
                }

            }

        } catch (NumberFormatException | SQLException ex) {
        }
        return "";
    }
}
