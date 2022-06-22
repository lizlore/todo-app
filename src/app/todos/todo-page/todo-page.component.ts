import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../todo.actions';
import { AppState } from './../../app.state';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completado: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll = () => {
    this.completado = !this.completado;

    this.store.dispatch(actions.toggleAll({ completado: this.completado }));
  };
}