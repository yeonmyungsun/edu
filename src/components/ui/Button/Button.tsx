// src/components/ui/Button/Button.tsx
import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { DURATIONS, EASINGS } from '@/lib/animations'
import { ButtonVariant, ButtonSize, BUTTON_VARIANT_CLASSES, BUTTON_SIZE_CLASSES } from './Button.variants'

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "size"> {
    children: React.ReactNode
    variant?: ButtonVariant
    size?: ButtonSize
    isIcon?: boolean
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isIcon = false,
        loading = false,
        leftIcon,
        rightIcon,
        children,
        disabled,
        ...props
    }, ref) => {
        const isDisabled = disabled || loading

        const buttonClasses = cn(
            'btn',
            BUTTON_VARIANT_CLASSES[variant],
            BUTTON_SIZE_CLASSES[size],
            isIcon && 'btn--icon',
            className
        )

        return (
            <motion.button
                ref={ref}
                className={buttonClasses}
                disabled={isDisabled}
                // 색상 애니메이션 제거, 스케일만 사용
                whileHover={!isDisabled ? { scale: 1.02 } : undefined}
                whileTap={!isDisabled ? { scale: 0.98 } : undefined}
                transition={{
                    duration: DURATIONS.fast,
                    ease: EASINGS.easeOut
                }}
                {...props}
            >
                {loading && (
                    <motion.div
                        className="btn__loading"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: EASINGS.linear
                        }}
                    >
                        ⟳
                    </motion.div>
                )}

                {leftIcon && !loading && (
                    <span className="btn__icon-left">{leftIcon}</span>
                )}

                {!isIcon && (
                    <span>{children}</span>
                )}

                {rightIcon && !loading && (
                    <span className="btn__icon-right">{rightIcon}</span>
                )}
            </motion.button>
        )
    }
)

Button.displayName = "Button"