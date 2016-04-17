import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {ProjectMappingService} from './projectmapping.service';
import {ProjectMappingDetailComponent} from './projectmapping-detail.component';
import {ProjectMapping} from './projectmapping';

@Component({
  selector: 'my-projectmappings',
  templateUrl: 'app/projectmappings.component.html',
  styleUrls: ['app/heroes.component.css'],
  directives: [ProjectMappingDetailComponent]
})
export class ProjectMappingsComponent implements OnInit {
  projectmappings: ProjectMapping[];
  selectedProjectMapping: ProjectMapping;

  constructor(private _projectmappingService: ProjectMappingService, private _router: Router) { }

  getProjectMappings() {
    this._projectmappingService.getProjectMappings().then(projectmappings => this.projectmappings = projectmappings);
  }

  gotoDetail() {
    this._router.navigate(['ProjectMappingDetail', { won: this.selectedProjectMapping.won }]);
  }

  ngOnInit() {
    this.getProjectMappings();
  }

  onSelect(projectmapping: ProjectMapping) { this.selectedProjectMapping = projectmapping; }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/