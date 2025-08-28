import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { DURATIONS, EASINGS } from '@/lib/animations'
import { CardVariant, CardPadding, CARD_VARIANT_CLASSES, CARD_PADDING_CLASSES } from './Card.variants'

export interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode
    variant?: CardVariant
    padding?: CardPadding
    hoverable?: boolean
    clickable?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({
        className,
        variant = 'default',
        padding = 'md',
        hoverable = false,
        clickable = false,
        children,
        ...props
    }, ref) => {
        const cardClasses = cn(
            'card',
            CARD_VARIANT_CLASSES[variant],
            CARD_PADDING_CLASSES[padding],
            hoverable && 'card--hoverable',
            clickable && 'card--clickable',
            className
        )

        const motionProps = {
            ...(hoverable && {
                whileHover: { y: -2, scale: 1.02 }
            }),
            ...(clickable && {
                whileTap: { scale: 0.98 }
            }),
            transition: {
                duration: DURATIONS.normal,
                ease: EASINGS.easeOut
            }
        }

        return (
            <motion.div
                ref={ref}
                className={cardClasses}
                {...motionProps}
                {...props}
            >
                {children}
            </motion.div>
        )
    }
)

Card.displayName = "Card"

// Card 서브 컴포넌트들
export const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("card__header", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

export const CardTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn("card__title", className)}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("card__description", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

export const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("card__content", className)}
        {...props}
    />
))
CardContent.displayName = "CardContent"

export const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("card__footer", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"