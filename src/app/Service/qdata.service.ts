import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Question } from '../models/question'
import { Observable } from 'rxjs/internal/observable'


@Injectable({
  providedIn: 'root'
})
export class QDataService {

  questions: Question[];

  constructor(private http: HttpClient) { }

  getQuestData(): Observable<Question[]> {
    return this.http.get<Question[]>('assets/mock/questions.json')
  }
}
