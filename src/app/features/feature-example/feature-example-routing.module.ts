import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeatureComponent } from './feature/feature.component';


const routes: Routes = [
    { path: '', component: FeatureComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureExampleRoutingModule { }
