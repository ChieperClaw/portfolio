import styles from './ContactSection.module.scss';

interface ContactSectionProps {
  backgroundColor?: string;
}

// Pastel text colors matching icon hues
const textColors: Record<string, string> = {
  pink: '#f2adad',
  blue: '#adc0f2',
  salmon: '#f2bfad',
};

// Saturated icon background colors
const iconBgColors: Record<string, string> = {
  pink: '#f2adad',
  blue: '#adc0f2',
  salmon: '#f2bfad',
};

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="52%" height="52%">
      <path
        d="M22 2L11 13"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2L15 22L11 13L2 9L22 2Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="52%" height="52%">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.17 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012.08 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="52%" height="52%">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  Telegram: <TelegramIcon />,
  Phone: <PhoneIcon />,
  Email: <EnvelopeIcon />,
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
              <div
                className={styles.icon}
                style={{ backgroundColor: iconBgColors[contact.color] }}
              >
                {icons[contact.type]}
              </div>
              <span
                className={styles.value}
                style={{ color: textColors[contact.color] }}
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
