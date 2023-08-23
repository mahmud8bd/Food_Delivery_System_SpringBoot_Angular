import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
 providers:any;
 constructor(private adminService:AdminService){}

 ngOnInit(){
  this.adminService.getProviders()
  .subscribe((data)=> {
    this.providers = data;
  })
 }

}
