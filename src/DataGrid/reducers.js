import type from './actionType'

export const createReducers = function(data) {
  return (state = { data: data }, action) => {

    if(action.type === type.SORT) {

      const sortOrder = !state.sortOrder;

      const data = state.data.concat().sort(function(object, object2) {

        const value1 = object[action.fieldName];
        const value2 = object2[action.fieldName];

        if (value1 === value2) {
          return 0;
        }

        return sortOrder
            ? value1 > value2 ? -1 : 1
            : value1 > value2 ? 1 : -1;

      });

      state = Object.assign({}, state, {
        data: data,
        sortField: action.fieldName,
        sortOrder: sortOrder
      });
    }

    return state;
  };
}
