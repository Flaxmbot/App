import React, { useState, useRef, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  autoComplete?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
};

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  autoComplete,
  required = false,
  placeholder = '',
  className = '',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Handle floating label animation
  const isFloating = isFocused || value.length > 0;
  
  // For password fields
  const actualType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Focus the input when clicking on the container
  useEffect(() => {
    const handleContainerClick = (e: MouseEvent) => {
      if (e.target === inputRef.current?.parentElement) {
        inputRef.current?.focus();
      }
    };
    
    const container = inputRef.current?.parentElement;
    container?.addEventListener('click', handleContainerClick);
    
    return () => {
      container?.removeEventListener('click', handleContainerClick);
    };
  }, []);

  return (
    <div className={`relative mb-4 ${className}`}>
      <div className={`relative border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg transition-all duration-200 
                      ${isFloating ? 'border-blue-500' : ''} 
                      ${error ? 'focus-within:border-red-500' : 'focus-within:border-blue-500'} 
                      bg-white overflow-hidden`}>
        <label
          htmlFor={id}
          className={`absolute left-3 transition-all duration-200 
                    ${isFloating ? 'transform -translate-y-2 scale-80 text-xs text-blue-600 top-2' : 'top-1/2 -translate-y-1/2 text-gray-500'}`}
        >
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        
        <input
          ref={inputRef}
          id={id}
          type={actualType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          className={`w-full pt-5 pb-2 px-3 text-gray-900 focus:outline-none bg-transparent`}
          autoComplete={autoComplete}
          required={required}
          placeholder={isFocused ? placeholder : ''}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5 transition-all duration-200" />
            ) : (
              <Eye className="h-5 w-5 transition-all duration-200" />
            )}
          </button>
        )}
      </div>
      
      {error && (
        <p className="text-red-500 text-xs mt-1 ml-1 animate-fadeIn">{error}</p>
      )}
    </div>
  );
};

export default Input;