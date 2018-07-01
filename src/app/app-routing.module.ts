import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PersonalComponent } from "./multi-wizard/personal/personal.component";
import { AddressComponent } from "./multi-wizard/address/address.component";
import { WorkComponent } from "./multi-wizard/work/work.component";
import { ResultComponent } from "./multi-wizard/result/result.component";

const routes: Routes = [
  { path: '', component: PersonalComponent },
  { path: 'address', component: AddressComponent },
  { path: 'work', component: WorkComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}