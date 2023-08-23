package com.food;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UsersController {
	
	@PostMapping(value="/addnewusers")
	public void addUsers(@RequestBody Users u) {
		UsersDA uda = new UsersDA();
		uda.addUsers(u);
	}
	
	@PostMapping(value="/userlogin")
	 public HashMap<String, String> checkUser(@RequestBody Users u) {
		 UsersDA d = new UsersDA();
		 return d.check(u);
	 }
	
	
	@GetMapping(value="/users/{username}")
	public Users getUsersByUsername(@PathVariable("username")String username) {
		Users u;
		UsersDA fd = new UsersDA();
		u= fd.getUserByName(username);
		return u;
	}
	
	@GetMapping(value="/usersdata/{id}")
	public Users getUsersByUserId(@PathVariable("id")String id) {
		Users u;
		UsersDA fd = new UsersDA();
		u= fd.getUserById(id);
		return u;
	}
	
	List<Users> listUsers = new ArrayList<>();
	
	@GetMapping(value="/allusers")
	public List<Users> allUsers(){
		UsersDA uda = new UsersDA();
		listUsers = uda.allUsers();
		
		return listUsers;
	}
}
