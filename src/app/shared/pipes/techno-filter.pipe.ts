import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../projects.model';

@Pipe({
  name: 'technoFilter',
})
export class TechnoFilterPipe implements PipeTransform {
  transform(projects: Project[], search: string): Project[] | null {
    if (!search.length) {
      return projects;
    } else {
      return projects.filter((project) => {
        for (const techno of project.techno) {
          if (techno.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
            return true;
        }
      });
    }
  }
}
