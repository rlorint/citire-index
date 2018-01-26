import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SessionService } from './session.service';
import { UserService } from './user.service';
import { AppRoutingModule } from './/app-routing.module';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TenantDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [SessionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
