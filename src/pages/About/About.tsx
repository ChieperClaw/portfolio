import styles from './About.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

export default function About() {
  const experiences = [
    { company: 'Догма-сити', position: 'UX/UI designer', dates: '04.2024 - present' },
    { company: 'Asteq', position: 'UI UX designer', dates: '09.2022 - 03.2024' },
  ];

  return (
    <div className={styles.page}>
      <Navigation />
      
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Обо мне</h1>
            <div className={styles.portrait}>
              {/* Photo placeholder */}
              <div className={styles.photoPlaceholder}></div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bio}>
              <p>Привет, я Евгения (Женя) - UI/UX дизайнер.</p>
              <p>Я создаю удобные и понятные интерфейсы, которые помогают пользователям решать их задачи. Мой подход основан на исследовании потребностей пользователей и анализе бизнес-задач.</p>
              <p>Вне работы я занимаюсь танцами, что помогает мне развивать чувство ритма, композиции и баланса — то, что я также переношу в свои дизайн-проекты.</p>
            </div>
            <div className={styles.sideLists}>
              <div className={styles.listSection}>
                <h3>SERVICES</h3>
                <ul>
                  <li>Art direction</li>
                  <li>Brand & identity</li>
                  <li>Graphic design</li>
                  <li>Interface design</li>
                  <li>Web design</li>
                </ul>
              </div>
              <div className={styles.listSection}>
                <h3>CONTACT</h3>
                <ul>
                  <li>email</li>
                  <li>linkedin</li>
                  <li>telegram</li>
                  <li>instagram</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className={styles.experience}>
          <div className={styles.container}>
            <h2 className={styles.expTitle}>Опыт работы</h2>
            <div className={styles.expTable}>
              <div className={styles.tableHeader}>
                <span>КОМПАНИЯ</span>
                <span>ДОЛЖНОСТЬ</span>
                <span className={styles.rightAlign}>+ СРОКИ</span>
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

      <ContactSection backgroundColor="#fff8ec" />
      <Footer />
    </div>
  );
}
