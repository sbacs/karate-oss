"use  client"


export default function SignIn() {
    return (
        <div className="w-full flex items-center gap-x-10 h-full justify-center">

            <div className="h-125 w-full items-center justify-center flex gap-x-15 ">

                <img src="/KP.png" alt="" className="h-full"/>

                <div className="w-[0.5px] h-[75%] bg-secondary/15"/>

                <div className=" w-100 h-full rounded-2xl">
                    <form action="" className="w-full h-full   flex gap-y-5 flex-col justify-center">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-secondary mb-1.5">
                                Email
                            </label>
                            <input
                                type="text"
                                id="username"
                                className="w-full px-4 py-2 bg-secondary/10 border border-white/10 rounded-lg text-secondary placeholder-secondary/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                placeholder="your@email.com"
                                autoComplete="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-secondary mb-1.5">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-2 bg-secondary/10 border border-white/10 rounded-lg text-white placeholder-secondary/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                                placeholder="********"
                                autoComplete="password"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <label className="group flex cursor-pointer items-center gap-1.5">
                                <input
                                    type="checkbox"
                                    className="peer sr-only"
                                />

                                <span
                                    className="
                                flex h-4.5 w-4.5 items-center justify-center
                                rounded-md border border-white/20 bg-secondary/10
                                transition-all
                                group-hover:border-white/40
                                group-hover:bg-white/10
                                peer-focus-visible:ring-2 peer-focus-visible:ring-white/30
                                peer-checked:border-white
                                peer-checked:bg-white
                            "
                                >

                                </span>

                                <span className="text-sm text-secondary transition-colors group-hover:text-white">
                                    Ricordami
                                </span>
                            </label>
                        </div>
                        <div className="mt-2 flex gap-y-5 flex-col">

                            <button type="submit" className="w-full h-10 bg-secondary/10  text-secondary/75 rounded-lg active:scale-[0.97] disabled:pointer-events-none transition-all duration-150 ease-in-out flex items-center justify-center">
                            Conferma
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}