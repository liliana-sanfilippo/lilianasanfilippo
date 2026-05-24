export function Video({url}: { url: string }) {
    return (<div className="sm:max-md:col-span-2 lg:row-span-2 lg:col-span-2">
            <div
                className="shadow--light video-card-div relative overflow-hidden bg-black flex justify-center items-center  text-white group cursor-pointer h-full w-full object-cover">
                <div className=" h-full w-full flex items-center justify-center">
                    <iframe className={"mx-auto w-100"}
                            title=""
                            height="100%" src={url}
                            style={{border: "0px"}} allow="fullscreen"
                            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"></iframe>
                </div>
                <div
                    className="video-card-title video-card-title-shadow w-full absolute top-0 p-4 font-bold text-white"></div>
            </div>
        </div>)
}