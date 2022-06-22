import { createAction, props } from '@ngrx/store';

type filtrosValidos = 'todos' | 'completados' | 'pendientes';

const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);

export { filtrosValidos, setFiltro };
