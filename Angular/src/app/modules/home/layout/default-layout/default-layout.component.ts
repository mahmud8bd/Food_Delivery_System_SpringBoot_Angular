import { faCartPlus,faCoffee,faHeadset,faUsers,faPlusSquare,faAdd,faEnvelope,faBell,faUserLarge,faMagnifyingGlass,faHouseChimney,faHouseChimneyWindow,faHouseChimneyCrack,faSignOutAlt,faCog,faMessage,faBars,faCircleUser,faPeopleRoof,faCutlery, faEyeSlash,faEye ,faDashboard,faHome} from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
// Dashboard icon variable Start
faCartPlus=faCartPlus;
faCoffee=faCoffee;
faEyeSlash=faEyeSlash;
faEye=faEye;
faDashboard=faDashboard;
faHome=faHome;
faPeopleRoof=faPeopleRoof;
faCutlery=faCutlery;
faCircleUser=faCircleUser;
faBars=faBars;
faMessage=faMessage;
faCog=faCog;
faSignOutAlt=faSignOutAlt;
faHouseChimneyCrack=faHouseChimneyCrack;
faHouseChimneyWindow=faHouseChimneyWindow;
faHouseChimney=faHouseChimney;
faMagnifyingGlass=faMagnifyingGlass;
faUserLarge=faUserLarge;
faBell=faBell;
faEnvelope=faEnvelope;
faAdd=faAdd;
faPlusSquare=faPlusSquare;
faUsers=faUsers;
faHeadset=faHeadset;
// Dashboard icon variable End

cartItemCount: number=0;
username:any;
isAuthenticated: any;
constructor(private cartService: CartService, private homeService:HomeService){
  
}

ngOnInit() {
  this.homeService.isAuthenticated$.subscribe((isAuthenticated) => {
    this.isAuthenticated = isAuthenticated;
  });
  this.cartService.cartItems$.subscribe((cartItems)=>{
    this.cartItemCount = this.cartService.getCartItemCount();
  })
  
}


logout(){
  localStorage.removeItem("username");
  this.homeService.updateAuthenticationStatus(false);
}

}
