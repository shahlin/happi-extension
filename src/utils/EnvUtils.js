export function isDevEnv() {
    if (process.env.REACT_APP_ENV === 'development') {
        return true
    }

    return false
}