import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { mount } from 'productApp/ProductApp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'container';
  @ViewChild('productApp') productApp: ElementRef = new ElementRef(null);
  constructor() {}
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ', this.productApp);
    // console.log('mount: ', mount);
    // mount(this.productApp.nativeElement);
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log('angular app: ', mount);
    //   console.log('this.productApp.nativeElement: ', this.productApp);
    //   mount(this.productApp.nativeElement);
    // }, 0);
  }
}
