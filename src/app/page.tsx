"use client";
import { Button } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  Download,
  FlaskConical,
  Mail,
  MapPin,
  Moon,
  Sun,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

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
            <p>Software Engineer \ Application Development</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <Button
              size="sm"
              className="text-xs cursor-pointer bg-black text-white dark:bg-white dark:text-black"
            >
              <Download className="mr-1 h-4 w-4" />
              Download CV
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="text-xs cursor-pointer dark:border-white"
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
          {/* About/Techstack/Education */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <div className="flex flex-col gap-4">
                {/* about me */}
                <div>
                  <Alert>
                    <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                      <BriefcaseBusiness size={16} /> About
                    </AlertTitle>
                    <AlertDescription className="text-black flex flex-col gap-4">
                      <p className="dark:text-white">
                        I am a full-stack developer with a strong focus on
                        building dynamic and user-friendly websites. With a
                        solid foundation in both frontend and backend
                        technologies, I enjoy transforming ideas into
                        functional, visually appealing, and scalable digital
                        solutions. My journey as a developer has been fueled by
                        a passion for creating seamless user experiences and
                        ensuring that every project I work on balances
                        performance, accessibility, and maintainability.
                      </p>

                      <p className="dark:text-white">
                        On the frontend, I specialize in modern frameworks and
                        tools such as React, Next.js, and Tailwind CSS, allowing
                        me to craft responsive interfaces that not only look
                        great but also deliver intuitive interactions. I keep
                        myself updated with the latest trends in web design and
                        development, ensuring that the products I build align
                        with current industry standards and provide users with
                        engaging experiences.
                      </p>

                      <p className="dark:text-white">
                        On the frontend, I specialize in modern frameworks and
                        tools such as React, Next.js, and Tailwind CSS, allowing
                        me to craft responsive interfaces that not only look
                        great but also deliver intuitive interactions. I keep
                        myself updated with the latest trends in web design and
                        development, ensuring that the products I build align
                        with current industry standards and provide users with
                        engaging experiences.
                      </p>
                    </AlertDescription>
                  </Alert>
                </div>
                {/* Techstack */}
                <div>
                  <Alert>
                    <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                      <FlaskConical size={16} /> Tech Stack
                    </AlertTitle>
                    <AlertDescription className="text-black flex flex-col gap-4">
                      {/* Frontend */}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base dark:text-white">
                          Frontend
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="dark:border-white text-xs">JavaScript</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">TypeScript</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">React</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">Next.js</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">Tailwind CSS</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">Shadcn UI</Badge>
                        </div>
                      </div>
                      {/* Backend */}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-base dark:text-white">
                          Backend
                        </h3>
                        <div className="flex gap-2">
                          <Badge variant="outline" className="dark:border-white text-xs">Java</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">PHP</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">Node.js</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">Springboot</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">MongoDB</Badge>
                          <Badge variant="outline" className="dark:border-white text-xs">MySQL</Badge>
                        </div>
                      </div>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </div>

            {/* education */}
            <div className="">
              <Alert>
                <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                  <BriefcaseBusiness size={16} /> Education
                </AlertTitle>
                <AlertDescription className="text-black flex flex-col gap-4">
                  <div className="mt-3 dark:text-white">
                    <p className="font-semibold">Cavite State University</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">BS in Computer Science</p>
                      <Badge
                        variant="outline"
                        className="dark:border-white text-xs"
                      >
                        2023 - Present
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-3 dark:text-white">
                    <p className="font-semibold">SHS San Nicolas III</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">
                        Information Communication Technology
                      </p>
                      <Badge
                        variant="outline"
                        className="dark:border-white text-xs"
                      >
                        2021 - 2023
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-3 dark:text-white">
                    <p className="font-semibold">Bacoor NHS Springville</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs">TLE Cookery</p>
                      <Badge
                        variant="outline"
                        className="dark:border-white text-xs"
                      >
                        2017 - 2021
                      </Badge>
                    </div>
                  </div>

                  <div className="mt-3 dark:text-white">
                    <p className="font-semibold">Likha Molino IV ES</p>
                    <div className="flex flex-col gap-1">
                      <i className="text-xs">None</i>
                      <Badge
                        variant="outline"
                        className="dark:border-white text-xs"
                      >
                        2011 - 2017
                      </Badge>
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
          </div>
          {/* Social Links */}
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
