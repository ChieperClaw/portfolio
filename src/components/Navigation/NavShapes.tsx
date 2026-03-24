type SvgProps = {
    className?: string;
};

export const ShapeGlavnaya = ({ className }: SvgProps) => (
    <svg
        className={className}
        width='88'
        height='80'
        viewBox='0 0 88 80'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M66 0C78.1503 0 88 9.84974 88 22C88 28.4207 85.2489 34.1984 80.8617 38.22C79.8417 39.1551 79.8417 40.8449 80.8617 41.78C85.2489 45.8016 88 51.5793 88 58C88 70.1503 78.1503 80 66 80H22C9.84974 80 0 70.1503 0 58C0 51.5795 2.75063 45.8017 7.13756 41.7799C8.15752 40.8449 8.15752 39.1551 7.13756 38.2201C2.75063 34.1983 0 28.4205 0 22C0 9.84974 9.84974 0 22 0H66Z'
            fill='currentColor'
        />
    </svg>
);

export const ShapeGlavnayaMobile = ({ className }: SvgProps) => (
    <svg className={className} viewBox='0 0 40 37' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
            d='M30 0C35.5228 0 40 4.47715 40 10C40 12.3618 39.1804 14.5312 37.8107 16.2414C36.9453 17.322 36.9453 19.0413 37.8107 20.1219C39.1803 21.8321 39.9999 24.0015 40 26.3633C40 31.8861 35.5228 36.3633 30 36.3633H10C4.47715 36.3633 0 31.8861 0 26.3633C8.19884e-05 24.0016 0.819424 21.8321 2.18887 20.1217C3.05402 19.0412 3.05403 17.3221 2.18887 16.2416C0.819383 14.5312 0 12.3617 0 10C0 4.47715 4.47715 0 10 0H30Z'
            fill='currentColor'
        />
    </svg>
);

export const ShapeRaboty = ({ className }: SvgProps) => (
    <svg className={className} viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='80' height='80' fill='currentColor' />
    </svg>
);

export const ShapeAbout = ({ className }: SvgProps) => (
    <svg className={className} viewBox='0 0 87 80' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <rect width='87' height='80' rx='40' fill='currentColor' />
    </svg>
);

export const IconBurger = ({ className }: SvgProps) => (
    <svg
        className={className}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M33.3333 33.3333H6.66667C5.74667 33.3333 5 32.5883 5 31.6667C5 30.745 5.74667 30 6.66667 30H33.3333C34.2533 30 35 30.745 35 31.6667C35 32.5883 34.2533 33.3333 33.3333 33.3333Z'
            fill='currentColor'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M33.3333 9.99996H6.66667C5.74667 9.99996 5 9.25496 5 8.33329C5 7.41163 5.74667 6.66663 6.66667 6.66663H33.3333C34.2533 6.66663 35 7.41163 35 8.33329C35 9.25496 34.2533 9.99996 33.3333 9.99996Z'
            fill='currentColor'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M33.3333 21.6667H6.66667C5.74667 21.6667 5 20.9217 5 20C5 19.0784 5.74667 18.3334 6.66667 18.3334H33.3333C34.2533 18.3334 35 19.0784 35 20C35 20.9217 34.2533 21.6667 33.3333 21.6667Z'
            fill='currentColor'
        />
    </svg>
);

export const IconClose = ({ className }: SvgProps) => (
    <svg
        className={className}
        width='40'
        height='40'
        viewBox='0 0 40 40'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            d='M22.3567 20.0004L31.1783 11.1788C31.83 10.5271 31.83 9.47379 31.1783 8.82212C30.5267 8.17046 29.4733 8.17046 28.8217 8.82212L20 17.6437L22.3567 20.0004Z'
            fill='currentColor'
        />
        <path
            d='M17.6434 20.0004L8.82176 28.8222C8.17009 29.4737 8.17009 30.527 8.82176 31.1787C9.14676 31.5037 9.57342 31.667 10.0001 31.667C10.4268 31.667 10.8534 31.5037 11.1784 31.1787L20.0001 22.3572L17.6434 20.0004Z'
            fill='currentColor'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M31.1784 28.8222L22.3567 20.0004L20.0001 17.6437L11.1784 8.82212C10.5268 8.17046 9.47342 8.17046 8.82176 8.82212C8.17009 9.47379 8.17009 10.5271 8.82176 11.1788L17.6434 20.0004L20.0001 22.3572L28.8217 31.1787C29.1467 31.5037 29.5734 31.667 30.0001 31.667C30.4267 31.667 30.8534 31.5037 31.1784 31.1787C31.8301 30.527 31.8301 29.4737 31.1784 28.8222Z'
            fill='currentColor'
        />
    </svg>
);
