
export let helloWorld = 'Hello Helpers!';

export const urls = {
  login: 'http://192.168.1.120:8000/api/v1/rest-auth/login/',
  registration: 'http://192.168.1.120:8000/api/v1/rest-auth/registration/',
  isUsernameAvailable: (username) => {
    return `http://192.168.1.120:8000/api/v1/users/is-username-available/${username}/`
  },
  isEmailAvailable: (email) => {
    return `http://192.168.1.120:8000/api/v1/users/is-username-available/${email}/`
  }
}
