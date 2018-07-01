import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { PersonalComponent } from "./personal/personal.component";
import { AddressComponent } from "./address/address.component";
import { WorkComponent } from "./work/work.component";
import { ResultComponent } from "./result/result.component";

@NgModule({
  declarations: [
    PersonalComponent,
    AddressComponent,
    WorkComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MultiWizardModule {}