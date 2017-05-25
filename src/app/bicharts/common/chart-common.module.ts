import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { ChartComponent } from './chart.component';
import {
  ScaleLegendComponent, LegendComponent, LegendEntryComponent
} from './legend';
import { BaseChartComponent } from './base-chart.component';
import { AxesModule } from './axes/axes.module';
import { TooltipModule } from './tooltip';
import { GridPanelComponent } from './grid-panel.component';
import { GridPanelSeriesComponent } from './grid-panel-series.component';
import { SvgLinearGradientComponent } from './svg-linear-gradient.component';
import { SvgRadialGradientComponent } from './svg-radial-gradient.component';
import { CommonModule } from '@angular/common';
import { Timeline } from './timeline';

const COMPONENTS = [
  BaseChartComponent,
  ChartComponent,
  LegendComponent,
  LegendEntryComponent,
  ScaleLegendComponent,
  GridPanelComponent,
  GridPanelSeriesComponent,
  SvgLinearGradientComponent,
  SvgRadialGradientComponent,
  Timeline
];

@NgModule({
  providers: [
    Location,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  imports: [
    CommonModule,
    AxesModule,
    TooltipModule,
    NoopAnimationsModule
  ],
  declarations: [
    ...COMPONENTS
  ],
  exports: [
    CommonModule,
    AxesModule,
    TooltipModule,
    ...COMPONENTS
  ]
})
export class ChartCommonModule { }
