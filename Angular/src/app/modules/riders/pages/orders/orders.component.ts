import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { ProvidersService } from 'src/app/modules/foods-providers/services/providers.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  myOrderfood:any;
  constructor(private providerService:ProvidersService,private router:Router){}

  ngOnInit(){
    
    this.providerService.getMyOrderfood()
    .pipe(
      map((food: any) => {
        return food.filter((x: any) => x.orderStep >=2);
      })
    )
    .subscribe((x) => {
      this.myOrderfood = x;
    });
    
  }
  orderDetails(id:any,oid:any,uid:any){
    this.router.navigate(['rider','orderdetails',id, oid, uid]);
  }
}
