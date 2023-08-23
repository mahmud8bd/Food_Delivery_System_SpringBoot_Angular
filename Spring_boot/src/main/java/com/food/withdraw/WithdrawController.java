package com.food.withdraw;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class WithdrawController {
	
	@PostMapping(value ="/addwithdraw")
	public void addWithdraw(@RequestBody Withdraw w) {
		WithdrawDA wda = new WithdrawDA();
		wda.addWithdraw(w);
	}
	
	@PostMapping(value ="/updatewithdraw")
	public void updateWithdraw(@RequestBody Withdraw w) {
		WithdrawDA wda = new WithdrawDA();
		wda.updateWithdrawById(w);
	}
	
	@GetMapping(value="/getwithdraw")
	public List<Withdraw> getWithdraw(){
		List<Withdraw> allList = new ArrayList<>();
		WithdrawDA wda = new WithdrawDA();
		allList = wda.allWithdraw();
		
		return allList;
	}
	
}
