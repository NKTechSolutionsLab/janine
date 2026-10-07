import React from "react";
import {
  Play,
  ArrowRight,
  Tv,
} from "lucide-react";

function JourneySection() {
  return (
    <section
      id="journey"
      className="border-b border-[#e5d9c9] bg-[#f8f1e7] px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[520px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#b78332]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a8752d]">
                Television & Media
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[45px] font-medium leading-[1.02] tracking-[-0.025em] text-[#1d1917] sm:text-[54px] lg:text-[60px]">
              Journey with
              <br />
              Janine
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-[1.75] text-[#514941] sm:text-[16px]">
              Inspiring conversations, spiritual insights and life
              guidance from Janine's long-running television talk show.
            </p>

            {/* Feature */}
            <div className="mt-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cba66d]">
                <Tv
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#b78332]"
                />
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#25201c]">
                  Journey with Janine
                </p>

                <p className="mt-0.5 text-[12px] text-[#665c53]">
                  Television Talk Show
                </p>
              </div>

            </div>

          </div>

          {/* ================= VIDEO CARD ================= */}
          <div className="relative overflow-hidden rounded-[2px] bg-[#30251f] shadow-[0_20px_50px_rgba(48,37,31,0.15)]">

            {/* Background Image */}
            <img
              src="/images/journey-janine.jpg"
              alt="Journey with Janine"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#1d1714]/55" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1512]/85 via-transparent to-[#1b1512]/20" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[320px] flex-col justify-between p-7 sm:p-10">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                    <Tv
                      size={17}
                      strokeWidth={1.3}
                      className="text-white"
                    />
                  </div>

                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                    Featured Series
                  </span>

                </div>

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                  16+ Years
                </span>

              </div>

              {/* Bottom */}
              <div className="flex items-end justify-between gap-6">

                <div>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d2a25c]">
                    Watch Now
                  </p>

                  <h3 className="mt-2 font-serif text-[32px] italic leading-none text-white sm:text-[38px]">
                    Journey with Janine
                  </h3>

                  <p className="mt-3 max-w-[440px] text-[12px] leading-relaxed text-white/65">
                    Explore conversations, teachings and stories
                    created to inspire personal transformation.
                  </p>

                </div>

                {/* Play Button */}
                <button
                  type="button"
                  aria-label="Play Journey with Janine"
                  className="group flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-white text-[#2c231e] transition-all duration-300 hover:scale-105 hover:bg-[#d0a05b]"
                >
                  <Play
                    size={21}
                    fill="currentColor"
                    className="ml-1 transition-colors group-hover:text-white"
                  />
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM LINK ================= */}
        <div className="mt-10 flex justify-end">

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a36e29]"
          >
            Explore Journey with Janine

            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

      </div>
    </section>
  );
}

export default JourneySection;