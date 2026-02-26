import styles from './ContactSection.module.scss';

interface ContactSectionProps {
  backgroundColor?: string;
}

export default function ContactSection({ backgroundColor }: ContactSectionProps) {
  const contacts = [
    { type: 'Telegram', value: 'Evg_des_79', icon: 'plane', color: 'pink' },
    { type: 'Phone', value: '+7 (996) 051 69 71', icon: 'phone', color: 'blue' },
    { type: 'Email', value: 'Fargered@mail.ru', icon: 'mail', color: 'blue-dark' },
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
              <div className={`${styles.icon} ${styles[contact.color]}`}>
                {/* SVG placeholders for icons */}
                <div className={styles.placeholderIcon} />
              </div>
              <span className={styles.value}>{contact.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
