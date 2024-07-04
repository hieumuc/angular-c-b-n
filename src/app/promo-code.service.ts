import { Injectable } from '@angular/core';
import { PromoCode } from './promo-code.model';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {
  promoCodes: PromoCode[] = [
    {
      code: 'muccute',
      discountPercent: 10
    },
    {
      code: 'muccuti',
      discountPercent: 20
    }
  ];
  applyPromoCode(code: string): number {
    const promoCode = this.promoCodes.find(
      promoCode => promoCode.code === code
    );
    if (promoCode && typeof promoCode.discountPercent === 'number') {
      return promoCode.discountPercent;
    } else {
      return 0;
    }
  }
  
}