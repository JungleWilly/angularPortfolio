import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
  state,
} from '@angular/animations';

// Basic

// export const fader = trigger('routeAnimations', [
//   transition('* <=> *', [
//     query(':enter, :leave', [
//       style({
//         position: 'absolute',
//         left: 0,
//         width: '100%',
//         opacity: 0,
//         transform: 'scale(0) translateY(100%)',
//       }),
//     ]),

//     query(':enter', [
//       animate(
//         '600ms ease',
//         style({ opacity: 1, transform: 'scale(1) translateY(0)' })
//       ),
//     ]),
//   ]),
// ]);

// Angular documentation

export const slideInAnimation = trigger('routeAnimations', [
  transition('HomePage => ProjectPage', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),

    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(':leave', style({ opacity: 1 }), { optional: true }),

    group([
      query(':leave', [animate('1s ease', style({ opacity: 0 }))], {
        optional: true,
      }),
      query(':enter', [animate('1s ease-in', style({ opacity: 1 })), ,], {
        optional: true,
      }),
    ]),
  ]),
]);
