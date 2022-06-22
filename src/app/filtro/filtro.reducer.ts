import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';

const initialState: filtrosValidos | any = 'todos';

const _filtroReducer = createReducer(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

function filtroReducer(state: any, action: any) {
  return _filtroReducer(state, action);
}

export { initialState, filtroReducer };
