import React, {useEffect, useState} from 'react'
import {Navbar} from "../navComponents/Navbar";
import {Footer} from "../navComponents/Footer";
import DynamicBreadcrumb from "./DynamicBreadcrumb";

function BlogLayout({children}:{children: React.ReactNode}) {
    const [navbarHeight, setNavbarHeight] = useState(0);
    useEffect(() => {
        const navbar = document.querySelector('.navbar') as HTMLElement;
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight + 10);
        }
    }, []);
    return (<>
        <Navbar></Navbar>

        <main style={{paddingTop: `${navbarHeight}px`}} className={"mx-auto"}>
            <DynamicBreadcrumb/>
            {children}
        </main>
        <Footer></Footer>

    </>)
}

export default BlogLayout
