export const urls = {
  login: 'http://192.168.1.120:8000/api/v1/rest-auth/login/',
  register: 'http://192.168.1.120:8000/api/v1/rest-auth/registration/',
  registerConfirm: 'http://192.168.1.120:8000/api/v1/rest-auth/registration/verify-email/',
  isUsernameAvailable: (username) => {
    return `http://192.168.1.120:8000/api/v1/users/is-username-available/${username}/`
  },
  isEmailAvailable: (email) => {
    return `http://192.168.1.120:8000/api/v1/users/is-email-available/${email}/`
  }
}
