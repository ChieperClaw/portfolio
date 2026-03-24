import { Link } from 'react-router';

import { ProjectDescriptionHtml } from '../../components/ProjectDescriptionHtml/ProjectDescriptionHtml';
import { projects } from '../../data/projects';
import { addWbrAfterSlashesInAnchorText } from '../../utils/addWbrAfterSlashesInAnchorText';

import styles from './Works.module.scss';

const Works = () => {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Работы</h1>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.list}>
                    <div className={styles.listInner}>
                        {projects.map(project => (
                            <div key={project.id} className={styles.projectItem}>
                                <div className={styles.left}>
                                    <Link to={`/works/${project.id}`} className={styles.titleLink}>
                                        <div className={styles.labelRow}>
                                            <p className={styles.projectLabel}>Проект {project.number}</p>
                                            <h3 className={styles.projectName}>
                                                {project.titleShort || project.title}
                                            </h3>
                                        </div>
                                    </Link>
                                    <div className={styles.descriptionColumn}>
                                        <ProjectDescriptionHtml
                                            className={styles.description}
                                            html={addWbrAfterSlashesInAnchorText(project.description)}
                                        />
                                        <Link to={`/works/${project.id}`} className={styles.viewLink}>
                                            Смотреть работу
                                        </Link>
                                    </div>
                                </div>
                                <Link
                                    to={`/works/${project.id}`}
                                    className={styles.right}
                                    aria-label={`Открыть проект: ${project.titleShort || project.title}`}
                                >
                                    <img src={project.cardImage} alt='' className={styles.thumbnail} loading='lazy' />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Works;
