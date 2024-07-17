import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ArtesanoComponent } from './components/artesano/artesano.component';

const routes: Routes = [
  {
    path: '*', redirectTo: 'home', pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'publication', component: PublicationComponent},
  { path: 'artesano/:id', component: ArtesanoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
