export class Transection {
  transectionId?: string;
  transectionDate?: string;
  orderId?: string;
  userId?: string;
  userName?: string;
  userFullName?: string;
  payMethod?: string;
  payNumber?: string;
  tnsCode?: string;
  total?: number;
  subtotal?: number;
  constructor(
    transectionId: any, 
    transectionDate: any, 
    orderId: any, 
    userId: any, 
    userName: any, 
    userFullName: any, 
    payMethod: any, 
    payNumber: any, 
    tnsCode: any, 
    total: any, 
    subtotal: any
) {
    this.transectionId = transectionId;
    this.transectionDate = transectionDate;
    this.orderId = orderId;
    this.userId = userId;
    this.userName = userName;
    this.userFullName = userFullName;
    this.payMethod = payMethod;
    this.payNumber = payNumber;
    this.tnsCode = tnsCode;
    this.total = total;
    this.subtotal = subtotal;
  }  
}
