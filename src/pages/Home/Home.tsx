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
          <p className={styles.heroSubtitle}>UI/UX DESIGNER</p>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.projects}>
          <div className={styles.container}>
            <div className={styles.grid}>
              {projects.slice(0, 4).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaBanner}>
          <div className={styles.container}>
            <Link to="/works" className={styles.ctaLink}>
              Смотреть все работы
              <div className={styles.ctaUnderline}></div>
            </Link>
          </div>
        </section>

        <section className={styles.moments}>
          <div className={styles.container}>
            <span className={styles.momentsLabel}>MILDLY IMPRESSIVE MOMENTS</span>
            <div className={styles.momentsContent}>
              <p className={styles.momentsText}>
                Ghosted Memory is a visual dissection of memory decay in a digitized world. 
                Using glitch aesthetics, distorted portraiture, and clinical documentation 
                as artistic media, the project explores the friction between what we remember 
                and what is archived in our digital shadows.
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
