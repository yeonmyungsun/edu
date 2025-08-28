'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { fadeInOut, slideUp } from '@/lib/animations'

export interface LoginFormProps {
    onSubmit?: (data: { email: string; password: string }) => void
    loading?: boolean
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onSubmit,
    loading = false
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit?.(formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
        >
            <Card variant="elevated" style={{ maxWidth: '400px', margin: '0 auto' }}>
                <form onSubmit={handleSubmit}>
                    <CardHeader>
                        <CardTitle style={{ textAlign: 'center' }}>로그인</CardTitle>
                    </CardHeader>

                    <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <label
                                htmlFor="email"
                                style={{
                                    display: 'block',
                                    marginBottom: 'var(--space-2)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 'var(--font-medium)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                이메일
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: 'var(--space-3)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: 'var(--radius-input)',
                                    fontSize: 'var(--text-base)',
                                    backgroundColor: 'var(--bg-surface)',
                                    color: 'var(--text-primary)',
                                    transition: 'var(--transition-focus)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--border-focus)'
                                    e.target.style.boxShadow = 'var(--shadow-focus)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--border-primary)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                style={{
                                    display: 'block',
                                    marginBottom: 'var(--space-2)',
                                    fontSize: 'var(--text-sm)',
                                    fontWeight: 'var(--font-medium)',
                                    color: 'var(--text-primary)'
                                }}
                            >
                                비밀번호
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{
                                    width: '100%',
                                    padding: 'var(--space-3)',
                                    border: '1px solid var(--border-primary)',
                                    borderRadius: 'var(--radius-input)',
                                    fontSize: 'var(--text-base)',
                                    backgroundColor: 'var(--bg-surface)',
                                    color: 'var(--text-primary)',
                                    transition: 'var(--transition-focus)'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = 'var(--border-focus)'
                                    e.target.style.boxShadow = 'var(--shadow-focus)'
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = 'var(--border-primary)'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>
                    </CardContent>

                    <CardFooter style={{ flexDirection: 'column', gap: 'var(--space-3)' }}>
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            loading={loading}
                            style={{ width: '100%' }}
                        >
                            로그인
                        </Button>

                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            textAlign: 'center'
                        }}>
                            계정이 없으신가요?{' '}
                            <a
                                href="/auth/signup"
                                style={{
                                    color: 'var(--color-primary-600)',
                                    textDecoration: 'none',
                                    fontWeight: 'var(--font-medium)'
                                }}
                            >
                                회원가입
                            </a>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </motion.div>
    )
}