import * as React from "react"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'ghost' }>(
    ({ className, variant = 'primary', ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 h-11 px-8"
        const variants = {
            primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",
            outline: "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900",
            ghost: "hover:bg-gray-100 hover:text-gray-900"
        }

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
