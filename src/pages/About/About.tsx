import portrait from '../../assets/portrait.jpg';

import { FlowerIcon } from '@assets/icons';

import styles from './About.module.scss';

const About = () => {
    const experiences = [
        {
            company: 'Догма-сити',
            position: 'Продуктовый дизайнер',
            dates: '04.2024 - сейчас',
        },
        { company: 'Asteq', position: 'UI UX дизайнер', dates: '07.2022 - 03.2024' },
    ];

    return (
        <div className={styles.page}>
            <header className={styles.hero}>
                <div className={styles.container}>
                    <h1 className={styles.title}>Обо мне</h1>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.bio}>
                    <div className={styles.bioInner}>
                        <div className={styles.bioDescription}>
                            <p>
                                Я Евгения - продуктовый дизайнер. Помогаю превращать сложные задачи в понятные
                                интерфейсы: от структуры и логики до визуальной системы и деталей. Люблю, когда дизайн
                                не просто «красивый», а дает ощущение ясности и уверенности - и для пользователя, и для
                                бизнеса
                            </p>
                            <p>
                                Мне близок баланс: креатив - чтобы находить свежие идеи и сильную подачу, и спокойная
                                рутина - чтобы доводить макеты до чистоты, консистентности и готовности к разработке
                            </p>
                        </div>
                        <div className={styles.portraitWrap}>
                            <div className={styles.portrait}>
                                <img src={portrait} alt='Евгения Фаргер' />
                            </div>
                            <FlowerIcon className={styles.flower} />
                        </div>
                    </div>
                </div>

                <section className={styles.experience}>
                    <div className={styles.experienceInner}>
                        <h2 className={styles.expTitle}>Опыт работы</h2>
                        <div className={styles.expTable}>
                            <div className={styles.tableHeader}>
                                <span>Компания</span>
                                <span>Должность</span>
                                <span className={styles.rightAlign}>Время</span>
                            </div>
                            {experiences.map((exp, i) => (
                                <div key={i} className={styles.tableRow}>
                                    <span>{exp.company}</span>
                                    <span>{exp.position}</span>
                                    <span className={styles.rightAlign}>{exp.dates}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
