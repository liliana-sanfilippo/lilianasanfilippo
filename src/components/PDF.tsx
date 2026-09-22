

export function PDFWithDownload({link, name}: {link: string, name:string}){
    return(

        <div className="row align-items-center">
            <div className='col-12 col-md-6 m-auto'>
                <div className="iframe-container" style={{aspectRatio: "210 / 297"}}>
                    <iframe src={link}  title="title" className='one-pdf-line small-i'>
                    </iframe>
                </div>
            </div>
            <div className='row download-col'>
                <DownloadLink url={link} fileName={name} ></DownloadLink>
            </div>
        </div>


    )
}

export function PDF({link}: {link: string}){
    return(
        <div style={{width: "100%", display: "flex", justifyContent: "center", overflow: "hidden"}}>
            <iframe
                src={`${link}`}
                title="PDF"
                style={{maxWidth: "fit-content", height: "auto", aspectRatio: "210 / 297", display: "block", border: "none", overflow: "hidden"}}
            />
        </div>

    )
}



const DownloadLink = ({ url, fileName }: {url: string, fileName: string}) => {
    const handleDownload = () => {
        fetch(url)
            .then((response) => response.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement("a");
                link.href = url;
                link.download = fileName || "downloaded-file";
                document.body.appendChild(link);

                link.click();

                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error("Error fetching the file:", error);
            });
    };
    return (

        <a type="button" onClick={handleDownload} className="download-butt">
            <span>Download</span>
        </a>

    );
};