import React from 'react';
import Project from './project';
import styles from './projects.module.css'
import p1 from '../public/unitedSports.PNG'
import p2 from '../public/bistroBoss.PNG'
import p3 from '../public/toymarket.PNG'
import p4 from '../public/recipe heaven.PNG'
const Projects = () => {
    return (
        <div className={styles.container}>
            <Project 
            imgUrl={p1} 
            imgAlt={"United Sports"} 
            key={Math.random()}
            heading = "United Sports Academy"
            text= "Enrolled Sports Classes and Make Payment"
            live={"https://united-sports-academy-45cf9.web.app/"}
            client={"https://github.com/Sahrial-alam34/united-sports-academy-client"}
            server={"https://github.com/Sahrial-alam34/united-sports-academy-server"}
            ></Project>
            <Project 
            imgUrl={p2} 
            imgAlt={"Bistro Boss"} 
            key={Math.random()}
            heading = "Bistro Boss"
            text= "Finding Food Item and Make an Order"
            live={"https://house-of-toy-cars.web.app/"}
            client={"https://github.com/Sahrial-alam34/bistro-boss-client"}
            server={"https://github.com/Sahrial-alam34/bistro-boss-server"}
            ></Project>
            <Project 
            imgUrl={p2} 
            imgAlt={"House of Toy "} 
            key={Math.random()}
            heading = "House of Toy "
            text= "Finding different Cars  and Make an Order"
            live={"https://house-of-toy-cars.web.app/"}
            client={"https://github.com/Sahrial-alam34/toy-marketplace-client"}
            server={"https://github.com/Sahrial-alam34/toy-marketplace-server"}
            ></Project>
            <Project 
            imgUrl={p4} 
            imgAlt={"Recipe Heaven"} 
            key={Math.random()}
            heading = "Recipe Heaven"
            text= "Finding Foods and Chef Details"
            live={"https://chef-recipe-hunter-36b56.web.app/"}
            client={"https://github.com/Sahrial-alam34/chef-recipe-heaven-client"}
            server={"https://github.com/Sahrial-alam34/chef-recipe-heaven-server"}
            ></Project>
        </div>
    );
};

export default Projects;