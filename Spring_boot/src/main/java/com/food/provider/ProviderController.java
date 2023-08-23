package com.food.provider;

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
public class ProviderController {
	
	
	@PostMapping(value="/addshop")
	public void shopAdd(@RequestBody Provider sp) {
		ProviderDa pda = new ProviderDa();
		pda.addShop(sp);
	}
	
	@PostMapping(value="/shoplogin")
	public HashMap<String, String> checkProvider(@RequestBody Provider p){
		ProviderDa pda = new ProviderDa();
		return pda.checkProvider(p);
	}
	
	@GetMapping(value="/shops/{username}")
	public Provider getProviderByUserName(@PathVariable("username")String username) {
		Provider p;
		ProviderDa pda = new ProviderDa();
		p = pda.getProviderByUserName(username);
		return p;
	}
	
	List<Provider> allProvider = new ArrayList<>();
	
	@GetMapping(value ="/allproviders")
	public List<Provider> allProviders(){
		ProviderDa pda = new ProviderDa();
		allProvider = pda.allProvider();
		
		return allProvider;
	}
	
}
