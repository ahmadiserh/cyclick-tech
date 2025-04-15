import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Logo } from "@/components/logo"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container p-3 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Logo />
            <span>Cyclic Technology</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#solutions"
              className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link href="#work" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">
              Work
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">
              Team
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" className="rounded-full">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-black/5 dark:bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-black/5 dark:bg-white/5 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  Innovative Technology Solutions
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
                    We build digital <span className="text-black dark:text-white">experiences</span> that matter
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cyclic Technology delivers cutting-edge solutions that transform how businesses operate in the
                    digital landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="rounded-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square w-full max-w-[500px]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-4/5 w-4/5 rounded-full bg-black/5 dark:bg-white/5 animate-pulse"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-3/5 w-3/5 rounded-full border border-black/20 dark:border-white/20"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Logo size="large" className="h-32 w-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section
          id="solutions"
          className="w-full py-12 md:py-24 lg:py-32 bg-black dark:bg-white text-white dark:text-black"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2 max-w-[600px]">
                <div className="inline-flex items-center rounded-full border border-white/20 dark:border-black/20 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What we do</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-white/70 dark:text-black/70">
                  We create innovative solutions that drive business growth and transformation.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Web Development",
                  description: "Custom websites and web applications built with the latest technologies.",
                },
                {
                  title: "Mobile Applications",
                  description: "Native and cross-platform mobile apps for iOS and Android.",
                },
                {
                  title: "AI Integration",
                  description: "Intelligent solutions powered by machine learning and artificial intelligence.",
                },
                {
                  title: "Cloud Infrastructure",
                  description: "Scalable and secure cloud solutions for your business needs.",
                },
                {
                  title: "UI/UX Design",
                  description: "User-centered design that creates intuitive and engaging experiences.",
                },
                {
                  title: "Digital Strategy",
                  description: "Strategic planning to maximize your digital presence and impact.",
                },
              ].map((solution, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-white/10 dark:border-black/10 p-6 hover:border-white/30 dark:hover:border-black/30 transition-colors"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-white/5 dark:bg-black/5 group-hover:bg-white/10 dark:group-hover:bg-black/10 transition-colors"></div>
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <p className="mt-2 text-white/70 dark:text-black/70">{solution.description}</p>
                  <div className="mt-4 flex items-center">
                    <Link href="#" className="text-sm font-medium text-white dark:text-black hover:underline">
                      Learn more
                    </Link>
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-black/5 dark:bg-white/5 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-black/5 dark:bg-white/5 blur-3xl"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  About Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
                <p className="text-muted-foreground md:text-xl">
                  Founded by Ahmad Isah in 2025, Cyclic Technology began with a vision to transform how businesses
                  leverage technology. What started as a small consulting firm has grown into a global technology leader
                  with clients across multiple industries.
                </p>
                <p className="text-muted-foreground md:text-xl">
                  Our mission is to empower organizations with innovative solutions that drive growth, efficiency, and
                  competitive advantage in an increasingly digital world.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button variant="outline" className="rounded-full inline-flex items-center">
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative aspect-square w-full max-w-[500px] mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-4/5 w-4/5 rounded-full border border-black/20 dark:border-white/20"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-3/5 w-3/5 bg-black/5 dark:bg-white/5 rounded-full"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-2/5 w-2/5 flex flex-col items-center justify-center text-center p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      "Our goal is to create technology that makes a meaningful difference in how businesses operate and
                      serve their customers."
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="size-16 mb-2 flex items-center justify-center">
                        <div className="size-12 bg-black/10 dark:bg-white/10 rounded-full"></div>
                      </div>
                      <h3 className="text-sm font-medium">Ahmad Isah</h3>
                      <p className="text-xs text-muted-foreground">Founder & CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-black/[0.02] dark:bg-white/[0.02]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2 max-w-[600px]">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  Our Work
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest projects and see how we've helped businesses transform their digital presence.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Nexus Platform",
                  category: "Web Application",
                },
                {
                  title: "Quantum Mobile",
                  category: "iOS & Android App",
                },
                {
                  title: "Horizon Dashboard",
                  category: "Data Visualization",
                },
              ].map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] w-full bg-black/5 dark:bg-white/5 flex items-center justify-center">
                    <div className="size-16 opacity-10">
                      <Logo size="large" />
                    </div>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent dark:from-black/80 dark:to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-white/70">{project.category}</p>
                    <Button variant="link" className="p-0 mt-2 text-white w-fit">
                      View Project
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline" className="rounded-full">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start space-y-4">
              <div className="space-y-2 max-w-[600px]">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Experts</h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of professionals is dedicated to delivering exceptional results.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Ahmad Isah",
                  role: "Founder & CEO",
                  bio: "Visionary leader with 15+ years in technology innovation",
                },
                {
                  name: "Abubakar Ibramin",
                  role: "Lead Developer",
                  bio: "Full-stack developer specializing in scalable applications",
                },
                {
                  name: "Abbas Usman",
                  role: "Head of Product",
                  bio: "Product strategist focused on user-centered solutions",
                },
                {
                  "name": "Amatullahi Umar",
                  "role": "Research and Documentation",
                  "bio": "Skilled in technical research, documentation, and knowledge management"
                }                
              ].map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border p-6 hover:border-black/30 dark:hover:border-white/30 transition-colors"
                >
                  <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 bg-black/5 dark:bg-white/5 rounded-full"></div>
                  <div className="size-20 bg-black/10 dark:bg-white/10 rounded-full mb-4 flex items-center justify-center">
                    <div className="size-10 bg-black/10 dark:bg-white/10 rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-2 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-black dark:bg-white text-white dark:text-black"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border border-white/20 dark:border-black/20 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 w-fit">
                  Contact Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="text-white/70 dark:text-black/70 md:text-xl">
                  Have questions about our services? Contact us today and discover how Cyclic Technology can transform
                  your business.
                </p>
                <div className="flex flex-col space-y-2 pt-4">
                  <p className="text-white/70 dark:text-black/70">ahmadisah6293@gmail.com</p>
                  <p className="text-white/70 dark:text-black/70">+234 8061939536</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-white/70 dark:text-black/70">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-white/20 dark:border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 dark:placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-white dark:focus:ring-black"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-white/70 dark:text-black/70">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-white/20 dark:border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 dark:placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-white dark:focus:ring-black"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-white/70 dark:text-black/70">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-white/20 dark:border-black/20 bg-transparent px-3 py-2 text-sm placeholder:text-white/50 dark:placeholder:text-black/50 focus:outline-none focus:ring-1 focus:ring-white dark:focus:ring-black"
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button className="rounded-full bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <Logo size="small" />
            <span>Cyclic Technology</span>
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Cyclic Technology. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-black dark:hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
