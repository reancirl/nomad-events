import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head>
                <title>Nomad Productions - Professional Event Management | Coming Soon</title>
                <meta name="description" content="Nomad Productions offers comprehensive event management services including full package organizing and marshall augmentation. Where night owls chase new horizons." />
                <meta name="keywords" content="event management, event organizing, marshall augmentation, event planning, professional events, Nomad Productions" />
                <meta name="author" content="Nomad Productions" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                
                {/* Favicon */}
                <link rel="icon" type="image/jpeg" href="/images/nomad_profile.jpg" />
                <link rel="apple-touch-icon" href="/images/nomad_profile.jpg" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nomadproductions.com/" />
                <meta property="og:title" content="Nomad Productions - Professional Event Management" />
                <meta property="og:description" content="Where night owls chase new horizons. Professional event management services including full package organizing and marshall augmentation." />
                <meta property="og:image" content="/images/nomad_cover.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:site_name" content="Nomad Productions" />
                
                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://nomadproductions.com/" />
                <meta property="twitter:title" content="Nomad Productions - Professional Event Management" />
                <meta property="twitter:description" content="Where night owls chase new horizons. Professional event management services including full package organizing and marshall augmentation." />
                <meta property="twitter:image" content="/images/nomad_cover.jpg" />
                
                {/* Additional SEO */}
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />
                <meta name="theme-color" content="#7c3aed" />
                <link rel="canonical" href="https://nomadproductions.com/" />
                
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700&family=space-grotesk:400,500,600,700" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 relative overflow-hidden">
                {/* Logo */}
                <div className="flex justify-center pt-12">
                    <img 
                        src="/images/nomad_profile.jpg" 
                        alt="Nomad Productions" 
                        className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white/20"
                    />
                </div>

                {/* Main Content */}
                <div className="flex flex-col items-center justify-center px-6 py-16 text-center relative z-10">
                    <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 font-['Space_Grotesk'] tracking-tight">
                        COMING SOON
                    </h1>
                    
                    <p className="text-2xl md:text-3xl text-purple-200 mb-6 font-['Space_Grotesk'] font-medium">
                        𝙒𝙝𝙚𝙧𝙚 𝙣𝙞𝙜𝙝𝙩 𝙤𝙬𝙡𝙨 𝙘𝙝𝙖𝙨𝙚 𝙣𝙚𝙬 𝙝𝙤𝙧𝙞𝙯𝙤𝙣𝙨.
                    </p>
                    
                    <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl font-['Inter']">
                        From full package organizing to marshall augmentation, contact us for your event management needs.
                    </p>

                    {/* Services Preview */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">Full Package Organizing</h3>
                            <p className="text-purple-200 font-['Inter']">Complete event management from concept to execution, ensuring every detail is perfectly orchestrated.</p>
                        </div>
                        
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold text-white mb-3 font-['Space_Grotesk']">Marshall Augmentation</h3>
                            <p className="text-purple-200 font-['Inter']">Professional event support and coordination to enhance your existing team's capabilities.</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl font-semibold text-white mb-6 font-['Space_Grotesk']">Ready to Create Something Amazing?</h2>
                        <a 
                            href="https://www.facebook.com/nomadproductions25"
                            target="_blank" 
                            className="inline-block bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-100 transition-colors duration-300 font-['Inter'] shadow-xl"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 left-0 right-0 text-center py-6">
                    <p className="text-purple-400 text-sm font-['Inter']">
                        © 2025 Nomad Productions | All rights reserved.
                    </p>
                </div>

                {/* Animated Background Elements */}
                <div className="fixed inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>
            </div>
        </>
    );
}