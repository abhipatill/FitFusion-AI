"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft } from "lucide-react";

export default function SignUpPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleGoogleLogin = () => {
        // Mock Google Login
        setIsLoading(true);
        setTimeout(() => {
            const mockUser = {
                fullName: "Google User",
                email: "user@gmail.com",
                mobile: "",
            };
            localStorage.setItem("session", JSON.stringify(mockUser));
            router.push("/dashboard");
        }, 1500);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        // Validation
        if (!formData.email.includes("@")) {
            setError("Please enter a valid email address.");
            setIsLoading(false);
            return;
        }
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long.");
            setIsLoading(false);
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            setIsLoading(false);
            return;
        }
        if (formData.mobile.length < 10) {
            setError("Please enter a valid mobile number.");
            setIsLoading(false);
            return;
        }

        // Mock Registration
        setTimeout(() => {
            const users = JSON.parse(localStorage.getItem("users") || "[]");

            // Check uniqueness
            if (users.find((u: any) => u.email === formData.email)) {
                setError("Email already registered.");
                setIsLoading(false);
                return;
            }

            const newUser = {
                fullName: formData.fullName,
                email: formData.email,
                mobile: formData.mobile,
                password: formData.password
            };

            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            setIsLoading(false);
            // Redirect to Login with success param
            router.push("/login?registered=true");
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex items-center justify-center p-4">
            {/* Back to Home - Absolute Position */}
            <div className="absolute top-6 left-6">
                <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-medium">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>
            </div>

            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mt-10 mb-10">
                <div className="p-8">
                    <div className="flex flex-col items-center mb-6">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md mb-3">
                            <Image
                                src="/logo.png"
                                alt="FitFusion AI Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-green-700">
                            Create Account
                        </h2>
                        <p className="text-gray-500 text-sm mt-1 text-center">
                            Join FitFusion AI to start your journey
                        </p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
                                <Input
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    required
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className="mt-1 border-gray-200 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-gray-700">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    className="mt-1 border-gray-200 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="mobile" className="text-gray-700">Mobile Number</Label>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    type="tel"
                                    required
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    placeholder="9876543210"
                                    className="mt-1 border-gray-200 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password" className="text-gray-700">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Min 8 characters"
                                    className="mt-1 border-gray-200 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <Label htmlFor="confirmPassword" className="text-gray-700">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Re-enter password"
                                    className="mt-1 border-gray-200 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500 text-sm font-medium text-center">{error}</p>}

                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-6 rounded-lg shadow-md mt-2" disabled={isLoading}>
                            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                            {isLoading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>

                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <Button
                        variant="outline"
                        type="button"
                        className="w-full py-6 border-gray-200 hover:bg-gray-50 text-gray-700 font-medium"
                        onClick={handleGoogleLogin}
                    >
                        <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <path
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                fill="#FBBC05"
                            />
                            <path
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                fill="#EA4335"
                            />
                        </svg>
                        Google
                    </Button>

                    <div className="text-center text-sm pt-4">
                        <span className="text-gray-600">Already have an account? </span>
                        <Link href="/login" className="font-bold text-blue-600 hover:text-blue-500 hover:underline">Log In</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
