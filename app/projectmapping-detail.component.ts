import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {ProjectMapping} from './projectmapping';
import {ProjectMappingService} from './projectmapping.service';

@Component({
  selector: 'my-projectmapping-detail',
  templateUrl: 'app/projectmapping-detail.component.html',
  styleUrls: ['app/projectmapping-detail.component.css']
})
export class ProjectMappingDetailComponent implements OnInit {
  @Input() projectmapping: ProjectMapping;

  constructor(private _projectmappingService: ProjectMappingService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let won = +this._routeParams.get('won');
    this._projectmappingService.getProjectMapping(won).then(projectmapping => this.projectmapping = projectmapping);
  }

  goBack() {
    window.history.back();
  }
}
