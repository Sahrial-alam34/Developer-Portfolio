
import React from 'react';
import styles from './about.module.css'
import Image from "next/image";
import man from "../public/man.png";
import down from "../public/down.png";
import Link from 'next/link';
const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.img_sec}>
                <div className={styles.img_container}>
                    <Image src={man} alt="avater" />
                </div>
                <div className={styles.btn_container}>
                    Download

                    <Link href="https://github.com/Sahrial-alam34/portfolio/blob/master/MD_SAHRIAL_ALAM_RESUME.pdf">     
                    <Image
                        style={{ marginTop: "-2px", marginLeft: "20px" }}
                        src={down}
                        alt="download"
                    /></Link>
                </div>
            </div>
            <div className={styles.text_sec}>
                I am a quick learner,passionate and creative. I love to show my creativity with my work. I always ensure my
                skills are kept up to date within this rapidly changing industry.I have experienced with solo project and as
                a part of team .I am co-operative
                and love to learn from team mates or others. Highly interested in logical things.
            </div>
        </div>
    );
};

export default About;