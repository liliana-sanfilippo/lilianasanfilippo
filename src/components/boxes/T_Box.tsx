export function TBox({children, video}: { video: string, children: React.ReactNode }) {

    return (<div className={"min-h-[inherit] relative bg-gj text-text-primary overflow-x-clip"}>
            <div className={"flex flex-col gap-8 lg:gap-36 lg:pt-36 items-center relative z-50"}>
                <div className={"w-full flex flex-col gap-20 md:gap-36"}>
                    <div className="global-content flex flex-col gap-6 md:gap-8 lg:gap-16 justify-center">
                        <div className="w-full flex max-lg:flex-col gap-8 lg:gap-16 items-center">
                            <div className="w-50 flex flex-col grow gap-4 lg:gap-8">
                                {children}
                            </div>
                            <div className="w-full lg:w-50 lg:order-1">
                                <div className="sm:max-md:col-span-2 lg:row-span-2 lg:col-span-2">
                                    <div
                                        className="shadow--light video-card-div relative overflow-hidden bg-black flex justify-center items-center rounded-md text-white group aspect-video cursor-pointer w-full">
                                        <div className=" h-full w-full flex items-center justify-center">
                                            <iframe className={"mx-auto w-100"}
                                                    title=""
                                                    height="100%" src={video}
                                                    style={{border: "0px"}} allow="fullscreen"
                                                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>)
}