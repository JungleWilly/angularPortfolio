import {
  query,
  transition,
  trigger,
  style,
  stagger,
  animate,
  keyframes,
} from '@angular/animations';

export const projectListAnimation = trigger('listAnimations', [
  transition('* <=> *', [
    query(':enter', style({ opacity: '0' }), { optional: true }),
    query(
      ':enter',
      stagger('200ms', [
        animate(
          '0.5s 0.5s ease-in',
          keyframes([
            style({
              opacity: 0,
              transform: 'translateY(-75px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])
        ),
      ]),
      { optional: true }
    ),

    query(':leave', style({ opacity: 1 }), { optional: true }),
    query(
      ':leave',
      stagger('200ms', [
        animate(
          '0.5s ease-in',
          keyframes([
            style({
              opacity: 1,
              transform: 'translateY(0px)',
              offset: 0,
            }),
            style({
              opacity: 0.5,
              transform: 'translateY(35px)',
              offset: 0.3,
            }),
            style({
              opacity: 0,
              transform: 'translateY(-75px)',
              offset: 1,
            }),
          ])
        ),
      ]),
      { optional: true }
    ),
  ]),
]);
