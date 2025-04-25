import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { validateEmail, validatePassword, validateName } from '../../utils/validation';

type RegisterFormProps = {
  onSubmit: (name: string, email: string, password: string) => void;
  onToggleForm: () => void;
  loading?: boolean;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  onToggleForm,
  loading = false,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors({ ...errors, name: '' });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: '' });
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    
    if (errors.password) {
      setErrors({ ...errors, password: '' });
    }
    
    // Update confirm password error if it was previously entered
    if (confirmPassword.length > 0) {
      setErrors({
        ...errors,
        confirmPassword: newPassword !== confirmPassword ? 'Passwords do not match' : '',
      });
    }
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    
    setErrors({
      ...errors,
      confirmPassword: password !== newConfirmPassword ? 'Passwords do not match' : '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = password !== confirmPassword ? 'Passwords do not match' : '';
    
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setErrors({
        name: nameError || '',
        email: emailError || '',
        password: passwordError || '',
        confirmPassword: confirmPasswordError,
      });
      return;
    }
    
    onSubmit(name, email, password);
  };
  
  // Password strength indicator
  const getPasswordStrength = () => {
    if (password.length === 0) return { strength: 0, label: '' };
    if (password.length < 6) return { strength: 1, label: 'Weak' };
    if (password.length < 10) return { strength: 2, label: 'Medium' };
    return { strength: 3, label: 'Strong' };
  };
  
  const passwordStrength = getPasswordStrength();
  
  const strengthColorClasses = {
    0: '',
    1: 'bg-red-500',
    2: 'bg-yellow-500',
    3: 'bg-green-500',
  };
  
  const strengthTextClasses: Record<number, string> = {
    0: '',
    1: 'text-red-500',
    2: 'text-yellow-500',
    3: 'text-green-500',
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Create an account</h2>
        <p className="text-gray-600 mb-8">Enter your details to get started</p>
        
        <Input
          id="name"
          label="Full Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          error={errors.name}
          autoComplete="name"
          required
        />
        
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={errors.email}
          autoComplete="email"
          required
        />
        
        <Input
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          error={errors.password}
          autoComplete="new-password"
          required
        />
        
        {password.length > 0 && !errors.password && (
          <div className="mb-4 mt-1">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${strengthColorClasses[passwordStrength.strength as keyof typeof strengthColorClasses]} transition-all duration-300 ease-in-out`}
                  style={{ width: `${(passwordStrength.strength / 3) * 100}%` }}
                ></div>
              </div>
              {passwordStrength.label && (
                <span className={`text-xs font-medium ${strengthTextClasses[passwordStrength.strength]}`}>
                  {passwordStrength.label}
                </span>
              )}
            </div>
          </div>
        )}
        
        <Input
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={errors.confirmPassword}
          autoComplete="new-password"
          required
        />
        
        <div className="mb-6 mt-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
            </span>
          </label>
        </div>
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={loading}
          disabled={loading}
          className="mb-6"
        >
          Create Account
        </Button>
        
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            type="button"
            onClick={onToggleForm}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors focus:outline-none"
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;