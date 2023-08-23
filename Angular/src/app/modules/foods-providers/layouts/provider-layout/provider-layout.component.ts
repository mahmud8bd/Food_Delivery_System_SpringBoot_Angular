import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faCoffee,faBicycle,faCartArrowDown,faHeadset,faUsers,faPlusSquare,faAdd,faEnvelope,faBell,faUserLarge,faMagnifyingGlass,faHouseChimney,faHouseChimneyWindow,faHouseChimneyCrack,faSignOutAlt,faCog,faMessage,faBars,faCircleUser,faPeopleRoof,faCutlery, faEyeSlash,faEye ,faDashboard,faHome} from '@fortawesome/free-solid-svg-icons';
import { WebSocketService } from 'src/app/modules/share/service/web-socket.service';

@Component({
  selector: 'app-provider-layout',
  templateUrl: './provider-layout.component.html',
  styleUrls: ['./provider-layout.component.css']
})
export class ProviderLayoutComponent {
  // Dashboard icon variable Start
  faBicycle=faBicycle;
  faCartArrowDown=faCartArrowDown;
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

  shopUserName:any;
  constructor(private elementRef: ElementRef, private router:Router, private route :ActivatedRoute, private webSocketService: WebSocketService) {
    this.shopUserName = localStorage.getItem("shopUsername");
    if (this.shopUserName === null) {
      router.navigate(['provider','login']);
    }
  }


  ngOnInit() {
    // Menu Toggle
    let toggle = this.elementRef.nativeElement.querySelector(".toggle");
    let navigation = this.elementRef.nativeElement.querySelector(".navigation");
    let main = this.elementRef.nativeElement.querySelector(".main");
  
    toggle.onclick = function () {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };

    this.loadedNotification();
  }


  logout(){
    localStorage.removeItem("shopUsername");
  }


  loadedNotification() {
    // this.webSocketService.getNotifications().subscribe(message => {
    //   // Handle the received notification
    //   console.log('Received notification:', message);
    // });
  }

  sendNotification() {
    // this.webSocketService.sendNotification('Hello, this is a notification!');
  }

}
