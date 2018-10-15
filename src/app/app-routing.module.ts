import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// App services
import { AuthGuardService } from './core/auth-guard/auth-guard.service';

// App pages
import { HomepageComponent } from './page/homepage/homepage.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomepageComponent,
    canActivate: [AuthGuardService],
    data: {
      title: 'Homepage'
    }
  },
  { 
    path: 'login', 
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
