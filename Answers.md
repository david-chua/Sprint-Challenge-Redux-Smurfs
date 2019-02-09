1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 actions are packets of information that contain an action type and the data that we want to use for that action.
 reducers are what calculates the new state base on the action type that we use.
 store is where all the necessary global state lives. It is known as the single source of truth in a redux application because the important data that we set as part of the state are located in that store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state in redux is the entire store, it is the state of the entire application while Component state are state specific to components. A good time to use application state is when that specific state are going to be used in other locations of the applicaiton while component state are used for things like input values that other components does not need access to.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to perform asynchronous operations. It changes the action-creators because it allows us to use this async functionality to be able to do things like axios calls or other promise based functions.
