'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // 화면 크기 감지
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
            // 화면 크기가 변경될 때 메뉴 닫기
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false)
            }
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // 메뉴 열릴 때 body 스크롤 방지
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    // 햄버거 메뉴 아이콘 애니메이션
    const hamburgerLineVariants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: 45, y: 0 }
    }

    const hamburgerLine2Variants = {
        closed: { opacity: 1, x: 0 },
        open: { opacity: 0, x: -20 }
    }

    const hamburgerLine3Variants = {
        closed: { rotate: 0, y: 0 },
        open: { rotate: -45, y: 0 }
    }

    // 모바일 메뉴 애니메이션
    const mobileMenuVariants = {
        closed: {
            x: '100%',
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 40
            }
        }
    }

    const menuBackdropVariants = {
        closed: { opacity: 0 },
        open: { opacity: 1 }
    }

    return (
        <>
            <motion.header
                className={cn("header", className)}
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
                    zIndex: 50
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

                {/* Desktop Navigation */}
                {!isMobile && navigation && (
                    <nav className="header__nav" style={{ display: 'flex', gap: 'var(--space-6)' }}>
                        {navigation}
                    </nav>
                )}

                {/* Desktop Actions */}
                {!isMobile && (
                    <div className="header__actions" style={{ display: 'flex', gap: 'var(--space-3)' }}>
                        {actions || (
                            <>
                                <Button variant="ghost" size="sm">로그인</Button>
                                <Button variant="primary" size="sm">회원가입</Button>
                            </>
                        )}
                    </div>
                )}

                {/* 햄버거 메뉴 버튼 (모바일) */}
                {isMobile && (
                    <button
                        onClick={toggleMobileMenu}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '40px',
                            height: '40px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '8px',
                            position: 'relative',
                            zIndex: 60
                        }}
                        aria-label="메뉴 열기"
                    >
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '24px',
                                height: '2px',
                                backgroundColor: 'var(--text-primary)',
                                transformOrigin: 'center',
                                top: '14px'
                            }}
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            variants={hamburgerLineVariants}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '24px',
                                height: '2px',
                                backgroundColor: 'var(--text-primary)',
                                top: '50%',
                                transform: 'translateY(-50%)'
                            }}
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            variants={hamburgerLine2Variants}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.div
                            style={{
                                position: 'absolute',
                                width: '24px',
                                height: '2px',
                                backgroundColor: 'var(--text-primary)',
                                transformOrigin: 'center',
                                bottom: '14px'
                            }}
                            animate={isMobileMenuOpen ? "open" : "closed"}
                            variants={hamburgerLine3Variants}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                )}
            </motion.header>

            {/* 모바일 메뉴 */}
            <AnimatePresence>
                {isMobile && isMobileMenuOpen && (
                    <>
                        {/* 백드롭 */}
                        <motion.div
                            style={{
                                position: 'fixed',
                                inset: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 45,
                                top: '4rem'
                            }}
                            variants={menuBackdropVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={toggleMobileMenu}
                        />

                        {/* 사이드 메뉴 */}
                        <motion.div
                            style={{
                                position: 'fixed',
                                top: '4rem',
                                right: 0,
                                bottom: 0,
                                width: '280px',
                                backgroundColor: 'var(--bg-surface)',
                                boxShadow: 'var(--shadow-xl)',
                                zIndex: 46,
                                overflowY: 'auto',
                                padding: 'var(--space-6)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-6)'
                            }}
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            {/* 모바일 네비게이션 */}
                            <nav style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-2)'
                            }}>
                                <MobileNavLink href="/" onClick={toggleMobileMenu}>
                                    홈
                                </MobileNavLink>
                                <MobileNavLink href="/about" onClick={toggleMobileMenu}>
                                    소개
                                </MobileNavLink>
                                <MobileNavLink href="/services" onClick={toggleMobileMenu}>
                                    서비스
                                </MobileNavLink>
                                <MobileNavLink href="/contact" onClick={toggleMobileMenu}>
                                    문의
                                </MobileNavLink>
                            </nav>

                            {/* 구분선 */}
                            <div style={{
                                width: '100%',
                                height: '1px',
                                backgroundColor: 'var(--border-primary)'
                            }} />

                            {/* 모바일 액션 버튼 */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-3)'
                            }}>
                                <Button variant="outline" size="md" style={{ width: '100%' }}>
                                    로그인
                                </Button>
                                <Button variant="primary" size="md" style={{ width: '100%' }}>
                                    회원가입
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

// 모바일 네비게이션 링크 컴포넌트
const MobileNavLink: React.FC<{
    href: string
    children: React.ReactNode
    onClick?: () => void
}> = ({ href, children, onClick }) => {
    return (
        <motion.a
            href={href}
            onClick={onClick}
            style={{
                display: 'block',
                padding: 'var(--space-3) var(--space-4)',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                borderRadius: 'var(--radius-md)',
                transition: 'var(--transition-button)'
            }}
            whileHover={{
                backgroundColor: 'var(--bg-secondary)',
                x: 4
            }}
            whileTap={{ scale: 0.98 }}
        >
            {children}
        </motion.a>
    )
}