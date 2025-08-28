'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { scaleAnimation } from '@/lib/animations'

export interface DashboardCardProps {
    title: string
    value: string | number
    change?: {
        value: number
        type: 'increase' | 'decrease'
    }
    icon?: React.ReactNode
    className?: string
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
    title,
    value,
    change,
    icon,
    className
}) => {
    const changeColor = change?.type === 'increase'
        ? 'var(--color-success-600)'
        : 'var(--color-error-600)'

    return (
        <motion.div
            variants={scaleAnimation}
            initial="hidden"
            animate="visible"
            whileHover="hover"
        >
            <Card hoverable variant="elevated" className={className}>
                <CardHeader>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <CardTitle style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--font-medium)' }}>
                            {title}
                        </CardTitle>
                        {icon && (
                            <div style={{ color: 'var(--text-tertiary)' }}>
                                {icon}
                            </div>
                        )}
                    </div>
                </CardHeader>

                <CardContent>
                    <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between'
                    }}>
                        <span style={{
                            fontSize: 'var(--text-3xl)',
                            fontWeight: 'var(--font-bold)',
                            color: 'var(--text-primary)'
                        }}>
                            {value}
                        </span>

                        {change && (
                            <span style={{
                                fontSize: 'var(--text-sm)',
                                fontWeight: 'var(--font-medium)',
                                color: changeColor,
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-1)'
                            }}>
                                {change.type === 'increase' ? '↗' : '↘'}
                                {Math.abs(change.value)}%
                            </span>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}