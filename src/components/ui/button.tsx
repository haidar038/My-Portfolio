import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Frutiger Aero style based on the CSS references
    const getFrutigerStyle = () => {
      if (variant === "default") {
        return {
          background: '#4a90e2',
          borderRadius: '125px',
          border: '1px solid #3672b6',
          boxShadow: 'inset 0 13px 25px rgba(255, 255, 255, 0.5), 0 3px 5px rgba(0, 0, 0, 0.2), 0 10px 13px rgba(0, 0, 0, 0.1)',
        };
      } else if (variant === "destructive") {
        return {
          background: '#e74c3c',
          borderRadius: '125px',
          border: '1px solid #c0392b',
          boxShadow: 'inset 0 13px 25px rgba(255, 255, 255, 0.5), 0 3px 5px rgba(0, 0, 0, 0.2), 0 10px 13px rgba(0, 0, 0, 0.1)',
        };
      } else if (variant === "secondary") {
        return {
          background: '#d0d0d0',
          borderRadius: '125px',
          border: '1px solid #b8b8b8',
          boxShadow: 'inset 0 13px 25px rgba(255, 255, 255, 0.5), 0 3px 5px rgba(0, 0, 0, 0.2), 0 10px 13px rgba(0, 0, 0, 0.1)',
        };
      }
      return {};
    };

    const hasFrutigerStyle = variant === "default" || variant === "destructive" || variant === "secondary";

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          hasFrutigerStyle && "relative overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-transform text-white font-semibold"
        )}
        style={getFrutigerStyle()}
        ref={ref}
        {...props}
      >
        {/* Glossy overlay effect */}
        {hasFrutigerStyle && (
          <div
            className="absolute pointer-events-none"
            style={{
              background: 'linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)',
              borderRadius: '125px',
              height: '50px',
              left: '4%',
              top: '1px',
              width: '92%',
            }}
          />
        )}
        <span className={cn(hasFrutigerStyle && "relative z-10")}>{children}</span>
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
