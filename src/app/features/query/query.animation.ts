import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { QueryState } from './query-state.enum';

const appearDuration = '1.2s ease';
const duration = '300ms ease';

// const appearDuration = '1.2s ease';
// const duration = '300ms ease';

const colors = {
  query: '#eee',
  success: '#4e9f3d',
  error: '#c72c41',
};

export const queryAnimation = trigger('queryAnimation', [
  state(
    QueryState.query,
    style({
      color: colors.query,
      opacity: '1',
    })
  ),
  state(
    QueryState.success,
    style({
      top: 'auto',
      bottom: '75%',
      opacity: '0.4',
      fontSize: '0.7em',
      color: colors.success,
    })
  ),
  state(
    QueryState.error,
    style({
      color: colors.error,
    })
  ),
  state(
    QueryState.skip,
    style({
      top: 'auto',
      bottom: '75%',
      opacity: '0.4',
      fontSize: '0.7em',
      color: colors.error,
    })
  ),

  transition(`${QueryState.query} => ${QueryState.success}`, [
    animate(duration),
  ]),
  transition(`${QueryState.query} => ${QueryState.error}`, [animate(duration)]),
  transition(`${QueryState.query} => ${QueryState.skip}`, [animate(duration)]),

  transition(`${QueryState.error} => ${QueryState.query}`, [animate(duration)]),

  transition(':enter', [style({ opacity: '0' }), animate(appearDuration)]),

  transition(':leave', [
    animate(duration, style({ bottom: '150%', opacity: '0' })),
  ]),
]);
