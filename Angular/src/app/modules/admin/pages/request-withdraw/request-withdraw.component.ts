import { Component } from '@angular/core';
import { TransectionService } from '../../services/transection.service';
import { Balance } from 'src/app/modules/share/models/balance';
import { Withdrow } from 'src/app/modules/share/models/withdrow';
import { map } from 'rxjs';
import { EmailSenderService } from 'src/app/modules/share/service/email-sender.service';
import { Emai } from 'src/app/modules/share/models/emai';

@Component({
  selector: 'app-request-withdraw',
  templateUrl: './request-withdraw.component.html',
  styleUrls: ['./request-withdraw.component.css'],
})
export class RequestWithdrawComponent {
  withdrawn: any;
  oldwithdrawn: any;
  constructor(
    private transectionService: TransectionService,
    private emailService: EmailSenderService
  ) {}

  ngOnInit() {
    this.loadedNewWithdraw();
    this.loadedOldWithdraw();
  }

  loadedNewWithdraw() {
    this.transectionService
      .getWithdraw()
      .pipe(
        map((x: any) => {
          return x.filter((x: any) => x.createDate === x.updateDate);
        })
      )
      .subscribe((data) => {
        this.withdrawn = data;
      });
  }
  loadedOldWithdraw() {
    this.transectionService
      .getWithdraw()
      .pipe(
        map((x: any) => {
          return x.filter((x: any) => x.createDate !== x.updateDate);
        })
      )
      .subscribe((data) => {
        this.oldwithdrawn = data;
      });
  }

  aceptWithdraw(value: string, user:string, dateValue:string, amount:number) {
    let withdraw = new Withdrow(value, null, null, null, null, null, 'acepted');
    this.transectionService.updateWithdraw(withdraw).subscribe((data) => {
      console.log('success');
      this.loadedNewWithdraw();
      this.loadedOldWithdraw();

      const smsBody = `
        Hello ${user} 
        Withdraw Id: #${value}
        Request Date: ${dateValue}
        Amount: $${amount}
        Your Withdraw request Is confirmed.... please check Your Account.`;

      this.emailService
        .sendEmail(new Emai('sazzad9zoom@gmail.com', 'Withdraw Request', smsBody))
        .subscribe((data) => {
          console.log('success');
        });
    });
  }
  cancelWithdraw(value: string, userId: string, amount: number) {
    let withdraw = new Withdrow(value, null, null, null, null, null, 'cancel');
    this.transectionService.updateWithdraw(withdraw).subscribe((data) => {
      console.log('success');
      this.loadedNewWithdraw();
      this.loadedOldWithdraw();
    });

    let balance = new Balance(null, userId, null, amount, null, null, null);
    this.transectionService.updateBalance(balance).subscribe((data) => {
      console.log('success', data);
    });
  }
}
