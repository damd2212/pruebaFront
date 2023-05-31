import { Component } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-factorial-recursivo',
  templateUrl: './factorial-recursivo.component.html',
  styleUrls: ['./factorial-recursivo.component.css']
})
export class FactorialRecursivoComponent {
  numero_ingresado : number = 0
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}
  consultarFactorialRecursivo(){
    this.prueba.palabra_variables = ""+this.numero_ingresado
    this.prueba.tipo_prueba = "Factorial Recursivo"
    this.pruebaService.consultarFactorialRecursivo(this.numero_ingresado,this.prueba).subscribe(res=>{
      if (res==-1) {
        this.resultado = "No es posible calcular el factorial de un valor negativo"
      } else {
        this.resultado = "El factorial es: "+res
      }
    })
  }
}
