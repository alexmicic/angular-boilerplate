import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// App modules
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// App page modules
import { HomepageModule } from './pages/homepage/homepage.module';
import { LoginModule } from './pages/login/login.module';

// App authorize service
// I am wired to the app in the INIT phase, if you don't need me, please delete me !!!
import { AuthorizeService } from './core/authorize/authorize.service';
export function authorizeApp(authorizeService: AuthorizeService) {
  return () => authorizeService.authorize();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular core modules
    AppRoutingModule,

    // app modules
    CoreModule,
    SharedModule,

    // app page modules
    HomepageModule,
    LoginModule
  ],
  providers: [
    AuthorizeService,
    { provide: APP_INITIALIZER, useFactory: authorizeApp, deps: [AuthorizeService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
