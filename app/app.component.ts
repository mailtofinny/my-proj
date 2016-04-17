import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';

import {WorkOrdersComponent} from './workorders.component';
import {WorkOrderDetailComponent} from './workorder-detail.component';

import {ProjectMappingsComponent} from './projectmappings.component';
import {ProjectMappingDetailComponent} from './projectmapping-detail.component';

import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {WorkOrderService} from './workorder.service';
import {ProjectMappingService} from './projectmapping.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
	  <a [routerLink]="['WorkOrders']">Work Orders</a>
	  <a [routerLink]="['ProjectMappings']">Project Mappings</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HeroService,WorkOrderService,ProjectMappingService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/heroes', name: 'Heroes', component: HeroesComponent},
  {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent},
  {path: '/workorders', name: 'WorkOrders', component: WorkOrdersComponent},
  {path: '/workorder/:id', name: 'WorkOrderDetail', component: WorkOrderDetailComponent},
  {path: '/projectmappings', name: 'ProjectMappings', component: ProjectMappingsComponent},
  {path: '/projectmapping/:id', name: 'ProjectMappingDetail', component: ProjectMappingDetailComponent}
])
export class AppComponent {
  title = 'The New Gen Billing Sheet';
}


