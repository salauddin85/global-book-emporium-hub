
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/sonner';
import { Eye, EyeOff, BookOpen, Check, X } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    
    const isValid = hasMinLength && hasUpperCase && hasLowerCase && hasNumber;
    
    return {
      isValid,
      hasMinLength,
      hasUpperCase,
      hasLowerCase,
      hasNumber,
    };
  };

  const validate = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else {
      const validation = validatePassword(formData.password);
      if (!validation.isValid) {
        newErrors.password = 'Password does not meet requirements';
      }
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // In a real app, this would be an API call
      setTimeout(() => {
        // Check if email already exists
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const existingUser = users.find(user => user.email === formData.email);
        
        if (existingUser) {
          toast.error('Email already in use');
          setErrors({
            ...errors,
            email: 'Email already in use',
          });
          setIsSubmitting(false);
          return;
        }
        
        // Register user
        register({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        });
        
        toast.success('Account created successfully!');
        navigate('/');
        
        setIsSubmitting(false);
      }, 1000);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Password validation state
  const passwordValidation = validatePassword(formData.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-book-primary/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-book-primary/60 p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <div className="flex items-center justify-center">
            <BookOpen size={32} className="text-book-accent" />
          </div>
          <h2 className="mt-6 text-3xl font-bold font-playfair">Create Account</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Join Boighor Global and start exploring books
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
                className={errors.username ? 'border-red-500' : ''}
                placeholder="johnsmith"
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'border-red-500' : ''}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
              
              {/* Password strength indicators */}
              {formData.password && (
                <div className="mt-2 space-y-1">
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Password requirements:</p>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="flex items-center space-x-2">
                      {passwordValidation.hasMinLength ? (
                        <Check size={12} className="text-green-500" />
                      ) : (
                        <X size={12} className="text-red-500" />
                      )}
                      <span>At least 8 characters</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {passwordValidation.hasUpperCase ? (
                        <Check size={12} className="text-green-500" />
                      ) : (
                        <X size={12} className="text-red-500" />
                      )}
                      <span>One uppercase letter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {passwordValidation.hasLowerCase ? (
                        <Check size={12} className="text-green-500" />
                      ) : (
                        <X size={12} className="text-red-500" />
                      )}
                      <span>One lowercase letter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {passwordValidation.hasNumber ? (
                        <Check size={12} className="text-green-500" />
                      ) : (
                        <X size={12} className="text-red-500" />
                      )}
                      <span>One number</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? 'border-red-500' : ''}
                placeholder="••••••••"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-book-accent rounded border-gray-300"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-600 dark:text-gray-300">
              I agree to the{' '}
              <a href="#" className="font-medium text-book-accent hover:text-book-accent/80">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="font-medium text-book-accent hover:text-book-accent/80">
                Privacy Policy
              </a>
            </label>
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-book-accent hover:bg-book-accent/90"
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </Button>
          
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-book-accent hover:text-book-accent/80">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
