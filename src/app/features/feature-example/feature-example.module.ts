import { NgModule } from '@angular/core';
import { SharedModule } from '../../../app/shared/shared.module';
import { FeatureExampleRoutingModule } from './feature-example-routing.module';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [FeatureComponent],
  imports: [
    SharedModule,
    FeatureExampleRoutingModule
  ]
})
export class FeatureExampleModule { }
