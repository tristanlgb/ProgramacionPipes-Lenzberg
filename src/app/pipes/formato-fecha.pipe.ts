import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFecha'
})
export class FormatoFechaPipe implements PipeTransform {
  transform(fecha: Date): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado: string = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()} a las ${fecha.getHours()}:${fecha.getMinutes()}`;
        resolve(resultado);
      }, 500); // Simulating a 500ms delay for the asynchronous operation
    });
  }
}
