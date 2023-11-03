import { Component, OnInit } from '@angular/core';
import { UserInputService } from '@core/user-input/user-input.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
})
export class QueryComponent implements OnInit {
  userInput = '';

  constructor(private userInputService: UserInputService) {}

  ngOnInit(): void {
    this.userInputService.listenFloatNumber().subscribe((value) => {
      this.userInput = value;
    });
  }
}
