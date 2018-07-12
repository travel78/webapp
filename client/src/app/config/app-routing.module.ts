import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/auth/login/login.component';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { PersonComponent } from '../components/person/person.component';
import { CompanyComponent } from '../components/company/company.component';
import { AuthGuardService } from './auth-guard.service';
import { WelcomeComponent } from '../components/welcome/welcome.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {
    path: 'admin',
    loadChildren: 'app/components/admin/admin.module#AdminModule',
    canActivate: [AuthGuardService],
    data: {role: 'Admin'}
  },
  {
    path: 'company', component: CompanyComponent, canActivate: [AuthGuardService],
    data: {role: 'Company'}
  },
  {
    path: 'person', component: PersonComponent,
    canActivate: [AuthGuardService],
    data: {role: 'Person'}
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
