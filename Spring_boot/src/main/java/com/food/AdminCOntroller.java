package com.food;

import java.util.HashMap;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AdminCOntroller {
	
	 @PostMapping(value="/addadmin")
	 public void saveAdmin(@RequestBody Admin a) {
		 AdminDA ad = new AdminDA();
		 ad.saveAdmin(a);
	 }
	 
	 @PostMapping(value="/adminlogin")
	 public HashMap<String, String> checkAdmin(@RequestBody Admin a) {
		 AdminDA d = new AdminDA();
		 return d.checkAdmin(a);
	 }
	 
	 @GetMapping(value="/admin/{username}")
	 public Admin getAdminByUserName(@PathVariable("username")String username) {
		 Admin admin;
		 AdminDA ada = new AdminDA();
		 admin = ada.getAdminByUserName(username);
		 return admin;
	 }
	 
}
