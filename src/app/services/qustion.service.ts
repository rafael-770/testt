import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class QustionService {

  questions: Question[];
  
  constructor(private http: HttpClient) { }

  public getQuestions(): Observable<Question[]> {
    
    return this.http.get<Question[]>('assets/mock/questions.json')
  }
}
