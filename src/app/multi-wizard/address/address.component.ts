import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

import { Address } from './address.model';
import * as fromApp from '../../store/app.reducers';
import * as fromMultiWizard from '../store/multi-wizard.reducers';
import * as MultiWizardActions from '../store/multi-wizard.actions';
import * as ProgressActions from '../../progress/store/progress.actions';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  multiWizardState: Observable<fromMultiWizard.State>;
  street: string;
  city: string;
  @ViewChild('f') form: NgForm;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('multiWizard')
      .subscribe(
        (multiWizardState: fromMultiWizard.State) => {
          this.street = multiWizardState.address.street;
          this.city = multiWizardState.address.city;
        }
      )
  }

  private saveForm(form) {
    const street = form.value.street;
    const city = form.value.city;
    const address = new Address(street, city);
    this.store.dispatch(new MultiWizardActions.UpdateAddress(address));
  }

  goToNext(form: NgForm) {
    this.saveForm(form);
    this.store.dispatch(new ProgressActions.UpdateProgress(66));
    this.router.navigate(['/work']);
  }

  goToPrevious() {
    if (this.form.valid) {
      this.saveForm(this.form);
    } 
    this.store.dispatch(new ProgressActions.UpdateProgress(0));
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
