import { applyMiddleware, createStore, compose } from "redux";
import rootReducter from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add suport for redux dev tools
	return createStore(
		rootReducter,
		initialState,
		composeEnhancers(applyMiddleware(reduxImmutableStateInvariant())) //warn us if accidentally mutate redux state
	);
}
