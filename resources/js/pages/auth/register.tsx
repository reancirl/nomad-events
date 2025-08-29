import RegisteredUserController from '@/actions/App/Http/Controllers/Auth/RegisteredUserController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

export default function Register() {
    return (
        <>
            <Head>
                <title>Join Nomad Productions - Create Your Account</title>
                <meta name="description" content="Join the Nomad Productions team. Create your account to access professional event management services." />
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

                <div className="w-full max-w-xl relative z-10">
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
                            <h1 className="text-2xl font-bold text-white mb-2 font-['Space_Grotesk']">Join The Nomad Community</h1>
                            <p className="text-purple-200 font-['Inter']">Create your account to get started</p>
                        </div>

                        <Form
                            {...RegisteredUserController.store.form()}
                            resetOnSuccess={['password', 'password_confirmation']}
                            disableWhileProcessing
                            className="space-y-6"
                        >
                            {({ processing, errors }) => (
                                <>
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="first_name" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                                First Name
                                            </label>
                                            <input
                                                id="first_name"
                                                type="text"
                                                name="first_name"
                                                required
                                                autoFocus
                                                tabIndex={1}
                                                autoComplete="given-name"
                                                placeholder="First name"
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                            />
                                            {errors.first_name && <p className="mt-1 text-sm text-red-300">{errors.first_name}</p>}
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="last_name" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                                Last Name
                                            </label>
                                            <input
                                                id="last_name"
                                                type="text"
                                                name="last_name"
                                                required
                                                tabIndex={2}
                                                autoComplete="family-name"
                                                placeholder="Last name"
                                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                            />
                                            {errors.last_name && <p className="mt-1 text-sm text-red-300">{errors.last_name}</p>}
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                            Phone Number <span className="text-purple-300">(optional)</span>
                                        </label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            name="phone"
                                            tabIndex={3}
                                            autoComplete="tel"
                                            placeholder="+63 XXX XXX XXXX"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-300">{errors.phone}</p>}
                                    </div>

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
                                            tabIndex={4}
                                            autoComplete="email"
                                            placeholder="nomadproductions@gmail.com"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-300">{errors.email}</p>}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            name="password"
                                            required
                                            tabIndex={5}
                                            autoComplete="new-password"
                                            placeholder="Create a strong password"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.password && <p className="mt-1 text-sm text-red-300">{errors.password}</p>}
                                    </div>

                                    {/* Confirm Password */}
                                    <div>
                                        <label htmlFor="password_confirmation" className="block text-sm font-medium text-white mb-2 font-['Inter']">
                                            Confirm Password
                                        </label>
                                        <input
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            required
                                            tabIndex={6}
                                            autoComplete="new-password"
                                            placeholder="Confirm your password"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent backdrop-blur-sm font-['Inter']"
                                        />
                                        {errors.password_confirmation && <p className="mt-1 text-sm text-red-300">{errors.password_confirmation}</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        tabIndex={7}
                                        className="w-full bg-white text-purple-900 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-purple-100 transition-colors duration-300 font-['Inter'] shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {processing && <LoaderCircle className="h-5 w-5 animate-spin" />}
                                        Create Account
                                    </button>

                                    {/* Login Link */}
                                    <div className="text-center pt-4">
                                        <p className="text-purple-200 font-['Inter']">
                                            Already have an account?{' '}
                                            <a 
                                                href={login().url} 
                                                tabIndex={8}
                                                className="text-white font-semibold hover:text-purple-200 transition-colors duration-300"
                                            >
                                                Sign In
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
