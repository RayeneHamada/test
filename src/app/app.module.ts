import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';



import { PersonneService } from './container/container.service';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'container', component: ContainerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PersonneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
