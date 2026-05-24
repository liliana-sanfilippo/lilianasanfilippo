import React, {useEffect, useRef} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {Link as OurLink} from '@liliana-sanfilippo/react-link';
import {Link} from 'react-router-dom';
import {NavBarContent} from "../../routes/navBarContent";
import {ContentItem, Folder} from "../../types/Pages";

export function Navbar() {
    const navbarCollapseRef = useRef<HTMLDivElement>(null);
    const progressBarRef = useRef<HTMLDivElement>(null);
    const progressImageRef = useRef<HTMLImageElement>(null);
    let scrollTimeout: NodeJS.Timeout;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollHeight > 0 ? (scrollTop / scrollHeight) * 50 : 0;

            // Balkenbreite setzen
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${scrollPercentage}%`;
            }

            // Timeout für Animation
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (progressImageRef.current) {
                    progressImageRef.current.classList.remove('walking');
                    progressImageRef.current.style.transform = 'translateY(0)';
                }
            }, 1000);
        };

        const onLoad = () => {
            handleScroll(); // initial aufrufen
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', onLoad);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('load', onLoad);
            clearTimeout(scrollTimeout);
        };
    }, []);

    useEffect(() => {
        const handleLinkClick = (event: Event) => {
            if (navbarCollapseRef.current && navbarCollapseRef.current.classList.contains('show')) {
                const target = event.target as HTMLElement;
                if (target.closest('.dropdown-text')) {
                    navbarCollapseRef.current.classList.remove('show');
                }
            }
        };

        const links = document.querySelectorAll('.navbar-text');
        links.forEach(link => link.addEventListener('click', handleLinkClick));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleLinkClick));
        };
    }, []);

    const pages = NavBarContent.map((item, index) => {
        if ("path" in item && item.path && !("folder" in item)) {
            return (
                <OurLink
                    text={item.name}
                    page={item.path}
                    key={`page-${index}`}
                    classes='nav-link'
                />
            );
        }
        return renderMenuItem(item, "");
    });

    return (<BootstrapNavbar
        className="p-0"
        expand="lg"
        bg="white"
        fixed="top"
    >
        <Container className={"h-100"}>

            <BootstrapNavbar.Brand href="/" className={"py-4 px-5"}>
                Home
            </BootstrapNavbar.Brand>

            <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className={"sm:ms-auto"}/>

            <BootstrapNavbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto px-5">{pages}</Nav>
            </BootstrapNavbar.Collapse>

            <div className="scroll-progress" ref={progressBarRef}>

            </div>
        </Container>
    </BootstrapNavbar>);
}


const renderMenuItem = (item: ContentItem , parentPath: string = "") => {
    if (item == null) return ;

    if ("folder" in item && item.folder) {
        const currentPath = parentPath + '/' + item.name?.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
        return (
            <NavDropdown
                key={currentPath}
                title={item.name}
                id={`dropdown-${currentPath}`}
                drop="end"
            >
                {item.folder.map((subItem) =>
                    renderMenuItem(subItem, currentPath)
                )}
            </NavDropdown>
        );
    }

    if ("path" in item && item.path) {
        const currentPath = (parentPath == "" ? item.path : parentPath + '/' + item.path);
        return (
            <NavDropdown.Item
                as={Link}
                to={currentPath}
                key={currentPath}
            >
                {item.name}
            </NavDropdown.Item>
        );
    }

    return null;
};
