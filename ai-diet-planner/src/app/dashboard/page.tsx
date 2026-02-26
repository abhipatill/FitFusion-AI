"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Utensils, Dumbbell, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [userName, setUserName] = useState("User");

    useEffect(() => {
        const session = localStorage.getItem("session");
        if (!session) {
            router.push("/login"); // Secure Route
        } else {
            try {
                const user = JSON.parse(session);
                if (user.fullName) setUserName(user.fullName);
            } catch (e) {
                console.error("Error parsing session", e);
            }
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem("session");
        router.push("/login");
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navbar */}
            <nav className="bg-white shadow-sm border-b border-gray-200">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600">
                        FitFusion AI
                    </span>
                    <div className="flex items-center gap-4">
                        <button onClick={handleLogout} className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">
                            <LogOut className="w-5 h-5" />
                            <span className="text-sm font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-10 max-w-5xl">
                {/* Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Choose Your Plan</h1>
                    <p className="text-gray-600">Hello {userName}, what would you like to focus on today?</p>
                </div>

                {/* Main Actions */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Diet Plan Card */}
                    <Link href="/diet-plan" className="group block h-full">
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                            <div className="h-48 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center group-hover:from-green-100 group-hover:to-green-200 transition-colors">
                                <Utensils className="w-20 h-20 text-green-600" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col items-center text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Diet Plan</h2>
                                <p className="text-gray-600 mb-6 flex-1">Get a personalized AI-generated diet plan based on your body and goals.</p>
                                <span className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-200/50">
                                    Generate Diet Plan
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Workout Plan Card */}
                    <Link href="/workout-plan" className="group block h-full">
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                            <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
                                <Dumbbell className="w-20 h-20 text-blue-600" />
                            </div>
                            <div className="p-8 flex-1 flex flex-col items-center text-center">
                                <h2 className="text-2xl font-bold text-gray-900 mb-3">Workout Plan</h2>
                                <p className="text-gray-600 mb-6 flex-1">Get an AI-powered workout plan for home or gym.</p>
                                <span className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200/50">
                                    Generate Workout Plan
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </main>
        </div>
    );
}
