(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('highcharts-angular', ['exports', '@angular/core'], factory) :
    (factory((global['highcharts-angular'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HighchartsChartComponent = (function () {
        function HighchartsChartComponent(el) {
            this.el = el;
            this.updateChange = new core.EventEmitter(true);
        }
        Object.defineProperty(HighchartsChartComponent.prototype, "options", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function (val) {
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
            { type: core.Component, args: [{
                        selector: 'highcharts-chart',
                        template: ''
                    },] },
        ];
        /** @nocollapse */
        HighchartsChartComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        HighchartsChartComponent.propDecorators = {
            Highcharts: [{ type: core.Input }],
            constructorType: [{ type: core.Input }],
            callbackFunction: [{ type: core.Input }],
            options: [{ type: core.Input }],
            update: [{ type: core.Input }],
            oneToOne: [{ type: core.Input }],
            updateChange: [{ type: core.Output }]
        };
        return HighchartsChartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var HighchartsChartModule = (function () {
        function HighchartsChartModule() {
        }
        HighchartsChartModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.HighchartsChartModule = HighchartsChartModule;
    exports.HighchartsChartComponent = HighchartsChartComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGNoYXJ0cy1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vaGlnaGNoYXJ0cy1hbmd1bGFyL2xpYi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vaGlnaGNoYXJ0cy1hbmd1bGFyL2xpYi9oaWdoY2hhcnRzLWNoYXJ0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hpZ2hjaGFydHMtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGNoYXJ0c0NoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgSGlnaGNoYXJ0czogYW55O1xuICBASW5wdXQoKSBjb25zdHJ1Y3RvclR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgY2FsbGJhY2tGdW5jdGlvbjogYW55O1xuICBASW5wdXQoKSBzZXQgb3B0aW9ucyh2YWw6IGFueSkge1xuICAgIHRoaXMub3B0aW9uc1ZhbHVlID0gdmFsO1xuICAgIHRoaXMudXBkYXRlT3JDcmVhdGVDaGFydCgpO1xuICB9XG4gIEBJbnB1dCgpIHNldCB1cGRhdGUodmFsOiBib29sZWFuKSB7XG4gICAgaWYgKHZhbCkge1xuICAgICAgdGhpcy51cGRhdGVPckNyZWF0ZUNoYXJ0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUNoYW5nZS5lbWl0KGZhbHNlKTsgLy8gY2xlYXIgdGhlIGZsYWcgYWZ0ZXIgdXBkYXRlXG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIG9uZVRvT25lOiBib29sZWFuOyAvLyAjMjBcblxuICBAT3V0cHV0KCkgdXBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPih0cnVlKTtcblxuICBwcm90ZWN0ZWQgY2hhcnQ6IGFueTtcbiAgcHJvdGVjdGVkIG9wdGlvbnNWYWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgdXBkYXRlT3JDcmVhdGVDaGFydCgpIHtcbiAgICBpZiAodGhpcy5jaGFydCAmJiB0aGlzLmNoYXJ0LnVwZGF0ZSkge1xuICAgICAgdGhpcy5jaGFydC51cGRhdGUodGhpcy5vcHRpb25zVmFsdWUsIHRydWUsIHRoaXMub25lVG9PbmUgfHwgZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXJ0ID0gdGhpcy5IaWdoY2hhcnRzW3RoaXMuY29uc3RydWN0b3JUeXBlIHx8ICdjaGFydCddKFxuICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgIHRoaXMub3B0aW9uc1ZhbHVlLFxuICAgICAgICB0aGlzLmNhbGxiYWNrRnVuY3Rpb24gfHwgbnVsbFxuICAgICAgKTtcbiAgICAgIHRoaXMub3B0aW9uc1ZhbHVlLnNlcmllcyA9IHRoaXMuY2hhcnQudXNlck9wdGlvbnMuc2VyaWVzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkgeyAvLyAjNDRcbiAgICBpZiAodGhpcy5jaGFydCkgeyAgLy8gIzU2XG4gICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuY2hhcnQgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0hpZ2hjaGFydHNDaGFydENvbXBvbmVudH0gZnJvbSAnLi9oaWdoY2hhcnRzLWNoYXJ0LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXSxcbiAgZXhwb3J0czogWyBIaWdoY2hhcnRzQ2hhcnRDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBIaWdoY2hhcnRzQ2hhcnRNb2R1bGUge31cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb21wb25lbnQiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBMkJFLGtDQUNZLEVBQWM7WUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO2dDQU5ELElBQUlBLGlCQUFZLENBQVUsSUFBSSxDQUFDO1NBT3BEO1FBbkJKLHNCQUFhLDZDQUFPOzs7O2dCQUFwQixVQUFxQixHQUFRO2dCQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDNUI7OztXQUFBO1FBQ0Qsc0JBQWEsNENBQU07Ozs7Z0JBQW5CLFVBQW9CLEdBQVk7Z0JBQzlCLElBQUksR0FBRyxFQUFFO29CQUNQLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO29CQUMzQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7YUFDRjs7O1dBQUE7Ozs7UUFZRCxzREFBbUI7OztZQUFuQjtnQkFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUM7aUJBQ3BFO3FCQUFNO29CQUNMLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxDQUMzRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFDckIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FDOUIsQ0FBQztvQkFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7aUJBQzFEO2FBQ0Y7Ozs7UUFFRCw4Q0FBVzs7O1lBQVg7O2dCQUNFLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTs7b0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Y7O29CQS9DRkMsY0FBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxrQkFBa0I7d0JBQzVCLFFBQVEsRUFBRSxFQUFFO3FCQUNiOzs7Ozt3QkFMbUJDLGVBQVU7Ozs7aUNBTzNCQyxVQUFLO3NDQUNMQSxVQUFLO3VDQUNMQSxVQUFLOzhCQUNMQSxVQUFLOzZCQUlMQSxVQUFLOytCQU1MQSxVQUFLO21DQUVMQyxXQUFNOzt1Q0F0QlQ7Ozs7Ozs7QUNBQTs7OztvQkFHQ0MsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRSxDQUFFLHdCQUF3QixDQUFFO3dCQUMxQyxPQUFPLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtxQkFDdEM7O29DQU5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=