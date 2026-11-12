"use client"
import Link from "next/link"
import { useState } from "react"
import { Home, Megaphone, BookUser, ListCheck, Calendars, User, Medal, ChevronLeft, ChevronRight } from "lucide-react"

const iconStrokeWidth = 1;

const pages = [
    { name: "Home", href: "/", icon: <Home strokeWidth={iconStrokeWidth} /> },
    { name: "Avvisi", href: "/Avvisi", icon: <Megaphone strokeWidth={iconStrokeWidth} /> },
    { name: "Presenze", href: "/Presenze", icon: <ListCheck strokeWidth={iconStrokeWidth} /> },
    { name: "Medaglie", href: "/Medaglie", icon: < Medal strokeWidth={iconStrokeWidth} /> },
    { name: "Eventi", href: "/Eventi", icon: <Calendars strokeWidth={iconStrokeWidth} /> },
    { name: "Alunni", href: "/Alunni", icon: <BookUser strokeWidth={iconStrokeWidth} /> },
    { name: "Profilo", href: "/Alunni", icon: <User strokeWidth={iconStrokeWidth} /> },
]

export default function Navbar() {

    const [hidden, setHidden] = useState<boolean>(true);

    return <div className={`${hidden ? "w-0 px-0" : "w-50 px-5"} z-100 absolute transition-all duration-200 justify-center h-full bg-black/50 backdrop-blur-xl  border-r border-secondary/25 flex flex-col gap-y-5 text-white items-center `}>
        <div className="w-full h-full overflow-hidden items-center justify-center flex flex-col gap-y-5">
            {
                pages.map((o) => {
                    return <Link className="hover:bg-secondary/10  flex-nowrap transition-colors duration-100 flex gap-x-2 p-3 rounded-xl  w-full text-left" href={o.href}>
                        {o.icon}
                        {o.name}
                    </Link>
                })
            }
        </div>
        <button onClick={() => { setHidden(!hidden) }} className={`${hidden ? "translate-x-[75%]" : "translate-x-[50%]"} absolute rounded-full w-7 h-7 flex items-center justify-center bg-primary text-secondary border border-secondary/25 hover:cursor-pointer hover:scale-105 transition-transform duration-200 right-0  top-[15%]`}>{hidden ? <ChevronRight /> : <ChevronLeft />}</button>
    </div>
}