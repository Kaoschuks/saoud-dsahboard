import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent implements OnInit {

  @Input() color: string;
  @Input() title: string;
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {}

}
