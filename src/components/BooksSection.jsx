import React from "react";
import { ArrowRight } from "lucide-react";
import book1 from "../images/book1.jpg"
import book2 from "../images/book2.jpg"

function BooksSection() {
  const books = [
    {
      title: "McDermott Mysteries",
      subtitle: "The Secret Mountain",
      image: book1,
      link: "https://www.amazon.com/McDermott-Mysteries-Zubock-Secret-Mountain-ebook/dp/B00B9HTE96/ref=sr_1_1?nsdOptOutParam=true&sr=8-1",
    },
    {
      title: "Achieving Self Mastery",
      subtitle: "Ultimate Guide",
      image: book2,
      link: "https://www.amazon.com/Achieving-Self-Mastery-Janine-Ambrose-ebook/dp/B0053H8Y4Y/ref=sr_1_1?sr=8-1",
    },
  ];

  return (
    <section
      id="books"
      className="border-b border-[#e5d9c9] bg-[#f8f1e7] px-6 py-20 sm:px-10 lg:px-12"
    >
      <div className="mx-auto max-w-[1500px]">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-[650px] text-center">

          <h2 className="font-serif text-[44px] font-medium leading-[1.05] tracking-[-0.02em] text-[#1d1917] sm:text-[52px]">
            Books by Janine
          </h2>

          <p className="mt-3 text-[14px] leading-relaxed text-[#5a5149]">
            Inspiring reads to support your personal and spiritual growth.
          </p>

        </div>

        {/* ================= BOOKS ================= */}
        <div className="mx-auto mt-12 grid max-w-[760px] grid-cols-1 gap-14 sm:grid-cols-2 sm:gap-16">

          {books.map((book) => (
            <article
              key={book.title}
              className="group text-center"
            >

              {/* Book Cover */}
              <div className="mx-auto h-[300px] w-[200px] overflow-hidden bg-[#ddd0bf] shadow-[0_18px_35px_rgba(55,40,25,0.18)]">

                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

              </div>

              {/* Book Title */}
              <h3 className="mt-5 text-[15px] font-semibold text-[#211d1a]">
                {book.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-1 text-[13px] text-[#62584f]">
                "{book.subtitle}"
              </p>

              {/* Amazon Button */}
              <a
                href={book.link}
                target="_blank"
                rel="noreferrer"
                className="group/button mt-5 inline-flex items-center gap-2 border border-[#b78332] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#a36e29] transition-all duration-300 hover:bg-[#b78332] hover:text-white"
              >
                View on Amazon

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover/button:translate-x-1"
                />
              </a>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default BooksSection;