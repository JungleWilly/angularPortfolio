import {
  trigger,
  query,
  style,
  transition,
  stagger,
  animate,
} from '@angular/animations';

export const contactAnimation = trigger('contactAnim', [
  transition(':enter', [
    query(
      '.anim-contact',
      style({ opacity: 0, transform: 'translateY(100%)' })
    ),
    query(
      '.anim-contact',
      stagger('-400ms', [
        animate(
          '600ms 0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      { optional: true }
    ),
  ]),

  transition(':leave', [
    query('.anim-contact', style({ opacity: 1, transform: 'translateY(0)' })),
    query(
      '.anim-contact',
      stagger('300ms', [
        animate(
          '600ms ease-out',
          style({ opacity: 0, transform: 'translateY(100%)' })
        ),
      ]),
      { optional: true }
    ),
  ]),
]);
