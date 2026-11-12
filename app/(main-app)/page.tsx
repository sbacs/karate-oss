

export default function main() {
    return (
        <div className="w-full h-full flex flex-col gap-y-5">


            <div className="flex w-full rounded-2xl h-30 bg-secondary/15  items-center gap-x-5 ">

                <div className="flex gap-x-5 w-fit h-full items-center ">
                    <div className="rounded-full bg-secondary/50 h-full aspect-square "></div>
                    <h1 className="text-2xl text-secondary font-bold">Tommaso Luciani</h1>
                </div>

                <div className="h-[75%] w-px bg-secondary/10" />

                <div className="flex w-fit h-full items-center gap-x-3">
                    <h1 className="text-lg text-secondary">Cintura</h1>
                    <div className="w-20 h-5 bg-blue-800 rounded-xl"></div>
                </div>

            </div>


            <div className="w-full h-full gap-x-5 flex">

                <div className="h-full w-full flex-col gap-y-5 flex bg-secondary/15  rounded-2xl">
                    <div className="w-full text-secondary flex flex-col h-fit bg-secondary/25 rounded-2xl items-center gap-y-2 justify-center ">
                        <h1>AVVISO LEZIONE DOMANI SERA: CIAO A TUTTI CIAO CIAO CIAO </h1>
                        <h1>15/10/2026</h1>
                    </div>

                    <div className="w-full text-secondary flex flex-col h-fit bg-secondary/25 rounded-2xl items-center gap-y-2  justify-center ">
                        <h1>AVVISO LEZIONE DOMANI SERA: CIAO A TUTTI CIAO CIAO CIAO </h1>
                        <h1>15/10/2026</h1>
                    </div>

                    <div className="w-full text-secondary flex flex-col h-fit bg-secondary/25 rounded-2xl items-center gap-y-2 justify-center ">
                        <h1>AVVISO LEZIONE DOMANI SERA: CIAO A TUTTI CIAO CIAO CIAO </h1>
                        <h1>15/10/2026</h1>
                    </div>

                    <div className="w-full text-secondary flex flex-col h-fit bg-secondary/25 rounded-2xl items-center gap-y-2 justify-center ">
                        <h1>AVVISO LEZIONE DOMANI SERA: CIAO A TUTTI CIAO CIAO CIAO </h1>
                        <h1>15/10/2026</h1>
                    </div>
                </div>

                <div className="flex flex-col gap-y-5 w-full h-full">
                    <div className="w-full h-full bg-secondary/15 rounded-2xl"><img src="/nike.png" alt="" /></div>
                    <div className="w-full h-full bg-secondary/15 rounded-2xl flex items-center justify-center text-5xl font-bold text-white overflow-hidden    "><img src="/malta.jpg" alt="" /></div>
                </div>

                <div className="h-full w-full bg-secondary/15 rounded-2xl gap-y-5 flex-col flex">
                    {
                        [...Array(5)].map((i, index) => {
                            return <div className="w-full gap-x-2 text-secondary flex h-fit bg-secondary/5 rounded-2xl items-center gap-y-2  ">
                                <h1>{index+1}</h1>
                                <h1>Mateo Alla </h1>
                            </div>
                        })
                    }

                    <hr  className="text-white/25"/>
                    <div className="w-full gap-x-2 text-secondary flex h-fit bg-secondary/20 rounded-2xl items-center gap-y-2   ">
                        <h1>9 </h1>
                        <h1>Mateo Alla </h1>
                    </div>
                    <div className="w-full gap-x-2 text-secondary flex h-fit bg-secondary/5 rounded-2xl items-center gap-y-2  ">
                        <h1>10</h1>
                        <h1>Mateo Alla </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}