/**
 * Вставляет `<wbr>` после каждого `/` в тексте внутри `<a>...</a>` (без вложенных тегов),
 * чтобы URL переносился по слэшам. Чистым CSS это не задать.
 */
export const addWbrAfterSlashesInAnchorText = (html: string): string =>
    html.replace(/<a(\s[^>]*)>([^<]*)<\/a>/gi, (_full, attrs: string, text: string) => {
        if (!text.includes('/')) return `<a${attrs}>${text}</a>`;
        return `<a${attrs}>${text.replace(/\//g, '/<wbr>')}</a>`;
    });
