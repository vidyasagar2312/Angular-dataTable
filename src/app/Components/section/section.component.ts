import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  email: string;
  status: string;
  access: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Jana Strassmann',
    email: 'batz.mortime@yahoo.com',
    status: 'Active',
    access: 'Owner',
  },
  {
    name: 'June Bowman',
    email: 'ullrich.owen@kristin.biz',
    status: 'Inactive',
    access: 'Manager',
  },
  {
    name: 'Kwaak Seong-min',
    email: 'kale_lehner@yahoo.com',
    status: 'Inactive',
    access: 'Read',
  },
  {
    name: 'Leon Hunt',
    email: 'ullrich.owen@kristin.com',
    status: 'Inactive',
    access: 'Manager',
  },
];

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
})
export class SectionComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'status', 'access'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
