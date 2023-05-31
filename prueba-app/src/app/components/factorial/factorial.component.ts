import { Component } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent {
  numero_ingresado : number = 0
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}


  consultarFactorial(){
    this.prueba.palabra_variables = ""+this.numero_ingresado
    this.prueba.tipo_prueba = "Factorial"
    this.pruebaService.consultarFactorial(this.numero_ingresado,this.prueba).subscribe(res=>{
      if (res == -1) {
        this.resultado = "No se puede calcular el factorial de un numero negativo"
      } else {
        this.resultado = "El factorial es: "+res
      }
    })
  }
}
