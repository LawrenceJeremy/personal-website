"use client";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

export default function Layout() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col dark:bg-black transition-colors">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-4xl mx-auto p-4 font-sans">
          {/* Name + Dark Mode Switch */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Jeremy Poliquit
            </h1>

            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-yellow-500" />
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
                className="dark:bg-white"
              />
              <Moon className="h-4 w-4 text-gray-600 dark:text-white" />
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mt-2 text-gray-700 dark:text-white">
            <MapPin size={16} />
            <h2 className="text-sm">Bacoor Cavite</h2>
          </div>

          {/* Bio */}
          <div className="my-4 text-gray-800 dark:text-white">
            <p>Application Development \ Frontend Developer</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button size="sm" className="text-xs cursor-pointer bg-black text-white dark:bg-white dark:text-black">
              <Download className="mr-1 h-4 w-4" />
              Download CV
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs cursor-pointer"
            >
              <Mail className="mr-1 h-4 w-4" />
              Send Email
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto p-6 text-gray-900 dark:text-white">
          <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
          <p>
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
      <footer className="w-full">
        <div className="max-w-4xl mx-auto p-4 text-center text-gray-600 dark:text-white text-sm">
          © {new Date().getFullYear()} Jeremy Poliquit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
