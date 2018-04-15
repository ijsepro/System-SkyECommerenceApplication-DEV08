import { Component, OnInit } from '@angular/core';

// import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'app-tables',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    public tableData1: TableData;

    constructor() { }

    ngOnInit() {
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary','Item Code','QTY','Amount','Statues'],
            dataRows: [

            ]
        };
    }

}
