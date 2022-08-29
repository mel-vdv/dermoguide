import { LegalComponent } from './components/legal/legal.component';
import { ConfidComponent } from './components/confid/confid.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: PrincipalComponent},
  {path: 'politique-de-confidentialite', component : ConfidComponent},
  {path: 'mentions-legales', component: LegalComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
