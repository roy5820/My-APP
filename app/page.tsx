import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-950 dark:bg-gray-950 dark:text-gray-50">
      <header className="py-8 px-4 md:px-6 border-b bg-white">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold">HANGYUN-YIM</h1>
            <p className="text-gray-500 dark:text-gray-400">Game Developer</p>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link href="#about" className="hover:underline" prefetch={false}>
              About
            </Link>
            
            <Link href="#Skills" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#projects" className="hover:underline" prefetch={false}>
              Projects
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
              저는 게임 클라이언트 개발자를 목표로 공부를 하고 있는 대학생입니다. 저는 탑다운, 사이드 뷰의 2D 게임을 선호하며, 주로 이러한 뷰의 게임을 만드는 프로젝트들을 진행해 왔습니다. Unity URP의 기능을 최대한 활용하여 2D를 최대한 실감나게 역동적으로 표현하는 것을 목표로 공부하고 있습니다. 추가로 디자인 패턴을 통하여 체계적이고, 재활용성이 높은 코드를 짜는 것을 목표로도 공부하고 있습니다. 추가로 게임 개발 동아리 <b>아디우토</b> 활동을 통해서 방학기간에도 프로젝트를 진행하였다.
              </p>
            </div>
            <div id = "Skills" className="grid gap-4">
              <h3 className="text-2xl font-bold">Key Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 ">
                <Badge variant="secondary" className="flex flex-col items-center">Unity</Badge>
                <Badge variant="secondary" className="flex flex-col items-center">C#</Badge>
                <Badge variant="secondary" className="flex flex-col items-center">Client Development</Badge>
                <Badge variant="secondary" className="flex flex-col items-center">Design Patterns</Badge>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
          <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 md:mb-12">My Projects</h2>
            <div className="grid gap-8 md:gap-12">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <a href="https://github.com/roy5820/unity-ProjectColos.git" target="_blank"><img
                  src="/color.gif"
                  width="960"
                  height="540"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                /></a>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Project Colors</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    나의 첫번째 게임 개발 프로젝트이며, 동아리 활동을 통해서 진행하였다. 색깔 마녀인 주인공이 3개의 색(R, G, B)을 이용하여 적을 물리치고 퍼즐을 풀어 앞으로 나아가 보스를 물리치는 게임이다. 매 스테이지를 클리어 할 때마다 랜덤한 보상을 한가지 선택하여 캐릭터를 강화할 수 있다. 허접하지만 있을 건 다 있는 게임!!!
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">2D Platformer</Badge>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
              <a href="https://github.com/roy5820/unity-ProjectScalett.git" target="_blank"><img
                  src="/hotelScalett.gif"
                  width="640"
                  height="360"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                /></a>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Hottel Scalett</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    19세기 영국을 배경으로 하는 추리게임. 힘든 사건 해결 후 스칼렛 호텔로 휴향을 온 탐정 존 브래넌과 그의 조수 카밀라! 허나 탐정이 있는 곳에는 사건이 일어나는 법! 그가 머물던 호텔에서 살인 사건이 일어나는데...
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">추리</Badge>
                    <Badge variant="secondary">퍼즐</Badge>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-center">
              <a href="https://github.com/roy5820/ProjectSix" target="_blank"><img
                  src="/Hex.gif"
                  width="640"
                  height="360"
                  alt="Project Screenshot"
                  className="rounded-lg overflow-hidden"
                /></a>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">HexTex</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    빚을 갚기 위해 지하 격투장으로 간 주인공! 적들과 싸워 돈을 모은고 아이템을 사서 자신의 캐릭터를 강화 시키자!
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Unity</Badge>
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">장르: 턴제, 전략, 로그라이크</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <section id="contact" className="py-12 md:py-24 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
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
        </section> */}
      </main>
      <footer className="py-6 px-4 md:px-6 border-t">
        <div className="container max-w-5xl mx-auto flex items-center justify-between">
          <p className="text-gray-500 dark:text-gray-400">&copy; 2024 HanGyun Yim. All rights reserved.</p>
          <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
              TOP
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
