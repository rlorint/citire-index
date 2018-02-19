import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SessionService } from './session.service';
import { UserService } from './user.service';
import { AppRoutingModule } from './app-routing.module';
import { TenantDetailsComponent } from './tenant-details/tenant-details.component';
import { IndexesService } from './indexes.service';

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
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [SessionService, UserService, IndexesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
