import {Injectable} from 'angular2/core';
import {WORKORDERS} from './mock-workorders';

@Injectable()
export class WorkOrderService {
  getWorkOrders() {
    return Promise.resolve(WORKORDERS);
  }

	getWorkOrder(id: number) {
    return Promise.resolve(WORKORDERS).then(
      workorders => workorders.filter(workorder => workorder.id === id)[0]
    );
  }
}