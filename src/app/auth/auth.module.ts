import { NgModule } from '@angular/core';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [AuthRoutingModule],
  declarations: [SignInComponent, SignUpComponent]
})
export class AuthModule { }
