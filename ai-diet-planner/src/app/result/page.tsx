"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Utensils } from "lucide-react";
import Link from "next/link";

export default function Result() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black p-4 md:p-8">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-white mb-2">Your AI Diet Plan</h1>
                        <p className="text-gray-300">Personalized for your goal: Weight Loss</p>
                    </div>
                    <Link href="/">
                        <Button variant="outline" className="gap-2">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Button>
                    </Link>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* Daily Summary Card */}
                    <Card className="md:col-span-2 bg-white/10 border-white/20 backdrop-blur-sm text-white">
                        <CardHeader>
                            <CardTitle className="text-xl flex items-center gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                                Day 1 Summary
                            </CardTitle>
                            <CardDescription className="text-gray-300">
                                Total Calories: 1,850 kcal | Protein: 140g | Carbs: 180g | Fats: 65g
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    {/* Breakfast */}
                    <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Utensils className="h-4 w-4 text-orange-400" />
                                Breakfast (8:00 AM)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>Oatmeal with berries (1 cup)</li>
                                <li>2 Boiled Eggs</li>
                                <li>Black Coffee or Green Tea</li>
                            </ul>
                            <div className="pt-2 text-xs text-emerald-400 font-mono">
                                450 kcal
                            </div>
                        </CardContent>
                    </Card>

                    {/* Lunch */}
                    <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Utensils className="h-4 w-4 text-orange-400" />
                                Lunch (1:00 PM)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>Grilled Chicken Breast (150g)</li>
                                <li>Quinoa (1/2 cup)</li>
                                <li>Mixed Salad with Olive Oil</li>
                            </ul>
                            <div className="pt-2 text-xs text-emerald-400 font-mono">
                                650 kcal
                            </div>
                        </CardContent>
                    </Card>

                    {/* Snack */}
                    <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Utensils className="h-4 w-4 text-orange-400" />
                                Evening Snack (4:30 PM)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>Greek Yogurt (1 cup)</li>
                                <li>Almonds (10-12 pieces)</li>
                            </ul>
                            <div className="pt-2 text-xs text-emerald-400 font-mono">
                                250 kcal
                            </div>
                        </CardContent>
                    </Card>

                    {/* Dinner */}
                    <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Utensils className="h-4 w-4 text-orange-400" />
                                Dinner (8:00 PM)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                <li>Baked Salmon or Tofu</li>
                                <li>Steamed Broccoli</li>
                                <li>Small Sweet Potato</li>
                            </ul>
                            <div className="pt-2 text-xs text-emerald-400 font-mono">
                                500 kcal
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-center pt-8">
                    <Button className="bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20">
                        Regenerate Plan
                    </Button>
                </div>
            </div>
        </main>
    );
}
