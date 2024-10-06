import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChild('dashboardApp', { read: ViewContainerRef })
  dashboardApp!: ViewContainerRef;

  async ngAfterViewInit(): Promise<void> {
    const { mount } = await import('dashboard/BootstrapApp');

    mount(this.dashboardApp);
  }

  ngOnInit(): void {}
}
