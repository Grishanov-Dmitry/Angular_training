import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeFormComponent } from './home-form/home-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StylizedHeaderDirective } from './stylized-header.directive';
import { GeneralService } from './general.service';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: HomeFormComponent },
  { path: 'create', component: RegistrationComponent },
  { path: 'main', component: MainComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeFormComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    StylizedHeaderDirective,
    MainComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
