import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.aboutbg}>
            <div className={styles.header}>
                <h1>About Me</h1>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Nascetur curae inceptos ad suspendisse ex sem vitae facilisis 
                    bibendum. Nullam pretium torquent pellentesque at natoque 
                    ante est. Auctor libero tortor erat gravida maecenas luctus 
                    posuere. Suspendisse praesent praesent sit ipsum maximus 
                    aenean. Class dis fames montes fermentum nunc eu blandit. 
                    Magna vel etiam sit inceptos aptent platea posuere viverra. 
                    Lectus nulla neque elementum inceptos a iaculis. Leo 
                    porta mauris sit potenti duis dictumst eget.
                </p>
                <p>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. 
                    Nascetur curae inceptos ad suspendisse ex sem vitae facilisis 
                    bibendum. Nullam pretium torquent pellentesque at natoque 
                    ante est. Auctor libero tortor erat gravida maecenas luctus 
                    posuere. Suspendisse praesent praesent sit ipsum maximus 
                    aenean. Class dis fames montes fermentum nunc eu blandit. 
                    Magna vel etiam sit inceptos aptent platea posuere viverra. 
                    Lectus nulla neque elementum inceptos a iaculis. Leo 
                    porta mauris sit potenti duis dictumst eget.
                </p>
            </div>
            <div className={styles.aboutpic}></div>
        </div>
    );
};

export default About;