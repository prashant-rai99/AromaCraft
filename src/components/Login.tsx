import { useState } from "react";
import { ChefHat, Mail, Lock, User, AlertCircle } from "lucide-react";

export function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login/signup
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // In a real app, this would redirect to the dashboard
      alert(`${isSignUp ? 'Account created' : 'Logged in'} successfully! In production, you would be redirected to your dashboard.`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20 flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fbbf24] rounded-2xl mb-4">
            <ChefHat className="w-8 h-8 text-gray-900" />
          </div>
          <h1 className="text-gray-900 mb-2">
            {isSignUp ? "Create Your Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">
            {isSignUp
              ? "Start your molecular cooking journey"
              : "Continue your culinary adventure"}
          </p>
        </div>

        {/* Login/Signup Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name field (only for signup) */}
            {isSignUp && (
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none"
                    required={isSignUp}
                  />
                </div>
              </div>
            )}

            {/* Email field */}
            <div>
              <label className="block text-gray-700 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password field */}
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#1e40af] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="bg-green-50 border-2 border-green-400 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white">✓</span>
                </div>
                <p className="text-green-700">
                  {isSignUp ? "Account created successfully!" : "Login successful!"}
                </p>
              </div>
            )}

            {/* Demo Notice */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-700">
                <p className="mb-1">
                  <strong>Demo Mode:</strong> This is a prototype application.
                </p>
                <p>
                  User authentication is simulated. In production, this would connect to a secure backend with proper authentication.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-gray-900 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          {/* Toggle between Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setShowSuccess(false);
                }}
                className="text-[#1e40af] hover:text-[#1e3a8a] transition-colors"
              >
                {isSignUp ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </div>

          {/* Additional Options */}
          {!isSignUp && (
            <div className="mt-6 text-center">
              <button className="text-gray-600 hover:text-[#1e40af] text-sm transition-colors">
                Forgot your password?
              </button>
            </div>
          )}
        </div>

        {/* API Integration Note */}
        <div className="mt-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 p-6">
            <h3 className="text-gray-900 mb-3">For Developers</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              To connect this to a real authentication system, implement the backend API endpoints and update the <code className="bg-gray-100 px-2 py-1 rounded text-[#1e40af]">/services/auth.ts</code> file with your authentication logic.
            </p>
            <p className="text-xs text-gray-500">
              See README.md for detailed API integration instructions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
