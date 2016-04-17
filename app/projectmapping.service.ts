import {Injectable} from 'angular2/core';
import {PROJECTMAPPINGS} from './mock-projectmappings';

@Injectable()
export class ProjectMappingService {
  getProjectMappings() {
    return Promise.resolve(PROJECTMAPPINGS);
  }

	getProjectMapping(won: number) {
    return Promise.resolve(PROJECTMAPPINGS).then(
      projectmappings => projectmappings.filter(projectmapping => projectmapping.won === won)[0]
    );
  }
}