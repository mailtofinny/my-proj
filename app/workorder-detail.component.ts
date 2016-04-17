import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {WorkOrder} from './workorder';
import {WorkOrderService} from './workorder.service';

@Component({
  selector: 'my-workorder-detail',
  templateUrl: 'app/workorder-detail.component.html',
  styleUrls: ['app/workorder-detail.component.css']
})
export class WorkOrderDetailComponent implements OnInit {
  @Input() workorder: WorkOrder;

  constructor(private _workorderService: WorkOrderService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let won = +this._routeParams.get('won');
    this._workorderService.getWorkOrder(won).then(workorder => this.workorder = workorder);
  }

  goBack() {
    window.history.back();
  }
}
