import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent implements OnInit{
  palabra_frase : string = ""
  prueba: Prueba = new Prueba()
  resultado:string = ""

  constructor(private pruebaService:PruebasService){}

  ngOnInit() {
  }

  realizarConsulta(){
    this.prueba.palabra_variables = this.palabra_frase
    this.prueba.tipo_prueba = "Palindormo"
    this.pruebaService.consultarPalindromo(this.palabra_frase,this.prueba).subscribe(res=>{
      if (res == true) {
        this.resultado = "Es una palabra o frase palindroma"
      }else{
        this.resultado = "NO es una palabra o frase palindroma"
      }
    })
  }
}
