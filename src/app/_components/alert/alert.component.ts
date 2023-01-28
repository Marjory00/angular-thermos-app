import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '../_models';
import { AlertService } from '../_services';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
removeAlert(_t7: any) {
throw new Error('Method not implemented.');
}
cssClasses(_t7: any) {
throw new Error('Method not implemented.');
}
alerts: any;

  constructor() { }

  ngOnInit() {
  }

}
