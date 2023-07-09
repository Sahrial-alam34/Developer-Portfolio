import React from 'react';
import styles from './project.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Project = ({ imgUrl, imgAlt,heading, text, client, server, live }) => {
    return (
        <div>

            <div className={styles.container}>
                <div className={styles.img_container}>
                    <Image width={500} height={300} src={imgUrl} alt={imgAlt}></Image>
                </div>
                <div className={styles.text_container}>
                    <h2> {heading}</h2>
                    <p>{text}</p>
                    <Link href={live}>
                       
                        <button className={styles.btn}> Live </button>
                    </Link>
                    <Link href={client}>
                        <button className={styles.btn}> Client</button>
                    </Link>
                    <Link href={server}>
                        <button className={styles.btn}>Server</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Project;