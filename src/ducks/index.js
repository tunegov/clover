import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {fork} from 'redux-saga/effects'
import { authSaga, authReducer } from './auth'

export  function* rootSaga() {
	fork(authSaga)
}

export const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer
})


