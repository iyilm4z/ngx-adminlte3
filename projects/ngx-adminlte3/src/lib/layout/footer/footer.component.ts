import { Component, OnInit, OnDestroy } from '@angular/core';
import { LayoutOptions } from '../layout.config';
import { NgxLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';

@Component({
    selector: 'ngxlte3-layout-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class NgxLTE3FooterComponent implements OnInit, OnDestroy {

    public layoutOptions: LayoutOptions;
    private subscriptions = [];

    constructor(private ngxLTE3LayoutStore: NgxLTE3LayoutStore) { }

    /**
     * @method ngOnInit
     */
    ngOnInit() {
        this.subscriptions.push(this.ngxLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

    /**
     * @method ngOnInit
     */
   ngOnDestroy() {
    this.subscriptions = removeSubscriptions(this.subscriptions);
}
}
