import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { KeyCode } from '@core/keyboard/key-code.enum';
import { RuleService } from '@core/rule/rule.service';
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

  previousUserInput = '';
  userInput = '';
  userError = false;
  successCount = 0;

  previousQuery: Query | null = null;
  query!: Query;

  private userInputSub: Subscription | null = null;
  private constrolsSub: Subscription | null = null;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private userInputService: UserInputService,
    private ruleService: RuleService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.listenRulesChange();

    this.fillInitialQuery();
    this.startQuery();
  }

  private listenRulesChange(): void {
    this.ruleService.rulesChange$.subscribe(() => {
      this.fillInitialQuery();
      this.startQuery();
      this.changeDetector.markForCheck();
    });
  }

  private startQuery(): void {
    this.resetUserInput();
    this.listenUserInput();
    this.listenControls();
  }

  private skipQuery(): void {
    this.resetError();
    this.fillNextQuery(QueryState.error);
    this.startQuery();
  }

  private handleSuccess(): void {
    this.successCount++;
    this.fillNextQuery(QueryState.success);
    this.startQuery();
  }

  private handleError(): void {
    this.successCount = 0;
    this.userError = true;
    this.startQuery();
  }

  private resetError(): void {
    this.userError = false;
  }

  private generateTask(): Task {
    const enabledRules = this.ruleService.getEnabledRules();
    const rules = enabledRules.length
      ? enabledRules
      : this.ruleService.getAllRules();
    return this.taskService.generate(rules);
  }

  private fillInitialQuery(): void {
    this.previousQuery = null;
    this.query = { task: this.generateTask() };
  }

  private fillNextQuery(state: QueryState): void {
    this.previousUserInput =
      state === QueryState.success ? this.userInput : this.query.task.answer;

    this.previousQuery = {
      task: this.query.task,
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
