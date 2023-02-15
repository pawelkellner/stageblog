/* framer motion */
import {motion as m} from "framer-motion"
import Blog from "../Blog/Blog";

/* CSS */
import "./SectionSkills.css";

const SectionSkills = () =>{
    
    return(
        <article className="skills">
            <div className="skillsFlexWrapper">
                <m.section 
                initial={{ width: 355.7}}
                whileInView={{ width: "100%"}}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 1.5}}
                className="skillsTitleWrapper">
                    <h1
                    className="skillsTitle">
                        <m.span 
                        viewport={{ once: true }}
                        initial={{ y: "-40%"}}
                        whileInView={{ y: "0%"}}
                        transition={{ duration: 1}}
                        className="skillsSpan__title">STAGEBLOG</m.span>
                    </h1>
                </m.section>
                <m.section layout className="skillsContentWrapper">
                    <Blog />
                </m.section>
            </div>
        </article>
    );
}

export default SectionSkills;