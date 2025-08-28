'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { fadeInOut } from '@/lib/animations'
import { APP_CONFIG } from '@/lib/constants'

export interface FooterProps {
    className?: string
    showCopyright?: boolean
    links?: Array<{
        label: string
        href: string
    }>
}

export const Footer: React.FC<FooterProps> = ({
    className,
    showCopyright = true,
    links = []
}) => {
    const currentYear = new Date().getFullYear()

    return (
        <motion.footer
            className={cn("footer", className)}
            style={{
                backgroundColor: 'var(--bg-secondary)',
                borderTop: '1px solid var(--border-primary)',
                padding: 'var(--space-layout-md)',
                marginTop: 'auto'
            }}
            variants={fadeInOut}
            initial="hidden"
            animate="visible"
        >
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-6)'
            }}>
                {/* Links */}
                {links.length > 0 && (
                    <nav style={{
                        display: 'flex',
                        gap: 'var(--space-6)',
                        flexWrap: 'wrap'
                    }}>
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                style={{
                                    color: 'var(--text-secondary)',
                                    textDecoration: 'none',
                                    fontSize: 'var(--text-sm)',
                                    transition: 'var(--transition-button)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = 'var(--text-primary)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = 'var(--text-secondary)'
                                }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                )}

                {/* Copyright */}
                {showCopyright && (
                    <div style={{
                        paddingTop: 'var(--space-6)',
                        borderTop: '1px solid var(--border-primary)',
                        textAlign: 'center'
                    }}>
                        <p style={{
                            color: 'var(--text-tertiary)',
                            fontSize: 'var(--text-sm)'
                        }}>
                            © {currentYear} {APP_CONFIG.name}. All rights reserved.
                        </p>
                    </div>
                )}
            </div>
        </motion.footer>
    )
}