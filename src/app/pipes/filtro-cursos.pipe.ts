import { Pipe, PipeTransform } from '@angular/core';
import { Curso } from '../models/curso';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'filtroCursos'
})
export class FiltroCursosPipe implements PipeTransform {
  transform(cursos: Curso[], filtro: string): Observable<Curso[]> {
    return of(cursos).pipe(
      map(cursosArr => cursosArr.filter(c => c.nombre.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())))
    );
  }
}
