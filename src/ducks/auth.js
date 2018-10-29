import { createAction } from 'redux-actions'
import {takeEvery, call, put} from 'redux-saga/effects'
import jwtStorage from '../services/jwtstorage'
import http from '../services/http'

//Actions
export const SIGN_UP = 'SIGN_UP'
export const signUpAction = createAction(SIGN_UP)

export const SIGN_IN = 'SIGN_IN'
export const signInAction = createAction(SIGN_IN)

export const SET_USER = 'SET_USER'
export const setUserAction = createAction(SET_USER)

export const LOGOUT = 'LOGOUT'
export const logoutAction = createAction(LOGOUT)

//Reducer

const initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				user: action.payload.username,
            }

		default:
			return state
	}
}

//Saga
function* login({payload}) {
	const { username, password } = payload

	try {

		const {body} = yield call(http.post, '/v1/auth/signin', {
            username, 
            password
        })

        yield put(setUserAction(body))
        yield jwtStorage.setAccessToken(body.token)
	} catch(e) {
		yield put(setException(e))
	} finally {
		yield put(loaderOffAction({loaderId}))
	}
}


function* signUp({payload}) {
	const { username, password } = payload

	try {

		const {body} = yield call(http.post, '/v1/auth/signup', {
            username, 
            password,
            firstName,
            lastName,
            profileUrl,
            email
        })

        yield put(setUserAction(body))
        
	} catch(e) {
		console.log(e)
	} 
}

function* logout() {
	try {

		const {body} = yield call(http.post, '/v1/auth/logout', {})
        yield put(setUserAction(null))
        
	} catch(e) {
		console.log(e)
	}
}

export function* authSaga() {
    yield takeEvery(SIGN_IN, login)
    yield takeEvery(SIGN_UP, signUp)
    yield takeEvery(LOGOUT, logout)
}

