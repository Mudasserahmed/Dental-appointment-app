import { Component } from '@angular/core';
import { IconOptions } from '@angular/material/icon';
export interface PeriodicElement {
  name: string;
  position: number;
  age: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ethan', age: 1, date: '29/04'},
  {position: 2, name: 'Olivia', age: 4, date: '30/04'},
  {position: 3, name: 'Noah', age: 6, date: '01/05'},
  {position: 4, name: 'Ava', age: 9, date: '02/05'},
  {position: 5, name: 'Liam', age: 10, date: '03/05'},
  {position: 6, name: 'Isabella', age: 12, date: '04/05'},
  {position: 7, name: 'James', age: 14, date: '05/05'},
  {position: 8, name: 'Sophia', age: 15, date: '06/05'},
  {position: 9, name: 'Mason', age: 18, date: '07/05'},
  {position: 10, name: 'Charlotte', age: 20, date: '08/05'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'age', 'date'];
  dataSource = ELEMENT_DATA;
}
