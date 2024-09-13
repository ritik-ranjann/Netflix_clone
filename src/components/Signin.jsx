import React, { useState } from 'react';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Please fill in both email and password');
      return;
    }

    console.log('Signed in with:', { email, password });
    setErrorMessage('');
  };

  return (
    // Parent-Box
    <div className="h-screen w-full bg-cover bg-center relative" name="singin-parent-box" id='singin-parent-box'>
      {/* Black opacity layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      
      {/* Sign-in Form */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <form onSubmit={handleSubmit} className="space-y-6">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

            <div className="relative">
              <label htmlFor="email" className="absolute top-2 left-3 text-gray-500 text-sm transition-transform transform -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:scale-75 peer-focus:-translate-y-1 peer-focus:text-gray-300">
                Email or Mobile Number
              </label>
              <input
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-gray-400 sm:text-sm placeholder-transparent"
                aria-label="Email or Mobile Number"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                aria-label="Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#C11119] hover:bg-[#C11119] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Sign In
              </button>
            </div>

            <div className="text-center text-gray-500 text-sm">
              <p>OR</p>
            </div>

            <div>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-indigo-600 rounded-md shadow-sm text-sm font-medium text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login with OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
