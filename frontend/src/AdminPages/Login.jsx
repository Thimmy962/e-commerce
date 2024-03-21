import React, {useContext, useEffect} from 'react';
import AuthContext from '../utils/Context'


function LoginForm() {

  let {login, logout} = useContext(AuthContext)

  useEffect(() => {
    logout()
  }, [])


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-2xl font-semibold text-gray-900">Login</h2>
          <p className="mt-2 text-center text-sm text-gray-900">
            Sign in to your account
          </p>
        </div>
        <form onSubmit={login} className="space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <input id="username" name="email" type="email" autoComplete="email" required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Mail"
            />
            <br />
            <input id="password" name="password" type="password" autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded 
                focus:ring-blue-500 focus:ring-w-2"/>
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;