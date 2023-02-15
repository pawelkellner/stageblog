/* css import */
import "./Projects.css";

/* component import */

/* framer motion */
import { motion as m } from "framer-motion";

const Projects = (props) =>{
    return(
        <section className="section__projects">
            <m.section
            viewport={{ once: true }}
            initial={{ width: 286.32, x: 320}}
            whileInView={{ width: "100%", x: 0}}
            transition={{ duration: 1, width: { delay: 0.6, duration: 1 }}}
            className="projectstitleWrapper">
                <m.h2
                viewport={{ once: true }}
                initial={{ paddingRight: 0}}
                whileInView={{ paddingRight: "5%"}}
                transition={{ delay: 0.6, type: "tween", duration: 0.5 }}
                className="sectionProjects__title">
                    <span class="projects__title">STAGEBLOGS</span>
                </m.h2>
            </m.section>
            <section className="projects__contentWrapper">
            </section>
        </section>
    );
}

export default Projects;