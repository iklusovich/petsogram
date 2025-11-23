export const normalizePhone = (value: string) =>
    value.startsWith('+') ? value : `+${value}`;

export const isValidPhone = (value: string) =>
    /^\+[1-9]\d{9,14}$/.test(normalizePhone(value))