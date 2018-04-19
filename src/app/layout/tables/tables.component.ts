import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss',
        './css/bootstrap.min.css',
        './css/bootstrap-grid.css',
        './css/bootstrap-reboot.css'
    ],


    animations: [routerTransition()]
})


export class TablesComponent implements OnInit {
    constructor() {

        // TestApp = angular.module('TestApp', ['TestApp.controllers', 'smart-table', 'ui.bootstrap']);

    }

    ngOnInit() {}
}
