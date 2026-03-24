import { Link, useParams } from 'react-router';

import { ProjectDescriptionHtml } from '../../components/ProjectDescriptionHtml/ProjectDescriptionHtml';
import { projects } from '../../data/projects';

import styles from './Project.module.scss';

export default function Project() {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);

    if (!project) return <div>Project not found</div>;

    return (
        <div className={styles.page}>
            <header className={styles.hero} style={{ backgroundColor: '#f0d870' }}>
                <div className={styles.container}>
                    <Link to='/works' className={styles.backLink}>
                        ← Назад
                    </Link>
                    <h1 className={styles.title}>{project.title}</h1>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <ProjectDescriptionHtml className={styles.description} html={project.description} />

                        <section className={styles.imageBlock} style={{ backgroundColor: '#a8c8e8' }}>
                            <div className={styles.placeholderImg}>Visual for {project.title}</div>
                        </section>

                        <p className={styles.description}>
                            Ghosted Memory is a visual dissection of memory decay in a digitized world. Using glitch
                            aesthetics, distorted portraiture, and clinical documentation as artistic media, the project
                            explores the friction between what we remember and what is archived in our digital shadows.
                        </p>

                        <section className={styles.imageBlock} style={{ backgroundColor: '#a8c8e8' }}>
                            <div className={styles.placeholderImg}>More Visuals</div>
                        </section>
                    </div>
                </div>

                <section className={styles.related}>
                    <div className={styles.container}>
                        <div className={styles.relatedGrid}>
                            {projects.slice(0, 3).map(p => (
                                <Link to={`/works/${p.id}`} key={p.id} className={styles.relatedItem}>
                                    <img
                                        src={p.cardImage}
                                        alt={p.titleShort || p.title}
                                        className={styles.tinyThumb}
                                        loading='lazy'
                                    />
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
        </div>
    );
}
