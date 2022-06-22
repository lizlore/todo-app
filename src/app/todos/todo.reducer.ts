import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';

import {
  crear,
  toogle,
  editar,
  borrar,
  toggleAll,
  limpiarTodos,
} from './todo.actions';
import { Todo } from '../model/todo.model';

const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo del Capitán América'),
];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(borrar, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(limpiarTodos, (state) => state.filter((todo) => !todo.completado)),
  on(toggleAll, (state, { completado }) =>
    state.map((todo) => {
      return {
        ...todo,
        completado,
      };
    })
  ),
  on(toogle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(editar, (state, { id, texto }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          texto,
        };
      } else {
        return todo;
      }
    });
  })
);

function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}

export { initialState, todoReducer };
