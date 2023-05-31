import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ListarPruebasComponent } from './components/listar-pruebas/listar-pruebas.component';
import { PalindromoComponent } from './components/palindromo/palindromo.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { ParImparComponent } from './components/par-impar/par-impar.component';
import { MultiplosNumeroComponent } from './components/multiplos-numero/multiplos-numero.component';
import { FactorialComponent } from './components/factorial/factorial.component';
import { FactorialRecursivoComponent } from './components/factorial-recursivo/factorial-recursivo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ListarPruebasComponent,
    PalindromoComponent,
    FibonacciComponent,
    ParImparComponent,
    MultiplosNumeroComponent,
    FactorialComponent,
    FactorialRecursivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
