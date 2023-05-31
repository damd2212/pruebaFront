import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { Prueba } from '../models/prueba';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {
  private urlEndPoint: string = 'http://localhost:9090/api';
  constructor(private http:HttpClient) { }

  getPruebas():Observable<Prueba[]>{
    return this.http.get<Prueba[]>(this.urlEndPoint+'/pruebas')
  }

  deletePrueba(id:number):Observable<Boolean>{
    return this.http.delete<Boolean>(this.urlEndPoint+"/pruebas/"+id)
  }

  consultarPalindromo(palabra_frase:string,prueba:Prueba):Observable<Boolean>{
    return this.http.post<Boolean>(this.urlEndPoint+'/palindormo/'+palabra_frase,prueba)
  }

  consultarFibonacci(numero:number,prueba:Prueba):Observable<number[]>{
    return this.http.post<number[]>(this.urlEndPoint+'/fibonacci/'+numero,prueba)
  }

  consultarParImpar(numero:number,prueba:Prueba):Observable<Boolean>{
    return this.http.post<Boolean>(this.urlEndPoint+'/parimpar/'+numero,prueba)
  }

  consultarFactorial(numero:number,prueba:Prueba):Observable<number>{
    return this.http.post<number>(this.urlEndPoint+'/factorial/'+numero,prueba)
  }

  consultarFactorialRecursivo(numero:number,prueba:Prueba):Observable<number>{
    return this.http.post<number>(this.urlEndPoint+'/factorialrecursivo/'+numero,prueba)
  }

  consultarMultiplos(numero:number,rango:number,prueba:Prueba):Observable<string>{
    return this.http.post<string>(this.urlEndPoint+'/multiplos/'+numero+'/'+rango,prueba, {responseType: 'text' as 'json' })
  }

}
