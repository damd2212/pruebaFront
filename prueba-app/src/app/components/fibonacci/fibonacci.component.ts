import { Component } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css']
})
export class FibonacciComponent {
  numero_ingresado : number = 0
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}

  ngOnInit() {
  }

  consultarFibonacci(){
    this.prueba.palabra_variables = ""+this.numero_ingresado
    this.prueba.tipo_prueba = "Fibonacci"
    this.pruebaService.consultarFibonacci(this.numero_ingresado,this.prueba).subscribe(res=>{
      console.log(res);
      let cadena = ""
      if (res.length !=0) {
        for (let index = 0; index < res.length; index++) {
          if (index != res.length - 1) {
            cadena = cadena + res[index] + ","
          } else {
            cadena = cadena + res[index]
          }
        }
        cadena = "La secuencia fibonacci es: " + cadena
        console.log(cadena);
      }else{
        cadena = "El valor ingresado debe ser mayor a 0"
        console.log(cadena);
      }
      this.resultado = cadena
    })
  }
}
