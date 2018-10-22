import axios from 'axios'

import jwtStorage from './jwtStorage'
import appConfig from '../config'

export default new class HTTP {
	constructor() {
		this.request = axios.create({
			baseURL: appConfig.baseURL
		})

		this.request.interceptors.response.use(this.responseInterceptor)
		this.request.interceptors.request.use(this.requestInterceptor)
	}

	/**
	 * @param {string} url
	 * @param {object} [config]
	 * @param {string} [method]
	 * @returns {AxiosPromise}
	 * @private
	 */
	_request(url, config = {}, method = 'GET') {
		return this.request({ url, ...config, method })
	}

	get    = (url, config) => this._request(url, config, 'GET')
	post   = (url, config) => this._request(url, config, 'POST')
	put    = (url, config) => this._request(url, config, 'PUT')
	delete = (url, config) => this._request(url, config, 'DELETE')

	/**
	 * modify each response
	 *
	 * @param {object} response
	 * @returns {Promise<object>}
	 */
	async responseInterceptor(response) {
		return response
	}

	/**
	 * modify each config before making xml request
	 *
	 * @param {object} config
	 * @returns {Promise<object>}
	 */
	async requestInterceptor(config) {
		config.headers || (config.headers = {})

		if (await jwtStorage.hasAccessToken())
			config.headers['authorization'] = `Bearer ${ await jwtStorage.getAccessToken() }`

		if (!(config.data instanceof FormData))
			config.headers['content-type'] = 'application/json'

		return config
	}
}
