import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

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

  constructor() {}

  async ngAfterViewInit(): Promise<void> {
    try {
      const { mount } = await import('productApp/ProductApp');
      mount(this.productApp.nativeElement);
    } catch (err) {
      console.error('Error loading React remote component:', err);
    }
  }
}
