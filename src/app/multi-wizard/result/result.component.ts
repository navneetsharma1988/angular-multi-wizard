import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as fromApp from '../../store/app.reducers';
import * as fromMultiWizard from '../store/multi-wizard.reducers';
import * as MultiWizardActions from '../store/multi-wizard.actions';
import * as ProgressActions from '../../progress/store/progress.actions';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  multiWizardState: Observable<fromMultiWizard.State>;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.multiWizardState = this.store.select('multiWizard')
      .pipe(
        take(1)
      );
  }

}
