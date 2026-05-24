import React, {useEffect} from 'react';
import {getPathMapping} from "../utils/getPathMapping";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../components/pageRelated/NotFoundPage";
import {WikiPage} from "../components/wiki/WikiPage";
import BlogLayout from "../components/pageRelated/BlogLayout";
import {AboutPage} from "../pages/meta/AboutPage";
import {BlogPostWrapper} from "../components/pageRelated/BlogPostWrapper";
import TagIndexPageWrapper from "../components/pageRelated/TagIndexWrapper";
import TagPageWrapper from "../components/pageRelated/tags";
const App = () => {

    const pathMapping = getPathMapping();
    const currentPath =
        window.location.pathname || "/";

    // Set Page Title
    const title =
        currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

    useEffect(() => {
        document.title = `Liliana Sanfilippo`;
    }, [title]);

    return(
        <div id={"main-wrapper"}>
            <Routes>


                {/* Blog Layout Wrapper */}
                <Route element={
                    <div className={"flex flex-row"}>
                        {/* <div className={"sidebarbox hidden md:block xl:block md:w-2/12 xl:w-2/12"}>

                            <Sidebar/>

                        </div> */}
                        <div className={"w-full md:w-9/12 xl:w-9/12 mx-auto"}>
                            <BlogLayout/>
                        </div>
                    </div>

                }>


                    {/* Posts */}
                    <Route path="/posts/:slug" element={<BlogPostWrapper/>}/>

                    {/* Misc NavigationBar */}
                    {/* <Route path="/tags" element={<TagsPage />} />*/}
                    <Route path="/home" element={<AboutPage/>}/>
                    <Route path={"/"} element={<AboutPage/>}/>
                    <Route path={""} element={<AboutPage/>}/>

                    {Object.entries(pathMapping).map(([path, {component: Component}]) => (
                            <Route path={path} element={Component}/>
                        )
                    )
                    }


                    <Route path={`${process.env.REACT_APP_REACT_REFERENCE_MANAGER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki"}/>}/>
                    <Route path={`${process.env.REACT_APP_REACT_REFERENCE_GENERATOR_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-generator"}/>}/>
                    <Route path={`${process.env.REACT_APP_REACT_BIBTEX_PARSER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-parser"}/>}/>
                    <Route path={`${process.env.REACT_APP_REACT_AUTHOR_PARSER_PATH}/:pageName`}
                           element={<WikiPage folder={"wiki-author"}/>}/>
                    <Route path={`${process.env.REACT_APP_IGEM_BIELEFELD_PATH}/:pageName`}
                           element={<WikiPage folder={"igemnotes"}/>}/>
                    <Route path={"/other/:pageName"}
                           element={<WikiPage folder={"other"}/>}/>

                    {/* Tag Index Page */}
                    <Route path={process.env.REACT_APP_TAG_ROOT} element={<TagIndexPageWrapper/>}/>


                    {/* Tag NavigationBar */}
                    <Route path={`${process.env.REACT_APP_TAG_ROOT}/:tag`} element={<TagPageWrapper/>}/>


                </Route>
                {/* Fallback 404 */}
                <Route path="*" element={<NotFoundPage/>}/>

            </Routes>
        </div>
  );
}

export default App;
