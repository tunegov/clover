import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import {fork} from 'redux-saga/effects'

export  function* rootSaga() {
	
}

export const rootReducer = combineReducers({
	form: formReducer
})


