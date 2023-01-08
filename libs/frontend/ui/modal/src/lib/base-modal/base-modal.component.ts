import { Component, ComponentRef, Input } from '@angular/core';

@Component({
  selector: 'ticket-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
})
export class BaseModalComponent {
  @Input() title: string;
  @Input() componentRef?: ComponentRef<BaseModalComponent>;
  data: any = {};

  constructor() {
    this.title = '';
  }

  public setComponentRef(componentRef: ComponentRef<BaseModalComponent>) {
    this.componentRef = componentRef;
  }

  public setData(data: any = {}) {
    this.data = data;
  }

  public close() {
    this.componentRef?.destroy();
  }
}
