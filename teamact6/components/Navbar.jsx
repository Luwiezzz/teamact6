import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div className={styles.netoyz}>
                <span className={styles.netoyzfont}>Netoyz</span>
            </div>
            <div className={styles.projects}>
                <span className={styles.projectsfont}>Projects</span>
            </div>
            <div className={styles.about}>
                <span className={styles.aboutfont}>About</span>
            </div>
            <div className={styles.skills}>
                <span className={styles.skillsfont}>Skills</span>
            </div>
            <div className={styles.contact}>
                <span className={styles.contactfont}>Contact</span>
            </div>
        </div>
    );
};

export default Navbar;