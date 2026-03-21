import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const originalCards: Card[] = [
  {
    id: 1,
    title: "Elixir Systems",
    description: "Building scalable distributed systems with Phoenix.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 2,
    title: "NestJS APIs",
    description: "Robust backend microservices with Kafka.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    id: 3,
    title: "React Apps",
    description: "Modern UI with React, TS & Tailwind.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },
  {
    id: 4,
    title: "Mobile Apps",
    description: "Cross-platform apps with React Native.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 5,
    title: "Database Design",
    description: "Efficient schema & performance tuning.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
  },
];

// duplicate for seamless looping
const cards = [...originalCards, ...originalCards];

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Continuous auto scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = 0.5; // adjust speed

    const animate = () => {
      if (!isPaused) {
        el.scrollLeft += speed;

        // reset scroll for infinite effect
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
  }, [isPaused]);

  // Hold-to-scroll buttons
  const startScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const speed = direction === "left" ? -20 : 20;

    const scroll = () => {
      el.scrollLeft += speed;
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);
  };

  const stopScroll = () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
  };

  return (
    <main>
      <section className="bg-off-white h-200">
        <div className="bg-pearl-white h-full rounded-b-[90px] md:rounded-b-[150px]">
          <div className="container h-full py-24">
            <div className="flex flex-col justify-center items-center h-full mt-8">
              <div className="w-45 h-45 rounded-full overflow-hidden bg-off-white p-1">
                <img
                  src="/assets/images/photo1.jpg"
                  alt="Photo"
                  className="h-full w-full object-cover object-top-right rounded-full"
                />
              </div>
              <h3 className="font-medium text-5xl text-center text-pretty mt-10">
                Building digital <br /> products, brands and <br /> experience.
              </h3>
              <button className="bg-black text-white py-3 px-8 rounded-full cursor-pointer mt-15 text-sm">
                More shots
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Brands */}
      <section id="brands" className="bg-pearl-white">
        <div className="bg-off-white h-full rounded-b-[90px] md:rounded-b-[150px]">
          <div className="container py-24">
            <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(220px,1fr))] w-full place-items-center">
              <Link
                to="https://www.venergie.africa/"
                className="w-55 h-15"
                target="_blank"
              >
                <img
                  src="/assets/images/venergie-logo.svg"
                  alt="Venegie Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link
                to="https://www.vargent.africa/"
                className="w-55 h-15"
                target="_blank"
              >
                <img
                  src="/assets/images/vargent-logo.svg"
                  alt="Vargent Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link
                to="https://www.candidately.com/"
                className="w-55 h-15"
                target="_blank"
              >
                <img
                  src="/assets/images/candidately-logo.svg"
                  alt="Candidately Logo"
                  className="h-full w-full object-contain"
                />
              </Link>
              <Link to="/" className="w-55 h-15" target="_blank">
                <img
                  src="/assets/images/bitt-logo.png"
                  className="h-full w-full object-contain"
                  alt="Bitt Logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section id="services" className="bg-off-white">
        <div className="bg-pearl-white h-full rounded-b-[90px] md:rounded-b-[150px]">
          <div className="container pt-24 pb-28">
            <h3 className="text-4xl text-center font-medium">Services</h3>
            <p className="text-center mt-6 text-lg">
              I design and build scalable, high-performance <br /> digital
              solutions tailored to your business needs.
            </p>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-18">
              {/* Web Development (Large) */}
              <div className="md:col-span-2 bg-white rounded-3xl md:rounded-e-lg p-6 flex flex-col justify-between min-h-65 group hover:scale-[1.02] transition">
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
              <div className="bg-white rounded-3xl md:rounded-s-lg p-6 shadow-sm flex flex-col min-h-65 hover:shadow-md transition">
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
                  <h3 className="text-xl font-semibold mb-2">Mobile App</h3>
                  <p className="text-gray-600 leading-relaxed line-clamp-4">
                    I develop cross-platform mobile applications using React
                    Native, delivering smooth user experiences, fast
                    performance, and maintainable scalable codebases.
                  </p>
                </div>
              </div>
              {/* Web Hosting */}
              <div className="bg-white rounded-3xl md:rounded-e-lg p-6 flex flex-col min-h-65 hover:scale-[1.02] transition">
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
              <div className="md:col-span-2 bg-white rounded-3xl md:rounded-s-lg p-6 shadow-sm flex flex-col justify-between min-h-65 hover:shadow-md transition">
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
                  <p className="text-gray-600 leading-relaxed">
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
      <section id="projects" className="bg-pearl-white">
        <div className="bg-off-white h-full">
          <div className="m-auto overflow-hidden px-6 pt-24 pb-28">
            <h3 className="text-4xl text-center font-medium">Projects</h3>
            <p className="text-center mt-6 text-lg">
              Collaborate with brands and agencies <br /> to create impactful
              results.
            </p>
            <div
              className="relative w-full mt-18 bg-transparent p-0"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left Control */}
              <button
                onMouseDown={() => startScroll("left")}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white py-3 px-4 rounded-full hover:bg-black font-bold cursor-pointer"
              >
                ←
              </button>

              {/* Carousel */}
              <div
                ref={scrollRef}
                className="carousel-fade flex gap-x-6 overflow-x-scroll px-10 py-6 scrollbar-hide rounded-2xl"
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
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition duration-300" />
                    {/* Content */}
                    <div className="absolute bottom-12 p-4 text-white translate-y-10 group-hover:translate-y-0 transition duration-300">
                      <h3 className="text-xl font-semibold">{card.title}</h3>
                      <div className="hidden group-hover:block transition duration-300">
                        <p className="text-sm mt-2">{card.description}</p>
                        <button className="bg-black hover:bg-white/30 text-white py-3 px-6 rounded-full cursor-pointer mt-4 text-sm">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Control */}
              <button
                onMouseDown={() => startScroll("right")}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
                className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/50 text-white py-3 px-4 rounded-full hover:bg-black font-bold cursor-pointer"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact me */}
      <section id="contact" className="bg-off-white">
        <div className="bg-pearl-white h-full rounded-t-[90px] md:rounded-t-[150px]">
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
