import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('productApp') productApp!: ElementRef;
  root: any;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  async ngAfterViewInit(): Promise<void> {
    const { mount } = await import('productApp/ProductApp');
    const { root } = mount(this.productApp.nativeElement);
    this.root = root;
  }

  ngOnDestroy(): void {
    this.root.unmount();
  }
}
