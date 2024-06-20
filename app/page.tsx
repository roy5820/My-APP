import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <header className="py-8 px-4 md:px-6 border-b">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-gray-500 dark:text-gray-400">Game Developer</p>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Projects
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto grid gap-8 md:gap-12">
            <div>
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                I am a passionate game developer with a strong background in creating engaging and immersive gaming
                experiences. With years of experience in the industry, I have honed my skills in various aspects of game
                development, from programming to design and project management.
              </p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold">Key Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <Badge variant="secondary">C#</Badge>
                <Badge variant="secondary">Unity</Badge>
                <Badge variant="secondary">Unreal Engine</Badge>
                <Badge variant="secondary">Game Design</Badge>
                <Badge variant="secondary">3D Modeling</Badge>
                <Badge variant="secondary">UI/UX Design</Badge>
                <Badge variant="secondary">Project Management</Badge>
                <Badge variant="secondary">Agile Methodology</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 md:mb-12">My Projects</h2>
            <div className="grid gap-8 md:gap-12">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <img
                  src="/placeholder.svg"
                  width="640"
                  height="360"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Dungeon Crawler</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A classic dungeon crawler game built with Unity. Players explore a procedurally generated dungeon,
                    battle monsters, and collect loot.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">Procedural Generation</Badge>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <img
                  src="/placeholder.svg"
                  width="640"
                  height="360"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Platformer Game</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A 2D platformer game built with Unreal Engine. Players navigate through levels, jump over obstacles,
                    and collect coins.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unreal Engine</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">2D Platformer</Badge>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <img
                  src="/placeholder.svg"
                  width="640"
                  height="360"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Multiplayer Shooter</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A fast-paced multiplayer shooter game built with Unity. Players compete against each other in
                    various game modes.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">Multiplayer</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 px-4 md:px-6">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 md:mb-12">My Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center dark:bg-gray-800">
                <CodeIcon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Programming</h3>
                <p className="text-gray-500 dark:text-gray-400">Proficient in C#, C++, and various game development frameworks.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center dark:bg-gray-800">
                <BrushIcon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Art & Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Skilled in 3D modeling, texturing, and UI/UX design.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center dark:bg-gray-800">
                <PuzzleIcon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Game Design</h3>
                <p className="text-gray-500 dark:text-gray-400">Experienced in level design, game mechanics, and storytelling.</p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 flex flex-col items-center text-center dark:bg-gray-800">
                <ProjectorIcon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Project Management</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Proficient in Agile methodologies and leading cross-functional teams.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 md:mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MailIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <span>johndoe@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LocateIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <span>New York, USA</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
                <form className="grid gap-4">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
                  <Textarea placeholder="Message" rows={5} />
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400">&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
function BrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
      <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function ProjectorIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7 3 5" />
      <path d="M9 6V3" />
      <path d="m13 7 2-2" />
      <circle cx="9" cy="13" r="3" />
      <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17" />
      <path d="M16 16h2" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}
