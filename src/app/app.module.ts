import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import localeFr from '@angular/common/locales/fr';
import { TaskModule } from './task/task.module';
import { ProjectModule } from './project/project.module';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { FocusUserComponent } from './user/focus-user/focus-user.component';
import { UserModule } from './user/user.module';

registerLocaleData(localeFr)

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    EditUserComponent,
    FocusUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TaskModule,
    ProjectModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
