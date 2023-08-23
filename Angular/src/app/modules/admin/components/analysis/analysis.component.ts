import { Component } from '@angular/core';
import { TransectionService } from '../../services/transection.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css'],
})
export class AnalysisComponent {
  totalBalance: any;
  frofit:any;
  tansection: any;
  constructor(private transectionService: TransectionService) {}
  ngOnInit() {
    this.transectionService.getTransection().subscribe((data) => {
      this.tansection = data;
      // Calculate the sum of the 'total' property using reduce
      const sum = this.tansection.reduce(
        (acc: any, transaction: any) => acc + transaction.total,
        0
      );
      this.totalBalance = sum;
      console.log('Total Sum:', sum); // Print the total sum
      this.frofit = sum*3/100;
    });
  }
}
