import { InjectionToken } from '@angular/core';
import { NgxLTE3LayoutStore } from './layout.store';
import { NgxLTE3LayoutConfig } from './layout.config';

/**
 * [InjectionToken description]
 */
export const AdminLTE3ConfigToken = new InjectionToken('layoutConfig');

/**
 * [layoutStoreFactory description]
 */
export function ngxLTE3LayoutStoreFactory(layoutConfig: NgxLTE3LayoutConfig): NgxLTE3LayoutStore {
    return new NgxLTE3LayoutStore(layoutConfig);
}

/**
 * [layoutProvider description]
 */
export function ngxLTE3LayoutProvider(layoutConfig: NgxLTE3LayoutConfig) {
    return [{
        provide: NgxLTE3LayoutStore,
        useFactory: ngxLTE3LayoutStoreFactory,
        deps: [AdminLTE3ConfigToken]
    }, {
            provide: AdminLTE3ConfigToken,
            useValue: layoutConfig
    }
    ];
}
