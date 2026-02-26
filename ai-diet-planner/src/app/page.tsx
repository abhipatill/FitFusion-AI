import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Activity, Utensils, Zap, CheckCircle } from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            {/* 0. HEADER / NAVBAR (Added for FitFusion AI) */}
            <nav className="absolute top-0 w-full z-50 bg-transparent py-6">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/50 shadow-lg">
                            <Image
                                src="/logo.png"
                                alt="FitFusion AI Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-700">
                            FitFusion AI
                        </span>
                    </div>
                </div>
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 lg:py-32 overflow-hidden">
                <div className="container mx-auto px-6 text-center z-10 relative pt-10">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold tracking-wide uppercase">
                        AI-Powered Fitness Agent
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                        Automatic Diet & Workout Plan <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                            using FitFusion AI
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
                        Get personalized diet and workout plans based on your body, goal & lifestyle using our advanced AI agent.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="/login"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
                        >
                            Login
                        </Link>
                        <Link
                            href="/sign-up"
                            className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-lg shadow-md border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-center gap-2"
                        >
                            Sign Up <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-30">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                    <div className="absolute top-10 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
                </div>
            </section>

            {/* 2. APP INTRO SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose FitFusion AI?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Foundational health planning driven by data and science.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Diet Planning</h3>
                            <p className="text-gray-600">Curated meal plans matching your caloric needs and taste preferences automatically.</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                <Activity className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Workouts</h3>
                            <p className="text-gray-600">Smart workout routines designed for your fitness level, whether at home or gym.</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-orange-600">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Calorie Calc</h3>
                            <p className="text-gray-600">Precise daily calorie and macro targets calculated for your specific body metrics.</p>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Easy</h3>
                            <p className="text-gray-600">Beginner-friendly plans that prioritize safety and long-term consistency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. HOW IT WORKS SECTION */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
                        <p className="text-gray-600">Your journey to a healthier you in 4 simple steps.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Create Account", desc: "Sign up in seconds with your mobile number." },
                            { step: "02", title: "Enter Details", desc: "Share your body metrics, lifestyle, and fitness goals." },
                            { step: "03", title: "Get Plan", desc: "Our AI instantly generates your custom diet & workout plan." },
                            { step: "04", title: "Track & Win", desc: "Follow the plan, track progress, and achieve results." }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-6 text-center">
                                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-md mb-6 text-xl font-bold text-blue-600 border border-blue-100">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 text-sm">{item.desc}</p>
                                {idx < 3 && <div className="hidden md:block absolute top-10 -right-4 w-8 border-t-2 border-dashed border-gray-300"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. FEATURES SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl p-6 text-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse"></div>
                                        <span className="font-medium">DeepSeek-v3 AI Analysis...</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
                                        <span className="font-medium">Generating Weekly Schedule...</span>
                                    </div>
                                    <div className="flex items-center gap-4 bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse"></div>
                                        <span className="font-medium">Optimizing Macros...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Features Built for You</h2>
                            <ul className="space-y-4">
                                {[
                                    "Advanced AI Agent for personalized recommendations",
                                    "Combined Diet & Workout ecosystem",
                                    "Support for both Home & Gym workouts",
                                    "Native Indian food database support",
                                    "Weekly automatic plan updates based on progress"
                                ].map((feat, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FOOTER */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
                                FitFusion AI
                            </span>
                            <p className="text-gray-400 mt-2 text-sm">Your health, optimized by intelligence.</p>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-400">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
                            <Link href="#" className="hover:text-white transition-colors">Contact Support</Link>
                            <Link href="/result" className="hover:text-white transition-colors">AI Diet Plans</Link>
                            <Link href="/sign-up" className="hover:text-white transition-colors">Waitlist</Link>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} FitFusion AI. All rights reserved.
                    </div>
                </div>
            </footer>
        </main>
    );
}
