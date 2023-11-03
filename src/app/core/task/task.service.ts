import { Injectable } from '@angular/core';
import { TaskOperation } from './task-operation.enum';
import { Task } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  generate(): Task {
    return this.generatePlusTask();
  }

  private generatePlusTask(): Task {
    const a = this.getRandomInt(0, 100);
    const b = this.getRandomInt(0, 100);
    return {
      a: a.toString(),
      b: b.toString(),
      operation: TaskOperation.plus,
      answer: (a + b).toString(),
    };
  }

  private getRandomInt(min: number, max: number): number {
    return Math.round(Math.random() * (max - min)) + min;
  }
}
