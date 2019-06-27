const auth = {
    isAuthenticate() {
        if (typeof window == 'undefined') {
            return false
        }

        if (sessionStorage.getItem('jwt')) {
            return sessionStorage.getItem('jwt')
        } else {
            return false
        }
    },
    authenticate(jwt, cb) {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('jwt', jwt)
        }
        cb()
    },
    signout(cb) {
        if (typeof window !== 'undefined') {
            sessionStorage.removeItem('jwt')
        }
        cb()
    }
}

export default auth