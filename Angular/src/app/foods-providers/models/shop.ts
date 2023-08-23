export class Shop {
    shopId?: string;
    shopFullName?: string;
    shopUserName?: string;
    shopType?: string;
    shopEmail?: string;
    shopPhone?: string;
    shopAddress?: string;
    shopPassword?: string;

    constructor(
        shopId: any,
        shopFullName: any,
        shopUserName: any,
        shopType: any,
        shopEmail: any,
        shopPhone: any,
        shopAddress: any,
        shopPassword: any
    ) {
        this.shopId = shopId;
        this.shopFullName = shopFullName;
        this.shopUserName = shopUserName;
        this.shopType = shopType;
        this.shopEmail = shopEmail;
        this.shopPhone = shopPhone;
        this.shopAddress = shopAddress;
        this.shopPassword = shopPassword;
    }
}
