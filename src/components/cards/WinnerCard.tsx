import "../../componentStyling/WinnerCard.css"
import slugify from "slugify";
import {Col} from "react-bootstrap";

export function WinnerCard({url, prize, title}: { url: string, prize: string[], title: string }) {
    return (<Col
            className="winner-card mx-1 flex h-full flex-col overflow-hidden border border-white/60 dark:border-white/10 bg-white/95 dark:bg-slate-900/70 p-2 transition duration-500">
            <div className="relative overflow-hidden"><img alt=""
                                                           id={slugify(prize.join())}
                                                           loading="lazy" width="600"
                                                           height="400" decoding="async"
                                                           data-nimg="1"
                                                           className="winner-card-img aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                                                           style={{color: "var(--background)"}}
                                                           sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                                           src={url}
            />
                <div
                    className="absolute inset-0bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2">
                    {prize.map(item => (<span
                            className={`${slugify(item)} bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-900 shadow-sm`}>{item}</span>))}
                </div>

            </div>
            <div className="flex flex-1 flex-col gap-5 px-1 pb-6 pt-7">
                <div className="mt-auto flex flex-wrap items-center gap-3 text-sm font-semibold">
                    <h4>{title}</h4>
                </div>
            </div>
        </Col>)
}