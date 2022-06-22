import { ActionReducerMap } from '@ngrx/store';

import { filtroReducer } from './filtro/filtro.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { Todo } from './model/todo.model';
import { todoReducer } from './todos/todo.reducer';

interface AppState {
  todos: Todo[];
  filtro: filtrosValidos;
}

const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer,
};

export { AppState, appReducers };
