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
