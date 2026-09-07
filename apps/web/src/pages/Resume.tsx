export default function Resume() {
  return (
    <main className="min-h-screen bg-pearl-white px-4 py-10 dark:bg-[#111d2c]">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[#111d2c] dark:text-white">
              My Resume
            </h1>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              Software Engineer
            </p>
          </div>

          {/* Download */}
          <a
            href="/resume.pdf"
            download="Christopher-Chijioke-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-[#111d2c] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 dark:bg-white dark:text-[#111d2c]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="overflow-hidden rounded-xl bg-white shadow-xl">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="h-[80dvh] min-h-150 w-full"
          />
        </div>
      </div>
    </main>
  );
}
