import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import custom components
import Footer from '@/components/layout/Footer';

// Import shadcn/ui components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { MessageCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      console.log(`Requesting OTP for phone number: ${phone}`);
      // Simulate sending OTP and move to the next step
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6) {
      console.log(`Verifying OTP: ${otp}`);
      // In a real application, you would verify the OTP with a backend service.
      // On successful verification, navigate to the chat dashboard.
      navigate('/chat-dashboard'); // Path from App.tsx
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-sm shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-2 mb-2">
                <MessageCircle className="h-8 w-8 text-primary" />
                <CardTitle className="text-3xl font-bold">ChatSphere</CardTitle>
            </div>
            <CardDescription>
              {step === 'phone'
                ? "Enter your phone number to log in or sign up."
                : `We sent a code to ${phone}. Enter it below.`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === 'phone' ? (
              <form onSubmit={handlePhoneSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoFocus
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Code
                </Button>
              </form>
            ) : (
              <form onSubmit={handleOtpSubmit} className="space-y-4">
                <div className="flex flex-col items-center space-y-2">
                  <Label htmlFor="otp">One-Time Password</Label>
                  <InputOTP
                    id="otp"
                    maxLength={6}
                    value={otp}
                    onChange={(value) => setOtp(value)}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </div>
                <Button type="submit" className="w-full">
                  Verify & Login
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center">
            {step === 'otp' && (
              <Button variant="link" size="sm" onClick={() => setStep('phone')}>
                Use a different number
              </Button>
            )}
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;