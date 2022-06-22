import { createAction, props } from '@ngrx/store';

const crear = createAction('[TODO] Crea Todo', props<{ texto: string }>());

const toogle = createAction('[TODO] Toogle todo', props<{ id: number }>());

const limpiarTodos = createAction('[Filtro] Borrar Completados');

const editar = createAction(
  '[TODO] Editar todo',
  props<{ id: number; texto: string }>()
);

const borrar = createAction('[TODO] Borrar todo', props<{ id: number }>());

const toggleAll = createAction(
  '[TODO] Toggle TodoAll',
  props<{ completado: boolean }>()
);

export { crear, toogle, editar, borrar, toggleAll, limpiarTodos };
