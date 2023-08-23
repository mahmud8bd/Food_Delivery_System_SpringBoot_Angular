package com.food.transections;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class TransectionController {
	
	
	@PostMapping(value="/savetransection")
	public void saveTansection(@RequestBody Transection tns) {
		TransectionDA tda = new TransectionDA();
		tda.saveTransection(tns);
	}
	
	
	
	List<Transection> listTransection = new ArrayList<>();
	
	@GetMapping(value="/tansections")
	public List<Transection> allTransection(){
		TransectionDA tda = new TransectionDA();
				listTransection = tda.allTansection();
		return listTransection;
	}
}
