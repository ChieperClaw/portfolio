import { type ReactElement } from 'react';
import { Link, useParams } from 'react-router';

import { ProjectDescriptionHtml } from '../../components/ProjectDescriptionHtml/ProjectDescriptionHtml';
import { color, projects } from '../../data/projects';

import styles from './Project.module.scss';

export const ProjectPage = (): ReactElement | null => {
    const { projectId } = useParams();
    const project = projects.find(p => p.id === projectId);
    const relatedProjects = projects.filter(p => p.id !== projectId).slice(0, 3);

    if (!project) return <div>Project not found</div>;

    return (
        <div className={styles.page}>
            <header
                className={styles.hero}
                style={{ backgroundColor: color(project.heroColor), color: color(project.heroTextColor ?? 'black0') }}
            >
                <div className={styles.container}>
                    <h1 className={styles.title}>{project.title}</h1>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        {project.content.map((block, index) => {
                            if (block.type === 'text') {
                                return (
                                    <div key={index} className={styles.textBlock}>
                                        {block.title ? <h4 className={styles.sectionTitle}>{block.title}</h4> : null}
                                        <ProjectDescriptionHtml className={styles.description} html={block.html} />
                                    </div>
                                );
                            }
                            return (
                                <div key={index} className={styles.imageFrame}>
                                    <img
                                        src={block.src}
                                        alt={block.alt ?? ''}
                                        className={styles.imageFrameImg}
                                        loading='lazy'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <section className={styles.related}>
                    <div className={styles.container}>
                        <div className={styles.relatedGrid}>
                            {relatedProjects.map(p => (
                                <Link
                                    to={`/works/${p.id}`}
                                    key={p.id}
                                    className={styles.relatedItem}
                                    aria-label={`Открыть проект: ${p.titleShort || p.title}`}
                                >
                                    <div className={styles.relatedBody}>
                                        <div className={styles.relatedLabelRow}>
                                            <span className={styles.relatedProjectLabel}>Проект {p.number}</span>
                                            <span className={styles.relatedProjectName}>{p.titleShort || p.title}</span>
                                        </div>
                                    </div>
                                    <div className={styles.relatedMedia}>
                                        <img src={p.cardImage} alt='' className={styles.relatedThumb} loading='lazy' />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};
