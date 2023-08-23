import { Component, ElementRef, ViewChild} from '@angular/core';
import { faCoffee,faBicycle,faCartArrowDown,faHeadset,faUsers,faPlusSquare,faAdd,faEnvelope,faBell,faUserLarge,faMagnifyingGlass,faHouseChimney,faHouseChimneyWindow,faHouseChimneyCrack,faSignOutAlt,faCog,faMessage,faBars,faCircleUser,faPeopleRoof,faCutlery, faEyeSlash,faEye ,faDashboard,faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {
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
  
  constructor(private elementRef: ElementRef) {}


  ngOnInit() {
    //navigation var
    // let list = this.elementRef.nativeElement.querySelector(".d-hovered");
    // list.classList.add('hovered');



    // Menu Toggle
    let toggle = this.elementRef.nativeElement.querySelector(".toggle");
    let navigation = this.elementRef.nativeElement.querySelector(".navigation");
    let main = this.elementRef.nativeElement.querySelector(".main");
  
    toggle.onclick = function () {
      navigation.classList.toggle("active");
      main.classList.toggle("active");
    };
  }

  
}
