import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgModel,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  onSubmit() {
    this.router.navigate(['/main']);
  }
  hasError(field: string, error: string): boolean | undefined {
    const control = this.formLogin.get(field);
    return control?.hasError(error) && (control.dirty || control.touched);
  }
  isFieldInvalid(field: string): boolean | undefined {
    const control = this.formLogin.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }
}
