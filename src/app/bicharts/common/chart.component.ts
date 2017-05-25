import {
  Component, Input, OnChanges, ViewContainerRef, ChangeDetectionStrategy, EventEmitter,
  Output, SimpleChanges
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { TooltipService } from './tooltip';

@Component({
  providers: [TooltipService],
  selector: 'bi-charts-chart',
  template: `
    <div
      class="bi-charts-outer"
      [style.width.px]="view[0]"
      [@animationState]="'active'">
      <svg
        class="bi-charts"
        [attr.width]="chartWidth"
        [attr.height]="view[1]">
        <ng-content></ng-content>
      </svg>
      <bi-charts-scale-legend
        *ngIf="showLegend && legendType === 'scaleLegend'"
        class="chart-legend"
        [valueRange]="legendOptions.domain"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth">
      </bi-charts-scale-legend>
      <bi-charts-legend
        *ngIf="showLegend && legendType === 'legend'"
        class="chart-legend"
        [data]="legendOptions.domain"
        [title]="legendOptions.title"
        [colors]="legendOptions.colors"
        [height]="view[1]"
        [width]="legendWidth"
        [activeEntries]="activeEntries"
        (labelClick)="legendLabelClick.emit($event)"
        (labelActivate)="legendLabelActivate.emit($event)"
        (labelDeactivate)="legendLabelDeactivate.emit($event)">
      </bi-charts-legend>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('animationState', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('500ms 100ms', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ChartComponent implements OnChanges {

  @Input() view;
  @Input() showLegend = false;
  @Input() legendOptions: any;

  // remove
  @Input() data;
  @Input() legendData;
  @Input() legendType: any;
  @Input() colors: any;
  @Input() activeEntries: any[];

  @Output() legendLabelClick: EventEmitter<any> = new EventEmitter();
  @Output() legendLabelActivate: EventEmitter<any> = new EventEmitter();
  @Output() legendLabelDeactivate: EventEmitter<any> = new EventEmitter();

  chartWidth: any;
  title: any;
  legendWidth: any;

  constructor(
    private vcr: ViewContainerRef,
    private tooltipService: TooltipService) {
    this.tooltipService.injectionService.setRootViewContainer(vcr);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  update(): void {
    let legendColumns = 0;
    if (this.showLegend) {
      this.legendType = this.getLegendType();

      if (this.legendType === 'scaleLegend') {
        legendColumns = 1;
      } else {
        legendColumns = 2;
      }
    }

    const chartColumns = 12 - legendColumns;

    this.chartWidth = Math.round(this.view[0] * chartColumns / 12.0);
    this.legendWidth = Math.round(this.view[0] * legendColumns / 12.0);
  }

  getLegendType(): string {
    if (this.legendOptions.scaleType === 'linear') {
      return 'scaleLegend';
    } else {
      return 'legend';
    }
  }

}
