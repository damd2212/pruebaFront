import { Component } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-multiplos-numero',
  templateUrl: './multiplos-numero.component.html',
  styleUrls: ['./multiplos-numero.component.css']
})
export class MultiplosNumeroComponent {
  numero_ingresado : number = 0
  rango_ingresado : number = 0
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}

  consultarMultiplos(){
    this.prueba.palabra_variables = "Valor: "+this.numero_ingresado + " Rango:"+this.rango_ingresado
    this.prueba.tipo_prueba = "Multiplos de un numero"
    this.pruebaService.consultarMultiplos(this.numero_ingresado,this.rango_ingresado,this.prueba).subscribe(res=>{
      console.log(res);
      this.resultado = res
    })
  }
}
