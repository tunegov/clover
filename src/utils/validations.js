export const isRequired = () =>
    value => !value ? "Field is required" : undefined;

export const isEmail = () =>
    value => value && !/^["\w_\.\+-]+@[\[\w_\.\+-]+\.[a-z0-9\]]{2,5}$/.test(value.trim()) ? 'Email is incorrect' : undefined;

export const lengthBetween = (min, max) =>
    value => value && (value.trim().length < min || value.trim().length > max) && `Length should be between ${min} and ${max}`;

export const isConfirmPassword = () =>
    (value, fields) => !!fields && (fields.password === value) ? undefined : 'Passwords should be equal';
