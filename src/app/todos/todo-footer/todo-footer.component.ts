import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { filtrosValidos, setFiltro } from './../../filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { limpiarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  filtroActual: filtrosValidos = 'todos';
  filtros: filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  pendientes: number;

  constructor(private store: Store<AppState>) {
    this.pendientes = 0;
  }

  ngOnInit(): void {
    // this.store
    //   .select('filtro')
    //   .subscribe((filtro) => (this.filtroActual = filtro));

    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.pendientes = state.todos.filter((todo) => !todo.completado).length;
    });
  }

  cambiarFiltro = (filtro: filtrosValidos) => {
    this.store.dispatch(setFiltro({ filtro }));
  };

  limpiarCompletados = () => {
    this.store.dispatch(limpiarTodos());
  };
}
