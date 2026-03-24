import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTopOnNavigate = (): null => {
    const { pathname, search } = useLocation();

    useLayoutEffect(() => {
        // Прямое присвоение — не подчиняется html { scroll-behavior: smooth }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [pathname, search]);

    return null;
};
