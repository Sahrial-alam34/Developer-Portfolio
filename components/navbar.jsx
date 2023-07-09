import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import InstrLogo from "../public/insta.png"
import FaceBookLogo from "../public/fb.png"
import GithubLogo from "../public/github.png"
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.first_container}>
                    <ul>
                        <li>Project</li>
                        <li>About</li>
                        <li>Container</li>
                    </ul>
                </div>
                <div className={styles.second_container}>
                   <Link href=""> <Image className={styles.socialImg} src={InstrLogo} alt='Instagram Logo'></Image></Link>
                   <Link href=""> <Image className={styles.socialImg} src={FaceBookLogo} alt='Facebook Logo'></Image></Link>
                   <Link href=""> <Image className={styles.socialImg} src={GithubLogo} alt='Github Logo'></Image></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;