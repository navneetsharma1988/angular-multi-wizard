import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Personal } from './personal.model';
import * as fromApp from '../../store/app.reducers';
import * as fromMultiWizard from '../store/multi-wizard.reducers';
import * as MultiWizardActions from '../store/multi-wizard.actions';
import * as ProgressActions from '../../progress/store/progress.actions';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  multiWizardState: Observable<fromMultiWizard.State>;
  name: string;
  email: string;

  constructor(private store: Store<fromApp.AppState>,
              private router: Router) { }

  ngOnInit() {
    this.store.select('multiWizard')
      .subscribe(
        (multiWizardState: fromMultiWizard.State) => {
          this.name = multiWizardState.personal.name;
          this.email = multiWizardState.personal.email;
        }
      )
  }

  saveForm(form) {
    const name = form.value.name;
    const email = form.value.email;
    const personal = new Personal(name, email);
    this.store.dispatch(new MultiWizardActions.UpdatePersonal(personal));
  }

  goToNext(form: NgForm) {
    this.saveForm(form);
    this.store.dispatch(new ProgressActions.UpdateProgress(33));
    this.router.navigate(['/address']);
  }

}
