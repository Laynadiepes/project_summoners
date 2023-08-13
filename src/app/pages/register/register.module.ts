import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRegisterComponent } from './form-register/form-register.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormRegisterComponent],
  exports:[FormRegisterComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class RegisterModule { }
