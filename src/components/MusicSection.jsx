import React from "react";
import {
  Music2,
  Play,
  ArrowRight,
  Headphones,
} from "lucide-react";

function MusicSection() {
  return (
    <section
      id="media"
      className="border-b border-[#e5d9c9] bg-[#f8f1e7] px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* ================= LEFT CONTENT ================= */}
          <div className="max-w-[620px]">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#b78332]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a8752d]">
                Music & Healing
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-[45px] font-medium leading-[1.02] tracking-[-0.025em] text-[#1d1917] sm:text-[54px] lg:text-[60px]">
              Music & Sound
              <br />
              Healing
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.75] text-[#514941] sm:text-[16px]">
              Explore the healing power of sound and frequency through
              Janine's original music, created to support relaxation,
              balance and inner peace.
            </p>

            {/* Small feature */}
            <div className="mt-7 flex items-center gap-4">

              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#cba66d]">
                <Music2
                  size={18}
                  strokeWidth={1.3}
                  className="text-[#b78332]"
                />
              </div>

              <div>
                <p className="text-[13px] font-semibold text-[#25201c]">
                  Healing Through Sound
                </p>

                <p className="mt-0.5 text-[12px] text-[#665c53]">
                  Frequencies • Music • Meditation
                </p>
              </div>

            </div>

          </div>

          {/* ================= RIGHT MEDIA CARD ================= */}
          <div className="relative overflow-hidden rounded-[2px] bg-[#30251f] shadow-[0_20px_50px_rgba(48,37,31,0.15)]">

            {/* Background Image */}
            <img
              src="/images/music-healing.jpg"
              alt="Music and sound healing"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#211a17]/60" />

            {/* Warm gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#241b18]/80 via-transparent to-[#241b18]/40" />

            {/* Content */}
            <div className="relative z-10 flex min-h-[280px] flex-col justify-between p-7 sm:p-9">

              {/* Top */}
              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
                    <Headphones
                      size={17}
                      strokeWidth={1.4}
                      className="text-white"
                    />
                  </div>

                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/75">
                    Featured
                  </span>

                </div>

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Sound Healing
                </span>

              </div>

              {/* Bottom */}
              <div className="flex items-end justify-between gap-6">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d2a25c]">
                    Listen Now
                  </p>

                  <h3 className="mt-2 font-serif text-[31px] italic leading-none text-white sm:text-[36px]">
                    Healing Through Sound
                  </h3>

                  <p className="mt-2 text-[12px] text-white/65">
                    Experience Janine's music and healing frequencies.
                  </p>
                </div>

                {/* Play Button */}
                <button
                  type="button"
                  aria-label="Play music"
                  className="group flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-white text-[#2c231e] transition-all duration-300 hover:scale-105 hover:bg-[#d0a05b]"
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
            Explore Music & Media

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

export default MusicSection;