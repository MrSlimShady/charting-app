import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompareComponent } from './components/compare/compare.component';
import { IpoDetailsComponent } from './components/ipo-details/ipo-details.component';




const routes: Routes = [
  {path: '',component:DashboardComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'client/:id',component:ClientDetailsComponent},
  {path: 'client/add',component:AddClientComponent},
  {path: 'client/edit/:id',component:EditClientComponent},
  {path: 'compare',component:CompareComponent},
  {path: 'ipos',component:IpoDetailsComponent},
  {path: 'settings',component:SettingsComponent},
  {path: '**',component:NotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
