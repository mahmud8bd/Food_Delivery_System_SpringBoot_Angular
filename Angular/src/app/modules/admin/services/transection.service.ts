import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transection } from '../model/transection';
import { Observable } from 'rxjs';
import { Balance } from '../../share/models/balance';
import { Withdrow } from '../../share/models/withdrow';

@Injectable({
  providedIn: 'root'
})
export class TransectionService {
  private url = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  saveTransection(transection:Transection) {
    this.url = 'http://localhost:8080/savetransection';
    return this.http.post(this.url, transection);
  }

  getTransection(): Observable<Transection> {
    return this.http.get('http://localhost:8080/tansections');
  }


  addBalance(balance:Balance){
    this.url = 'http://localhost:8080/addbalance';
    return this.http.post(this.url, balance);
  }
  updateBalance(balance:Balance){
    this.url = 'http://localhost:8080/updatebalance';
    return this.http.post(this.url, balance);
  }
  updateBalanceForWithdraw(balance:Balance){
    this.url = 'http://localhost:8080/updateWithbalance';
    return this.http.post(this.url, balance);
  }
  getBalanceById(id:string): Observable<Balance>{
    this.url = 'http://localhost:8080/';
    return this.http.get<Balance>(`${this.url}getbalance/${id}`);
  }

  addWithdraw(withdraw:Withdrow){
    this.url = 'http://localhost:8080/addwithdraw';
    return this.http.post(this.url, withdraw);
  }
  updateWithdraw(withdraw:Withdrow){
    this.url = 'http://localhost:8080/updatewithdraw';
    return this.http.post(this.url, withdraw);
  }
  getWithdraw(): Observable<Withdrow>{
    return this.http.get('http://localhost:8080/getwithdraw');
  }

}
