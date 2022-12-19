import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberHelperService {
  constructor() {}

  addPlusWhenNumberIsPositiv(numberToCheck: number): string {
    return numberToCheck > 0 ? '+' : '';
  }
}
