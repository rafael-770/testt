import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { AsideComponent } from './structure/aside/aside.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserComponent } from './user/user.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { QustionService } from './services/qustion.service';
import { QDataService } from './Service/qdata.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    UsersListComponent,
    UserComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    QustionService,
    QDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
