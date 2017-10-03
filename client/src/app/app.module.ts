import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// this allows us to do the [(ngModel)] in our forms
import { FormsModule } from '@angular/forms';

//this allows for routing
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupService } from './services/signup.service';

@NgModule({
  declarations: [
    //what we declare
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    //import for browsers 
    BrowserModule,
    //register Http client module
    HttpClientModule,
    FormsModule,
    HttpModule,
    //path routes from root
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent },
     //default route on app loading
        { path: '', redirectTo: 'welcome', pathMatch: 'full'},
        { path:'signin', component: SigninComponent},
        {path: 'signup', component: SignupComponent},
        //wild card route incase url does not match any route
        //canActivate: [ProductGuardService], --would activate guard route
        { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        
    ]),
    //import feature module
    ProductModule
  ],
    providers: [
        SignupService
    ],
  //adds bootstrap to app
  bootstrap: [AppComponent]
})
export class AppModule { }
