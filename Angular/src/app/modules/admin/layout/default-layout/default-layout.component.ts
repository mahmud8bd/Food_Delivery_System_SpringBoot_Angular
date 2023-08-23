import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
  constructor(private router:Router){}
  

  jumptoregpage(){
    this.router.navigate(['admin','reg']);
   }

   jumploginpage(){
    this.router.navigate(['admin','login'])
    }
}
