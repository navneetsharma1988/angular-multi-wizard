import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromProgress from './store/progress.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progressState: Observable<fromProgress.State>;
  progress: number;
  width: string;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.store.select('progress')
      .subscribe(
        (progressState: fromProgress.State) => {
          this.progress = progressState.progress;
          this.width = `${this.progress}%`;
        }
      )
  }

}
