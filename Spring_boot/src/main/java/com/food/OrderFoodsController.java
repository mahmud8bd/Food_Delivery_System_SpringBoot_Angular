package com.food;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderFoodsController {

	
	
	@PostMapping(value="/myorderfood")
	public void addOrder(@RequestBody OrderFoods of) {
		OrderFoodsDA ofd = new OrderFoodsDA();
		ofd.saveOrderFoods(of);
		
	}
	
	@PostMapping(value="/updatemyorderfood")
	public void UpdateOrderFood(@RequestBody OrderFoods of) {
		OrderFoodsDA ofd = new OrderFoodsDA();
		ofd.updateOrdeStep(of);
		
	}
	
	List<OrderFoods> myorderFoods = new ArrayList<>();
	
	@GetMapping("/orderfoods/{orderId}")
	public List<OrderFoods> getMyOrderFoodByUsername(@PathVariable("orderId")String orderId) {
		OrderFoodsDA ofd = new OrderFoodsDA();
		myorderFoods = ofd.getMyorderFoodByOrderId(orderId);
		return myorderFoods;
		
	}
	
	List<OrderFoods> myorderFoodsList = new ArrayList<>();
	
	@GetMapping("/getmyorderfoods/{shopId}")
	public List<OrderFoods> getMyOrderByShopId(@PathVariable("shopId")String shopId) {
		OrderFoodsDA ofd = new OrderFoodsDA();
		myorderFoodsList = ofd.getMyorderFoodByShopId(shopId);
		return myorderFoodsList;
		
	}
	List<OrderFoods> myList = new ArrayList<>();
	
	@GetMapping("/getallorfood")
	public List<OrderFoods> getAllFood() {
		OrderFoodsDA ofd = new OrderFoodsDA();
		myList = ofd.getAll();
		return myList;
		
	}
	
	@GetMapping("/ordersfoodbyid/{orderFoodId}")
	public OrderFoods getOrderFoodByOrderFoodId(@PathVariable("orderFoodId")String orderFoodId) {
		OrderFoods of;
		OrderFoodsDA ofd= new OrderFoodsDA();
		of = ofd.getOrderFoodByOrderFoodId(orderFoodId);
		return of;
		
	}
}
