import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfilComponent } from './components/user-profil/user-profil.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: UserRegisterComponent},
  { path: 'profil/:id', component: UserProfilComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
