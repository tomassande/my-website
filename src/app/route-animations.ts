import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { transition, trigger, query, style, animate, group, animateChild } from '@angular/animations';


export const slider =
  trigger('animRoutes', [
    transition('home => *', slideTo('right') ),
    transition('contact => *', slideTo('left') ),
    transition('* => home', slideTo('left') ),
    transition('* => contact', slideTo('right') ),
    transition('portfolio => about', slideTo('left') ),
    transition('about => portfolio', slideTo('right') ),
]);

function slideTo(direction) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('1200ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('1200ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}