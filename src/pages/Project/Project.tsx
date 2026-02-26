import styles from './Project.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';
import { projects } from '../../data/projects';
import { useParams, Link } from 'react-router';

export default function Project() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className={styles.page}>
      <Navigation />
      
      <header className={styles.hero} style={{ backgroundColor: '#f0d870' }}>
        <div className={styles.container}>
          <Link to="/works" className={styles.backLink}>← Назад</Link>
          <h1 className={styles.title}>{project.title}</h1>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            <p className={styles.description}>
              {project.description}
            </p>
            
            <section className={styles.imageBlock} style={{ backgroundColor: '#a8c8e8' }}>
              <div className={styles.placeholderImg}>Visual for {project.title}</div>
            </section>

            <p className={styles.description}>
              Ghosted Memory is a visual dissection of memory decay in a digitized world. 
              Using glitch aesthetics, distorted portraiture, and clinical documentation 
              as artistic media, the project explores the friction between what we remember 
              and what is archived in our digital shadows.
            </p>

            <section className={styles.imageBlock} style={{ backgroundColor: '#a8c8e8' }}>
              <div className={styles.placeholderImg}>More Visuals</div>
            </section>
          </div>
        </div>

        <section className={styles.related}>
          <div className={styles.container}>
            <div className={styles.relatedGrid}>
              {projects.slice(0, 3).map((p) => (
                <Link to={`/works/${p.id}`} key={p.id} className={styles.relatedItem}>
                  <div className={styles.tinyThumb} style={{ backgroundColor: p.cardBg }} />
                  <div className={styles.meta}>
                    <span className={styles.tinyNum}>PROJECT {p.number}</span>
                    <span className={styles.tinyName}>{p.titleShort || p.title}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ContactSection backgroundColor="#ffffff" />
      <Footer />
    </div>
  );
}
