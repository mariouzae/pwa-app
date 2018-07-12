import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';

// Rotas
import { Routing, RoutingProviders } from './app.routing';

// Directives
import { AlertDirective } from './directives/alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BannerComponent,
    HomeComponent,
    AlertDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Routing
  ],
  // Load a singleton object for the entire app
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
