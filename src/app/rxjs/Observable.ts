import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
 
  getCursos(): Observable<Curso[]> {
    const cursos: Curso[] = [
      { nombre: 'Curso 1', duracion: 30 },
      { nombre: 'Curso 2', duracion: 45 },
      { nombre: 'Curso 3', duracion: 60 },
    ];

    return of(cursos).pipe(delay(1000)); 
  }
}
