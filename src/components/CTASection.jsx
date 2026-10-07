import React from "react";
import { ArrowRight, Flower2 } from "lucide-react";

function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#302438] px-6 py-24 sm:px-10 lg:px-12 lg:py-28"
    >
      {/* ================= DECORATIVE ELEMENTS ================= */}

      <div className="pointer-events-none absolute -left-16 -top-16 opacity-[0.08]">
        <Flower2
          size={220}
          strokeWidth={0.7}
          className="text-[#d3a45e]"
        />
      </div>

      <div className="pointer-events-none absolute -bottom-20 -right-20 opacity-[0.06]">
        <Flower2
          size={280}
          strokeWidth={0.7}
          className="text-[#d3a45e]"
        />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-[850px] text-center">

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4">

          <span className="h-[1px] w-10 bg-[#c99a54]" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#d1a35e]">
            Begin Your Journey
          </span>

          <span className="h-[1px] w-10 bg-[#c99a54]" />

        </div>

        {/* Heading */}
        <h2 className="mt-6 font-serif text-[48px] font-medium leading-[1.02] tracking-[-0.025em] text-white sm:text-[58px] md:text-[68px]">

          Ready to create a

          <br />

          <span className="italic text-[#d0a05a]">
            higher you?
          </span>

        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-[610px] text-[15px] leading-[1.75] text-white/65 sm:text-[16px]">
          Explore Janine's programs, teachings and healing
          experiences designed to support your personal journey
          toward greater awareness, balance and fulfillment.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">

          <a
            href="mailto:hello@example.com"
            className="group inline-flex items-center gap-3 rounded-full bg-[#b8893c] px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#d09d50]"
          >
            Work With Janine

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

        {/* Small supporting line */}
        <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-white/35">
          Life Coaching • Healing • Teaching • Transformation
        </p>

      </div>
    </section>
  );
}

export default CTASection;