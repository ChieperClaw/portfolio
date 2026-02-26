export interface Project {
  id: string;
  number: string;
  title: string;
  titleShort?: string;
  description: string;
  cardBg: string;
  cardTextColor: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'prometall',
    number: '01',
    title: 'Прометалл',
    description:
      'Разработка фирменного стиля и веб-сайта для металлургической компании. Создание визуальной идентичности, отражающей надёжность и современный подход к производству.',
    cardBg: '#1a1a2e',
    cardTextColor: '#e88a00',
    images: [],
  },
  {
    id: 'kopanskoy',
    number: '02',
    title: 'Копанской',
    description:
      'Дизайн интерфейса и пользовательского опыта для бренда Копанской. Проектирование удобной навигации и визуально привлекательного интерфейса.',
    cardBg: '#28284a',
    cardTextColor: '#e88a00',
    images: [],
  },
  {
    id: 'lk-agencies',
    number: '03',
    title: 'ЛК агентств недвижимости',
    titleShort: 'ЛК АН',
    description:
      'Личный кабинет для агентств недвижимости. Комплексная система управления объектами, клиентами и сделками с интуитивно понятным интерфейсом.',
    cardBg: '#1c1c28',
    cardTextColor: '#ffffff',
    images: [],
  },
  {
    id: 'telegram-mim',
    number: '04',
    title: 'Телеграм приложение «Машины и Механизмы»',
    titleShort: 'Тг приложение «МиМ»',
    description:
      'Проектирование Telegram Mini App для журнала «Машины и Механизмы». Адаптация контента и функционала под формат мессенджера.',
    cardBg: '#4a6fa5',
    cardTextColor: '#ffffff',
    images: [],
  },
];
