import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CheckoutFormValidationService } from '../../services/checkout-form-validation/checkout-form-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent implements OnInit {
  checkoutForm: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private checkoutFormValidation: CheckoutFormValidationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      cardExpiry: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });

    this.checkoutFormValidation.isFormSubmitted.subscribe((value) => {
      value && this.onSubmit();
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.checkoutForm.valid) {
      localStorage.setItem(
        'shipping-details',
        JSON.stringify(this.checkoutForm.value)
      );
      this.router.navigate(['/order-confirmation']);
    }
  }
}
