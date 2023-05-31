import { Component, OnInit } from '@angular/core';
import { Prueba } from 'src/app/models/prueba';
import { PruebasService } from 'src/app/services/pruebas.service';

@Component({
  selector: 'app-listar-pruebas',
  templateUrl: './listar-pruebas.component.html',
  styleUrls: ['./listar-pruebas.component.css']
})
export class ListarPruebasComponent implements OnInit{

  pruebas:Prueba[] = []

  constructor(private pruebaService:PruebasService){}

  ngOnInit(): void {
    this.pruebaService.getPruebas().subscribe(res=>{
      this.pruebas = res
    })
  }

  eliminarRegistro(id:number){
    this.pruebaService.deletePrueba(id).subscribe(res=>{
      if (res) {
        console.log("Prueba eliminada");
      }else{
        console.log("Erro al eliminar la prueba");
      }
      this.ngOnInit()
    })
  }
}
