import React from "react";
import {
  Flower2,
  Triangle,
  Sun,
  Music2,
  BookOpen,
} from "lucide-react";

function ServicesBar() {
  const services = [
    {
      icon: Flower2,
      title: "Life Coaching",
      description: "Guidance for a more fulfilling life",
    },
    {
      icon: Triangle,
      title: "Reiki & Energy Healing",
      description: "Restore balance and well-being",
    },
    {
      icon: Sun,
      title: "Metaphysics Teaching",
      description: "Expand your understanding of life and consciousness",
    },
    {
      icon: Music2,
      title: "Music & Sound Healing",
      description: "Healing frequencies for mind, body and spirit",
    },
    {
      icon: BookOpen,
      title: "Author & Speaker",
      description: "Inspiring through books, talks and workshops",
    },
  ];

  return (
    <section
      id="programs"
      className="border-y border-[#e5d9c9] bg-[#f8f1e7]"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className={`
                flex min-h-[108px] items-center gap-5 px-8 py-6
                border-[#e5d9c9]
                ${index !== 0 ? "border-t md:border-l md:border-t-0" : ""}
                lg:border-t-0
                ${index !== 0 ? "lg:border-l" : ""}
              `}
            >
              {/* Icon */}
              <Icon
                size={45}
                strokeWidth={1.25}
                className="shrink-0 text-[#b78332]"
              />

              {/* Text */}
              <div>
                <h3 className="text-[15px] font-semibold leading-tight text-[#211d1a]">
                  {service.title}
                </h3>

                <p className="mt-1 max-w-[175px] text-[12.5px] leading-[1.45] text-[#574e46]">
                  {service.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}

export default ServicesBar;