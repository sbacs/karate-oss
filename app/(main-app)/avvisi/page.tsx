"use client"

import { useEffect, useState } from "react"

export default function avvisi() {

    const [openPanel, setOpenPanel] = useState<boolean>(false)
    const [text, setText] = useState<string>("")

    useEffect(() => {
        if (text.length > 25) setOpenPanel(true)
    }, [text])

    return (
        <div className="w-full h-full p-5 relative flex flex-col gap-y-5">
            <div className="w-full h-20 bg-secondary/25 flex items-center px-10">
                <input type="text" className="border-b flex items-center " value={text} placeholder="Avvisa" onChange={(e) => setText(e.currentTarget.value)} />
            </div>
            <div className="flex gap-x-5 w-full h-full">
                <div className="flex bg-secondary/25 w-100 h-full">
                    
                </div>
            </div>

            {openPanel && (
                <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-96 h-96 bg-red-500 flex flex-col">
                        <button onClick={() => setOpenPanel(false)} className="self-end px-3 py-1">X</button>
                        <textarea
                            autoFocus
                            onFocus={(e) => {
                                const len = e.currentTarget.value.length
                                e.currentTarget.setSelectionRange(len, len)
                            }}
                            value={text}
                            placeholder="Avvisa"
                            onChange={(e) => setText(e.currentTarget.value)}
                            className="flex-1 w-full p-3 resize-none outline-none bg-transparent"
                        />
                    </div>
                </div>
            )}

        </div>
    )

}