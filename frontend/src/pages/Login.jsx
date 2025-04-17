import { useEffect, useState } from 'react';
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  useEffect( () => {
    if(location.state?.mode === 'signup'){
      setIsLogin(false)
    }else {
      setIsLogin(true)
    }
  },[location.state])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Auth Card */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Decorative Header */}
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 py-4 px-6">
            <h2 className="text-white text-2xl font-bold text-center">
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h2>
            <p className="text-cyan-100 text-center mt-1">
              {isLogin ? 'Sign in to continue' : 'Join us today'}
            </p>
          </div>

          {/* Form Container */}
          <div className="p-6 sm:p-8">
            {/* Social Login */}
            <div className="flex justify-center space-x-4 mb-6">
              <button className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-full transition">
                <FaGoogle />
              </button>
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-600 p-3 rounded-full transition">
                <FaFacebook />
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition">
                <FaGithub />
              </button>
            </div>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-2 text-sm text-gray-500">
                  or {isLogin ? 'login with email' : 'sign up with email'}
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                {isLogin && (
                  <div className="text-right mt-1">
                    <a href="#" className="text-sm text-cyan-600 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            {/* Toggle between Login/Signup */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-1 text-cyan-600 hover:text-cyan-800 font-medium focus:outline-none"
                >
                  {isLogin ? 'Sign up' : 'Sign in'}
                </button>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;