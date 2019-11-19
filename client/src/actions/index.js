import { AUTH_STATUS } from './types';

const fetchAuth = (isSignedIn, userId) => {
    return {
        type: AUTH_STATUS,
        payload: { isSignedIn, userId }
    }
}

export { fetchAuth };