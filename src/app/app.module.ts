import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListaalumnosComponent } from './components/listaalumnos/listaalumnos.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { appRoutingProvider, routing } from './app.routing';
import { AlumnosService } from './services/alumnos.service';
import { GruposComponent } from './components/grupos/grupos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaalumnosComponent,
    HomeComponent,
    MenuComponent,
    GruposComponent,
  ],
  imports: [BrowserModule, routing,HttpClientModule,FormsModule],
  providers: [appRoutingProvider, AlumnosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
