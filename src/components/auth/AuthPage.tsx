import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsForgotPassword(false);
  };
  
  const handleLoginSubmit = async (email: string, password: string, rememberMe: boolean) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || 'Login failed');
      }
  
      const data = await response.json();
      localStorage.setItem('jwtToken', data.token); // Store token
      alert('Login successful!');
      window.location.reload(); // reload app so App.tsx rechecks token
  
    } catch (err: any) {
      alert(`Login error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  
  const handleRegisterSubmit = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        const err = await response.text();
        throw new Error(err || 'Registration failed');
      }
  
      alert('Registration successful! Please log in.');
      setIsLogin(true);
  
    } catch (err: any) {
      alert(`Registration error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };
  

  const handleForgotPasswordSubmit = (email: string) => {
    setLoading(true);
    console.log('Reset password for:', email);
    setTimeout(() => {
      setLoading(false);
      alert('If an account exists with this email, you will receive password reset instructions.');
      setIsForgotPassword(false);
      setIsLogin(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-yellow-50">
        {/* Main blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-400 rounded-full opacity-30 animate-float"></div>
          <div className="absolute top-1/3 left-2/3 w-12 h-12 bg-purple-400 rounded-full opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-pink-400 rounded-full opacity-30 animate-float animation-delay-4000"></div>
          <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-indigo-400 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-3/4 left-1/2 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-float animation-delay-2000"></div>
        </div>
        
        {/* Additional decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/30 to-white/0"></div>
      </div>
      
      {/* Auth Container */}
      <div className="w-full max-w-md px-4 sm:px-0 z-10">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden">
          <div className="px-6 pt-8 pb-10 sm:px-10">
            {isForgotPassword ? (
              <ForgotPasswordForm
                onSubmit={handleForgotPasswordSubmit}
                onBack={() => setIsForgotPassword(false)}
                loading={loading}
              />
            ) : isLogin ? (
              <LoginForm 
                onSubmit={handleLoginSubmit} 
                onToggleForm={toggleForm}
                onForgotPassword={() => setIsForgotPassword(true)}
                loading={loading}
              />
            ) : (
              <RegisterForm 
                onSubmit={handleRegisterSubmit} 
                onToggleForm={toggleForm}
                loading={loading}
              />
            )}
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-600 mt-8">
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthPage;