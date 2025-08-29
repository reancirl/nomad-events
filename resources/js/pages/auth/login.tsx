import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    return (
        <>
            <Head>
                <title>Welcome Back - Nomad Productions</title>
                <meta name="description" content="Sign in to your Nomad Productions account to access professional event management services." />
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&family=space-grotesk:400,500,600,700" rel="stylesheet" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden flex items-center justify-center p-6">
                {/* Animated Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="w-full max-w-md relative z-10">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                        {/* Logo */}
                        <div className="flex justify-center mb-8">
                            <img 
                                src="/images/nomad_profile.jpg" 
                                alt="Nomad Productions" 
                                className="w-20 h-20 rounded-full object-cover shadow-xl border-3 border-white/30"
                            />
                        </div>

                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">Welcome Back</h1>
                            <p className="text-purple-200 font-['Inter']">Sign in to your account</p>
                        </div>

                        {/* Status Message */}
                        {status && (
                            <div className="mb-6 p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                                <p className="text-green-200 text-sm text-center font-['Inter']">{status}</p>
                            </div>
                        )}

                        <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']} className="space-y-6">
                            {({ processing, errors }) => (
                                <>
                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            required
                                            autoFocus
                                            tabIndex={1}
                                            autoComplete="email"
                                            placeholder="email@example.com"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <div className="flex items-center justify-between mb-2">
                                            <label htmlFor="password" className="block text-sm font-medium text-white font-['Inter']">
                                                Password
                                            </label>
                                            {canResetPassword && (
                                                <a 
                                                    href={request().url} 
                                                    tabIndex={5}
                                                    className="text-sm text-purple-200 hover:text-white transition-colors duration-300 font-['Inter']"
                                                >
                                                    Forgot password?
                                                </a>
                                            )}
                                        </div>
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={2}
                                            autoComplete="current-password"
                                            placeholder="Enter your password"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.password && <p className="mt-1 text-sm text-red-300">{errors.password}</p>}
                                    </div>

                                    {/* Remember Me */}
                                    <div className="flex items-center">
                                        <input
                                            id="remember"
                                            name="remember"
                                            type="checkbox"
                                            tabIndex={3}
                                            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-white/20 rounded bg-white/10"
                                        />
                                        <label htmlFor="remember" className="ml-3 text-sm text-purple-200 font-['Inter']">
                                            Remember me
                                        </label>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        tabIndex={4}
                                        className="w-full bg-white text-purple-900 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-purple-100 transition-colors duration-300 font-['Inter'] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {processing && <LoaderCircle className="h-5 w-5 animate-spin" />}
                                        Sign In
                                    </button>

                                    {/* Register Link */}
                                    <div className="text-center pt-4">
                                        <p className="text-purple-200 font-['Inter']">
                                            Don't have an account?{' '}
                                            <a 
                                                href={register().url} 
                                                tabIndex={6}
                                                className="text-white font-semibold hover:text-purple-200 transition-colors duration-300"
                                            >
                                                Create Account
                                            </a>
                                        </p>
                                    </div>
                                </>
                            )}
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
}
