import { ApiCategoryService, CategoryDto } from '@ticket/frontend/core/api';
import { Component, OnInit } from '@angular/core';
import { CreateCategoryForm, createCategoryFormField } from './dashboard.formly';

import { ModalService } from '@ticket/frontend/ui/modal';

@Component({
  selector: 'ticket-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  categories: CategoryDto[];

  constructor(private readonly apiCategoryService: ApiCategoryService, private readonly modalService: ModalService) {
    this.categories = [];
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.apiCategoryService.findAll().subscribe((categories) => {
      this.categories = categories;
    });
  }

  openModalCreateCategory() {
    this.modalService.createFormModal({
      title: 'Créer une nouvelle catégorie',
      fields: createCategoryFormField,
      submitBtnText: 'Créer la catégorie',
      submit: (model: CreateCategoryForm) => this.createCatogory(model),
    });
  }

  createCatogory(model: CreateCategoryForm) {
    this.apiCategoryService.create(model).subscribe((category) => {
      this.categories.push(category);
    });
  }
}
