import AuthRouter from './AuthRouter';

// Initial state will be the login screen
const initialState = AuthRouter.router.getStateForAction(
    AuthRouter.router.getActionForPathAndParams('login')
);

export default (state = initialState, action) => {
    const nextState = AuthRouter.router.getStateForAction(action, state);
    return nextState || state;
};
