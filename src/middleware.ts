export { default } from 'next-auth/middleware'

export const config = {
  // matcher: ["/profile"],
  matcher: ['/((?!register|api|login).*)'] // any route other than those for the register, login, and api directories will be protected
}
