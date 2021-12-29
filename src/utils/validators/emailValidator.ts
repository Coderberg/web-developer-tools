const isEmailValid = (email: string): boolean => {
    const pattern = /^[a-z0-9_.-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;

    return email.search(pattern) === 0;
}

export default isEmailValid;
