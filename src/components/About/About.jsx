import { WordsBol, SideLink } from '../';
import styles from './about.module.scss';

const About = () => {
	return (
		<section id="about" className={styles.about}>
			<h2>Explanation</h2>

			<div>
				<article>
					<div>
						<h3>Name</h3>
						<h3>Age</h3>
					</div>

					<div>
						<p>David Dankwah</p>
						<p>24 years</p>
					</div>

					<p>
						You might be thinking nice and all but what exactly am I
						looking at ? This is my github account with custom jacket on.
						I show all my repositories through a Yu-Gi-Oh card. To
						retrieve the information I use the <span>github API </span>I
						created this page with the builder tool <span>Vite</span> I
						wanted to learn how to work with it. Also with the coding
						language <span>React</span>.
					</p>
					<br></br>

					<p>
						This is where I want to explore even further and expand my
						knowledge of it. The languages I used for this project are{' '}
						<span>React</span>, <span>HTML</span>, <span>SCSS</span>,{' '}
						<span>CSS</span>, <span>Javascript</span>. For this project, I
						was given a week to create it. For this project, I was given a
						week to make it. Which was a challenge but it certainly turned
						out well.
					</p>
					<br></br>

					<q> The best way to find out is to do it </q>
				</article>
				<WordsBol />
			</div>
			<SideLink text="Back up" link="#home" additionalClass="back-up" />

			<footer>
				<a href="https://daviddankwah.com/" target="_blank">
					David Customs
				</a>
				<p>&#xA9; Web Development</p>
			</footer>
		</section>
	);
};

export default About;