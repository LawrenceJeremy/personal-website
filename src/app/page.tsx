"use client";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  BriefcaseBusiness,
  Download,
  FlaskConical,
  FolderOpenDot,
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
          <div className="grid md:grid-cols-3 gap-4 items-stretch">
            {/* Left side: About + Techstack */}
            <div className="md:col-span-2 flex flex-col gap-4">
              {/* About Me */}
              <Alert>
                <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                  <BriefcaseBusiness size={16} /> About
                </AlertTitle>
                <AlertDescription className="text-black flex flex-col gap-4 dark:text-white">
                  <p>
                    I am a full-stack developer with a strong focus on building
                    dynamic and user-friendly websites. With a solid foundation
                    in both frontend and backend technologies, I enjoy
                    transforming ideas into functional, visually appealing, and
                    scalable digital solutions. My journey as a developer has
                    been fueled by a passion for creating seamless user
                    experiences and ensuring that every project I work on
                    balances performance, accessibility, and maintainability.
                  </p>

                  <p>
                    On the frontend, I specialize in modern frameworks and tools
                    such as React, Next.js, and Tailwind CSS, allowing me to
                    craft responsive interfaces that not only look great but
                    also deliver intuitive interactions. I keep myself updated
                    with the latest trends in web design and development,
                    ensuring that the products I build align with current
                    industry standards and provide users with engaging
                    experiences.
                  </p>

                  <p>
                    On the frontend, I specialize in modern frameworks and tools
                    such as React, Next.js, and Tailwind CSS, allowing me to
                    craft responsive interfaces that not only look great but
                    also deliver intuitive interactions. I keep myself updated
                    with the latest trends in web design and development,
                    ensuring that the products I build align with current
                    industry standards and provide users with engaging
                    experiences.
                  </p>
                </AlertDescription>
              </Alert>

              {/* Techstack */}
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
                    <div className="flex gap-2 flex-wrap">
                      {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Next.js",
                        "Tailwind CSS",
                        "Shadcn UI",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="dark:border-white text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-base dark:text-white">
                      Backend
                    </h3>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        "Java",
                        "PHP",
                        "Node.js",
                        "Springboot",
                        "MongoDB",
                        "MySQL",
                      ].map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="dark:border-white text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </AlertDescription>
              </Alert>
            </div>

            {/* Right side: Education */}
            <div className="h-full">
              <Alert className="h-full flex flex-col">
                <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                  <BriefcaseBusiness size={16} /> Education
                </AlertTitle>
                <AlertDescription className="text-black flex flex-col gap-4 dark:text-white">
                  <div>
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

                  <div>
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

                  <div>
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

                  <div>
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

            {/* Coding Journey */}
            <div className="col-span-1">
              <Alert>
                <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                  <BookOpen size={16} /> Coding Journey
                </AlertTitle>
                <AlertDescription className="text-black flex flex-col gap-4 dark:text-white">
                  <p>
                    My coding journey began with self-study. At first it was just curiosity, but when I found the strand that suited me best, my perspective changed. From there, coding became more than a subject—it grew into my hobby and passion, something I continuously pursue and enjoy learning every day.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
            {/* Coding Journey */}

            {/* projects */}
            <div className="h-full col-span-2">
              <Alert className="h-full flex flex-col">
                <AlertTitle className="flex gap-2 items-center text-lg font-bold">
                  <FolderOpenDot size={16} />Projects
                </AlertTitle>
                <AlertDescription className="text-black flex flex-col gap-4 dark:text-white">
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Similique ipsa magni illo at animi, ipsam vero dolores
                      fugiat obcaecati dolorem quae, iste molestias alias
                      dolorum maxime doloribus voluptates voluptatum.
                    </p>
                  </div>
                </AlertDescription>
              </Alert>
            </div>
            {/* projects */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <div className="max-w-4xl mx-auto p-4 text-center text-gray-600 dark:text-white text-sm">
          © {new Date().getFullYear()} Jeremy Poliquit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
