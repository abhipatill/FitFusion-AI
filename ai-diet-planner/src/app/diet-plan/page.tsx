"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft, Droplets, Flame } from "lucide-react";

export default function DietPlanPage() {
    const [step, setStep] = useState<"input" | "result">("input");
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        age: "",
        gender: "",
        height: "",
        weight: "",
        activity: "",
        preference: "",
        allergies: "",
        goal: ""
    });
    const [plan, setPlan] = useState<any>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const calculateCalories = () => {
        const w = parseFloat(formData.weight);
        const h = parseFloat(formData.height);
        const a = parseFloat(formData.age);

        let bmr = 0;
        if (formData.gender === "male") {
            bmr = 10 * w + 6.25 * h - 5 * a + 5;
        } else {
            bmr = 10 * w + 6.25 * h - 5 * a - 161;
        }

        let multiplier = 1.2; // Sedentary
        if (formData.activity === "light") multiplier = 1.375;
        if (formData.activity === "moderate") multiplier = 1.55;
        if (formData.activity === "active") multiplier = 1.725;

        let tdee = bmr * multiplier;

        if (formData.goal === "lose") tdee -= 500;
        if (formData.goal === "gain") tdee += 500;

        return Math.round(tdee);
    };

    const generatePlan = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const calories = calculateCalories();

        // Mock Plan Generation
        setTimeout(() => {
            setPlan({
                calories,
                protein: Math.round(calories * 0.3 / 4),
                carbs: Math.round(calories * 0.4 / 4),
                fats: Math.round(calories * 0.3 / 9),
                water: 3.5, // Liters
                waterTips: "Drink 2 glasses of water before every meal.",
                days: [
                    { day: "Monday", breakfast: "Oatmeal with Almonds", lunch: "Grilled Chicken Salad / Dal Tadka & Roti", snack: "Greek Yogurt / Fruit", dinner: "Grilled Fish / Paneer Tikka with Veggies" },
                    { day: "Tuesday", breakfast: "Scrambled Eggs / Poha", lunch: "Brown Rice Bowl with Beans", snack: "Nuts Mix", dinner: "Lentil Soup / Vegetable Stir Fry" },
                    { day: "Wednesday", breakfast: "Smoothie Bowl", lunch: "Quinoa Salad / Rajma Chawal", snack: "Protein Bar", dinner: "Baked Salmon / Tofu Curry" },
                    { day: "Thursday", breakfast: "Avocado Toast", lunch: "Turkey Wrap / Chana Masala", snack: "Apple Slices", dinner: "Chicken Stir Fry / Mix Veg" },
                    { day: "Friday", breakfast: "Greek Yogurt Parfait", lunch: "Tuna Sandwich / Bhindi Masala", snack: "Carrot Sticks", dinner: "Vegetable Pasta" },
                    { day: "Saturday", breakfast: "Pancakes (Healthy)", lunch: "Chicken Breast / Egg Curry", snack: "Dark Chocolate", dinner: "Tacos (Lettuce Wrap)" },
                    { day: "Sunday", breakfast: "Omelette / Idli Sambar", lunch: "Roast Beef / Mushroom Risotto", snack: "Fruit Salad", dinner: "Grilled Shrimp / Palak Paneer" },
                ]
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
                            <h1 className="text-3xl font-bold text-gray-900">Create Your Diet Plan</h1>
                            <p className="text-gray-600 mt-2">Enter your details for an AI-customized nutrition strategy.</p>
                        </div>

                        <form onSubmit={generatePlan} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Age</Label>
                                    <Input name="age" type="number" required placeholder="e.g. 25" onChange={handleChange} className="text-gray-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Gender</Label>
                                    <select
                                        name="gender"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Height (cm)</Label>
                                    <Input name="height" type="number" required placeholder="e.g. 175" onChange={handleChange} className="text-gray-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Weight (kg)</Label>
                                    <Input name="weight" type="number" required placeholder="e.g. 70" onChange={handleChange} className="text-gray-900" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Activity Level</Label>
                                    <select
                                        name="activity"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Activity</option>
                                        <option value="sedentary">Sedentary (Office Job)</option>
                                        <option value="light">Lightly Active (1-3 days/week)</option>
                                        <option value="moderate">Moderately Active (3-5 days/week)</option>
                                        <option value="active">Very Active (6-7 days/week)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Diet Preference</Label>
                                    <select
                                        name="preference"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Preference</option>
                                        <option value="veg">Vegetarian</option>
                                        <option value="non-veg">Non-Vegetarian</option>
                                        <option value="vegan">Vegan</option>
                                        <option value="keto">Keto</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Goal</Label>
                                    <select
                                        name="goal"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        onChange={handleChange}
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Select Goal</option>
                                        <option value="lose">Weight Loss</option>
                                        <option value="maintain">Maintain Weight</option>
                                        <option value="gain">Weight Gain</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-gray-900">Food Allergies (Optional)</Label>
                                    <Input name="allergies" placeholder="e.g. Peanuts, Gluten" onChange={handleChange} className="text-gray-900" />
                                </div>
                            </div>

                            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg" disabled={loading}>
                                {loading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                                {loading ? "Generating Plan..." : "Generate AI Diet Plan"}
                            </Button>
                        </form>
                    </div>
                ) : (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Summary Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900">{plan.calories}</div>
                                <div className="text-sm text-gray-500">Daily Calories</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="text-2xl font-bold text-blue-600">{plan.protein}g</div>
                                <div className="text-sm text-gray-500">Protein</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="text-2xl font-bold text-green-600">{plan.carbs}g</div>
                                <div className="text-sm text-gray-500">Carbs</div>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                                <div className="text-2xl font-bold text-yellow-600">{plan.fats}g</div>
                                <div className="text-sm text-gray-500">Fats</div>
                            </div>
                        </div>

                        {/* Water Intake */}
                        <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl flex items-start gap-4">
                            <Droplets className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-semibold text-blue-900">Hydration</h3>
                                <p className="text-blue-700 mt-1">Target: {plan.water} Liters / Day</p>
                                <p className="text-sm text-blue-600 mt-1 italic">Tip: {plan.waterTips}</p>
                            </div>
                        </div>

                        {/* Weekly Plan */}
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-xl font-bold text-gray-900">Your 7-Day Meal Plan</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-4 text-sm font-semibold text-gray-500">Day</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-gray-500">Breakfast</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-gray-500">Lunch</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-gray-500">Snack</th>
                                            <th className="px-6 py-4 text-sm font-semibold text-gray-500">Dinner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {plan.days.map((day: any) => (
                                            <tr key={day.day} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{day.day}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{day.breakfast}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{day.lunch}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{day.snack}</td>
                                                <td className="px-6 py-4 text-sm text-gray-600">{day.dinner}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-center text-xs text-gray-400 mt-8">
                            * Disclaimer: This plan is for general guidance only. Please consult a nutritionist or doctor for medical advice.
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
