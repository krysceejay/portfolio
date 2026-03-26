import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import Clipart from "@repo/ui/Clipart";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
  details: string;
  tech?: string[];
  category?: string;
};

const originalCards: Card[] = [
  {
    id: 1,
    title: "Venergie",
    description:
      "Affordable access to renewable energy for homes and businesses.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    details:
      "Built highly scalable distributed systems using Elixir and Phoenix, supporting real-time communication and fault tolerance.",
    tech: ["Reactjs", "NestJS", "Docker", "PostgreSQL"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "Vargent Africa",
    description: "Fast & affordable money transfers across Africa.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    details:
      "Built highly scalable distributed systems using Elixir and Phoenix, supporting real-time communication and fault tolerance.",
    tech: ["Reactjs", "NestJS", "Docker", "PostgreSQL"],
    category: "Web Development",
  },
  {
    id: 3,
    title: "Candidately",
    description: "Candidate Presentation powered by AI",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    details:
      "Built highly scalable distributed systems using Elixir and Phoenix, supporting real-time communication and fault tolerance.",
    tech: ["Reactjs", "Elixir", "Phoenix", "Docker", "PostgreSQL", "OpenAI"],
    category: "Web Development",
  },
  {
    id: 4,
    title: "BITT",
    description:
      "A leading financial technology company specializing in the development of Central Bank Digital Currencies (CBDCs) and stablecoin solutions",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    details:
      "Built highly scalable distributed systems using Elixir and Phoenix, supporting real-time communication and fault tolerance.",
    tech: ["Elixir", "Phoenix", "Docker", "PostgreSQL"],
    category: "Web Development",
  },
  {
    id: 5,
    title: "Stanbic IBTC",
    description: "Personal, business and commercial banking",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
    details:
      "Built highly scalable distributed systems using Elixir and Phoenix, supporting real-time communication and fault tolerance.",
    tech: ["ReactNative"],
    category: "Mobile Development",
  },
];

// duplicate for seamless looping
const cards = [...originalCards, ...originalCards];

const isMobile = window.innerWidth < 768;

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  // Continuous auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5;

    const animate = () => {
      if (!isPaused && !isInteracting) {
        el.scrollLeft += speed;

        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isPaused, isInteracting]);

  // 🧠 Pause when modal opens
  useEffect(() => {
    if (selectedCard) {
      setIsPaused(true);
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      setIsPaused(false);
      document.body.style.overflow = "";
    }
  }, [selectedCard]);

  // Hold-to-scroll buttons
  const startScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    setIsInteracting(true); // 👈 important

    // ❗ STOP existing animation first
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    const speed = direction === "left" ? -20 : 20;

    const scroll = () => {
      el.scrollLeft += speed;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    setIsInteracting(false); // 👈 allow auto-scroll again
  };

  return (
    <main>
      <section className="bg-(--bg-sec) h-200 ">
        <div className="bg-(--bg) h-full rounded-b-[90px] md:rounded-b-[150px] relative isolate">
          <Clipart />
          <div className="container h-full py-24">
            <div className="flex flex-col justify-center items-center h-full mt-8">
              <div className="w-45 h-45 rounded-full overflow-hidden bg-off-white p-1">
                <img
                  src="/assets/images/photo1.jpg"
                  alt="Photo"
                  className="h-full w-full object-cover object-top-right rounded-full"
                />
              </div>
              <h3 className="font-medium text-5xl text-center text-pretty mt-10 text-(--text)">
                Building digital <br /> products, brands and <br /> experience.
              </h3>
              {/* <button className="bg-black text-white py-3 px-8 rounded-full cursor-pointer mt-15 text-sm">
                More shots
              </button> */}
            </div>
          </div>
        </div>
      </section>
      {/* Brands */}
      <section id="brands" className="bg-(--bg)">
        <div className="bg-(--bg-sec) h-full rounded-b-[90px] md:rounded-b-[150px]">
          <div className="container py-24">
            <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full place-items-center">
              <Link
                to="https://www.venergie.africa/"
                className="w-55 h-15 bg-off-white p-2 rounded-lg"
                target="_blank"
              >
                <img
                  src="/assets/images/venergie-logo.svg"
                  alt="Venegie Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link
                to="https://www.bitt.com/"
                className="w-55 h-15 bg-off-white p-2 rounded-lg"
                target="_blank"
              >
                <img
                  src="/assets/images/bitt-logo.png"
                  className="h-full w-full object-contain"
                  alt="Bitt Logo"
                />
              </Link>
              <Link
                to="https://www.vargent.africa/"
                className="w-55 h-15 bg-off-white p-2 rounded-lg"
                target="_blank"
              >
                <img
                  src="/assets/images/vargent-logo.svg"
                  alt="Vargent Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link
                to="https://www.stanbicibtcbank.com/"
                className="w-55 h-15 bg-off-white p-2 rounded-lg"
                target="_blank"
              >
                <img
                  src="/assets/images/stanbic-logo.png"
                  className="h-full w-full object-contain"
                  alt="Stanbic IBTC Logo"
                />
              </Link>
              <Link
                to="https://www.candidately.com/"
                className="w-55 h-15 bg-off-white p-2 rounded-lg"
                target="_blank"
              >
                <img
                  src="/assets/images/candidately-logo.svg"
                  alt="Candidately Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="bg-(--bg-sec) text-(--text)">
        <div className="bg-(--bg) h-full rounded-b-[90px] md:rounded-b-[150px] relative isolate">
          <Clipart />
          <div className="container pt-24 pb-28">
            <h3 className="text-5xl text-center font-medium">Services</h3>
            <p className="text-center mt-6 text-xl">
              I design and build scalable, high-performance <br /> digital
              solutions tailored to your business needs.
            </p>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-18">
              {/* Web Development (Large) */}
              <div className="md:col-span-2 bg-(--bg-card) rounded-3xl md:rounded-e-lg p-6 flex flex-col justify-between min-h-65 group hover:scale-[1.02] transition">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 mb-4 text-off-white bg-dark-slate p-2 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2">
                    Web Development
                  </h3>
                  <p className="opacity-80 leading-relaxed">
                    I build scalable, secure and high-performance web
                    applications using modern frameworks like React, Next.js,
                    and backend technologies such as NestJS and Phoenix.
                  </p>
                </div>
                <span className="text-xs opacity-50 mt-4">
                  Full-stack • APIs • Performance
                </span>
              </div>
              {/* Mobile App */}
              <div className="bg-(--bg-card) rounded-3xl md:rounded-s-lg p-6 shadow-sm flex flex-col min-h-65 hover:shadow-md transition">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 mb-4 text-off-white bg-dark-slate p-2 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2 text-(--text)">
                    Mobile App
                  </h3>
                  <p className="leading-relaxed line-clamp-4 text-(--text)">
                    I develop cross-platform mobile applications using React
                    Native, delivering smooth user experiences, fast
                    performance, and maintainable scalable codebases.
                  </p>
                </div>
              </div>
              {/* Web Hosting */}
              <div className="bg-(--bg-card) rounded-3xl md:rounded-e-lg p-6 flex flex-col min-h-65 hover:scale-[1.02] transition">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 mb-4 text-off-white bg-dark-slate p-2 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">Web Hosting</h3>
                  <p className="opacity-80 leading-relaxed line-clamp-4">
                    I deploy and manage reliable hosting environments with
                    optimized performance, CI/CD pipelines, and cloud
                    infrastructure ensuring uptime, speed, and scalability.
                  </p>
                </div>
              </div>
              {/* Database Management (Large) */}
              <div className="md:col-span-2 bg-(--bg-card) rounded-3xl md:rounded-s-lg p-6 shadow-sm flex flex-col justify-between min-h-65 hover:shadow-md transition">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 mb-4 text-off-white bg-dark-slate p-2 rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  <h3 className="text-2xl font-semibold mb-2">
                    Database Management
                  </h3>
                  <p className="leading-relaxed">
                    I design efficient database architectures, optimize queries,
                    and ensure data integrity using PostgreSQL, MySQL, and NoSQL
                    systems for high-performance applications.
                  </p>
                </div>
                <span className="text-xs text-gray-400 mt-4">
                  Optimization • Scaling • Data Integrity
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project */}
      <section id="projects" className="bg-(--bg) text-(--text)">
        <div className="bg-(--bg-sec) h-full border-none relative isolate">
          <Clipart />
          <div className="m-auto overflow-hidden md:px-6 pt-24 pb-28 appear-view">
            <h3 className="text-5xl text-center font-medium px-6">Projects</h3>
            <p className="text-center mt-6 text-xl px-6">
              Selected projects showcasing real-world impact and collaborations{" "}
              <br />
              with innovative brands across web, mobile, and scalable systems.
            </p>
            <div
              className="relative w-full mt-18 bg-transparent p-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => !selectedCard && setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => !selectedCard && setIsPaused(false)}
            >
              {/* Left Control */}
              <button
                onClick={() => {
                  if (isMobile) {
                    scrollRef.current?.scrollBy({
                      left: -300,
                      behavior: "smooth",
                    });
                  }
                }}
                onMouseDown={() => startScroll("left")}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                onTouchStart={() => startScroll("left")}
                onTouchEnd={stopScroll}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white py-3 px-4 rounded-full hover:bg-black font-bold cursor-pointer"
              >
                ←
              </button>

              {/* Carousel */}
              <div
                ref={scrollRef}
                className="carousel-fade flex gap-x-6 overflow-x-scroll px-10 py-6 scrollbar-hide scroll-container rounded-2xl touch-pan-x"
              >
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="relative min-w-95 h-85 rounded-2xl overflow-hidden group cursor-pointer transform transition duration-300 opacity-90 hover:opacity-100 hover:scale-105 hover:z-10"
                  >
                    {/* Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 md:group-hover:bg-black/70 transition duration-300" />
                    {/* Content */}
                    <div className="absolute bottom-12 p-4 text-white translate-y-10 group-hover:translate-y-0 transition duration-300">
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <div className="md:hidden group-hover:block group-active:block transition duration-300">
                        <p className="text-sm mt-2">{card.description}</p>
                        <button
                          className="bg-black hover:bg-white/80 hover:text-black text-white py-3 px-6 rounded-full cursor-pointer mt-4 text-sm"
                          onClick={() => setSelectedCard(card)}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Right Control */}
              <button
                onClick={() => {
                  if (isMobile) {
                    scrollRef.current?.scrollBy({
                      left: 300,
                      behavior: "smooth",
                    });
                  }
                }}
                onMouseDown={() => startScroll("right")}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                onTouchStart={() => startScroll("right")}
                onTouchEnd={stopScroll}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white py-3 px-4 rounded-full hover:bg-black font-bold cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 🪟 Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            onClick={() => setSelectedCard(null)}
            className="absolute inset-0 bg-black/70"
          />

          {/* Modal Content */}
          <div className="relative bg-(--bg-sec) text-(--text-modal) max-w-2xl w-full rounded-2xl mx-2.5 my-6 sm:m-6 pb-8 z-10 shadow-xl overflow-hidden overflow-y-scroll max-h-[calc(100vh-10rem)]">
            <button
              onClick={() => setSelectedCard(null)}
              className="absolute top-3 right-3 cursor-pointer font-semibold text-lg/3 bg-dark-slate text-off-white rounded-full text-center p-1 w-8 h-8"
            >
              ✕
            </button>
            <img
              src={selectedCard.image}
              className="w-full h-90 object-cover overflow-hidden"
            />
            <div className="px-6">
              <h2 className="text-2xl font-semibold mt-3">Project Overview</h2>
              <p className="text-(--text-detail) leading-relaxed mt-1">
                {selectedCard.description}
              </p>
              <div className="mt-5">
                <h3 className="text-xl font-medium">Technologies / Tools</h3>
                <div className="mt-1 flex items-center gap-2 flex-wrap text-off-white text-xs">
                  {selectedCard.tech?.map((tech) => (
                    <span className="bg-dark-slate px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-medium">Client</h3>
                <p className="text-(--text-detail) leading-relaxed mt-1">
                  {selectedCard.title}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-medium">Category</h3>
                <p className="text-(--text-detail) leading-relaxed mt-1">
                  {selectedCard.category}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setSelectedCard(null)}
                  className="bg-black text-white py-2 px-5 rounded-lg cursor-pointer text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Contact me */}
      <section id="contact" className="bg-(--bg-sec) text-(--text)">
        <div className="bg-(--bg) h-full rounded-t-[90px] md:rounded-t-[150px] relative isolate">
          <div className="container pt-24 pb-28">
            <div className="flex flex-col justify-center items-center h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-20 h-20"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
              <h3 className="font-medium text-5xl text-center text-pretty mt-10">
                Tell me about <br /> your project.
              </h3>
              <Link
                to="mailto:chijiokechrys@gmail.com"
                className="bg-black text-white py-3 px-4 rounded-full cursor-pointer mt-15 text-sm flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span>E-mail me</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
