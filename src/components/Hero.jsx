import React from "react";
import { ArrowRight } from "lucide-react";
import bg from "../images/hero_bg.png";
import hero from "../images/hero.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[820px]
        overflow-hidden
        bg-[#ead9c4]
        pt-[0px]

        sm:min-h-[850px]

        md:min-h-[700px]
        md:pt-[78px]

        lg:min-h-[680px]
      "
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0">
        <img
          src={bg}
          alt="Mountain landscape"
          className="
            h-full
            w-full
            object-cover
            object-[58%_center]

            sm:object-[55%_center]

            md:object-center

            lg:object-center
          "
        />

        {/* Warm overall overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#ead9c4]/15
            via-[#f4dfc5]/30
            to-[#f5e2ca]/80

            md:from-[#ead9c4]/10
            md:via-[#f4dfc5]/25
            md:to-[#f5e2ca]/75
          "
        />

        {/* Right side brightness */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-full
            bg-gradient-to-r
            from-transparent
            via-[#f5e2ca]/20
            to-[#f8e9d6]/70

            sm:w-[75%]

            md:w-[75%]

            lg:w-[70%]
          "
        />

        {/* Mobile readability */}
        <div
          className="
            absolute
            inset-0
            bg-[#f3dfc8]/38

            sm:bg-[#f3dfc8]/28

            md:bg-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[300px]
            bg-gradient-to-t
            from-[#ead9c4]
            via-[#ead9c4]/80
            to-transparent

            sm:h-[270px]

            md:h-[180px]

            lg:h-[130px]
          "
        />
      </div>

      {/* =========================================================
          JANINE HERO IMAGE
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          z-[5]
          h-[355px]
          w-full
          -translate-x-1/2
          overflow-hidden

          sm:h-[390px]

          md:left-0
          md:h-[500px]
          md:w-[52%]
          md:translate-x-0

          lg:inset-y-0
          lg:h-auto
          lg:w-[45%]
        "
      >
        <img
          src={hero}
          alt="Janine Ambrose"
          className="
            absolute
            bottom-0
            left-1/2
            h-auto
            w-[325px]
            max-w-none
            -translate-x-1/2
            object-contain
            object-bottom

            sm:w-[375px]

            md:left-[-5%]
            md:w-[115%]
            md:translate-x-0

            lg:bottom-0
            lg:left-[-3%]
            lg:h-[92%]
            lg:w-auto
          "
        />

        {/* Image right-side blend */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            hidden
            w-[30%]
            bg-gradient-to-r
            from-transparent
            to-[#ead9c4]/25

            md:block
          "
        />

        {/* Image bottom blend */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[25%]
            bg-gradient-to-t
            from-[#ead9c4]
            via-[#ead9c4]/55
            to-transparent

            sm:h-[25%]

            md:h-[20%]

            lg:h-[18%]
          "
        />
      </div>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          min-h-[820px]
          max-w-[1600px]

          sm:min-h-[850px]

          md:min-h-[622px]

          lg:min-h-[600px]
        "
      >
        <div
          className="
            flex
            min-h-[820px]
            w-full
            items-start
            px-5
            pt-12

            sm:min-h-[850px]
            sm:px-8
            sm:pt-14

            md:min-h-[622px]
            md:ml-auto
            md:w-[60%]
            md:px-8
            md:pt-16

            lg:min-h-[600px]
            lg:w-[63%]
            lg:items-center
            lg:px-12
            lg:pt-0

            xl:px-16
          "
        >
          <div className="relative w-full max-w-[850px]">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
              className="
                mb-5
                flex
                max-w-[340px]
                flex-wrap
                items-center
                gap-x-2
                gap-y-2
                text-[8px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#211d1a]

                sm:mb-6
                sm:max-w-[600px]
                sm:gap-x-3
                sm:text-[9px]
                sm:tracking-[0.25em]

                md:max-w-[650px]
                md:text-[9px]

                lg:text-[10px]
                lg:tracking-[0.28em]

                xl:text-[11px]
              "
            >
              <span>Spiritual Guidance</span>

              <span className="text-[#b98235]">
                ×
              </span>

              <span>Energy Healing</span>

              <span className="text-[#b98235]">
                ×
              </span>

              <span>Inspirational Teaching</span>
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                max-w-[360px]
                font-serif
                text-[43px]
                font-medium
                leading-[0.94]
                tracking-[-0.04em]
                text-[#171513]

                sm:max-w-[600px]
                sm:text-[52px]

                md:max-w-[760px]
                md:text-[58px]

                lg:text-[72px]

                xl:text-[82px]
              "
            >
              Awaken Heal
              <br />
              Create a{" "}
              <span className="italic text-[#b27b32]">
                Higher You
              </span>
            </h1>

            {/* =================================================
                GOLD DIVIDER
            ================================================= */}

            <div
              className="
                mt-5
                h-[1px]
                w-10
                bg-[#b98235]

                sm:mt-7
                sm:w-12
              "
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-4
                max-w-[340px]
                text-[14px]
                leading-[1.55]
                text-[#302a25]

                sm:max-w-[520px]
                sm:mt-5
                sm:text-[16px]

                md:max-w-[520px]
                md:text-[16px]

                lg:max-w-[590px]
                lg:text-[18px]
              "
            >
              Guidance, healing, and transformational teachings
              to support a more conscious, joyful and fulfilling life.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                gap-3

                sm:mt-7
                sm:gap-4
              "
            >
              {/* Primary CTA */}

              <a
                href="#programs"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  bg-[#b98235]
                  px-5
                  py-3.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-white
                  shadow-[0_8px_20px_rgba(145,99,38,0.18)]
                  transition-all
                  duration-300
                  hover:bg-[#986728]
                  hover:shadow-[0_10px_25px_rgba(145,99,38,0.25)]

                  sm:px-8
                  sm:py-4
                  sm:text-[10px]

                  md:text-[10px]

                  lg:text-[11px]
                "
              >
                Explore Programs

                <ArrowRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </a>

              {/* Secondary CTA */}

              <a
                href="#about"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#b98235]
                  bg-white/20
                  px-5
                  py-3.5
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.13em]
                  text-[#a16d2b]
                  backdrop-blur-[3px]
                  transition-all
                  duration-300
                  hover:bg-[#b98235]
                  hover:text-white

                  sm:px-8
                  sm:py-4
                  sm:text-[10px]

                  lg:text-[11px]
                "
              >
                Learn More
              </a>
            </div>

            {/* =================================================
                DESKTOP QUOTE

                UNCHANGED DESKTOP STRUCTURE
            ================================================= */}

            <div
              className="
                absolute
                right-[-20px]
                top-[245px]
                hidden
                w-[270px]

                lg:block

                xl:right-[-10px]
                xl:top-[255px]
                xl:w-[310px]

                2xl:right-0
                2xl:top-[265px]
                2xl:w-[330px]
              "
            >
              <p
                className="
                  mt-12
                  ml-5
                  font-serif
                  text-[21px]
                  italic
                  leading-[1.25]
                  text-[#28211c]

                  xl:text-[24px]

                  2xl:text-[27px]
                "
              >
                "Knowledge brings forth truth,
                <br />
                releasing fear &
                <br />
                creating happiness."
              </p>

              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-[1px]
                    w-10
                    shrink-0
                    bg-[#b98235]
                  "
                />

                <span
                  className="
                    whitespace-nowrap
                    text-[8px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-[#302923]

                    xl:text-[9px]
                  "
                >
                  Janine Ambrose
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          TABLET QUOTE

          UNCHANGED
      ========================================================= */}

      <div
        className="
          absolute
          right-6
          top-[250px]
          z-20
          hidden
          w-[210px]

          md:block

          lg:hidden
        "
      >
        <p
          className="
            font-serif
            text-[17px]
            italic
            leading-[1.25]
            text-[#28211c]
          "
        >
          "Knowledge brings forth truth,
          releasing fear &
          creating happiness."
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="h-[1px] w-7 bg-[#b98235]" />

          <span
            className="
              whitespace-nowrap
              text-[8px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#302923]
            "
          >
            Janine Ambrose
          </span>
        </div>
      </div>

      {/* =========================================================
          MOBILE QUOTE

          MOVED OUT OF THE BUTTON AREA
      ========================================================= */}

      <div
        className="
          absolute
          right-5
          top-[565px]
          z-20
          w-[205px]

          sm:right-8
          sm:top-[585px]
          sm:w-[230px]

          md:hidden
        "
      >
        <p
          className="
            text-right
            font-serif
            text-[15px]
            italic
            leading-[1.28]
            text-[#28211c]

            sm:text-[17px]
          "
        >
          "Knowledge brings forth truth,
          <br />
          releasing fear &
          <br />
          creating happiness."
        </p>

        <div
          className="
            mt-3
            flex
            items-center
            justify-end
            gap-2
          "
        >
          <span className="h-[1px] w-7 bg-[#b98235]" />

          <span
            className="
              whitespace-nowrap
              text-[7px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#302923]

              sm:text-[8px]
            "
          >
            Janine Ambrose
          </span>
        </div>
      </div>

      {/* =========================================================
          MOBILE BOTTOM BLEND
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[7]
          h-[150px]
          bg-gradient-to-t
          from-[#ead9c4]
          via-[#ead9c4]/60
          to-transparent

          sm:h-[150px]

          md:hidden
        "
      />
    </section>
  );
}

export default Hero;