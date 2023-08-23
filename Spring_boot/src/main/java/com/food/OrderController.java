package com.food;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OrderController {
	
	
	@PostMapping(value="/addorder")
	public void addOrder(@RequestBody Order or) {
		OrderDA od = new OrderDA();
		od.saveOrder(or);
	}
	
	List<Order> orderListFoods = new ArrayList<>();
	
	@GetMapping("/order/{username}")
	public List<Order> getOrderByUsername(@PathVariable("username")String username) {
		OrderDA od = new OrderDA();
		orderListFoods = od.getOrderByUserName(username);
		return orderListFoods;
		
	}
	

	@GetMapping("/orders/{orderId}")
	public Order getOrderByOrderId(@PathVariable("orderId")String orderId) {
		Order or;
		OrderDA od = new OrderDA();
		or = od.getOrderByOrderId(orderId);
		return or;
		
	}
	
	List<Order> allOrderList = new ArrayList<>();

	@GetMapping("/allorders")
	public List<Order> listAllOrders() {
		OrderDA oda = new OrderDA();
		allOrderList = oda.getOrderALL();
		return allOrderList;
	}
}
