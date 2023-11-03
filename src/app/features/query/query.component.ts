import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { KeyCode } from '@core/keyboard/key-code.enum';
import { Task } from '@core/task/task.interface';
import { TaskService } from '@core/task/task.service';
import { UserInputService } from '@core/user-input/user-input.service';
import { Subscription } from 'rxjs';
import { QueryState } from './query-state.enum';
import { Query } from './query.interface';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryComponent implements OnInit {
  queryState = QueryState;

  userInput = '';
  userError = false;

  previousQuery: Query | null = null;
  query!: Query;

  private userInputSub: Subscription | null = null;
  private constrolsSub: Subscription | null = null;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private userInputService: UserInputService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.fillInitialQuery();
    this.startQuery();
  }

  private startQuery(): void {
    this.resetUserInput();
    this.listenUserInput();
    this.listenControls();
  }

  private skipQuery(): void {
    this.fillNextQuery(QueryState.error);
    this.startQuery();
  }

  private handleSuccess(): void {
    this.fillNextQuery(QueryState.success);
    this.startQuery();
  }

  private handleError(): void {
    this.userError = true;
    this.startQuery();
  }

  private resetError(): void {
    this.userError = false;
  }

  private generateTask(): Task {
    return this.taskService.generate();
  }

  private fillInitialQuery(): void {
    this.previousQuery = null;
    this.query = { task: this.generateTask() };
  }

  private fillNextQuery(state: QueryState): void {
    this.previousQuery = {
      task: {
        ...this.query.task,
        userAnswer: this.userInput,
      },
      state,
    };
    this.query = { task: this.generateTask() };
  }

  private handleAnswer(value: string, answer: string): void {
    if (value.length !== answer.length) {
      return;
    }

    if (value === answer) {
      this.handleSuccess();
      return;
    }

    this.handleError();
  }

  private listenUserInput(): void {
    this.userInputSub?.unsubscribe();
    this.userInputSub = this.userInputService
      .listenFloatNumber()
      .subscribe((value) => {
        this.resetError();

        this.userInput = value;
        this.handleAnswer(value, this.query.task.answer);

        this.changeDetector.markForCheck();
      });
  }

  private listenControls(): void {
    this.constrolsSub?.unsubscribe();
    this.constrolsSub = this.userInputService
      .listenControls()
      .subscribe((code) => {
        if (code === KeyCode.Space) {
          this.skipQuery();
          this.changeDetector.markForCheck();
        }
      });
  }

  private resetUserInput(): void {
    this.userInput = '';
  }
}
