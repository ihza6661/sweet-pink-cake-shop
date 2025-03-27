
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { LogIn, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  const showLoginAlert = location.state?.showLoginAlert;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 flex justify-center items-center min-h-[calc(100vh-10rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-serif">Welcome back</CardTitle>
          <CardDescription>
            Enter your credentials to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showLoginAlert && (
            <Alert className="mb-4 border-pink-600 text-pink-600 bg-pink-50 dark:bg-pink-900/20 dark:text-pink-400">
              <AlertDescription>
                You need to be logged in to access this page.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300">
                  Forgot password?
                </Link>
              </div>
              <Input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-pink-600 hover:bg-pink-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              ) : (
                <>
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300">
              Create an account
            </Link>
          </div>
          
          <div className="text-xs text-center text-gray-500 dark:text-gray-400">
            By logging in, you agree to our{' '}
            <Link to="/terms" className="underline">Terms of Service</Link>{' '}
            and{' '}
            <Link to="/privacy" className="underline">Privacy Policy</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
