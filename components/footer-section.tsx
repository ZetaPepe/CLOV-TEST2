"use client"

import { Twitter } from "lucide-react"

export function FooterSection() {
  return (
    <div className="w-full">
      <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
        {/* Left Section: Logo, Description, Social Links */}
        <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
          <div className="flex gap-3 items-stretch justify-center">
            <div className="text-center text-foreground text-xl font-semibold leading-4">CLOV</div>
          </div>
          <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">
            AI-powered influencer token valuation
          </p>
          <div className="flex justify-start items-start gap-3">
            <a
              href="https://x.com/cloutvalue"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X"
              className="w-4 h-4 flex items-center justify-center"
            >
              <Twitter className="w-full h-full text-muted-foreground hover:text-foreground transition-colors" />
            </a>
          </div>
        </div>
        {/* Right Section: Product, Company, Resources */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Product</h3>
            <div className="flex flex-col justify-end items-start gap-2">
              <a href="#features-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Features
              </a>
              <a href="#bento-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                How It Works
              </a>
              <a href="#about-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                AI Analysis
              </a>
              <a href="#testimonials-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Reviews
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Company</h3>
            <div className="flex flex-col justify-center items-start gap-2">
              <a href="#about-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                About us
              </a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Our team
              </a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Careers
              </a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <h3 className="text-muted-foreground text-sm font-medium leading-5">Resources</h3>
            <div className="flex flex-col justify-center items-start gap-2">
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Terms of use
              </a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                API Reference
              </a>
              <a href="#faq-section" className="text-foreground text-sm font-normal leading-5 hover:underline">
                FAQ
              </a>
              <a href="#" className="text-foreground text-sm font-normal leading-5 hover:underline">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full border-t border-border/20 bg-background">
        <div className="w-full max-w-[1320px] mx-auto px-5 py-6">
          <div className="flex flex-col gap-2 text-center text-muted-foreground text-sm">
            <p>
              © 2025 CLOV. Valuation of tokens corresponding to influential individuals on social platforms through AI
              algorithms
            </p>
            <p>Contact us: contact@cloutvalue.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}
