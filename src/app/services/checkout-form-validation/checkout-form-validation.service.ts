import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutFormValidationService {
  private formSubmitSubject = new BehaviorSubject<boolean>(false);
  isFormSubmitted = this.formSubmitSubject.asObservable();

  updateFormSubmitted(flag: boolean) {
    this.formSubmitSubject.next(flag);
  }
}
