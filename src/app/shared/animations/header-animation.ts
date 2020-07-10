import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

export const headerAnim = trigger('headerAnim', [
  transition('* => *', [
    query(' .anim', style({ opacity: '0', transform: 'translateX(-100%)' })),
    query(
      '.anim',
      stagger('500ms', [
        animate(
          '600ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' })
        ),
      ])
    ),
  ]),
]);
