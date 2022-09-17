import sectionSt from "../styles/Section.module.css"

const Section = ( { children, color} ) => {

    const { section, sectionGray } = sectionSt;

    return(
        <section className={color ? sectionGray : section}>
            {children}
        </section>
    )
}

export default Section;