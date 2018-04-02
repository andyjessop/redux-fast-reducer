# redux-fast-reducer
Direct mapping for namespaced reducers. Avoids having to pass actions through the whole reducer chain, instead mapping directly to the relevant reducer.

### Installation

```
npm install --save redux-fast-reducer
```

### Usage

```js
import createFastReducer from 'redux-fast-reducer';

const moduleA = (state = {}, action) = { ... };
const moduleB = (state = {}, action) = { ... };

const reducers = {
  moduleA,
  moduleB
};

const fastReducer = createFastReducer(reducers);

const store = createStore(fastReducer);
```

Then, when firing your actions, you MUST namespace them, like this:

```js
store.dispatch({
  type: 'moduleA/my-action-type',
  payload,
});
```

This action will then be directed straight to the relevant reducer for processing.
