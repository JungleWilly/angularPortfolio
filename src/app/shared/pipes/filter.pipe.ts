import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../projects.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(projects: Project[], search: string): Project[] | null {
    if (!search.length) {
      return projects;
    } else {
      return projects.filter((project) =>
        project.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  }
}
