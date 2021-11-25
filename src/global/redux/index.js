import { createAction } from '@reduxjs/toolkit';
import { get } from "lodash";

export const asyncActionCreator = (action) => {
  const values = ['REQUEST', 'SUCCESS', 'ERROR'];

  return values.reduce((acc, value) => {
    const type = `${action}_${value}`;
    acc[value] = type;
    acc[value.toLowerCase()] = createAction(type);
    return acc;
  }, {});
};

export const asyncReducerCreator = (
  actionCreators,
  nestedState,
  requestHandler,
  successHandler,
  errorHandler,
) => {
  const actionCreatorsArray = !actionCreators.length ? [actionCreators] : [...actionCreators];

  return actionCreatorsArray.reduce(
    (obj, action) => ({
      ...obj,
      [action.REQUEST]: (state, _action) => {
        const properState = nestedState ? get(state, nestedState) : state;

        if (!requestHandler) {
          properState.loading = true;
          properState.error = null;
        } else {
          requestHandler(properState, _action);
        }
      },
      [action.SUCCESS]: (state, _action) => {
        const properState = nestedState ? get(state, nestedState) : state;

        if (!successHandler) {
          properState.loading = false;
        } else {
          successHandler(properState, _action);
        }
      },
      [action.ERROR]: (state, _action) => {
        const properState = nestedState ? get(state, nestedState) : state;

        if (!errorHandler) {
          properState.loading = false;
          properState.error = _action.payload;
        } else {
          errorHandler(properState, _action);
        }
      },
    }),
    {},
  );
};