'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'
import { slideUp } from '@/lib/animations'

export interface SignupFormProps {
    onSubmit?: (data: { email: string; password: string; name: string; confirmPassword: string }) => void
    loading?: boolean
}

export const SignupForm: React.FC<SignupFormProps> = ({
    onSubmit,
    loading = false
}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: ''
    })

    const [errors, setErrors] = useState<Record<string, string>>({})

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // 기본 유효성 검사
        const newErrors: Record<string, string> = {}

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = '비밀번호가 일치하지 않습니다'
        }

        if (formData.password.length < 8) {
            newErrors.password = '비밀번호는 8자리 이상이어야 합니다'
        }

        setErrors(newErrors)

        if (Object.keys(newErrors).length === 0) {
            onSubmit?.(formData)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // 에러 초기화
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const inputStyle = {
        width: '100%',
        padding: 'var(--space-3)',
        border: '1px solid var(--border-primary)',
        borderRadius: 'var(--radius-input)',
        fontSize: 'var(--text-base)',
        backgroundColor: 'var(--bg-surface)',
        color: 'var(--text-primary)',
        transition: 'var(--transition-focus)'
    }

    const labelStyle = {
        display: 'block',
        marginBottom: 'var(--space-2)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        color: 'var(--text-primary)'
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
                        <CardTitle style={{ textAlign: 'center' }}>회원가입</CardTitle>
                    </CardHeader>

                    <CardContent style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        <div>
                            <label htmlFor="name" style={labelStyle}>이름</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" style={labelStyle}>이메일</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label htmlFor="password" style={labelStyle}>비밀번호</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                style={{
                                    ...inputStyle,
                                    borderColor: errors.password ? 'var(--border-error)' : 'var(--border-primary)'
                                }}
                            />
                            {errors.password && (
                                <p style={{
                                    color: 'var(--color-error-600)',
                                    fontSize: 'var(--text-xs)',
                                    marginTop: 'var(--space-1)'
                                }}>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" style={labelStyle}>비밀번호 확인</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                                style={{
                                    ...inputStyle,
                                    borderColor: errors.confirmPassword ? 'var(--border-error)' : 'var(--border-primary)'
                                }}
                            />
                            {errors.confirmPassword && (
                                <p style={{
                                    color: 'var(--color-error-600)',
                                    fontSize: 'var(--text-xs)',
                                    marginTop: 'var(--space-1)'
                                }}>
                                    {errors.confirmPassword}
                                </p>
                            )}
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
                            회원가입
                        </Button>

                        <p style={{
                            fontSize: 'var(--text-sm)',
                            color: 'var(--text-secondary)',
                            textAlign: 'center'
                        }}>
                            이미 계정이 있으신가요?{' '}
                            <a
                                href="/auth/login"
                                style={{
                                    color: 'var(--color-primary-600)',
                                    textDecoration: 'none',
                                    fontWeight: 'var(--font-medium)'
                                }}
                            >
                                로그인
                            </a>
                        </p>
                    </CardFooter>
                </form>
            </Card>
        </motion.div>
    )
}