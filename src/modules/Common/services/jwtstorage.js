import storage from 'redux-persist/lib/storage'

export default {
	/**
	 * set value to storage
	 *
	 * @param {string} key
	 * @param {string} value
	 * @returns {Promise<string>}
	 */
	set(key, value) {
		return storage.setItem(key, value)
	},

	/**
	 * get value from storage
	 *
	 * @param {string} key
	 * @returns {Promise<string>}
	 */
	get(key) {
		return storage.getItem(key)
	},

	/**
	 * has value in storage
	 *
	 * @param {string} key
	 * @returns {Promise<boolean>}
	 */
	has(key) {
		return storage.getItem(key).then(v => !!v)
	},

	/**
	 * removed value from storage
	 *
	 * @param key
	 * @returns {Promise<void>}
	 */
	remove(key) {
		return storage.removeItem(key)
	}
}
