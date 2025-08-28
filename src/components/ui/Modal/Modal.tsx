'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { cn } from '@/lib/utils'
import { modalBackdrop, modalContent } from '@/lib/animations'
import { ModalSize, MODAL_SIZE_CLASSES } from './Modal.variants'

export interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
    onClose: () => void
    size?: ModalSize
    closeOnBackdropClick?: boolean
    closeOnEsc?: boolean
    className?: string
}

export const Modal: React.FC<ModalProps> = ({
    children,
    isOpen,
    onClose,
    size = 'md',
    closeOnBackdropClick = true,
    closeOnEsc = true,
    className
}) => {
    // ESC 키로 모달 닫기
    useEffect(() => {
        if (!closeOnEsc || !isOpen) return

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose, closeOnEsc])

    // 바디 스크롤 방지
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const modalClasses = cn(
        'modal-content',
        MODAL_SIZE_CLASSES[size],
        className
    )

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (closeOnBackdropClick && e.target === e.currentTarget) {
            onClose()
        }
    }

    if (typeof window === 'undefined') return null

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-backdrop"
                    variants={modalBackdrop}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={handleBackdropClick}
                >
                    <motion.div
                        className={modalClasses}
                        variants={modalContent}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    )
}

// Modal 서브 컴포넌트들
export const ModalHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("modal__header", className)}
        {...props}
    />
))
ModalHeader.displayName = "ModalHeader"

export const ModalTitle = React.forwardRef<
    HTMLHeadingElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("modal__title", className)}
        {...props}
    />
))
ModalTitle.displayName = "ModalTitle"

export const ModalBody = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("modal__body", className)}
        {...props}
    />
))
ModalBody.displayName = "ModalBody"

export const ModalFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("modal__footer", className)}
        {...props}
    />
))
ModalFooter.displayName = "ModalFooter"