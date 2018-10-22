import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware  from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../rootReducer'
import rootSaga from '../rootSaga'

const persistConfig = {
	key: 'root',
	storage,
	blacklist: []
}

function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware()
	const persistedReducer = persistReducer(persistConfig, rootReducer)
	const store = createStore(
		persistedReducer,
		initialState,
		applyMiddleware(sagaMiddleware)
	)
	sagaMiddleware.run(rootSaga)
	let persistor = persistStore(store)
	return { store, persistor }
}

export default configureStore()
