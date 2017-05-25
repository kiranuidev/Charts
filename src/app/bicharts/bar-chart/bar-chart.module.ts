import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import { ChartCommonModule } from '../common/chart-common.module';
import { BarComponent } from './bar.component';
import { BarVerticalGroupedComponent } from './bar-grouped-component';
import { SeriesVerticalComponent } from './series-vertical.component';

export {
  BarComponent,
  BarVerticalGroupedComponent,
  SeriesVerticalComponent
};

@NgModule({
  imports: [ChartCommonModule],
  declarations: [
    BarComponent,
    BarVerticalGroupedComponent,
    SeriesVerticalComponent
  ],
  exports: [
    BarComponent,
    BarVerticalGroupedComponent,
    SeriesVerticalComponent
  ]
})
export class BarChartModule {}
