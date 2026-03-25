import { Link } from 'react-router';

import styles from './ProjectCard.module.scss';

import type { Project } from '../../data/projects';

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className={styles.projectWrapper}>
            <Link to={`/works/${project.id}`} className={styles.card}>
                <img src={project.cardImage} alt={project.title} className={styles.cardImage} loading='lazy' />
            </Link>
            <div className={styles.labelRow}>
                <span className={styles.projectLabel}>Проект {project.number}</span>
                <span className={styles.projectName}>{project.title}</span>
            </div>
        </div>
    );
};

export default ProjectCard;
