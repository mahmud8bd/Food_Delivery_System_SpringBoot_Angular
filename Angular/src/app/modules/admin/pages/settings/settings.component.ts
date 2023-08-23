import { Component } from '@angular/core';
import { TransectionService } from '../../services/transection.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  tansection:any;
  constructor(private transectionService: TransectionService){}
  ngOnInit(){
    this.transectionService.getTransection()
    .subscribe((data)=>{
      this.tansection = data;
    })
  }
}
