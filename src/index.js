export default (reducers) => {
  const r = reducers || {};

  const addReducer = (namespace, reducer) => {
    r[namespace] = reducer;
  };

  const dynamicReducer = (state = {}, action) => {
    const mod = action.substr(0, action.indexOf('/'));

    state[mod] = r[mod](state[mod], action);

    return state;
  };

  const removeReducer = (namespace) => {
    delete r[namespace];
  };

  return {
    addReducer,
    removeReducer,
    dynamicReducer,
  };
};
