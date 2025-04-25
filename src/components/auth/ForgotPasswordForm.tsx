import React, { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { validateEmail } from '../../utils/validation';

type ForgotPasswordFormProps = {
  onSubmit: (email: string) => void;
  onBack: () => void;
  loading?: boolean;
};

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({
  onSubmit,
  onBack,
  loading = false,
}) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) {
      setError('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailError = validateEmail(email);
    if (emailError) {
      setError(emailError);
      return;
    }
    
    onSubmit(email);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reset password</h2>
        <p className="text-gray-600 mb-8">
          Enter your email address and we'll send you instructions to reset your password.
        </p>
        
        <Input
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          error={error}
          autoComplete="email"
          required
        />
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          loading={loading}
          disabled={loading}
          className="mb-4"
        >
          Send Reset Link
        </Button>
        
        <button
          type="button"
          onClick={onBack}
          className="w-full text-center text-sm text-gray-600 hover:text-gray-800 transition-colors"
        >
          ← Back to login
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;