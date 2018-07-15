import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { QustionService } from '../services/qustion.service';
import { QDataService } from '../Service/qdata.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[];
  constructor(private qustService: QDataService) { 
    qustService.getQuestData().subscribe((data) => {
      this.questions = data;      
    })
  }

  ngOnInit() {
  }

}
