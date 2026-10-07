import React from "react";
import { ArrowRight } from "lucide-react";
import about from "../images/about.png"
function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-[#e5d9c9] bg-[#f8f1e7]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">

        {/* ================= LEFT : ABOUT ================= */}
        <div className="relative flex flex-col justify-center px-8 py-20 sm:px-12 lg:min-h-[560px] lg:px-16 xl:px-20">

          {/* Decorative line */}
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-[#b78332]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a8752d]">
              About Janine
            </span>
          </div>

          {/* Heading */}
          <h2 className="max-w-[620px] font-serif text-[46px] font-medium leading-[1.05] tracking-[-0.025em] text-[#1d1917] sm:text-[52px] lg:text-[58px]">
            About Janine Ambrose
          </h2>

          {/* Paragraph */}
          <p className="mt-6 max-w-[620px] text-[15px] leading-[1.7] text-[#3d3732] sm:text-[16px]">
            Dr. Janine Ambrose is a Life Coach, Reiki Master Teacher,
            instructor of metaphysics, counselor, motivational speaker,
            composer, pianist, writer, and artist.
          </p>

          <p className="mt-4 max-w-[620px] text-[15px] leading-[1.7] text-[#3d3732] sm:text-[16px]">
            With a PhD in Philosophy / Therapeutic Counseling, she is
            dedicated to helping others through spiritual guidance,
            energy healing and inspirational teaching.
          </p>

          {/* Button */}
          <div className="mt-7">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[#b78332] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#a36e29] transition-all duration-300 hover:bg-[#b78332] hover:text-white"
            >
              Read More

              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Quote */}
          <div className="mt-10 max-w-[570px]">
            <p className="font-serif text-[24px] italic leading-[1.25] text-[#2a2420] sm:text-[27px]">
              "Knowledge brings forth truth,
              releasing fear & creating happiness."
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#b78332]" />

              <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#413a34]">
                Janine Ambrose
              </span>
            </div>
          </div>

          {/* Decorative background detail */}
          <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-[300px] w-[300px] rounded-full border border-[#d9c6ac]/50" />

        </div>

        {/* ================= RIGHT : IMAGE ================= */}
        <div className="relative min-h-[500px] overflow-hidden border-t border-[#e5d9c9] lg:border-l lg:border-t-0">

          <img
            src={about}
            alt="Janine Ambrose"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#30251e]/45 via-transparent to-[#f6e7d4]/10" />

          {/* Small image label */}
          <div className="absolute bottom-8 left-8">
            <div className="border-l border-[#d0a15b] pl-4">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/80">
                Loving Arts Centre
              </p>

              <p className="mt-1 font-serif text-[23px] italic text-white">
                Awaken • Heal • Create
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;