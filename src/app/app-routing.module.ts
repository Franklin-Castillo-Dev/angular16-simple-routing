import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AnimalsComponent } from './views/animals/animals.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, // Route to HomeComponent
  {path: 'animals', component: AnimalsComponent} //Route to AnimalsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
