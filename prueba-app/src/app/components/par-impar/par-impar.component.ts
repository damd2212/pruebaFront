import { Component } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-par-impar',
  templateUrl: './par-impar.component.html',
  styleUrls: ['./par-impar.component.css']
})
export class ParImparComponent {
  numero_ingresado : number = 0
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}

  ngOnInit() {
  }

  consultarParImpar(){
    this.prueba.palabra_variables = ""+this.numero_ingresado
    this.prueba.tipo_prueba = "Par o Impar"
    this.pruebaService.consultarParImpar(this.numero_ingresado,this.prueba).subscribe(res=>{
      if (res == true) {
        this.resultado = "El numero ingresado es par"
      } else {
        this.resultado = "El numero ingresado NO es par"
      }
    })
  }
}
