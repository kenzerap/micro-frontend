import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../shared/components/header/header.component';
import { Store } from '@ngrx/store';
import * as AppActions from './store/app.actions';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        window.dispatchEvent(
          new CustomEvent('containerState', {
            detail: {
              globalUrl: event.url,
            },
          })
        );
      });

    window.addEventListener('productState', (event: any) => {
      if (event && event.detail) {
        const { cartItemCount } = event.detail;
        this.store.dispatch(AppActions.setCartItemCount({ cartItemCount }));
      }
    });
  }
}
