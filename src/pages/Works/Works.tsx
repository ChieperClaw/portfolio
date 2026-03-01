import styles from './Works.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import { projects } from '../../data/projects';
import { Link } from 'react-router';

export default function Works() {
  return (
    <div className={styles.page}>
      <Navigation />

      <header className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Работы</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.list}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectItem}>
                <div className={styles.left}>
                  <p className={styles.projectLabel}>ПРОЕКТ {project.number}</p>
                  <h3 className={styles.projectName}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <Link to={`/works/${project.id}`} className={styles.viewLink}>
                    View case study →
                  </Link>
                </div>
                <div
                  className={styles.right}
                  style={{ backgroundColor: project.cardBg, color: project.cardTextColor }}
                >
                  <span className={styles.visualTitle}>{project.titleShort || project.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ContactSection backgroundColor="#ffffff" />
      <Footer />
    </div>
  );
}
