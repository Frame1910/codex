import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';
import { TaxCheckComponent } from './tax-check/tax-check.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent, canActivate: [AuthGuard], children: [
      { path: 'tax-check', component: TaxCheckComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
