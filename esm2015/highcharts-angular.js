import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HighchartsChartComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
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
    ;
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
}
HighchartsChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'highcharts-chart',
                template: ''
            },] },
];
/** @nocollapse */
HighchartsChartComponent.ctorParameters = () => [
    { type: ElementRef, },
];
HighchartsChartComponent.propDecorators = {
    "Highcharts": [{ type: Input },],
    "constructorType": [{ type: Input },],
    "callbackFunction": [{ type: Input },],
    "options": [{ type: Input },],
    "updateChange": [{ type: Output },],
    "update": [{ type: Input },],
    "oneToOne": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { HighchartsChartComponent };
