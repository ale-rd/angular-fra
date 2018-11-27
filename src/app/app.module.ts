// Con  @ invocamos al package instalado con npm
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';
import { Routes, RouterModule } from '@angular/router';

// Otra estrategia de ruteo: Agrega /#/ a la URL. Sirve por si no tenemos permiso para definir las politicas del servidor
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

import { ItemsComponent } from './items/items/items.component';
import { ItemComponent } from './items/item/item.component';
import { HomeComponent } from './home/home/home.component';
import { ObservComponent } from './observ/observ.component';

const ROUTES: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent },
  {path: "items", component: ItemsComponent},
  {path: "items/:id", component: ItemComponent},
  {path: "*", redirectTo: "home", pathMatch: "full"}
  // El orden importa
]

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ObservComponent
  ],
  imports: [
    BrowserModule,
    ItemsModule,
    HomeModule,
    RouterModule.forRoot( ROUTES )
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
