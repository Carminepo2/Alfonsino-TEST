export function validateEmail(email: string) {
  return /^(.+)@(.+)$/i.test(email);
}

export function validatePassword(password: string) {
  return password.length > 6;
}
