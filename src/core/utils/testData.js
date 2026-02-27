export const users = {
  validUser: { username: 'standard_user', password: 'secret_sauce' },
  lockedUser: { username: 'locked_out_user', password: 'secret_sauce' }
};

export const loginErrors = {
  invalidCredentials: 'Username and password do not match',
  usernameRequired: 'Username is required',
  lockedOut: 'Sorry, this user has been locked out'
};
