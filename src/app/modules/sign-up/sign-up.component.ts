import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { passwordsMatchValidator } from '@utils/validators';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  private formBuilder = inject(FormBuilder);
  formRegis = this.formBuilder.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: passwordsMatchValidator }
  );
  hasError(field: string, error: string): boolean | undefined {
    const control = this.formRegis.get(field);
    return control?.hasError(error) && (control.dirty || control.touched);
  }
  isFieldInvalid(field: string): boolean | undefined {
    const control = this.formRegis.get(field);
    return control?.invalid && (control.dirty || control.touched);
  }
  isPasswordMismatch(): boolean {
    return (
      this.formRegis.hasError('passwordsMismatch') &&
      (this.formRegis.dirty || this.formRegis.touched)
    );
  }
}
