import styles from './ContactSection.module.scss';

interface ContactSectionProps {
  backgroundColor?: string;
}

const colorValues: Record<string, string> = {
  pink: '#f2adad',
  blue: '#adc0f2',
  salmon: '#f2bfad',
};

export default function ContactSection({ backgroundColor }: ContactSectionProps) {
  const contacts = [
    { type: 'Telegram', value: 'Evg_des_79', color: 'pink' },
    { type: 'Phone', value: '+7 (996) 051 69 71', color: 'blue' },
    { type: 'Email', value: 'Fargered@mail.ru', color: 'salmon' },
  ];

  return (
    <section
      className={styles.contactSection}
      style={{ backgroundColor: backgroundColor || '#fbf9ea' }}
    >
      <div className={styles.container}>
        <div className={styles.contactList}>
          {contacts.map((contact) => (
            <div key={contact.type} className={styles.contactItem}>
              <div className={`${styles.icon} ${styles[contact.color]}`} />
              <span
                className={styles.value}
                style={{ color: colorValues[contact.color] }}
              >
                {contact.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
