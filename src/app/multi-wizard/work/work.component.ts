import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../../store/app.reducers';
import * as fromMultiWizard from '../store/multi-wizard.reducers';
import * as MultiWizardActions from '../store/multi-wizard.actions';
import * as ProgressActions from '../../progress/store/progress.actions';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  mutliWizardState: Observable<fromMultiWizard.State>;
  work: string = '';
  workList: string[] = ['Service', 'Professional', 'Retired'];
  @ViewChild('f') form: NgForm;

  constructor(private router: Router,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('multiWizard')
      .subscribe(
        (mutliWizardState: fromMultiWizard.State) => {
          this.work = mutliWizardState.work;
        }
      )
  }

  private saveForm(form) {
    const work = form.value.work;
    this.store.dispatch(new MultiWizardActions.UpdateWork(work));
  }


  goToPrevious() {
    if (this.form.valid) {
      this.saveForm(this.form);
    } 
    this.store.dispatch(new ProgressActions.UpdateProgress(33));
    this.router.navigate(['/address']);
  }


  goToNext(form: NgForm) {
    this.saveForm(form);
    this.store.dispatch(new ProgressActions.UpdateProgress(100));
    this.router.navigate(['/result']);
  }

}
