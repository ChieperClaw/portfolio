import { Link } from 'react-router';
import styles from './ProjectCard.module.scss';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.projectWrapper}>
      <Link 
        to={`/works/${project.id}`} 
        className={styles.card}
        style={{ 
          backgroundColor: project.cardBg,
          color: project.cardTextColor
        }}
      >
        <div className={styles.header}>
          <span className={styles.number}>ПРОЕКТ {project.number}</span>
          <span className={styles.title}>{project.titleShort || project.title}</span>
        </div>
      </Link>
      <div className={styles.labelRow}>
        <span className={styles.projectLabel}>ПРОЕКТ {project.number}</span>
        <span className={styles.projectName}>{project.titleShort || project.title}</span>
      </div>
    </div>
  );
}
