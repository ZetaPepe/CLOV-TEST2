"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is CLOV and who is it for?",
    answer:
      "CLOV is an AI-powered platform designed for investors, traders, and analysts who want to accurately value social media influencer tokens. It's perfect for both individual investors looking to make informed decisions and teams seeking comprehensive market analysis tools.",
  },
  {
    question: "How does CLOV's AI valuation work?",
    answer:
      "Our AI analyzes multiple data points including social media engagement, follower growth, content quality, and market trends in real-time. It provides intelligent valuations for influencer tokens, helping you make data-driven investment decisions.",
  },
  {
    question: "Can I integrate CLOV with my existing trading tools?",
    answer:
      "Yes! CLOV offers integrations with popular trading platforms and portfolio management tools. Our API allows you to easily incorporate our valuation data into your existing investment workflow.",
  },
  {
    question: "What's included in the free plan?",
    answer:
      "The free plan includes basic influencer token valuations, limited API calls, access to historical data for up to 10 influencers, and standard market analysis reports. It's perfect for individual investors getting started.",
  },
  {
    question: "How accurate are CLOV's valuations?",
    answer:
      "Our AI algorithms analyze multi-faceted data from social platforms, engagement metrics, and market trends to provide highly accurate valuations. We continuously improve our models based on market performance and user feedback.",
  },
  {
    question: "Is my data secure with CLOV?",
    answer:
      "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure data transmission, and compliance with industry standards. Your portfolio data and trading information are kept completely private and secure.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-card/20 shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-foreground/70 transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/90 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section
      id="faq-section"
      className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center"
    >
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about CLOV and how it can transform your investment decisions
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
