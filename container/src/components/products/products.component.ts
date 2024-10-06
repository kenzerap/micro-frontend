import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements AfterViewInit {
  @ViewChild('productApp') productApp!: ElementRef;

  constructor(private router: Router) {}

  async ngAfterViewInit(): Promise<void> {
    const { mount } = await import('productApp/ProductApp');
    mount(this.productApp.nativeElement, {
      url: this.router.url,
    });

    /* this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.url = event.url;
        console.log('router.events: ', event.url);
        navigateUrl(event.url);
      }); */
  }
}
