import { Link } from 'react-router';

import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

import styles from './Home.module.scss';

export default function Home() {
    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.heroContainer}>
                        <h1 className={styles.heroName}>
                            <span>Евгения</span>
                            <span>Фаргер</span>
                        </h1>
                        <p className={styles.heroSubtitle}>Продуктовый (UI/UX) дизайнер</p>
                    </div>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.gridInner}>
                        {projects.slice(0, 2).map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>

                <section className={styles.ctaBanner}>
                    <div className={styles.ctaBannerInner}>
                        <Link to='/works' className={styles.ctaLink}>
                            <span>Смотреть все работы</span>
                        </Link>
                    </div>
                </section>

                <section className={styles.about}>
                    <div className={styles.aboutInner}>
                        <div className={styles.momentsContent}>
                            <span className={styles.momentsLabel}>Обо мне</span>
                            <p className={styles.momentsText}>
                                Я Евгения − продуктовый дизайнер. Помогаю превращать сложные задачи в понятные
                                интерфейсы: от структуры и логики до визуальной системы и деталей. Люблю, когда дизайн
                                не просто «красивый», а дает ощущение ясности и уверенности − и для пользователя, и для
                                бизнеса
                            </p>
                            <Link to='/about' className={styles.momentsMore}>
                                Смотреть еще
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
