'use client'

import { motion } from 'framer-motion'

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: 'var(--bg-primary)'
        }}>
            <motion.div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'var(--space-4)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {/* Loading Spinner */}
                <motion.div
                    style={{
                        width: '40px',
                        height: '40px',
                        border: '3px solid var(--border-primary)',
                        borderTop: '3px solid var(--color-primary-600)',
                        borderRadius: '50%'
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                />

                {/* Loading Text */}
                <motion.p
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: 'var(--text-sm)'
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                    }}
                >
                    로딩 중...
                </motion.p>
            </motion.div>
        </div>
    )
}