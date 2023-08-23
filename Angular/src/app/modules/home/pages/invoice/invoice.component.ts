import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../services/home.service';
import * as moment from 'moment';
import * as numberToWords from 'number-to-words';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs; 


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css'],
})
export class InvoiceComponent {
  orderId: any;
  orderDate: any;
  orderStatus: any;
  userId: any;
  userName: any;
  userphone: any;
  userEmail: any;
  userAddress: any;
  shopId: any;
  shopName: any;
  shopAddress: any;
  paymentMethod: any;
  payNumber: any;
  transectionNumber: any;
  discount: any;
  totalPrice: any;
  order: any;
  orderFood: any;


  constructor(
    private route: ActivatedRoute,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    let invoiceno = this.route.snapshot.params['invoiceno'];
    this.homeService.getOrderByOrderId(invoiceno).subscribe((data) => {
      this.order = data;
      this.orderId = this.order.orderId;
      this.orderDate = this.order.orderDate;
      this.orderStatus = this.order.orderStatus;
      this.userId = this.order.userId;
      this.userName = this.order.userName;
      this.userphone = this.order.userphone;
      this.userEmail=this.order.userEmail;
      this.userAddress=this.order.userAddress;
      this.shopId=this.order.shopId;
      this.shopName=this.order.shopName;
      this.shopAddress=this.order.shopAddress;
      this.paymentMethod=this.order.paymentMethod;
      this.payNumber=this.order.payNumber;
      this.transectionNumber=this.order.transectionNumber;
      this.discount=this.order.discount;
      this.totalPrice=this.order.totalPrice;
    });
    this.homeService.getMyOrderFoodsById(invoiceno)
    .subscribe((data)=>{
      this.orderFood = data;
    })
  }
  convertAmountToWords(amount: number): string {
    return numberToWords.toWords(amount);
  }
  generatePDF(action = 'open') {
    const formattedDate = moment(this.orderDate).format('YYYY-MM-DD HH:mm:ss');
    let docDefinition:any = {
      content: [
        {
          text: 'Foodmela.com',
          fontSize: 18,
          alignment: 'center',
          color: '#047886'
        },
        {
          text: 'INVOICE',
          fontSize: 20,
          bold: true,
          alignment: 'center',
          decoration: 'underline',
          color: '#d01c06'
        },
        {
          text: 'Invoice To',
          style: 'sectionHeader'
        },
        {
          columns: [
            [
              {
                text: this.userName,
                bold:true
              },
              { text: this.userphone },
              { text: this.userEmail },
              { text: this.userAddress }
            ],
            [
              { 
                text: `Order No: ${this.orderId}`,
                alignment: 'right',
                color: '#047886',
                bold:true
              },
              {
                text: `Date: ${formattedDate}`,
                alignment: 'right'
              },
              {
                text: `Pay-Method: ${this.paymentMethod}`,
                alignment: 'right'
              },
              {
                text: `Tns-Number: ${this.transectionNumber}`,
                alignment: 'right'
              }
            ]
          ]
        },
        {
          text: 'Order Details',
          style: 'sectionHeader'
        },
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto', 'auto'],
            body: [
              [{text:'Foods', alignment: 'center',style: 'header', fillColor: '#CCCCCC'}, {text:'Price', alignment: 'center',style: 'header', fillColor: '#CCCCCC'}, {text:'Quantity', alignment: 'center',style: 'header', fillColor: '#CCCCCC'}, {text:'Amount', alignment: 'center',style: 'header', fillColor: '#CCCCCC'}],

              
              ...this.orderFood.map((p:any) => ([p.foodName, "$"+p.foodPrice, p.foodQuantity, "$"+p.totalPrice])),
              // [{text: '`', colSpan: 4}, {}, {},{}],
              [ {text:'', colSpan: 2,rowSpan: 3}, {}, {text: 'Sub Total'},`$${this.totalPrice-this.totalPrice*5/100}`],
              [ {text:'', colSpan: 2}, {}, {text: 'Vat 5%'},`$${this.totalPrice*5/100 }`],
              [{text:'', colSpan: 2}, {}, {text: 'Total Amount'}, `$${this.totalPrice }`]
            ]
          }
        },
        {
            text: "",
            margin: [0, 0 ,0, 25]          
        },
        {
          text: `In Words: ${this.convertAmountToWords(this.totalPrice)} dollar.`,
          alignment: 'left',
          bold: true
        },
        {
            text: "",
            margin: [0, 0 ,0, 25]          
        },
        {
          columns: [
            [{ qr: `${"Hasan"}`, fit: '50' }],
            [{ text: 'Signature', alignment: 'right', italics: true}]
          ]
        },
        {
          text: 'Terms and Conditions',
          style: 'sectionHeader'
        },
        {
            ul: [
              'Order can be return in max 10 days.',
              'Warrenty of the product will be subject to the manufacturer terms and conditions.',
              'This is system generated invoice.',
            ],
        }
      ],
      styles: {
        sectionHeader: {
          bold: true,
          decoration: 'underline',
          fontSize: 14,
          margin: [0, 15,0, 15]          
        }
      }
    };

    if(action==='download'){
      pdfMake.createPdf(docDefinition).download(this.orderId);
    }else if(action === 'print'){
      pdfMake.createPdf(docDefinition).print();      
    }else{
      pdfMake.createPdf(docDefinition).open();      
    }

  }
}
