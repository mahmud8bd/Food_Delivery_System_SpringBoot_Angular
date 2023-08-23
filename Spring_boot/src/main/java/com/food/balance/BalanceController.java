package com.food.balance;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class BalanceController {

	@PostMapping(value = "/addbalance")
	public void addBalance(@RequestBody Balance b) {
		BalanceDA bda = new BalanceDA();
		bda.addBalance(b);
	}

	@PostMapping(value = "/updatebalance")
	public void updateBalance(@RequestBody Balance b) {
		BalanceDA bda = new BalanceDA();
		bda.updateBalance(b);
	}
	
	@PostMapping(value = "/updateWithbalance")
	public void updateBalanceForWithdraw(@RequestBody Balance b) {
		BalanceDA bda = new BalanceDA();
		bda.updateBalanceForWithdraw(b);
	}

	@GetMapping(value = "/getbalance/{id}")
	public Balance getBalanceByUserId(@PathVariable("id") String userId) {
		Balance ba;
		BalanceDA bda = new BalanceDA();
		ba = bda.getBalanceByUserID(userId);
		return ba;
	}
}
