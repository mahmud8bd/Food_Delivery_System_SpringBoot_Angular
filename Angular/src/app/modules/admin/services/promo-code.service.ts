import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {
  constructor() { }
  private promoCodes = [
    { code: 'TEST10', discountPercentage: 10 }, // 10% discount for SUMMER2023 code
    { code: 'TEST15', discountPercentage: 15 }, // 15% discount for WINTER2023 code
    // Add more promo codes if needed
  ];

  validatePromoCode(code: string): boolean {
    return this.promoCodes.some((promo) => promo.code === code);
  }

  applyDiscount(price: number, promoCode: string): number {
    const promo = this.promoCodes.find((p) => p.code === promoCode);
    if (promo) {
      return price * (1 - promo.discountPercentage / 100);
    }
    return price;
  }
}
