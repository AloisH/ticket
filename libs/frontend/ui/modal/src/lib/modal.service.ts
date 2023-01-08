import { ApplicationRef, ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { FormModalComponent, ModalFormData } from './form-modal/form-modal.component';

import { BaseModalComponent } from './base-modal/base-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  rootViewContainer: ViewContainerRef;

  constructor(private readonly applicationRef: ApplicationRef) {
    this.rootViewContainer = this.getRootViewContainer();
  }

  private getRootViewContainer(): ViewContainerRef {
    const appInstance = this.applicationRef.components[0].instance;
    if (!appInstance.viewContainerRef) {
      throw new Error('ViewContainerRef not found');
    }
    return appInstance.viewContainerRef;
  }

  public createModal(componentClass: typeof BaseModalComponent, data: any = {}): ComponentRef<BaseModalComponent> {
    if (!this.rootViewContainer) {
      throw new Error('RootViewContainerRef not found');
    }

    const componentRef = this.rootViewContainer.createComponent(componentClass);
    componentRef.instance.setComponentRef(componentRef);
    componentRef.instance.setData(data);
    return componentRef;
  }

  public createFormModal(data: ModalFormData): ComponentRef<BaseModalComponent> {
    return this.createModal(FormModalComponent, data);
  }
}
