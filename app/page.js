import React from "react";
import Navbar from "@/components/navbar"
import Banner from "@/components/banner";
import Projects from "@/components/projects";
import styles from "./page.module.css"
import About from "@/components/about";
export default function page() {
  return <div>
    <Navbar></Navbar>
    <Banner></Banner>
    <h1 className={styles.title}> Projects</h1>
    <Projects></Projects>
    <h1 className={styles.title}> About</h1>
    <About></About>
  </div>;
}
