import lkAnCard from '../assets/lk-an.png';
import mimCard from '../assets/mim.png';
import prometallCard from '../assets/prometall.png';
import promoCard from '../assets/promo.png';

export type Project = {
    id: string;
    number: string;
    title: string;
    titleShort?: string;
    /** HTML-фрагмент: `<p>`, `<a href>`, `<br>` и т.д. */
    description: string;
    cardImage: string;
    images: string[];
};

export const projects: Project[] = [
    {
        id: 'prometall',
        number: '1',
        title: 'Прометалл',
        description:
            '<p>“Прометалл” — производственное подразделение холдинга DOGMA. Заводу требовалось современное цифровое представительство, которое бы транслировало надежность, масштаб производства и четкую структуру выпускаемой продукции.</p><p>Этот проект можно посмотреть по ссылке: <a href="https://prometall23.ru/" target="_blank">https://prometall23.ru/</a></p>',
        cardImage: prometallCard,
        images: [],
    },
    {
        id: 'promo',
        number: '2',
        title: 'Акции',
        description:
            '<p>Кейс: Сокращение пути к покупке на странице акций (<a href="https://dogma.ru" target="_blank">Dogma.ru</a>)</p><p>Задача: Переработка структуры страницы конкретной акции для повышения конверсии в лид Dogma — один из крупнейших девелоперов. Страница акций — это высокотрафиковая точка входа. Раньше она носила скорее информационный характер: пользователь читал только про условия акции без понимание в каком ЖК эта акция применяется</p><p>Этот проект можно посмотреть по ссылке: <a href="https://dogma.ru/stocks/Lizing_v_DOGMA" target="_blank">https://dogma.ru/stocks/Lizing_v_DOGMA</a></p>',
        cardImage: promoCard,
        images: [],
    },
    {
        id: 'lk-agencies',
        number: '3',
        title: 'ЛК АН',
        description:
            '<p>Кейс: Редизайн модуля «Лиды» в Личном кабинете агентства недвижимости</p><p>Личный кабинет — это основной рабочий инструмент агентов и руководителей агентств недвижимости. Модуль «Лиды» является критическим узлом системы: именно здесь происходит обработка входящих заявок и превращение их в сделки</p><p>Для защиты NDA визуальный стиль и брендинг изменены, данные сгенерированы случайно</p>',
        cardImage: lkAnCard,
        images: [],
    },
    {
        id: 'telegram-mim',
        number: '4',
        title: 'МиМ',
        titleShort: 'Телеграм приложение',
        description:
            '<p>Кейс: Продуктовая экосистема в Telegram для управления спецтехникой</p><p>Задача: С нуля спроектировать интерфейс Telegram Mini App для водителей спецтехники и прорабов</p><p>Для защиты NDA визуальный стиль и брендинг изменены, данные сгенерированы случайно</p>',
        cardImage: mimCard,
        images: [],
    },
];
