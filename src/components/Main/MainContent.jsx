import React from 'react';
import { Carousel, SideLink, About } from '..';
import styles from './mainContent.module.scss';

const MainContent = () => {

    return (
        <main>
			<section id="github-repos" className={styles.githubRepo}>
				<Carousel />
				<SideLink text="Click" link="#about" additionalClass='second' />
			</section>
			<About />
		</main>
    );
}

export default MainContent;