import { Link } from "react-router";

const Home = () => {
  return (
    <main>
      <section className="bg-off-white h-180">
        <div className="bg-pearl-white h-full rounded-b-[90px] md:rounded-b-[150px]">
          <div className="container h-full py-24">
            <div className="flex flex-col justify-center items-center h-full">
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
      <section className="bg-pearl-white">
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
      <section className=" bg-off-white">
        <div className="bg-pearl-white h-full">
          <div className="container pt-24 pb-28">
            <h3 className="text-4xl text-center font-medium">Services</h3>
            <p className="text-center mt-6 text-lg">
              Collaborate with brands and agencies <br /> to create impactful
              results.
            </p>
            <div className="grid gap-10 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] mt-18">
              <div className="bg-off-white px-6 py-7 rounded-xl">
                <div className="bg-dark-slate items-center p-2.5 rounded-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-off-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                    />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">Web Development</h3>
                  <p className="mt-2.5">
                    Professional, performant, secure and SEO friendly web
                    applications tailored to your specifications and
                    requirements.
                  </p>
                </div>
              </div>
              <div className="bg-off-white px-6 py-7 rounded-lg">
                <div className="bg-dark-slate items-center p-2.5 rounded-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-off-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">Mobile App</h3>
                  <p className="mt-2.5">
                    Rich feature and high-end unique mobile applications for
                    both android and ios platforms.
                  </p>
                </div>
              </div>
              <div className="bg-off-white px-6 py-7 rounded-lg">
                <div className="bg-dark-slate items-center p-2.5 rounded-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-off-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                    />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">Web Hosting</h3>
                  <p className="mt-2.5">
                    Reliable, scalable and flexible cloud hosting services
                    perfect for all your projects.
                  </p>
                </div>
              </div>
              <div className="bg-off-white px-6 py-7 rounded-lg">
                <div className="bg-dark-slate items-center p-2.5 rounded-full inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-off-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-medium">Database Management</h3>
                  <p className="mt-2.5">
                    Quality services and support for your database systems,
                    based on your requirements and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-pearl-white">
        <div className="bg-off-white h-full rounded-t-[90px] md:rounded-t-[150px]">
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
