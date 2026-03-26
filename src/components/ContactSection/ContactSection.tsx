import type { ReactNode } from 'react';

import { EnvelopeIcon, PhoneIcon, TelegramIcon } from '@assets/icons';

import styles from './ContactSection.module.scss';

type ContactSectionProps = {
    backgroundColor?: string;
};

const textColors: Record<string, string> = {
    pink: '#f2adad',
    blue: '#adc0f2',
    salmon: '#f2bfad',
};

const iconBgColors: Record<string, string> = {
    pink: '#f2adad',
    blue: '#adc0f2',
    salmon: '#f2bfad',
};

const icons: Record<string, React.FC<React.ComponentProps<'svg'>>> = {
    Telegram: TelegramIcon,
    Phone: PhoneIcon,
    Email: EnvelopeIcon,
};

const renderContactValue = (type: string, value: string): ReactNode => {
    if (type !== 'Email') return value;
    const at = value.indexOf('@');
    if (at < 0) return value;
    return (
        <>
            {value.slice(0, at + 1)}
            <wbr />
            <span className={styles.emailDomain}>{value.slice(at + 1)}</span>
        </>
    );
};

export const ContactSection = ({ backgroundColor }: ContactSectionProps) => {
    const contacts = [
        { type: 'Telegram', value: 'Evg_des_79', color: 'pink', shape: 'circle' as const },
        { type: 'Phone', value: '+7 (988) 521 97 17', color: 'blue', shape: 'square' as const },
        { type: 'Email', value: 'fargerevgdes@mail.ru', color: 'salmon', shape: 'rounded' as const },
    ];

    return (
        <section className={styles.contactSection} style={{ backgroundColor: backgroundColor || '#fbf9ea' }}>
            <div className={styles.container}>
                <div className={styles.contactList}>
                    {contacts.map(contact => {
                        const Icon = icons[contact.type];
                        return (
                            <div key={contact.type} className={styles.contactItem}>
                                <div
                                    className={`${styles.icon} ${styles[contact.shape]}`}
                                    style={{ backgroundColor: iconBgColors[contact.color] }}
                                >
                                    {Icon && <Icon color='white' />}
                                </div>
                                <a
                                    href={
                                        contact.type === 'Telegram'
                                            ? `https://t.me/${contact.value}`
                                            : contact.type === 'Phone'
                                              ? `tel:${contact.value.replace(/[\s()]/g, '')}`
                                              : `mailto:${contact.value}`
                                    }
                                    className={styles.value}
                                    style={{ color: textColors[contact.color] }}
                                    target={contact.type === 'Telegram' ? '_blank' : undefined}
                                    rel={contact.type === 'Telegram' ? 'noopener noreferrer' : undefined}
                                >
                                    {renderContactValue(contact.type, contact.value)}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
