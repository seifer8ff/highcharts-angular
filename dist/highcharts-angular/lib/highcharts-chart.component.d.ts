import { ElementRef, EventEmitter, OnDestroy } from '@angular/core';
export declare class HighchartsChartComponent implements OnDestroy {
    protected el: ElementRef;
    Highcharts: any;
    constructorType: string;
    callbackFunction: any;
    options: any;
    update: boolean;
    oneToOne: boolean;
    updateChange: EventEmitter<boolean>;
    protected chart: any;
    protected optionsValue: any;
    constructor(el: ElementRef);
    updateOrCreateChart(): void;
    ngOnDestroy(): void;
}
