package com.food;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class FoodController {
   
	
	@PostMapping(value="/addfood")
	public void saveFoods(@RequestBody Foods f) {
		FoodDA fd = new FoodDA();
		fd.saveFood(f);
	}
	
	
	List<Foods> fList = new ArrayList<>();

	@GetMapping("/food")
	public List<Foods> allfoods() {
		FoodDA fd = new FoodDA();
		fList = fd.allFoods();
		return fList;
	}
	
	@PostMapping(value="/deletefood")
	public void deleteFoods(@RequestBody Foods f) {
		FoodDA fd = new FoodDA();
		fd.deleteFood(f);
	}
	
	@PostMapping(value="/updatefood")
	public void updateFoods(@RequestBody Foods f) {
		FoodDA fd = new FoodDA();
		fd.updateFood(f);
	}
	
	@PostMapping(value="/confirmfood")
	public void confirmFoods(@RequestBody Foods f) {
		FoodDA fd = new FoodDA();
		fd.confirmFood(f);
	}
	
	@GetMapping(value="/foods/{foodId}")
	public Foods getFoodById(@PathVariable("foodId")String foodId) {
		Foods f;
		FoodDA fd = new FoodDA();
		f= fd.getfoodById(foodId);
		return f;
		
	}
}
