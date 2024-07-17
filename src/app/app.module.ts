import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PublicationComponent } from './components/publication/publication.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TradicionComponent } from './components/tradicion/tradicion.component';
import { ArtesanosComponent } from './components/artesanos/artesanos.component';
import { MuestraUnoComponent } from './components/muestra-uno/muestra-uno.component';
import { MuestraDosComponent } from './components/muestra-dos/muestra-dos.component';
import { MuestraTresComponent } from './components/muestra-tres/muestra-tres.component';
import { ArtesanoComponent } from './components/artesano/artesano.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PublicationComponent,
    NavbarComponent,
    FooterComponent,
    TradicionComponent,
    ArtesanosComponent,
    MuestraUnoComponent,
    MuestraDosComponent,
    MuestraTresComponent,
    ArtesanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
