import { Injectable } from '@angular/core';
import { MathService } from '@core/math/math.service';
import { Rule } from '@core/rule/rule.interface';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  generate(taskRules: Rule[]): Task {
    const randomIndex = MathService.getRandomInt(0, taskRules.length - 1);
    return taskRules[randomIndex].getTask();
  }
}
