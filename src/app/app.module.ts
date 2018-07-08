import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { AsideComponent } from './structure/aside/aside.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    UsersListComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
