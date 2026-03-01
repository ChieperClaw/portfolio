import styles from './Home.module.scss';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import Navigation from '../../components/Navigation/Navigation';
import { projects } from '../../data/projects';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className={styles.page}>
      <Navigation />
      
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroName}>Евгения Фаргер</h1>
          <p className={styles.heroSubtitle}>UI/UX Designer</p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.projects}>
          <div className={styles.grid}>
            {projects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className={styles.ctaBanner}>
          <Link to="/works" className={styles.ctaLink}>
            Смотреть все работы
          </Link>
        </section>

        <section className={styles.moments}>
          <div className={styles.container}>
            <span className={styles.momentsLabel}>Mildly impressive moments</span>
            <div className={styles.momentsContent}>
              <p className={styles.momentsText}>
                Along the way: featured on Figma Community, invited to speak at a design thing,
                and once accidentally made a typeface that looked like pasta. My work has shown
                up in zines, mockups, sticker-covered laptops, and one Berlin subway ad (true story).
                Small wins, big joy.
              </p>
              <Link to="/about" className={styles.momentsMore}>Смотреть еще →</Link>
            </div>
          </div>
        </section>
      </main>

      <ContactSection backgroundColor="#fbf9ea" />
      <Footer />
    </div>
  );
}
