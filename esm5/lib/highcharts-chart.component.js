/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
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
export { HighchartsChartComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9oaWdoY2hhcnRzLWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvaGlnaGNoYXJ0cy1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTJCNUYsa0NBQ1ksRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7NEJBTkQsSUFBSSxZQUFZLENBQVUsSUFBSSxDQUFDO0tBT3BEO0lBbkJKLHNCQUFhLDZDQUFPOzs7OztRQUFwQixVQUFxQixHQUFRO1lBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzVCOzs7T0FBQTtJQUNELHNCQUFhLDRDQUFNOzs7OztRQUFuQixVQUFvQixHQUFZO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1NBQ0Y7OztPQUFBOzs7O0lBWUQsc0RBQW1COzs7SUFBbkI7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ3BFO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsQ0FDM0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQ3JCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQzlCLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDMUQ7S0FDRjs7OztJQUVELDhDQUFXOzs7SUFBWDs7UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7WUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ25CO0tBQ0Y7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozs7Z0JBTG1CLFVBQVU7Ozs2QkFPM0IsS0FBSztrQ0FDTCxLQUFLO21DQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFJTCxLQUFLOzJCQU1MLEtBQUs7K0JBRUwsTUFBTTs7bUNBdEJUOztTQU1hLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGlnaGNoYXJ0cy1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBIaWdoY2hhcnRzOiBhbnk7XG4gIEBJbnB1dCgpIGNvbnN0cnVjdG9yVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBjYWxsYmFja0Z1bmN0aW9uOiBhbnk7XG4gIEBJbnB1dCgpIHNldCBvcHRpb25zKHZhbDogYW55KSB7XG4gICAgdGhpcy5vcHRpb25zVmFsdWUgPSB2YWw7XG4gICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gIH1cbiAgQElucHV0KCkgc2V0IHVwZGF0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICBpZiAodmFsKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9yQ3JlYXRlQ2hhcnQoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2hhbmdlLmVtaXQoZmFsc2UpOyAvLyBjbGVhciB0aGUgZmxhZyBhZnRlciB1cGRhdGVcbiAgICB9XG4gIH1cbiAgQElucHV0KCkgb25lVG9PbmU6IGJvb2xlYW47IC8vICMyMFxuXG4gIEBPdXRwdXQoKSB1cGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KHRydWUpO1xuXG4gIHByb3RlY3RlZCBjaGFydDogYW55O1xuICBwcm90ZWN0ZWQgb3B0aW9uc1ZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGVsOiBFbGVtZW50UmVmXG4gICkge31cblxuICB1cGRhdGVPckNyZWF0ZUNoYXJ0KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0ICYmIHRoaXMuY2hhcnQudXBkYXRlKSB7XG4gICAgICB0aGlzLmNoYXJ0LnVwZGF0ZSh0aGlzLm9wdGlvbnNWYWx1ZSwgdHJ1ZSwgdGhpcy5vbmVUb09uZSB8fCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcnQgPSB0aGlzLkhpZ2hjaGFydHNbdGhpcy5jb25zdHJ1Y3RvclR5cGUgfHwgJ2NoYXJ0J10oXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudCxcbiAgICAgICAgdGhpcy5vcHRpb25zVmFsdWUsXG4gICAgICAgIHRoaXMuY2FsbGJhY2tGdW5jdGlvbiB8fCBudWxsXG4gICAgICApO1xuICAgICAgdGhpcy5vcHRpb25zVmFsdWUuc2VyaWVzID0gdGhpcy5jaGFydC51c2VyT3B0aW9ucy5zZXJpZXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7IC8vICM0NFxuICAgIGlmICh0aGlzLmNoYXJ0KSB7ICAvLyAjNTZcbiAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpO1xuICAgICAgdGhpcy5jaGFydCA9IG51bGw7XG4gICAgfVxuICB9XG59XG4iXX0=