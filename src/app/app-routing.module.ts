import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TestdiabetesComponent } from './componentes/testdiabetes/testdiabetes.component';
import { TestanemiaComponent } from './componentes/testanemia/testanemia.component';
const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'testdiabetes', component: TestdiabetesComponent},
  {path:'testanemia', component: TestanemiaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
