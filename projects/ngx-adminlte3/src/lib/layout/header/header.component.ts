import { Component, OnInit, Output, EventEmitter, ViewChild, TemplateRef, ContentChild, Renderer2, OnDestroy, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BrightnessColor, LayoutOptions } from '../layout.config';
import { NgxLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';

/**
 * Header Logo
 */
@Component({
    selector: 'ngxlte3-layout-header-left',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class NgxLTE3LayoutHeaderLeftComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

/**
 * Header Logo Mini
 */
@Component({
    selector: 'ngxlte3-layout-header-right',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class NgxLTE3LayoutHeaderRightComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'ngxlte3-layout-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class NgxLTE3HeaderComponent implements OnInit, OnDestroy {
    @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
    @Output() toggleControlSidebar: EventEmitter<any> = new EventEmitter<any>();

    @Input() useToggleMenuSidebar = true;
    @Input() useToggleControlSidebar = true;

    public layoutOptions: LayoutOptions;
    public searchForm: FormGroup;
    public skin: BrightnessColor;
    private subscriptions = [];

    @ContentChild(NgxLTE3LayoutHeaderLeftComponent, { static: true })
    public ngxLTE3LayoutHeaderLeftComponent: NgxLTE3LayoutHeaderLeftComponent;
    @ContentChild(NgxLTE3LayoutHeaderRightComponent, { static: true })
    public ngxLTE3LayoutHeaderRightComponent: NgxLTE3LayoutHeaderRightComponent;

    constructor(
        private renderer: Renderer2,
        private ngxLTE3LayoutStore: NgxLTE3LayoutStore) {
    }

    ngOnInit() {
        this.subscriptions.push(this.ngxLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            if (layoutOptions.colorVariants && layoutOptions.colorVariants.navbar) {
                this.skin = layoutOptions.colorVariants.navbar;
            } else {
                this.skin = { brightness: 'dark', color: 'primary' };
            }
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
        this.searchForm = new FormGroup({
            search: new FormControl(null)
        });
    }

    toggleMenuSidebarHandle() {
        if (this.layoutOptions.sidebarMenuOpened) {
            this.renderer.removeClass(document.body, 'sidebar-open');
            this.renderer.addClass(document.body, 'sidebar-collapse');
            this.layoutOptions.sidebarMenuOpened = false;
        } else {
            this.renderer.removeClass(document.body, 'sidebar-collapse');
            this.renderer.addClass(document.body, 'sidebar-open');
            this.layoutOptions.sidebarMenuOpened = true;
        }
        this.ngxLTE3LayoutStore.setLayoutOptions(Object.assign({}, this.layoutOptions));
        this.toggleMenuSidebar.emit(this.layoutOptions.sidebarMenuOpened);
    }

    toggleControlSidebarHandle() {
        if (this.layoutOptions.sidebarControlOpened) {
            this.renderer.removeClass(document.body, 'control-sidebar-open');
            this.renderer.addClass(document.body, 'control-sidebar-collapse');
            this.layoutOptions.sidebarControlOpened = false;
        } else {
            this.renderer.removeClass(document.body, 'control-sidebar-collapse');
            this.renderer.addClass(document.body, 'control-sidebar-open');
            this.layoutOptions.sidebarControlOpened = true;
        }
        this.ngxLTE3LayoutStore.setLayoutOptions(Object.assign({}, this.layoutOptions));
        this.toggleControlSidebar.emit(this.layoutOptions.sidebarControlOpened);
    }

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}
