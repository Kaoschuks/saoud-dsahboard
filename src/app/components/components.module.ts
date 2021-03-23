import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCardComponent } from './chart-card/chart-card.component';
import { IonicModule } from '@ionic/angular';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';

export const components: any = [
  ChartCardComponent, DashboardCardComponent
]

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule, IonicModule
  ],
})
export class ComponentsModule { }
