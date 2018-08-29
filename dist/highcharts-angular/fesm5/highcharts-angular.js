import { Component, ElementRef, EventEmitter, Input, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HighchartsChartComponent = /** @class */ (function () {
    function HighchartsChartComponent(el) {
        this.el = el;
        this.updateChange = new EventEmitter(true);
    }
    Object.defineProperty(HighchartsChartComponent.prototype, "options", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.optionsValue = val;
            this.updateOrCreateChart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighchartsChartComponent.prototype, "update", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            if (val) {
                this.updateOrCreateChart();
                this.updateChange.emit(false); // clear the flag after update
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    HighchartsChartComponent.prototype.updateOrCreateChart = /**
     * @return {?}
     */
    function () {
        if (this.chart && this.chart.update) {
            this.chart.update(this.optionsValue, true, this.oneToOne || false);
        }
        else {
            this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.optionsValue, this.callbackFunction || null);
            this.optionsValue.series = this.chart.userOptions.series;
        }
    };
    /**
     * @return {?}
     */
    HighchartsChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // #44
        if (this.chart) {
            // #56
            this.chart.destroy();
            this.chart = null;
        }
    };
    HighchartsChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'highcharts-chart',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    HighchartsChartComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    HighchartsChartComponent.propDecorators = {
        Highcharts: [{ type: Input }],
        constructorType: [{ type: Input }],
        callbackFunction: [{ type: Input }],
        options: [{ type: Input }],
        update: [{ type: Input }],
        oneToOne: [{ type: Input }],
        updateChange: [{ type: Output }]
    };
    return HighchartsChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var HighchartsChartModule = /** @class */ (function () {
    function HighchartsChartModule() {
    }
    HighchartsChartModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [HighchartsChartComponent],
                    exports: [HighchartsChartComponent]
                },] },
    ];
    return HighchartsChartModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { HighchartsChartModule, HighchartsChartComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvbGliL2hpZ2hjaGFydHMtY2hhcnQubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBIaWdoY2hhcnRzOiBhbnk7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBhbnk7XG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbDogYW55KSB7XG4gICAgdGhpcy5vcHRpb25zVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHVwZGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIHByb3RlY3RlZCBjaGFydDogYW55O1xuICBwcm90ZWN0ZWQgb3B0aW9uc1ZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICB1cGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnNWYWx1ZSwgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSB0aGlzLkhpZ2hjaGFydHNbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zVmFsdWUsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zVmFsdWUuc2VyaWVzID0gdGhpcy5jaGFydC51c2VyT3B0aW9ucy5zZXJpZXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IC8vICM0NFxuICAgIGlmICh0aGlzLmNoYXJ0KSB7ICAvLyAjNTZcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7SGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50fSBmcm9tICcuL2hpZ2hjaGFydHMtY2hhcnQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBdLFxuICBleHBvcnRzOiBbIEhpZ2hjaGFydHNDaGFydENvbXBvbmVudCBdXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hjaGFydHNDaGFydE1vZHVsZSB7fVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0lBMkJFLGtDQUNZLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZOzRCQU5ELElBQUksWUFBWSxDQUFVLElBQUksQ0FBQztLQU9wRDtJQW5CSixzQkFBYSw2Q0FBTzs7Ozs7UUFBcEIsVUFBcUIsR0FBUTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1Qjs7O09BQUE7SUFDRCxzQkFBYSw0Q0FBTTs7Ozs7UUFBbkIsVUFBb0IsR0FBWTtZQUM5QixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDL0I7U0FDRjs7O09BQUE7Ozs7SUFZRCxzREFBbUI7OztJQUFuQjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUQ7S0FDRjs7OztJQUVELDhDQUFXOzs7SUFBWDs7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjtLQUNGOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQUxtQixVQUFVOzs7NkJBTzNCLEtBQUs7a0NBQ0wsS0FBSzttQ0FDTCxLQUFLOzBCQUNMLEtBQUs7eUJBSUwsS0FBSzsyQkFNTCxLQUFLOytCQUVMLE1BQU07O21DQXRCVDs7Ozs7OztBQ0FBOzs7O2dCQUdDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDMUMsT0FBTyxFQUFFLENBQUUsd0JBQXdCLENBQUU7aUJBQ3RDOztnQ0FORDs7Ozs7Ozs7Ozs7Ozs7OyJ9