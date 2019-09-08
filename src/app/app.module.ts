import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MyserviceService } from './myservice.service';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';

const appRoutes: Routes = [
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'dashboard', canActivate:[AuthGuard], component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyserviceService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
