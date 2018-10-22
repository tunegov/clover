import { isRequired, isEmail, lengthBetween } from '../../utils/validations'

export default {
    email: [
        isRequired(),
        isEmail()
    ],
    password: [
        isRequired(),
        lengthBetween(6, 30)
    ]
}
