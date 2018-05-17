// @flow
import { reduce, set } from 'lodash';

import type { Reducer, AsyncAction } from 'redux';

export function ListReducer<M, A:AsyncAction>(types: any): Reducer<{
  all: { [id: string]: M },
  busy: boolean
}, A> {
  return (
    state,
    action
  ) => {
    switch (action.type) {
      case types.LIST_PAYERS:
        return {
          ...state,
          busy: true
        };
      case types.LIST_PAYERS_SUCCESS:
        return {
          ...state,
          busy: false,
          all: reduce(action.result.data,
            (all, payer) => set(all, payer.id, payer),
            state.all)
        }
      default: return state;
    }
  };
}
