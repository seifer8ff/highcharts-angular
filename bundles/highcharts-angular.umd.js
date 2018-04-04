(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['highcharts-angular'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var HighchartsChartComponent = /** @class */ (function () {
        function HighchartsChartComponent(el) {
            this.el = el;
            this.updateValue = false;
            this.updateChange = new core.EventEmitter(true);
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
            { type: core.Component, args: [{
                        selector: 'highcharts-chart',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        HighchartsChartComponent.ctorParameters = function () { return [
            { type: core.ElementRef, },
        ]; };
        HighchartsChartComponent.propDecorators = {
            "Highcharts": [{ type: core.Input },],
            "constructorType": [{ type: core.Input },],
            "callbackFunction": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "updateChange": [{ type: core.Output },],
            "update": [{ type: core.Input },],
            "oneToOne": [{ type: core.Input },],
        };
        return HighchartsChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.HighchartsChartComponent = HighchartsChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
