import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {WorkOrderService} from './workorder.service';
import {WorkOrderDetailComponent} from './workorder-detail.component';
import {WorkOrder} from './workorder';

@Component({
  selector: 'my-workorders',
  templateUrl: 'app/workorders.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [WorkOrderDetailComponent]
})
export class WorkOrdersComponent implements OnInit {
  workorders: WorkOrder[];
  selectedWorkOrder: WorkOrder;

  constructor(private _workorderService: WorkOrderService, private _router: Router) { }

  getWorkOrders() {
    this._workorderService.getWorkOrders().then(workorders => this.workorders = workorders);
  }

  gotoDetail() {
    this._router.navigate(['WorkOrderDetail', { won: this.selectedWorkOrder.id }]);
  }

  ngOnInit() {
    this.getWorkOrders();
  }

  onSelect(workorder: WorkOrder) { this.selectedWorkOrder = workorder; }
}