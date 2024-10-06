import { ViewContainerRef } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const mount = (viewContainerRef: ViewContainerRef) => {
  viewContainerRef.createComponent(DashboardComponent);
};

export { mount };
