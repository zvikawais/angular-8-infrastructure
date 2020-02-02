import { NgModule } from '@angular/core';
import { SecureFeatureRoutingModule } from './secure-feature-routing.module';
import { SecureComponent } from './secure/secure.component';
import { SharedModule } from '../../../app/shared/shared.module';


@NgModule({
  declarations: [SecureComponent],
  imports: [
    SharedModule,
    SecureFeatureRoutingModule
  ]
})
export class SecureFeatureModule { }
