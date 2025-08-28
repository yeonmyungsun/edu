'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { staggerContainer, staggerItem } from '@/lib/animations'

export interface NavigationItem {
    label: string
    href: string
    active?: boolean
    disabled?: boolean
}

export interface NavigationProps {
    items: NavigationItem[]
    className?: string
    orientation?: 'horizontal' | 'vertical'
}

export const Navigation: React.FC<NavigationProps> = ({
    items,
    className,
    orientation = 'horizontal'
}) => {
    return (
        <motion.nav
            className={cn("navigation", className)}
            style={{
                display: 'flex',
                flexDirection: orientation === 'vertical' ? 'column' : 'row',
                gap: orientation === 'vertical' ? 'var(--space-2)' : 'var(--space-6)'
            }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
        >
            {items.map((item, index) => (
                <motion.a
                    key={index}
                    href={item.href}
                    className={cn(
                        "navigation__item",
                        item.active && "navigation__item--active",
                        item.disabled && "navigation__item--disabled"
                    )}
                    style={{
                        color: item.active ? 'var(--color-primary-600)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        fontSize: 'var(--text-base)',
                        fontWeight: item.active ? 'var(--font-medium)' : 'var(--font-normal)',
                        transition: 'var(--transition-button)',
                        opacity: item.disabled ? 0.5 : 1,
                        pointerEvents: item.disabled ? 'none' : 'auto',
                        position: 'relative',
                        padding: 'var(--space-2) var(--space-3)',
                        borderRadius: 'var(--radius-md)'
                    }}
                    variants={staggerItem}
                    whileHover={!item.disabled ? {
                        color: 'var(--color-primary-600)',
                        backgroundColor: 'var(--color-primary-50)'
                    } : undefined}
                    whileTap={!item.disabled ? { scale: 0.95 } : undefined}
                >
                    {item.label}

                    {/* Active indicator */}
                    {item.active && (
                        <motion.div
                            style={{
                                position: 'absolute',
                                bottom: orientation === 'horizontal' ? '-2px' : 'auto',
                                left: orientation === 'vertical' ? '-2px' : '0',
                                right: orientation === 'horizontal' ? '0' : 'auto',
                                top: orientation === 'vertical' ? '0' : 'auto',
                                height: orientation === 'horizontal' ? '2px' : '100%',
                                width: orientation === 'vertical' ? '2px' : '100%',
                                backgroundColor: 'var(--color-primary-600)',
                                borderRadius: 'var(--radius-full)'
                            }}
                            layoutId="activeIndicator"
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </motion.a>
            ))}
        </motion.nav>
    )
}