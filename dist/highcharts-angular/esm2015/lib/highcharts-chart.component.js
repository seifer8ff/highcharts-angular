/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
export class HighchartsChartComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.updateChange = new EventEmitter(true);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set options(val) {
        this.optionsValue = val;
        this.updateOrCreateChart();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set update(val) {
        if (val) {
            this.updateOrCreateChart();
            this.updateChange.emit(false); // clear the flag after update
        }
    }
    /**
     * @return {?}
     */
    updateOrCreateChart() {
        if (this.chart && this.chart.update) {
            this.chart.update(this.optionsValue, true, this.oneToOne || false);
        }
        else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.optionsValue, this.callbackFunction || null);
            this.optionsValue.series = this.chart.userOptions.series;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // #44
        if (this.chart) {
            // #56
            this.chart.destroy();
            this.chart = null;
        }
    }
}
HighchartsChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'highcharts-chart',
                template: ''
            },] },
];
/** @nocollapse */
HighchartsChartComponent.ctorParameters = () => [
    { type: ElementRef }
];
HighchartsChartComponent.propDecorators = {
    Highcharts: [{ type: Input }],
    constructorType: [{ type: Input }],
    callbackFunction: [{ type: Input }],
    options: [{ type: Input }],
    update: [{ type: Input }],
    oneToOne: [{ type: Input }],
    updateChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    HighchartsChartComponent.prototype.Highcharts;
    /** @type {?} */
    HighchartsChartComponent.prototype.constructorType;
    /** @type {?} */
    HighchartsChartComponent.prototype.callbackFunction;
    /** @type {?} */
    HighchartsChartComponent.prototype.oneToOne;
    /** @type {?} */
    HighchartsChartComponent.prototype.updateChange;
    /** @type {?} */
    HighchartsChartComponent.prototype.chart;
    /** @type {?} */
    HighchartsChartComponent.prototype.optionsValue;
    /** @type {?} */
    HighchartsChartComponent.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTTlGLE1BQU07Ozs7SUFxQkosWUFDWSxFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTs0QkFORCxJQUFJLFlBQVksQ0FBVSxJQUFJLENBQUM7S0FPcEQ7Ozs7O0lBbkJKLElBQWEsT0FBTyxDQUFDLEdBQVE7UUFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7S0FDNUI7Ozs7O0lBQ0QsSUFBYSxNQUFNLENBQUMsR0FBWTtRQUM5QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7S0FDRjs7OztJQVlELG1CQUFtQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUQ7S0FDRjs7OztJQUVELFdBQVc7O1FBQ1QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7O1lBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtLQUNGOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFMbUIsVUFBVTs7O3lCQU8zQixLQUFLOzhCQUNMLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUlMLEtBQUs7dUJBTUwsS0FBSzsyQkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoaWdoY2hhcnRzLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEhpZ2hjaGFydHM6IGFueTtcbiAgQElucHV0KCkgY29uc3RydWN0b3JUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNhbGxiYWNrRnVuY3Rpb246IGFueTtcbiAgQElucHV0KCkgc2V0IG9wdGlvbnModmFsOiBhbnkpIHtcbiAgICB0aGlzLm9wdGlvbnNWYWx1ZSA9IHZhbDtcbiAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgfVxuICBASW5wdXQoKSBzZXQgdXBkYXRlKHZhbDogYm9vbGVhbikge1xuICAgIGlmICh2YWwpIHtcbiAgICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICAgICAgdGhpcy51cGRhdGVDaGFuZ2UuZW1pdChmYWxzZSk7IC8vIGNsZWFyIHRoZSBmbGFnIGFmdGVyIHVwZGF0ZVxuICAgIH1cbiAgfVxuICBASW5wdXQoKSBvbmVUb09uZTogYm9vbGVhbjsgLy8gIzIwXG5cbiAgQE91dHB1dCgpIHVwZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4odHJ1ZSk7XG5cbiAgcHJvdGVjdGVkIGNoYXJ0OiBhbnk7XG4gIHByb3RlY3RlZCBvcHRpb25zVmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIHVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKSB7XG4gICAgaWYgKHRoaXMuY2hhcnQgJiYgdGhpcy5jaGFydC51cGRhdGUpIHtcbiAgICAgIHRoaXMuY2hhcnQudXBkYXRlKHRoaXMub3B0aW9uc1ZhbHVlLCB0cnVlLCB0aGlzLm9uZVRvT25lIHx8IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFydCA9IHRoaXMuSGlnaGNoYXJ0c1t0aGlzLmNvbnN0cnVjdG9yVHlwZSB8fCAnY2hhcnQnXShcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLm9wdGlvbnNWYWx1ZSxcbiAgICAgICAgdGhpcy5jYWxsYmFja0Z1bmN0aW9uIHx8IG51bGxcbiAgICAgICk7XG4gICAgICB0aGlzLm9wdGlvbnNWYWx1ZS5zZXJpZXMgPSB0aGlzLmNoYXJ0LnVzZXJPcHRpb25zLnNlcmllcztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHsgLy8gIzQ0XG4gICAgaWYgKHRoaXMuY2hhcnQpIHsgIC8vICM1NlxuICAgICAgdGhpcy5jaGFydC5kZXN0cm95KCk7XG4gICAgICB0aGlzLmNoYXJ0ID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==