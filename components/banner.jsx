import React from 'react';
import styles from './banner.module.css';
import Image from 'next/image';
import myImg from '../public/Sahrial_alam.jpg';
import reactLogo from '../public/react.png'
import javaScriptLogo from '../public/js.png'
import nodejsLogo from '../public/node_js.png'
import mongoDBLogo from '../public/Mongo-db-logo.png'
const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.first_container}>
                <Image src={myImg}></Image>
            </div>
            <div className={styles.second_container}>
                <h1>Full-Stack Developer</h1>
                <div className={styles.img_container}>
                    <Image style={{marginTop:"12px"}} src={reactLogo}></Image>
                    <Image  src={javaScriptLogo}></Image>
                    <Image  src={nodejsLogo}></Image>
                    <Image  src={mongoDBLogo}></Image>
                </div>
                <div className={styles.txt_container}>
                    Hi, I'm Sahrial. My core skill is based on JavaScript and I love to do most of the things with JavaScript. I am Skilled At MERN Stack.. I am a quick learner, passionate and creative. 
                </div>
            </div>

        </div>
    );
};

export default Banner;