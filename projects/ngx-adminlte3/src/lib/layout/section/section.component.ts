import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2, TemplateRef, ContentChild, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { NavigationEnd, RouterEvent } from '@angular/router';
import { RoutingService } from '../../services/routing.service';
import { removeSubscriptions } from '../../helpers';

@Component({
    selector: 'ngxlte3-layout-section-header',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLTE3LayoutSectionHeaderComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}

@Component({
    selector: 'ngxlte3-layout-section-content',
    template: '<ng-template #templateRef><ng-content></ng-content></ng-template>',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLTE3LayoutSectionContentComponent {
    @ViewChild('templateRef', { static: true }) public templateRef: TemplateRef<any>;
}


@Component({
    selector: 'ngxlte3-layout-section',
    templateUrl: './section.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxLTE3LayoutSectionComponent implements OnInit, AfterViewInit, OnDestroy {
    NAV_HEADER_HEIGHT = 57;

    @Input() fixHeader = false;
    
    private subscriptions = [];

    @ViewChild('sectionHeader', { static: true }) sectionHeader: ElementRef;
    @ViewChild('sectionContent', { static: true }) sectionContent: ElementRef;

    @ContentChild(NgxLTE3LayoutSectionHeaderComponent, { static: true })
    public ngxLTE3LayoutSectionHeaderComponent: NgxLTE3LayoutSectionHeaderComponent;
    @ContentChild(NgxLTE3LayoutSectionContentComponent, { static: true })
    public ngxLTE3LayoutSectionContentComponent: NgxLTE3LayoutSectionContentComponent;

    constructor(
        protected renderer: Renderer2,
        public routingService: RoutingService) { }

    ngOnInit() {
        this.subscriptions.push(this.routingService.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationEnd) {
                //this.updateHeightSectionContent();
            }
        }));
    }

    ngAfterViewInit(): void {       
        if (this.fixHeader) { 
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'height', this.NAV_HEADER_HEIGHT + 'px');
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'padding', '10px 0.5rem 10px');
            this.renderer.setStyle(this.sectionHeader.nativeElement, 'overflow', 'hidden');
            this.updateHeightSectionContent();
        }
        
    }

    /**
    * @method ngOnDestroy
    */
    ngOnDestroy() {
        this.subscriptions = removeSubscriptions(this.subscriptions);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.updateHeightSectionContent();
    }

    @HostListener('window:load', ['$event'])
    onChange(event) {        
        this.updateHeightSectionContent();
    }
    updateHeightSectionContent() { 
        if (this.fixHeader) { 
            const mainHeader = document.querySelector('.main-header');
            const mainFooter = document.querySelector('.main-footer');
            const mainHeaderHeight = mainHeader ? mainHeader.getBoundingClientRect().height : 0;
            const mainFooterHeight = mainFooter ? mainFooter.getBoundingClientRect().height : 0;

            const height = (window.innerHeight - (mainHeaderHeight + mainFooterHeight) - this.sectionHeader.nativeElement.offsetHeight);
            this.renderer.setStyle(this.sectionContent.nativeElement, 'height', height + 'px');
            this.renderer.setStyle(this.sectionContent.nativeElement, 'overflow', 'auto');
        }
        
    }
}
