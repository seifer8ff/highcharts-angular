import { Component, ElementRef, EventEmitter, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HighchartsChartComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class HighchartsChartModule {
}
HighchartsChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HighchartsChartComponent],
                exports: [HighchartsChartComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HighchartsChartModule, HighchartsChartComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBIaWdoY2hhcnRzOiBhbnk7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBhbnk7XG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbDogYW55KSB7XG4gICAgdGhpcy5vcHRpb25zVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHVwZGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIHByb3RlY3RlZCBjaGFydDogYW55O1xuICBwcm90ZWN0ZWQgb3B0aW9uc1ZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICB1cGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnNWYWx1ZSwgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSB0aGlzLkhpZ2hjaGFydHNbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zVmFsdWUsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zVmFsdWUuc2VyaWVzID0gdGhpcy5jaGFydC51c2VyT3B0aW9ucy5zZXJpZXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IC8vICM0NFxuICAgIGlmICh0aGlzLmNoYXJ0KSB7ICAvLyAjNTZcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50fSBmcm9tICcuL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0lBMkJFLFlBQ1ksRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7NEJBTkQsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDO0tBT3BEOzs7OztJQW5CSixJQUFhLE9BQU8sQ0FBQyxHQUFRO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUNELElBQWEsTUFBTSxDQUFDLEdBQVk7UUFDOUIsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtLQUNGOzs7O0lBWUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUQ7S0FDRjs7OztJQUVELFdBQVc7O1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztZQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7S0FDRjs7O1lBL0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBTG1CLFVBQVU7Ozt5QkFPM0IsS0FBSzs4QkFDTCxLQUFLOytCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFJTCxLQUFLO3VCQU1MLEtBQUs7MkJBRUwsTUFBTTs7Ozs7OztBQ3RCVDs7O1lBR0MsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFFLHdCQUF3QixDQUFFO2dCQUMxQyxPQUFPLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTthQUN0Qzs7Ozs7Ozs7Ozs7Ozs7OyJ9