'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/Card'
import { fadeInOut } from '@/lib/animations'

export interface StatCardProps {
    label: string
    value: string | number
    subValue?: string
    trend?: {
        direction: 'up' | 'down' | 'neutral'
        percentage: number
    }
    color?: 'primary' | 'success' | 'warning' | 'error'
    className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
    label,
    value,
    subValue,
    trend,
    color = 'primary',
    className
}) => {
    const colorMap = {
        primary: 'var(--color-primary-600)',
        success: 'var(--color-success-600)',
        warning: 'var(--color-warning-600)',
        error: 'var(--color-error-600)'
    }

    const trendIcon = {
        up: '↗️',
        down: '↘️',
        neutral: '→'
    }

    const trendColor = {
        up: 'var(--color-success-600)',
        down: 'var(--color-error-600)',
        neutral: 'var(--text-secondary)'
    }

    return (
        <motion.div
            variants={fadeInOut}
            initial="hidden"
            animate="visible"
        >
            <Card variant="outlined" className={className}>
                <CardContent style={{ textAlign: 'center' }}>
                    <div style={{
                        borderLeft: `4px solid ${colorMap[color]}`,
                        paddingLeft: 'var(--space-4)'
                    }}>
                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            marginBottom: 'var(--space-2)'
                        }}>
                            {label}
                        </p>

                        <p style={{
                            fontSize: 'var(--text-2xl)',
                            fontWeight: 'var(--font-bold)',
                            color: 'var(--text-primary)',
                            marginBottom: subValue || trend ? 'var(--space-1)' : 0
                        }}>
                            {value}
                        </p>

                        {subValue && (
                            <p style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--text-tertiary)'
                            }}>
                                {subValue}
                            </p>
                        )}

                        {trend && (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 'var(--space-1)',
                                marginTop: 'var(--space-2)'
                            }}>
                                <span>{trendIcon[trend.direction]}</span>
                                <span style={{
                                    fontSize: 'var(--text-xs)',
                                    color: trendColor[trend.direction],
                                    fontWeight: 'var(--font-medium)'
                                }}>
                                    {trend.percentage}%
                                </span>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}