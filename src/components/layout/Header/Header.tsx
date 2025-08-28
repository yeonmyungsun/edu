'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { fadeInOut } from '@/lib/animations'

export interface HeaderProps {
    className?: string
    logo?: React.ReactNode
    navigation?: React.ReactNode
    actions?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({
    className,
    logo,
    navigation,
    actions
}) => {
    return (
        <motion.header
            className={cn(
                "header",
                className
            )}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 var(--space-layout-md)',
                height: '4rem',
                backgroundColor: 'var(--bg-surface)',
                borderBottom: '1px solid var(--border-primary)',
                position: 'sticky',
                top: 0,
                zIndex: 40
            }}
            variants={fadeInOut}
            initial="hidden"
            animate="visible"
        >
            {/* Logo */}
            <div className="header__logo">
                {logo || (
                    <h1 style={{
                        fontSize: 'var(--text-xl)',
                        fontWeight: 'var(--font-bold)',
                        color: 'var(--text-primary)'
                    }}>
                        My App
                    </h1>
                )}
            </div>

            {/* Navigation */}
            {navigation && (
                <nav className="header__nav">
                    {navigation}
                </nav>
            )}

            {/* Actions */}
            <div className="header__actions" style={{ display: 'flex', gap: 'var(--space-3)' }}>
                {actions || (
                    <>
                        <Button variant="ghost" size="sm">로그인</Button>
                        <Button variant="primary" size="sm">회원가입</Button>
                    </>
                )}
            </div>
        </motion.header>
    )
}