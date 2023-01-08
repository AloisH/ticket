import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'ticket-root',
  template: '<ticket-global-frame></ticket-global-frame>',
})
export class AppComponent {
  title = 'frontend';

  constructor(public readonly viewContainerRef: ViewContainerRef) {}
}
