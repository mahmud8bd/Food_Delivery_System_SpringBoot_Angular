export class Admin {
  adminId?: string;
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;

  constructor(
    adminId: any,
    username: any,
    email: any,
    password: any,
    phone: any,
    address: any
  ) {
    this.adminId = adminId;
    this.username = username;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.address = address;
  }
}
