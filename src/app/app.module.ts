import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MultiWizardModule } from './multi-wizard/multi-wizard.module';
import { AppComponent } from './app.component';
import { ProgressComponent } from './progress/progress.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from './../environments/environment';
import { reducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    MultiWizardModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
