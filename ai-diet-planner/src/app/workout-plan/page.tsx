"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft, Dumbbell, Timer, AlertTriangle } from "lucide-react";

export default function WorkoutPlanPage() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        experience: "",
        location: "",
        time: "",
        injury: ""
    });
    const [plan, setPlan] = useState<any>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const generatePlan = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Mock Logic
        setTimeout(() => {
            let exercises = [];

            // Simple logic for demo
            if (formData.location === "gym") {
                exercises = [
                    { day: "Day 1 (Chest & Tri)", exercises: "Bench Press (3x10), Incline Dumbbell Press (3x12), Tricep Dips (3x12), Pushups (3xMax)" },
                    { day: "Day 2 (Back & Bicep)", exercises: "Lat Pulldowns (3x12), Barbell Rows (3x10), Bicep Curls (3x15), Face Pulls (3x15)" },
                    { day: "Day 3 (Rest)", exercises: "Active Recovery / Stretching / Light Cardio" },
                    { day: "Day 4 (Legs & Abs)", exercises: "Squats (3x8), Leg Press (3x12), Lunges (3x12), Plank (3x60s)" },
                    { day: "Day 5 (Shoulders)", exercises: "Overhead Press (3x10), Lateral Raises (3x15), Front Raises (3x12)" },
                    { day: "Day 6 (Cardio/Core)", exercises: "20 min HIIT / Treadmill run, Crunches (3x20), Leg Raises (3x15)" },
                    { day: "Day 7 (Rest)", exercises: "Complete Rest" }
                ];
            } else {
                exercises = [
                    { day: "Day 1 (Full Body)", exercises: "Pushups (3x15), Bodyweight Squats (3x20), Lunges (3x12), Plank (3x45s)" },
                    { day: "Day 2 (Cardio)", exercises: "Jumping Jacks (3x50), Burpees (3x10), High Knees (3x30s), Mountain Climbers (3x30s)" },
                    { day: "Day 3 (Rest)", exercises: "Walking / Yoga" },
                    { day: "Day 4 (Upper Body)", exercises: "Pike Pushups (3x10), Chair Dips (3x12), Door Rows (if possible) or Superman Hold (3x30s)" },
                    { day: "Day 5 (Lower Body)", exercises: "Glute Bridges (3x20), Wall Sit (3x45s), Calf Raises (3x25)" },
                    { day: "Day 6 (Core/HIIT)", exercises: "Plank to Pushup (3x10), Bicycle Crunches (3x20), 15 min Jog" },
                    { day: "Day 7 (Rest)", exercises: "Complete Rest" }
                ];
            }

            setPlan({
                schedule: exercises,
                warmup: "5-10 mins loose jogging + dynamic stretching (arm circles, leg swings).",
                cooldown: "5 mins static stretching.",
                notes: formData.injury ? `Note: Please exercise caution around your ${formData.injury} injury.` : "Stay hydrated and maintain good form."
            });
            setLoading(false);
            setStep("result");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <Link href="/dashboard" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Dashboard
                </Link>

                {step === "input" ? (
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold text-gray-900">Create Your Workout Plan</h1>
                            <p className="text-gray-600 mt-2">Design a fitness routine tailored to your goals and equipment.</p>
                        </div>

                        <form onSubmit={generatePlan} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Experience Level</Label>
                                    <select
                                        name="experience"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Level</option>
                                        <option value="beginner">Beginner</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Location</Label>
                                    <select
                                        name="location"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Location</option>
                                        <option value="home">Home (No Equipment)</option>
                                        <option value="gym">Gym (Full Equipment)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Daily Time (Minutes)</Label>
                                    <select
                                        name="time"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Duration</option>
                                        <option value="30">30 Minutes</option>
                                        <option value="45">45 Minutes</option>
                                        <option value="60">60+ Minutes</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Injuries / Medical Conditions (Optional)</Label>
                                    <Input name="injury" placeholder="e.g. Knee Pain, Back Pain" onChange={handleChange} className="text-gray-900" />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 h-12 text-lg" disabled={loading}>
                                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                                {loading ? "Generating Plan..." : "Generate AI Workout Plan"}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

                        {/* Summary Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-red-50 border border-red-100 p-6 rounded-xl flex items-start gap-4">
                                <Timer className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-red-900">Warm Up & Cool Down</h3>
                                    <p className="text-sm text-red-700 mt-1">Warm Up: {plan.warmup}</p>
                                    <p className="text-sm text-red-700 mt-1">Cool Down: {plan.cooldown}</p>
                                </div>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-100 p-6 rounded-xl flex items-start gap-4">
                                <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-yellow-900">Safety Notes</h3>
                                    <p className="text-sm text-yellow-700 mt-1">{plan.notes}</p>
                                </div>
                            </div>
                        </div>

                        {/* Weekly Plan */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
                                <Dumbbell className="w-6 h-6 text-blue-600" />
                                <h2 className="text-xl font-bold text-gray-900">Your Weekly Schedule</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {plan.schedule.map((item: any, idx: number) => (
                                    <div key={idx} className="p-6 hover:bg-gray-50 transition-colors">
                                        <div className="flex flex-col md:flex-row md:items-start gap-4">
                                            <div className="md:w-48 flex-shrink-0">
                                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                                                    {item.day}
                                                </span>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 leading-relaxed font-medium">
                                                    {item.exercises}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center text-xs text-gray-400 mt-8">
                            * Disclaimer: Please consult a doctor before starting any new workout routine, especially if you have pre-existing conditions.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
