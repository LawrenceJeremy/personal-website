import { MapPin } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-4xl mx-auto p-4 font-sans">
          {/* Name */}
          <h1 className="text-3xl font-bold">Jeremy Poliquit</h1>
          {/* location */}
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <h2 className="text-sm">Bacoor Cavite</h2>
          </div>
          {/* Bio */}
          <div className="my-4">
            <p>Application Development \ Frontend Developer</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto p-6">
          <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
          <p className="text-gray-700">
            This is my personal website built with React, TypeScript, and
            Tailwind.
          </p>
          <div className="mt-6 space-y-4">
            <p>👉 Content starts here at the top.</p>
            <p>
              Layout is centered horizontally, has a fixed max width, and the
              footer stays at the bottom even if the content is short.
            </p>
          </div>
        </div>
      </main>

      {/* Footer (Always at Bottom) */}
      <footer className="w-full bg-white shadow-inner">
        <div className="max-w-4xl mx-auto p-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
