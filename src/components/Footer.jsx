import React from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";

function Footer() {
  const exploreLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Books", href: "#books" },
    { name: "Music & Media", href: "#media" },
  ];

  const discoverLinks = [
    { name: "Journey with Janine", href: "#journey" },
    { name: "Events", href: "#events" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#211b20] text-white">

      {/* ================= MAIN FOOTER ================= */}

      <div className="mx-auto max-w-[1600px] px-6 py-14 sm:px-10 lg:px-12">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_0.7fr_0.7fr_1fr]">

          {/* ================= BRAND ================= */}

          <div>

            <a href="#home" className="inline-block">

              <h2 className="font-serif text-[32px] italic leading-none">
                Janine Ambrose
              </h2>

              <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.3em] text-white/50">
                Loving Arts Centre
              </p>

            </a>

            <p className="mt-6 max-w-[410px] text-[13px] leading-[1.8] text-white/55">
              Spiritual guidance, energy healing and inspirational
              teaching to support a more conscious, joyful and
              fulfilling life.
            </p>

            {/* ================= SOCIAL ICONS ================= */}

            <div className="mt-7 flex gap-3">

              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#b8893c] hover:text-[#d0a05b]"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[17px] w-[17px]"
                  aria-hidden="true"
                >

                  <rect
                    x="3.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="17.3"
                    cy="6.8"
                    r="1"
                    fill="currentColor"
                  />

                </svg>

              </a>


              {/* Facebook */}

              <a
                href="#"
                aria-label="Facebook"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#b8893c] hover:text-[#d0a05b]"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[17px] w-[17px]"
                  aria-hidden="true"
                >

                  <path d="M14.2 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.4H8.7V13h2.6v8h2.9Z" />

                </svg>

              </a>


              {/* YouTube */}

              <a
                href="#"
                aria-label="YouTube"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#b8893c] hover:text-[#d0a05b]"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px]"
                  aria-hidden="true"
                >

                  <path
                    d="M21 8.2a2.8 2.8 0 0 0-2-2C17.2 5.7 12 5.7 12 5.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2C2.5 10 2.5 12 2.5 12s0 2 .5 3.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2c.5-1.8.5-3.8.5-3.8s0-2-.5-3.8Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />

                  <path
                    d="m10 9.5 5 2.5-5 2.5v-5Z"
                    fill="currentColor"
                  />

                </svg>

              </a>

            </div>

          </div>


          {/* ================= EXPLORE ================= */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c99a54]">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              {exploreLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-[13px] text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

            </nav>

          </div>


          {/* ================= DISCOVER ================= */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c99a54]">
              Discover
            </h3>

            <nav className="mt-5 flex flex-col gap-3">

              {discoverLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-[13px] text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {link.name}
                </a>
              ))}

            </nav>

          </div>


          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#c99a54]">
              Connect
            </h3>

            <p className="mt-5 text-[13px] leading-[1.7] text-white/55">
              Ready to begin your journey?
            </p>

            <a
              href="mailto:hello@example.com"
              className="group mt-4 inline-flex items-center gap-2 text-[13px] text-white transition-colors duration-300 hover:text-[#d0a05b]"
            >
              Contact Janine

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

            </a>

          </div>

        </div>


        {/* ================= BOTTOM LINE ================= */}

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[10px] text-white/35">
            © {new Date().getFullYear()} Loving Arts Centre. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="text-[10px] text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-[10px] text-white/35 transition-colors duration-300 hover:text-white/70"
            >
              Terms
            </a>

            {/* Back to top */}

            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 hover:border-[#b8893c] hover:text-[#d0a05b]"
            >

              <ArrowUp
                size={14}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;