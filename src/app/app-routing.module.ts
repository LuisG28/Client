import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlUSRComponent } from './component/control-usr/control-usr.component';
import { JustificantesComponent } from './component/justificantes/justificantes.component';
import { FormUsrComponent } from './component/form-usr/form-usr.component';


const routes: Routes = [
  {path: 'Usuarios', component:ControlUSRComponent},
  {path:'Justificantes', component: JustificantesComponent},
  {path: 'FormUsr', component:FormUsrComponent},
  {path:'**',pathMatch:'full', redirectTo: 'Usuarios'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
