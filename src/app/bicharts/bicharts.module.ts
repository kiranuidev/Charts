import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartCommonModule} from "./common/chart-common.module";
import {BarChartModule} from "./bar-chart/bar-chart.module";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    CommonModule,
    BarChartModule,
    NoopAnimationsModule
  ],
   exports: [
    ChartCommonModule,
   BarChartModule
  ],
  declarations: []
})
export class BichartsModule { }
