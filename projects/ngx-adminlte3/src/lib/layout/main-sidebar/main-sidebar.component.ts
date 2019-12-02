import {
    Component,
    OnInit,
    AfterViewInit,
    ElementRef,
    ViewChild,
    Output,
    EventEmitter,
    TemplateRef,
    ContentChild,
    OnDestroy
} from '@angular/core';
import { NgxLTE3LayoutStore } from '../layout.store';
import { removeSubscriptions } from '../../helpers';
import { LayoutOptions } from '../layout.config';

export interface Item {
    id: number;
    parentId: number;
    label: string;
    route?: string;
    iconClasses?: string;
    children?: Array<Item>;
    isActive?: boolean;
    isCollapsed?: boolean;
    disableCollapse?: boolean;
}

export type Items = Array<Item>;

@Component({
    selector: 'ngxlte3-sidebar-user-panel',
    template: '<ng-template #templateRef><div class="user-panel mt-3 pb-3 mb-3 d-flex"><ng-content></ng-content></div></ng-template>'
})
export class NgxLTE3MainSidebarUserPanelComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'ngxlte3-sidebar-menu-treeview',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>'
})
export class NgxLTE3MainSidebarMenuTreeViewComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'ngxlte3-layout-main-sidebar',
    templateUrl: './main-sidebar.component.html',
    styleUrls: ['./main-sidebar.component.scss']
})
export class NgxLTE3MainSidebarComponent implements OnInit, AfterViewInit, OnDestroy {

    public logo = '#';
    public appName = 'AdminLTE 3';
    public skin: string;
    public layoutOptions: LayoutOptions;
    private subscriptions = [];

    @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('mainSidebar', { static: false }) public mainSidebar: ElementRef;

    @ContentChild(NgxLTE3MainSidebarUserPanelComponent, { static: true })
    public ngxLTE3MainSidebarUserPanelComponent: NgxLTE3MainSidebarUserPanelComponent;
    @ContentChild(NgxLTE3MainSidebarMenuTreeViewComponent, { static: true })
    public ngxLTE3MainSidebarMenuTreeViewComponent: NgxLTE3MainSidebarMenuTreeViewComponent;

    constructor(
        private ngxLTE3LayoutStore: NgxLTE3LayoutStore
    ) { }

   /**
    * @method ngOnInit
    */
    ngOnInit() {
        this.subscriptions.push(this.ngxLTE3LayoutStore.logo.subscribe(value => {
            this.logo = value;
        }));
        this.subscriptions.push(this.ngxLTE3LayoutStore.appName.subscribe(value => {
            this.appName = value;
        }));
        this.subscriptions.push(this.ngxLTE3LayoutStore.layoutOptions.subscribe(layoutOptions => {
            if (layoutOptions.colorVariants && layoutOptions.colorVariants.menuSidebar) {
                this.skin = layoutOptions.colorVariants.menuSidebar;
            } else {
                this.skin = 'dark-primary';
            }
            this.layoutOptions = Object.assign({}, layoutOptions);
        }));
    }

   /**
    * @method ngAfterViewInit
    */
    ngAfterViewInit() {
        this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
    }

   /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }
}

