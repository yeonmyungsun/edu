'use client'

import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { motion } from 'framer-motion'
import { slideUp, staggerContainer } from '@/lib/animations'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 영역 */}
      <Header
        logo={
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 bg-gradient-to-r rounded-lg from-primary-500 to-secondary-500" />
            <span className="text-xl font-bold">MyApp</span>
          </div>
        }
        navigation={
          <div className="flex gap-6">
            <a href="/" className="text-sm font-medium transition-colors hover:text-primary-600">
              홈
            </a>
            <a href="/about" className="text-sm font-medium transition-colors hover:text-primary-600">
              소개
            </a>
            <a href="/services" className="text-sm font-medium transition-colors hover:text-primary-600">
              서비스
            </a>
            <a href="/contact" className="text-sm font-medium transition-colors hover:text-primary-600">
              문의
            </a>
          </div>
        }
      />

      {/* 메인 컨텐츠 영역 */}
      <main className="flex-1">
        {/* Hero 섹션 */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--color-primary-50) 0%, var(--color-secondary-50) 100%)',
            padding: 'var(--space-layout-xl) var(--space-layout-md)',
          }}
        >
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center"
            >
              <motion.h1
                variants={slideUp}
                style={{
                  fontSize: 'var(--text-5xl)',
                  fontWeight: 'var(--font-bold)',
                  marginBottom: 'var(--space-6)',
                  background: 'linear-gradient(to right, var(--color-primary-600), var(--color-secondary-600))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Welcome to MyApp
              </motion.h1>

              <motion.p
                variants={slideUp}
                style={{
                  fontSize: 'var(--text-xl)',
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-8)',
                  maxWidth: '600px',
                  margin: '0 auto var(--space-8) auto',
                }}
              >
                혁신적인 솔루션으로 여러분의 비즈니스를 성장시킵니다.
                우리와 함께 디지털 변혁의 여정을 시작하세요.
              </motion.p>

              <motion.div
                variants={slideUp}
                className="flex gap-4 justify-center"
              >
                <Button size="lg" variant="primary">
                  시작하기
                </Button>
                <Button size="lg" variant="outline">
                  더 알아보기
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features 섹션 */}
        <section style={{ padding: 'var(--space-layout-xl) var(--space-layout-md)' }}>
          <div className="container mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <motion.h2
                variants={slideUp}
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-bold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                주요 기능
              </motion.h2>
              <motion.p
                variants={slideUp}
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-lg)',
                }}
              >
                우리가 제공하는 핵심 가치를 확인해보세요
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {[
                {
                  title: '빠른 성능',
                  description: '최적화된 코드와 효율적인 아키텍처로 빠른 응답 속도를 제공합니다.',
                  icon: '⚡',
                },
                {
                  title: '보안 우선',
                  description: '최신 보안 프로토콜과 암호화 기술로 데이터를 안전하게 보호합니다.',
                  icon: '🔒',
                },
                {
                  title: '확장 가능',
                  description: '비즈니스 성장에 따라 유연하게 확장 가능한 인프라를 제공합니다.',
                  icon: '🚀',
                },
              ].map((feature, index) => (
                <motion.div key={index} variants={slideUp}>
                  <Card hoverable className="h-full">
                    <CardHeader>
                      <div className="mb-4 text-3xl">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section
          style={{
            backgroundColor: 'var(--bg-secondary)',
            padding: 'var(--space-layout-lg) var(--space-layout-md)',
          }}
        >
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-bold)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                지금 바로 시작하세요
              </h2>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                무료로 체험하고 프리미엄 기능을 경험해보세요
              </p>
              <Button size="lg" variant="primary">
                무료 체험 시작
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 푸터 영역 */}
      <Footer
        links={[
          { label: '이용약관', href: '/terms' },
          { label: '개인정보처리방침', href: '/privacy' },
          { label: '고객센터', href: '/support' },
          { label: '블로그', href: '/blog' },
        ]}
        showCopyright={true}
      />
    </div>
  )
}