import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

/**
 * Web Design Agency Landing Page
 * Design: Cyberpunk Minimalism
 * - Dark background (#0a0e27) with neon purple (#d946ef) and electric blue (#0ea5e9) accents
 * - Space Mono typography for headlines, Inter for body text
 * - Glowing neon buttons, animated gradient borders, smooth transitions
 */

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/hero-bg-1-mhnsuge4582R8VZysj3FEW.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Premium UI/UX Websites for Only <span className="text-fuchsia-500">$100</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Stop paying agencies thousands. Get a stunning, fast, and mobile-ready website in 48 hours.
          </p>

          <a
            href="mailto:baqerfazli@gmail.com"
            className="neon-button inline-flex items-center gap-2 text-lg"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Animated gradient line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-fuchsia-500 opacity-60" />
      </section>

      {/* Services & Process Section */}
      <section className="relative py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-white"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Our Process
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative">
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #d946ef 0%, #0ea5e9 100%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative bg-card border-2 border-fuchsia-500/30 rounded-lg p-8 hover:border-fuchsia-500 transition-all duration-300 gradient-border"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/service-card-bg-1-k6GhnBqE4zMoJKHnfNxDUz.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-lg" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-fuchsia-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    50% Upfront Deposit
                  </h3>
                  <p className="text-gray-300">
                    Secure your project with a 50% deposit. We start immediately and keep you updated throughout.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative">
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #0ea5e9 0%, #d946ef 100%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative bg-card border-2 border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500 transition-all duration-300 gradient-border"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/service-card-bg-2-AhHefZMNKxPcmAx7nVdvoj.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-lg" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-cyan-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    UI/UX Design & Development
                  </h3>
                  <p className="text-gray-300">
                    We craft stunning, responsive designs and develop them using modern tech stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative">
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, #d946ef 0%, #0ea5e9 100%)",
                  filter: "blur(20px)",
                }}
              />
              <div
                className="relative bg-card border-2 border-fuchsia-500/30 rounded-lg p-8 hover:border-fuchsia-500 transition-all duration-300 gradient-border"
                style={{
                  backgroundImage:
                    "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/service-card-bg-1-k6GhnBqE4zMoJKHnfNxDUz.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/60 rounded-lg" />
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-fuchsia-500 mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                    3
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Space Mono', monospace" }}>
                    Final Delivery in 48 Hours
                  </h3>
                  <p className="text-gray-300">
                    Your website is ready in 48 hours. Fast, reliable, and exactly what you envisioned.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Details Section */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/payment-section-bg-7T4z3E2rpPqRgPth9aF5rr.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Secure Payments
          </h2>

          {/* Payment Method Card */}
          <div className="bg-card/80 backdrop-blur border-2 border-cyan-500/50 rounded-lg p-8 md:p-12 mb-8 hover:border-cyan-500 transition-all duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                Tether (USDT) Address
              </h3>
              <div className="flex items-center gap-4 bg-background/50 p-4 rounded-lg border border-cyan-500/30">
                <code className="flex-1 text-cyan-400 font-mono text-sm md:text-base break-all">
                  TK2R2UkyfSqR3MidjV1BgcHbxKd446Cpru
                </code>
                <button
                  onClick={() => copyToClipboard("TK2R2UkyfSqR3MidjV1BgcHbxKd446Cpru")}
                  className="flex-shrink-0 p-2 hover:bg-cyan-500/20 rounded transition-colors duration-200"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-cyan-400" />
                  )}
                </button>
              </div>
            </div>

            <div className="border-t border-cyan-500/30 pt-8">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Space Mono', monospace" }}>
                PayPal Payment
              </h3>
              <div className="flex items-center gap-4 bg-background/50 p-4 rounded-lg border border-fuchsia-500/30">
                <code className="flex-1 text-fuchsia-400 font-mono text-sm md:text-base break-all">
                  fazli055@gmail.com
                </code>
                <button
                  onClick={() => copyToClipboard("fazli055@gmail.com")}
                  className="flex-shrink-0 p-2 hover:bg-fuchsia-500/20 rounded transition-colors duration-200"
                  title="Copy PayPal email"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5 text-fuchsia-400" />
                  )}
                </button>
              </div>
              <p className="text-gray-300 text-sm mt-4">
                Send payment to <span className="text-fuchsia-500 font-semibold">fazli055@gmail.com</span> via PayPal.
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-background/40 border border-fuchsia-500/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-fuchsia-500 mb-2">🔒</div>
              <p className="text-gray-300">Secure & Encrypted</p>
            </div>
            <div className="bg-background/40 border border-cyan-500/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-500 mb-2">⚡</div>
              <p className="text-gray-300">Instant Confirmation</p>
            </div>
            <div className="bg-background/40 border border-fuchsia-500/30 rounded-lg p-6">
              <div className="text-3xl font-bold text-fuchsia-500 mb-2">✓</div>
              <p className="text-gray-300">100% Transparent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        className="relative py-20 px-4 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663437188626/iQMtRxoPFtAbFgaVQXDZzG/cta-section-bg-GeJpS3EYUR9Dzon4b4LWqn.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            Let's chat about your project directly!
          </h2>

          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Ready to bring your vision to life? Connect with us on Telegram for a quick discussion about your project.
          </p>

          <a
            href="https://t.me/baqer_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button-blue inline-flex items-center gap-2 text-lg"
          >
            Chat on Telegram
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Designed by <span className="text-fuchsia-500 font-semibold">Baqer_ai</span>
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2026 Web Design Agency. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
