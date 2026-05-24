import {Col, Figure, Row} from "react-bootstrap";
import {TabData} from "../../components/boxes/TabbedBox";

export const talks24: TabData[] = [
    {
        eventKey: "design",
        title: "Scientific Talk 1",
        content:
            (<>
                    <h3> AI-Driven Breakthroughs in Plasmid DNA Production</h3> <br/>
                    <Row>
                        <p>Ram Shankar, from Plasmid Factory, gave an insightful talk about the integration of AI and
                            advanced biotechnology, with a focus on plasmid DNA production. His presentation highlighted
                            how AI-driven innovations have transformed research methodologies in gene therapy, plasmid
                            manufacturing, and DNA purification. His speech showcased the practical applications of AI
                            in streamlining workflows, making biotech processes more efficient and scalable.</p>
                        <p>Shankar began by illustrating how scientific advancements, such as powered flight and DNA
                            research, have rapidly progressed within a single human lifetime. He connected this concept
                            to breakthroughs in plasmid DNA technology, where Plasmid Factory’s work has been pivotal in
                            advancing gene therapy products. A key takeaway was the integration of AI in optimizing
                            plasmid purification processes, enabling the production of high-quality plasmids and mini
                            circles for clinical applications. Shankar also introduced real-world examples, such as the
                            use of AI in enhancing the stability and quality of gene vectors and mRNA production. His
                            discussion of collaborations between academia and industry underscored the importance of
                            networking and shared innovation, comparing it to the historic partnership between Stanley
                            Cohen and Herbert Boyer that revolutionized recombinant DNA technology.</p>
                        <p>The talk provided attendees with a deeper understanding of how AI can revolutionize lab work,
                            particularly in scaling up DNA production for gene therapies. By applying these insights,
                            participants left with ideas on how to leverage AI to enhance their own research projects,
                            particularly in biotechnology and gene editing.</p>
                    </Row>
                </>
            )
    },
    {
        eventKey: "build",
        title: "Scientific Talk 2",
        content:
            (<>
                    <h3> Gene Therapy, AAVs and Innovations in Synthetic Biology</h3> <br/>
                    <Row>
                        <p>
                            Prof. Dr. Kristian Müller from Research Group Cellular and Molecular Biotechnology at the
                            Technical Faculty of Bielefeld University, delivered an insightful presentation on the
                            integration of AI and advanced biotechnology, focusing on the production and refinement of
                            AAV vectors. The presentation highlighted how AI-driven innovations are transforming
                            research methodologies, especially in areas such as AAV production, genetic targeting, and
                            quality control. Prof. Dr. Müller showcased practical applications of AI in optimizing these
                            biotechnological processes, making them more efficient, scalable, and precise, particularly
                            in therapeutic applications.
                        </p>
                        <p>
                            The speaker began by drawing parallels between technological advancements in fields like
                            space exploration and breakthroughs in genetic research, emphasizing the rapid progression
                            within a short span of time. This context set the stage for discussing recent developments
                            in AAV technology, where the application of AI has been pivotal. A key takeaway was how AI
                            is being used to enhance the stability of viral vectors and optimize gene delivery, allowing
                            for the production of high-quality AAV vectors with improved precision. Real-world examples,
                            such as the use of AI to monitor genetic purity during nanopore sequencing and to streamline
                            plasmid engineering processes, showcased the tangible impact of these technologies on
                            therapeutic research. The discussion also highlighted the importance of collaborations
                            between academia and industry, drawing parallels to the historic partnership that sparked
                            the recombinant DNA revolution.
                        </p>
                        <p>
                            The presentation provided attendees with a deeper understanding of how AI can significantly
                            enhance lab work, particularly in scaling up AAV production and ensuring the quality of
                            therapeutic vectors. Participants left with valuable insights on leveraging AI and advanced
                            technologies to drive their own research projects forward, especially in fields like gene
                            therapy, plasmid engineering, and synthetic biology.
                        </p>
                    </Row>
                </>
            )
    }
    ,
    {
        eventKey: "test",
        title: "Scientific Talk 3",
        content:
            (<>
                    <h3> Optimization of a DKR of a Tertiary Alcohol through Protein Engineering</h3> <br/>
                    <Row>
                        <p>
                            Karla Wagner, a PhD researcher at the IOCB of the University of Bielefeld with a background
                            in organic chemistry and biotechnology. During the workshop, Karla discussed her research on
                            optimizing the dynamic kinetic resolution (DKR) of tertiary alcohols using protein
                            engineering. Her work focuses on sustainable chemistry practices, particularly by using
                            enzymes in biocatalysis, aligning with the principles of sustainable chemistry.
                        </p>
                        <p>
                            Her presentation centered around her research on the synthesis of chiral tertiary alcohols,
                            which are valuable in the production of pharmaceuticals, fragrances, and flavouring agents.
                            She emphasized the importance of chirality in pharmaceuticals, noting how different
                            enantiomers of a molecule can have drastically different effects, such as the case of
                            Thalidomide.
                        </p>
                    </Row>
                </>
            )
    }
    ,
    {
        eventKey: "learn",
        title: "Panel Discussion",
        content:
            (<>
                    <h3> Panel Discussion</h3> <br/>
                    <Row>
                        <p>
                            During the panel discussion, participants shared their experiences with iGEM and synthetic
                            biology. Leslie, an advisor for the University of Windsor's team, detailed her transition
                            from team member to advisor and her recent involvement in synthetic biology organizations.
                            Anna, a former iGEM participant, spoke about her background in design and her current role
                            as a senior content strategist at Freelitics, emphasizing her passion for science
                            communication. Tracy recounted her extensive journey within iGEM, starting as a team leader
                            at Boston University and eventually becoming the director of the competition at iGEM
                            headquarters. After transitioning to Asimov, she highlighted her efforts to strengthen
                            partnerships between Asimov and iGEM, including manufacturing distribution kits for
                            participating teams. The discussion showcased the diverse paths taken by individuals in the
                            field and their ongoing commitment to advancing synthetic biology.
                        </p>
                    </Row>
                </>
            )
    }
]

export const othertalks24: TabData[] = [
    {
        eventKey: "design",
        title: "Ted Talk 1",
        content:
            (<>
                    <h3> Secrets to award-winning bioinformatics tools</h3> <br/>
                    <Row>
                        <p>
                            Lasse’s Ted talk was all about how to create good bioinformatics software. He himself was
                            part of the dry lab in iGEM Münster’s Team that won the best software special prize in 2022.
                            The tool they created allowed users to generate knockout candidates for an organism of their
                            choice that would lead to redirection of metabolic flux to a reaction chosen by the user. We
                            learned that the most important attributes for a successful bioinformatics software are:
                        </p>
                        <ul>
                            <li>Usefulness</li>
                            <li>Accessibility</li>
                            <li>Build upon existing standards</li>
                        </ul>
                        <p>
                            To ensure usefulness, the software should be generalized and not only usable in the context
                            of one’s own project. Also, all steps that can be automated should be automated.
                            Accessibility, Lasse said, requires for the software to be easy to install, easy to use and
                            well documented.
                        </p>
                        <p>
                            As a funny, but also very fitting anecdote, Lasse told us about the HU test. For testing
                            their own tool for accessibility, he gave a bioinformatically unexperienced, hungover
                            undergraduate student nothing but the software with the provided documentation. If the
                            student can use the tool in a reasonable amount time, that would make it accessible enough
                            for everyone. Furthermore, Lasse also recommended making a command line tool for better
                            availability over time and integration into other workflows. Lastly, the software should use
                            standard data files like CSV, Fasta etc. and be written in commonly used programming
                            languages like Python.
                        </p>
                        <p>
                            Overall, Lasse gave a great insight into the properties of a special price winning software
                            tool and very practically explained how these can be tested and achieved, information that
                            is invaluable for us when creating our own bioinformatics tool.
                        </p>
                    </Row>
                </>
            )
    },
    {
        eventKey: "build",
        title: "Ted Talk 2",
        content:
            (<>
                    <h3> How to Create the Perfect Part Characterization</h3> <br/>
                    <Row>
                        <Col>
                            <p>
                                Merel provided us with strategies based on her cELPro project at TU Eindhoven on how to
                                approach winning the special awards for Composite Part and New Basic Part. Her team won
                                the <a href={"https://2023.igem.wiki/tu-eindhoven/awards"}>Composite Part Prize and the
                                Therapeutic Prize</a> at the 2023 iGEM competition.
                            </p>
                            <p>
                                After presenting her team's project, Merel inspired us with ways we could also achieve
                                this award. We learned different considerations to make, when it comes to part
                                characterization:
                            </p>
                        </Col>
                        <Col md={4}>
                            <Figure>
                                <Figure.Image className="FigureGen"
                                              alt="Merel"
                                              src="https://static.igem.wiki/teams/5247/photos/meetup/ted-talk-cp/ted-talk-cp.webp"
                                />
                            </Figure>
                        </Col>
                    </Row>
                    <ul>
                        <li>How to emphasize the innovativeness of the project</li>
                        <li>How to highlight the parts potential benefits</li>
                        <li>How to discuss whether these parts could be applied to other projects</li>
                    </ul>
                    <p>
                        Many projects fail because the experiments conducted are too complex. Therefore, Merel
                        encouraged us to initially carry out simpler experiments for our projects, like pH sensitivity
                        and temperature response. Opening the mindset for other maybe more pragmatic experiments could
                        change the focus of the project and drive the engineering cycle.
                    </p>
                    <p>
                        Additionally, she showed us what a perfect submission for New Basic Part or Composite Part looks
                        like. The Best Part Registry demonstrates great significance and should be filled with different
                        results and representative analyses to characterize the parts. Conducting experiments for
                        characterization and good documentation are just two aspects. The most crucial part is the
                        demonstration of the part’s functions as intended.
                    </p>
                    <p>
                        We learned what effective strategies for the special awards Composite Part and New Basic Part
                        might look like, and were provided with many helpful tips and tricks on how simple experiments
                        for characterization could be designed.
                    </p>
                </>
            )
    },
    {
        eventKey: "test",
        title: "Science Slam 1",
        content:
            (<>
                    <h3> ChatGPT and Large Language Models </h3> <br/>
                    <Row>

                    </Row>
                    <p>
                        With Jonas Vaquet, a research associate of the EU project ERC Waterfutures, the audience
                        explored Large Language Models (LLMs) such as ChatGPT. The speaker humorously engaged the crowd,
                        asking who had used such models, and nearly all hands were raised in response.
                    </p>
                    <p>
                        The speaker introduced ChatGPT, a "Generative Pre-trained Transformer," using an interactive
                        experiment where the audience predicted the next words in sentences, showing how the model works
                        with pre-trained data and calculates text continuations.
                    </p>
                    <p>
                        While it is fair to say that ChatGPT is a powerful and helpful tool, it is important to focus on
                        the potential dangers and challenges it brings, which Jonas summarizes in three key factors in
                        his talk:
                    </p>
                    <ul>
                        <li>
                            <b>
                                Plagiarism Risks:
                            </b>
                            the speaker demonstrated how easy it is to unintentionally replicate existing works, using a
                            Harry Potter example to illustrate plagiarism risks in creative writing.
                        </li>
                        <li>
                            <b>
                                Hallucinations:
                            </b>
                            Language models can generate plausible but incorrect information, exemplified by a
                            fictitious CV with invented grades, highlighting risks in academic and professional use.
                        </li>
                        <li>
                            <b>
                                Lack of Opinion Formation:
                            </b>
                            ChatGPT does not form real opinions, leading to inconsistent answers when asked for
                            preferences.
                        </li>
                    </ul>
                    <p>
                        Although large language models (LLMs) are trained with extensive collection of texts or spoken
                        language, they often fail in the accuracy required for scientific topics. Sources are seemingly
                        conjured out of thin air and claims vanish into thin air because their answers are based on
                        statistical probabilities, leading to confusion, especially for niche questions.
                    </p>
                    <p>
                        Jonas ended his talk by giving the audience food for thought. He reminded everyone who had
                        eagerly raised their hands at the beginning to always double-check ChatGPT's information,
                        especially in academic and professional settings.
                    </p>
                    <p>
                        With his interactive and humorous approach, Jonas turned the complex world of LLMs into an
                        engaging and accessible adventure, offering deep insights into the workings and idiosyncrasies
                        of this fascinating technology.
                    </p>
                </>
            )
    },
    {
        eventKey: "learn",
        title: "Science Slam 2",
        content:
            (<>
                    <h3> Microalgae for Sustainable Food Production</h3> <br/>
                    <Row>

                    </Row>
                    <p>
                        With insights into his current research, Niklas introduced the audience to the innovative uses
                        of chlorella for sustainable food production.
                    </p>
                    <p>
                        The star of the show was the smallest vegetable in the world Chlorella is tiny (4 to 12 microns)
                        but very rich in nutrients: 45-65% protein, 10-20% fat, 10-20% carbohydrates, 5% fiber and
                        various vitamins and minerals, including vitamin B12.
                    </p>
                    <p>
                        Nicholas presented two production methods:
                    </p>
                    <ul>
                        <li>
                            open pond systems: these utilize light, CO₂ and water for photosynthesis, but have the
                            problem of the availability of light and water.
                        </li>
                        <li>
                            bioreactors: modern, controlled, sterile environments that utilize sugar as an energy
                            source, significantly increase productivity and reduce water consumption.
                        </li>
                    </ul>
                    <p>
                        Bioreactors are up to 100 times more productive and use 100 times less water than conventional
                        methods. Sounds perfect, right? But Nicholas had to burst the bubble and make it clear that the
                        technology still needs to be developed further.
                    </p>
                    <p>
                        In terms of sustainability, Nicholas had to emphasize that the whole process of microalgae
                        production needs to be questioned. He noted that the current carbon footprint calculations for
                        bioreactors are outdated. But fear not, our brave biotechnologist is on a mission to bring these
                        figures up to date with his groundbreaking research!
                    </p>
                    <p>
                        The curious audience asked questions about scalability, costs and sustainable sugar sources.
                        Always up for a challenge, Nicholas explained that the current high costs could be addressed by
                        improving the productivity of the bioreactors! However, he also emphasized that further research
                        is needed to find a sustainable source of sugar.
                    </p>
                    <p>
                        In his grand finale, Nicholas presented three wise insights:
                    </p>
                    <ul>
                        <li>
                            biotechnology goes far beyond medicine and opens the doors for sustainable food production.
                        </li>
                        <li>
                            sustainability assessments must consider the entire production process - no detail should be
                            overlooked!
                        </li>
                        <li>
                            chlorella, the tiny, nutrient-rich microalgae, has the potential to be a hero in our future
                            diet.
                        </li>
                    </ul>
                    <p>
                        Nicholas captivated the audience with his vivid and eye-opening presentation. He guided them
                        through the fascinating and sometimes turbulent world of microalgae production, highlighting the
                        challenges and opportunities of this technology. The audience was not only informed but also
                        entertained and ready to embrace the future of sustainable nutrition with chlorella as their
                        little green hero.
                    </p>
                </>
            )
    },
]


export const workshops24: TabData[] = [
    {
        eventKey: "design",
        title: "Wiki",
        content: (<>
            <h3>Building Professional Websites: A Workshop on HTML and CSS Essentials</h3>
            <p>We participated in an intensive workshop on HTML and CSS made by a former iGEM participant of team
                GU-Frankfurt 2023 and head of wiki,
                Christian Kolland. All participants gain an overview of the essentials for building websites. </p>
            <p>The session began with an introduction to color theory tools such as Realtime Colors and AI Colors,
                emphasizing their role in creating visually
                appealing designs. Typography was a key focus, clarifying the difference between typeface (e.g., Futura)
                and font variations (e.g., Futura Condensed),
                and how font weights and sizes impact readability and design hierarchy. Practical guidelines, including
                the usage of different types of units such as
                PX or REM for font sizing and understanding spacing for an effective layout, were given. </p>
            <p>
                We delved into HTML's structure for web content, learning semantic tags for effectively organizing
                information. CSS principles were explored next,
                demonstrating how styles cascade from parent to child elements, which are crucial for consistent design
                across a webpage.
                A significant part of the workshop involved hands-on coding in Visual Studio Code, where we replicated a
                pre-designed webpage using the HTML and CSS
                techniques learned. This exercise equipped the attending iGEM teams with practical skills to create and
                style their own project websites and emphasized
                the importance of component-based design and effective content organization.
            </p>
            <p>
                By the end of the workshop, the attendees were inspired to pursue creating their own wikis, leveraging
                AI-based tools like for initial designs and imagery.
                Overall, we left with a solid foundation in web development and were prepared to build professional and
                functional websites for their iGEM projects.
            </p>

        </>)
    },
    {
        eventKey: "build",
        title: "Kernel",
        content: (<>
            <h3>How to Synthetic Biology? - Introducing Kernel Software. </h3>
            <p>
                The kernel workshop was given by Traci Haddock, Director of Community at <a
                href="https://www.asimov.com/">ASIMOV Boston</a>. She introduced the Kernel software and showed us how
                to
                implement AI-based tools in our synthetic biology project. The program can be used to graphically
                display plasmids. By uploading parts in an
                iGEM-related database, safety considerations and registry entries can be checked automatically.
            </p>
            <div className="row">
                <div className="col">
                    <img src="https://static.igem.wiki/teams/5247/photos/meetup/tracy-at-kernel-seminar/kernel-1.webp"/>
                </div>
                <div className="col">
                    <img src="https://static.igem.wiki/teams/5247/photos/meetup/tracy-at-kernel-seminar/kernel-2.webp"/>
                </div>
                <p><b>Tracy explains the “marshmallow madness” to us. </b></p>
            </div>
            <h6>What did we learn?</h6>
            <p>
                We learned the basics of kernels in order to design plasmids by understanding general plasmid
                construction and problem solving through different
                cloning strategies. </p>
            <p>
                Furthermore, Kernel has an AI-assisted search function that can be used for plasmid representation, e.g.
                to find a specific
                promoter based on certain requirements. Traci showed us practical exercises for firsthand application.
                First, we were asked to
                recreate a plasmid followed by a slightly trickier task: We should clean the world of major marshmallow
                contamination by developing
                a plasmid. In small groups we discussed which components the plasmid needed. Tracy gave us some
                information with which we quickly
                identified crucial components of the plasmid and then designed it.
            </p>
            <p>In the end, each group presented their solution. The funniest and most creative approaches were
                celebrated. </p>


        </>)
    },
    {
        eventKey: "test",
        title: "AI",
        content: (<>
            <h3>Modern problems require modern solutions</h3>
            <p>
                This workshop hosted by xyna.bio was designed to introduce researchers to the integration of AI into
                scientific workflows. Wiktoria Palak and
                Julian Borbeck, both experts in Molecular Biology, Biochemistry, and Bioinformatics, led the workshop,
                focusing on practical applications of AI
                in biosciences. The session provided attendees with hands-on experience and a platform for exploring how
                AI can address research inefficiencies
                and open new opportunities for innovation.
            </p>
            <p>
                The workshop was structured around two main components: theoretical insights and a practical group
                exercise. In the theory portion, we gained a deeper
                understanding of AI applications, including neuro-symbolic AI and its role in enhancing research
                methodologies. The instructors shared their experiences
                developing AI tools like those at xyna.bio, offering participants valuable knowledge on the AI
                development process.
            </p>
            <p>During the group work, we brainstormed ideas for AI tools that could simplify lab work for scientists.
                This activity not only fostered creative
                thinking but also encouraged collaboration, as we discussed potential AI solutions that could streamline
                tasks like data analysis and experimental
                design.
            </p>
            <p>
                By the end of the workshop, participants walked away with practical insights and actionable skills. We
                felt equipped to start implementing AI
                solutions in our own research projects, identifying specific areas where AI could improve efficiency and
                productivity in the lab.
            </p>

        </>)
    },
    {
        eventKey: "learn",
        title: "Safety",
        content: (<>
            <h3>About Dual-use and Biosafety</h3>
            <p>
                The biosafety workshop was held by Svenja Vinke. As a postdoctoral researcher specializing in synthetic
                biology at the Church Lab, Harvard Medical School. Svenja works on the iGEM Safety and Security
                Committee. Additionally, she was part of the Biosafety and Security Award Team of Bielefeld University
                in 2016.
            </p>
            <p>
                First and foremost, she started the workshop by outlining the key concepts of biosafety and biosecurity,
                emphasizing how important laboratory safety is.
            </p>
            <div className="row">
                <div className="col">
                    <img
                        src="https://static.igem.wiki/teams/5247/photos/meetup/s-s-workshop/biosafety-seminar-bfh.webp"/>
                </div>
                <div className="col">
                    <img
                        src="https://static.igem.wiki/teams/5247/photos/meetup/s-s-workshop/teil-2-bfh-biosafety.webp"/>
                </div>
            </div>
            <br/>
            <p>She also explained which safety aspects we should consider for our project: </p>
            <ul>
                <li><b>Dual use:</b> Refers to technology or research that can be used for both beneficial and harmful
                    purposes. For example, AI designed for medical diagnosis could also be misused for harmful
                    surveillance. Managing dual-use risks involves careful consideration of both the positive
                    applications and the potential for misuse.
                </li>
                <li><b>Built-In Safety Levels:</b> This concept involves designing systems with multiple layers of
                    safety to prevent failure or minimize harm. In technology and engineering, built-in safety levels
                    ensure that even if one layer fails, others remain intact to maintain safe operation.
                </li>
                <li><b>Safe-by-Design: </b> Safe-by-Design emphasizes integrating safety considerations into the
                    earliest stages of product or system development. By anticipating risks and hazards from the start,
                    this approach proactively minimizes dangers before they become issues, leading to safer outcomes.
                </li>
            </ul>
            <p>
                Finally, each team gave brief presentations of their projects and engaged in a group discussion on
                potential security risks and general security considerations. Together, we brainstormed and identified
                specific aspects of each project that could present potential risks.
            </p>
            <p>
                From Svenja’s seminar, we learned which safety-relevant aspects are particularly important, as well as
                the importance of examining a project from different perspectives to identify and minimize potential
                risks related to lab work and the environment.
            </p>

        </>)
    },
    {
        eventKey: "secret",
        title: "SciCom",
        content: (<>
            <h3>Effective Science Communication: Strategies for Success</h3>
            <p>
                This workshop was offered to us by StudSciCom as part of the BFH Meet-up program at Bielefeld
                University.
                <a href="https://www.stud-scicom.de/"> StudSciCom</a> is an initiative for science communication by
                students for students in Germany.
                They held this workshop for us for the very
                first time and we are glad that we were able to offer the uprising StudSciCom team a platform to try out
                this kind of outreach. In addition,
                we were able to gain knowledge about proper science communication – a clear win-win situation for all of
                us!
            </p>
            <p>
                Science communication is defined as the practice of informing, educating, and raising awareness about
                science-related topics among the general public
                or specific audiences. It involves various methods such as writing articles, giving presentations, using
                social media, and engaging in public discussions
                to make scientific knowledge accessible and understandable<a href=""></a>.

            </p>
            <h6>What did we learn?</h6>
            <p>
                Julia Kalinowski, PhD at Bielefeld University and Foreign Minister of StudSciCom, together with Carolin
                Malmendier,
                former physics student and now organizer in the StudSciCom team, introduced us to the theories and
                practice
                of different types of science communication and how to develop a communication strategy.
                In detail, we were taught to ask ourselves several questions to define our topic, the medium of
                communication, as well as the characterization of our target group and the planned achievement with our
                science communication.
            </p>
            <img src="https://static.igem.wiki/teams/5247/photos/other/vortrag-scicom-bfh-screenshot.jpg"></img>
            <p>The key message for us was to plan the science communication before we dive in and to make sure that the
                target audience gets the message we want to send. </p>
            <h6>Implementation</h6>
            <p>
                Afterwards, the attending iGEM teams talked about their science communication plans and how they could
                improve them
                using the skills learned in this workshop. Our team revised their plans for explaining gene editing to
                children and started developing experiments to help them better understand Cystic Fibrosis, which we
                presented later onto the public at <a>“Der Teuto ruft!”</a>, an event in Bielefeld to connect the local
                population with regional companies and institutes to inform them about their work - including our iGEM
                team!
            </p>
            <h6>References</h6>
            <ol>
                {/*<!-- Citation num 1--> */}
                <li typeof="schema:ScolarlyArticle" role="doc-biblioentry" property="schema:citation" id="desc-1">
                                <span property="schema:author" typeof="schema:Person">
                                    <span property="schema:Name"> Fischhoff, B.</span>
                                </span>
                    <span property="schema:name">&nbsp;The sciences of science communication. </span>
                    <i property="schema:publisher" typeof="schema:Organization"> Proceedings of the National Academy of
                        Sciences</i>
                    <b property="issueNumber" typeof="PublicationIssue"> 110</b>,&nbsp;
                    <span property="schema:pageBegin"> 14033</span>-<span property="schema:pageEnd">14039</span>
                    (
                    <time property="schema:datePublished" datatype="xsd:gYear" dateTime=" 2013">2013</time>
                    ).
                    <a className="doi" href="https://doi.org/10.1073/pnas.1213273110"> doi: 10.1073/pnas.1213273110</a>
                </li>
            </ol>

        </>)
    },
    {
        eventKey: "secretA",
        title: "Pitching",
        content: (<>
            <h3>How to Pitch Your Project</h3>
            <p>The "Perfect Project Pitch" workshop was part of the second phase of workshops during the inaugural BFH
                meet-up, hosted at Bielefeld University. It was led by Madeleine Mussgnug, a startup consultant at the
                Goethe University's entrepreneurship center in Frankfurt, Germany. Madeleine studied International
                Management and Tourism and has extensive experience, including several years at the scale-up company
                Limehome. Currently, she also works as a freelance consultant specializing in online marketing, social
                media, and supporting individuals in becoming self-employed. </p>
            <p>The workshop focused on the essential skills and strategies for delivering an effective project pitch,
                covering the following key areas: </p>
            <ol>
                <li> Crafting compelling narratives to present complex ideas clearly and engagingly, ensuring they
                    remain memorable for the audience.
                </li>
                <li> Structuring and organizing pitches to highlight critical elements such as innovation, market
                    potential, and team strengths, thus communicating your message effectively.
                </li>
                <li> Tailoring pitches to resonate with different target audiences, including investors and
                    collaborators, making them adaptable and impactful.
                </li>
                <li> Building confidence and mastering persuasive techniques to convincingly communicate the value of
                    your project.
                </li>
                <li> Utilizing creative and visually appealing pitch materials, with a focus on integrating visuals and
                    data effectively to enhance the presentation.
                </li>
            </ol>
            <p>Madeleine Mussgnug delivered these insights through a balanced mix of presentation and interactive
                discussions. She provided real-world examples and engaged the audience by prompting them to reflect on
                specific techniques, images, and stylistic choices. For instance, she demonstrated the strategic use of
                numbers and icons on slides, discussing how their size and placement can influence the viewer’s
                perception. By showing different slide constellations, she encouraged the audience to discuss their
                visual impact. The workshop concluded with a focus on the importance of networking. According to
                Mussgnug, knowing whom to approach and how to engage with them is key—this, she emphasized, is the
                essence of successful pitching. </p>
            <p>We immediately put what we learned into practice in various areas, such as: </p>
            <ul>
                <li><b>Meet-up Münster Presentation:</b> We adopted a fresh, innovative approach when preparing for the
                    Münster meet-up, integrating many of the techniques from the workshop.
                </li>
                <li><b>Correspondence with Potential Partners and Sponsors: </b> Our communication became more targeted
                    and effective, allowing us to build stronger connections with potential partners and sponsors.
                </li>
                <li><b>Improved Steering Committee Communication:</b> We also saw a noticeable improvement in our
                    interactions with the steering committee, using clearer and more persuasive messaging.
                </li>
            </ul>
            <p>In essence, the workshop not only enhanced our pitching skills but also significantly improved our
                overall communication strategies, enabling us to present our ideas with greater confidence and
                impact. </p>

        </>)
    },
    {
        eventKey: "secretB",
        title: "Media",
        content: (<>
            <h3>Mastering Filmmaking: From Basics to iGEM Video Production</h3>
            <p>Michael Gröning, who has many years of experience in a range of multimedia disciplines, including 3D
                animation, video and cinematography, film and audio production, post-production, voiceover and media
                design, held the practical workshop on multimedia. Firstly, the significance of the Promotion Video was
                elucidated, and the paramount importance of the general external representation was clarified. Questions
                and tricks provided the participants a basis for finding ideas for their videos, which were combined
                with story and mood boards and the reasonable use of AI.</p>
            <div className="col">
                <img
                    src="https://static.igem.wiki/teams/5247/photos/meetup/workshop-multimedia-exposure-triangle.webp"/>
            </div>
            <p>A wide-ranging overview of various camera shots, lighting techniques and transitions was presented to the
                participants, equipping them with a useful toolkit for the production of cinematographic videos.
                Illustrative graphics, such as the Exposure Triangle, helped them to experiment with professional camera
                settings on their mobile phones. Through the implementation of voice warm-up exercises, the workshop
                participants were able to gain insights into the preparation of voice-overs. An introduction to various
                microphones and audio editing software enabled them to learn how voice recording is converted to studio
                quality.</p>
            <p>The participants were able to gain valuable practical insights into the world of multimedia and thus
                prepare themselves to produce breathtaking videos. </p>
            <div className="col">
                <img src="https://static.igem.wiki/teams/5247/photos/meetup/workshop-multimedia2.webp"/>
            </div>

        </>)
    }
]