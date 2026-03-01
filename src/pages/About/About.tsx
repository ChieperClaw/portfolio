import styles from './About.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import ContactSection from '../../components/ContactSection/ContactSection';
import Footer from '../../components/Footer/Footer';

function DecorativeFlower() {
  return (
    <svg
      className={styles.decorFlower}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 4-petal flower in pink */}
      <ellipse cx="60" cy="30" rx="16" ry="28" fill="#f2adad" opacity="0.85" />
      <ellipse cx="60" cy="90" rx="16" ry="28" fill="#f2adad" opacity="0.85" />
      <ellipse cx="30" cy="60" rx="28" ry="16" fill="#f2adad" opacity="0.85" />
      <ellipse cx="90" cy="60" rx="28" ry="16" fill="#f2adad" opacity="0.85" />
      <circle cx="60" cy="60" r="12" fill="#f2adad" />
    </svg>
  );
}

export default function About() {
  const experiences = [
    { company: 'Догма-сити', position: 'Дизайнер пользовательского опыта и интерфейсов', dates: '04.2024 - сейчас' },
    { company: 'Asteq', position: 'UI UX дизайнер', dates: '09.2022 - 03.2024' },
  ];

  return (
    <div className={styles.page}>
      <Navigation />

      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Обо мне</h1>
            <div className={styles.portrait}>
              <div className={styles.photoPlaceholder}></div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.bioGrid}>
            <div className={styles.bio}>
              <p>Привет, я Евгения (Женя) - UI/UX дизайнер. Помогаю превращать сложные задачи в понятные интерфейсы: от структуры и логики до визуальной системы и деталей. Люблю, когда дизайн не просто «красивый», а дает ощущение ясности и уверенности - и для пользователя, и для бизнеса</p>
              <p>Вне работы я танцую, и это сильно влияет на подход: в проектах так же важны ритм, аккуратная композиция и баланс между свободой идеи и четкой структурой</p>
              <p>Мне близок баланс: креатив - чтобы находить свежие идеи и сильную подачу, и спокойная рутина - чтобы доводить макеты до чистоты, консистентности и готовности к разработке</p>
            </div>
            <DecorativeFlower />
            <div className={styles.sideLists}>
              <div className={styles.listSection}>
                <h3>SERVICES</h3>
                <ul>
                  <li>Art direction</li>
                  <li>Brand & identity</li>
                  <li>Brand strategy</li>
                  <li>Graphic design</li>
                  <li>Mixed media</li>
                  <li>Packaging design</li>
                  <li>Type design</li>
                </ul>
              </div>
              <div className={styles.listSection}>
                <h3>CONTACT</h3>
                <ul>
                  <li>email</li>
                  <li>linkedin</li>
                  <li>instagram</li>
                  <li>resumé</li>
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

      <ContactSection backgroundColor="#dae8ff" />
      <Footer />
    </div>
  );
}
