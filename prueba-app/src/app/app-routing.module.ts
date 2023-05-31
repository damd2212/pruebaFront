import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPruebasComponent } from './components/listar-pruebas/listar-pruebas.component';
import { PalindromoComponent } from './components/palindromo/palindromo.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { ParImparComponent } from './components/par-impar/par-impar.component';
import { MultiplosNumeroComponent } from './components/multiplos-numero/multiplos-numero.component';
import { FactorialComponent } from './components/factorial/factorial.component';
import { FactorialRecursivoComponent } from './components/factorial-recursivo/factorial-recursivo.component';

const routes: Routes = [
  {path:'',redirectTo:'/pruebas',pathMatch:'full'},
  {path:'pruebas', component:ListarPruebasComponent},
  {path:'palindromos', component:PalindromoComponent},
  {path:'fibonacci', component:FibonacciComponent},
  {path:'parimpar', component:ParImparComponent},
  {path:'multiplos', component:MultiplosNumeroComponent},
  {path:'factorial', component:FactorialComponent},
  {path:'factorialrecursivo', component:FactorialRecursivoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
