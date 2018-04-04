import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HighchartsChartComponent = /** @class */ (function () {
    function HighchartsChartComponent(el) {
        this.el = el;
        this.updateValue = false;
        this.updateChange = new EventEmitter(true);
        this.updateOrCreateChart = function () {
            if (this.chart && this.chart.update) {
                this.chart.update(this.optionsValue, true, this.oneToOne || false);
            }
            else {
                this.chart = this.Highcharts[this.constructorType || 'chart'](this.el.nativeElement, this.optionsValue, this.callbackFunction || null);
                this.optionsValue.series = this.chart.userOptions.series;
            }
        };
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
    HighchartsChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'highcharts-chart',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    HighchartsChartComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    HighchartsChartComponent.propDecorators = {
        "Highcharts": [{ type: Input },],
        "constructorType": [{ type: Input },],
        "callbackFunction": [{ type: Input },],
        "options": [{ type: Input },],
        "updateChange": [{ type: Output },],
        "update": [{ type: Input },],
        "oneToOne": [{ type: Input },],
    };
    return HighchartsChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HighchartsChartComponent };
