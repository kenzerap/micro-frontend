import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import * as AppActions from '../../../app/store/app.actions';
import { selectCounterValue } from '../../../app/store/app.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  counter$: Observable<number>;

  constructor(private store: Store) {
    this.counter$ = this.store.select(selectCounterValue);
  }

  ngOnInit(): void {}

  increment() {
    console.log('increment');
    this.store.dispatch(AppActions.increment());
  }
}
