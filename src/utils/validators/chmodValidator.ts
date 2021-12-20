export const isNumberValid = (value: string): boolean => {
    const pattern = /^[0-7]*$/;
    if (!pattern.test(value)) {
        return false;
    }

    return value.length <= 3;
}

export const isStringValid = (value: string): boolean => {
    for (let i = 0; i <= 8; i += 1) {
        if ((i === 0 || i === 3 || i === 6) && !['r', '-', ''].includes(value.charAt(i)) ||
            (i === 1 || i === 4 || i === 7) && !['w', '-', ''].includes(value.charAt(i)) ||
            (i === 2 || i === 5 || i === 8) && !['x', '-', ''].includes(value.charAt(i))) {
            return false;
        }
    }

    return value.length <= 9;
}
